import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Client instantiated inside handler — env var read at request time, not build time.

type ComparatorSet = "GCC Peers" | "Advanced Manufacturing" | "Trade & Investment Hubs";
type PolicyLens = "Growth" | "Complexity" | "Resilience";

const VALID_SETS: ComparatorSet[] = ["GCC Peers", "Advanced Manufacturing", "Trade & Investment Hubs"];
const VALID_LENSES: PolicyLens[] = ["Growth", "Complexity", "Resilience"];

const COMPARATOR_CONTEXT: Record<ComparatorSet, string> = {
  "GCC Peers":
    "GCC regional peers: Saudi Arabia (GDP est. 2.6%, Manuf. 11.8%, WIPO GII 61, IMD WDC 28), Qatar (GDP est. 2.5%, Manuf. ~9%, WIPO GII 44, IMD WDC 21), Bahrain (GDP est. 3.1%, Manuf. ~14%, WIPO GII 51, IMD WDC 20). GDP growth estimates are IMF WEO April 2025. Manufacturing % is World Bank latest available. Rankings are WIPO GII 2024 and IMD WDC 2024.",
  "Advanced Manufacturing":
    "Advanced manufacturing benchmarks: South Korea (GDP est. 2.0%, Manuf. 26.1%, WIPO GII 10, IMD WDC 6), Germany (GDP est. 0.8%, Manuf. 18.9%, WIPO GII 11, IMD WDC 12), Singapore (GDP est. 2.3%, Manuf. 21.2%, WIPO GII 5, IMD WDC 1). GDP estimates are IMF WEO April 2025. Manufacturing % is World Bank 2023. Rankings are WIPO GII 2024 and IMD WDC 2024.",
  "Trade & Investment Hubs":
    "Trade and investment hub benchmarks: Singapore (GDP est. 2.3%, Manuf. 21.2%, WIPO GII 5, IMD WDC 1), Netherlands (GDP est. 1.5%, Manuf. 12.3%, WIPO GII 6, IMD WDC 5), Switzerland (GDP est. 1.5%, Manuf. ~16.5%, WIPO GII 1, IMD WDC 3). GDP estimates are IMF WEO April 2025. Rankings are WIPO GII 2024 and IMD WDC 2024.",
};

const LENS_QUESTION: Record<PolicyLens, string> = {
  Growth:
    "Focus on growth momentum and investment attractiveness. Strategic question: Is UAE's growth leading this comparator set, and is it building economic complexity or remaining concentrated in existing strengths?",
  Complexity:
    "Focus on manufacturing depth and innovation capacity. Strategic question: How large is the industrial complexity gap, and which moves can close it before the 2031 Operation 300bn deadline?",
  Resilience:
    "Focus on diversification, digital readiness, and risk exposure. Strategic question: What structural foundations make UAE resilient, and what vulnerabilities require active management?",
};

function buildPrompt(
  comparatorSet: ComparatorSet,
  policyLens: PolicyLens
): string {
  return `You are a senior strategy analyst at the UAE Ministry of Industry and Advanced Technology (MoIAT). Based only on the verified data below, write a "What Leadership Should Notice" readout of exactly 3 concise observations for the selected comparator context and policy lens. Each observation must be one sentence. Do not add information not present in the data. Write in formal ministry tone.

UAE data (verified, official sources):
- Real GDP growth: 5.1% (9M 2025, FCSC, published 2026-02-20)
- Non-oil GDP growth: 6.1% (9M 2025, FCSC)
- Non-oil GDP share: 77.5% (H1 2025, FCSC, published 2025-12-11)
- Manufacturing value added: 9.4% of GDP (FY 2024, World Bank)
- FDI inflows: 8.3% of GDP (FY 2024, World Bank)
- WIPO GII 2024 rank: 36
- IMD WDC 2024 rank: 14

Comparator set — ${comparatorSet}:
${COMPARATOR_CONTEXT[comparatorSet]}

Policy lens — ${policyLens}:
${LENS_QUESTION[policyLens]}

Strategic context: March 2026. Operation 300bn milestone: 2031.

Format: return exactly 3 numbered observations (1. ... 2. ... 3. ...), each one sentence, focused through the ${policyLens} lens relative to ${comparatorSet}.`;
}

export async function GET(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY not configured on this server." },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(req.url);
  const rawSet = searchParams.get("set") ?? "GCC Peers";
  const rawLens = searchParams.get("lens") ?? "Growth";

  const comparatorSet: ComparatorSet = VALID_SETS.includes(rawSet as ComparatorSet)
    ? (rawSet as ComparatorSet)
    : "GCC Peers";

  const policyLens: PolicyLens = VALID_LENSES.includes(rawLens as PolicyLens)
    ? (rawLens as PolicyLens)
    : "Growth";

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You produce short, precise strategic observations for senior ministry leadership. You do not add information beyond what is provided and you do not fabricate sources.",
        },
        { role: "user", content: buildPrompt(comparatorSet, policyLens) },
      ],
      max_tokens: 300,
      temperature: 0.3,
    });

    const text = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ text });
  } catch (err) {
    console.error("[api/ai/position-summary] OpenAI error:", err);
    return NextResponse.json(
      { error: "Summary generation failed." },
      { status: 500 }
    );
  }
}
