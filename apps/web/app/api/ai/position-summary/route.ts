import { NextResponse } from "next/server";
import OpenAI from "openai";

// Client instantiated inside handler — env var read at request time, not build time.

// Evidence inputs are hardcoded from the approved repository snapshot.
// No user-supplied inputs — prompt surface is fully controlled.
const POSITION_PROMPT = `You are a senior strategy analyst at the UAE Ministry of Industry and Advanced Technology (MoIAT). Based only on the verified economic data below, write a "What Leadership Should Notice" readout of exactly 3 concise observations. Each observation must be one sentence only. Do not add information not present in the data. Write in formal ministry tone.

Data (all verified, official sources):
- UAE real GDP growth: 5.1% (9M 2025, FCSC, published 2026-02-20)
- UAE non-oil GDP growth: 6.1% (9M 2025, FCSC, published 2026-02-20)
- UAE non-oil share of real GDP: 77.5% (H1 2025, FCSC, published 2025-12-11)
- UAE manufacturing value added: 9.4% of GDP (FY 2024, World Bank)
- UAE FDI inflows: 8.3% of GDP (FY 2024, World Bank)
- Peer — Singapore manufacturing: 21.2% of GDP (2023, World Bank)
- Peer — South Korea manufacturing: 26.1% of GDP (2023, World Bank)
- Peer — Saudi Arabia manufacturing: 11.8% of GDP (2022, World Bank)
- UAE annual GDP growth: 4.0% (FY 2024, World Bank)

Strategic context: current date March 2026, Operation 300bn milestone 2031.

Format: return exactly 3 numbered observations, one sentence each, starting with "1.", "2.", "3.".`;

export async function GET() {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY not configured on this server." },
      { status: 503 }
    );
  }
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
        { role: "user", content: POSITION_PROMPT },
      ],
      max_tokens: 250,
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
