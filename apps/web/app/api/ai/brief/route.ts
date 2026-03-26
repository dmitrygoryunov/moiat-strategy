import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Client is instantiated inside the handler so the env var is read at
// request time, not at module evaluation time during the build phase.

interface EvidenceItem {
  label: string;
  period: string;
  source: string;
  type: string;
  deferred?: boolean;
}

interface Option {
  label: string;
  summary: string;
  tradeoff: string;
}

interface BriefInput {
  issue: string;
  framing: string;
  evidence: EvidenceItem[];
  options: Option[];
  risks: string[];
}

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY not configured on this server." },
      { status: 503 }
    );
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  let body: BriefInput;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const confirmed = body.evidence.filter((e) => !e.deferred);
  const pending = body.evidence.filter((e) => e.deferred);

  const confirmedLines = confirmed
    .map((e) => `  - ${e.label} (${e.period}, ${e.source}, type: ${e.type})`)
    .join("\n");

  const pendingLines = pending
    .map((e) => `  - ${e.label} — source: ${e.source}`)
    .join("\n");

  const optionsLines = body.options
    .map(
      (o, i) =>
        `  ${String.fromCharCode(65 + i)}. ${o.label}: ${o.summary} Trade-off: ${o.tradeoff}`
    )
    .join("\n");

  const risksLines = body.risks.map((r) => `  - ${r}`).join("\n");

  const prompt = `You are a senior strategy analyst at the UAE Ministry of Industry and Advanced Technology (MoIAT). Write a concise executive decision brief synthesis for ministerial review. Use only the structured evidence provided — do not fabricate additional data, sources, or claims.

Return exactly four sections with these exact headings (bold, on their own lines):
**Issue Framing**
**Evidence Summary**
**Options at a Glance**
**Suggested Leadership Next Step**

Each section: 2–3 sentences of formal ministerial prose. Total output: 200–280 words. Where evidence is pending, say so plainly.

INPUTS:
Issue: ${body.issue}
Context: ${body.framing}

Confirmed evidence (${confirmed.length} items):
${confirmedLines}

Pending evidence (${pending.length} items — do not present as confirmed):
${pendingLines}

Options:
${optionsLines}

Key risks:
${risksLines}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You generate concise, formal ministerial decision brief summaries. You do not add information beyond what is provided. You are precise about data sources and honest about evidence gaps.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 600,
      temperature: 0.3,
    });

    const text = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ text });
  } catch (err) {
    console.error("[api/ai/brief] OpenAI error:", err);
    return NextResponse.json(
      { error: "Brief generation failed. Check server logs." },
      { status: 500 }
    );
  }
}
