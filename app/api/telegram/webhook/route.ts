import { NextResponse } from "next/server"

export const runtime = "nodejs"

type TelegramUpdate = {
  update_id?: number
  message?: {
    chat?: { id?: number }
    text?: string
  }
}

export async function GET() {
  return NextResponse.json({
    status: 200,
    telegram_bot: process.env.TELEGRAM_BOT_TOKEN ? "ok" : "error",
    webhook: "ready",
  })
}

export async function POST(request: Request) {
  const update = (await request.json()) as TelegramUpdate
  const token = process.env.TELEGRAM_BOT_TOKEN

  if (token && update.message?.chat?.id && update.message.text === "/start") {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: update.message.chat.id,
        text: "MailPilot bot faol. Gmail xabarlari shu yerga keladi.",
      }),
      cache: "no-store",
    })
  }

  return NextResponse.json({ ok: true })
}
