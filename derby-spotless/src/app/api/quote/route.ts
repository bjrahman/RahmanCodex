import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.serviceSlug !== "string" ||
    !body.name.trim() ||
    !body.email.trim()
  ) {
    return NextResponse.json({ error: "Please complete your name and email to request a quote." }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
