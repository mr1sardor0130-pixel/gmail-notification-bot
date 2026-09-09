import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://gmail-notification-bot.vercel.app"
  const webhookUrl = `${appUrl.replace(/\/$/, "")}/api/telegram/webhook`

  if (!token) {
    return NextResponse.json(
      {
        status: 500,
        telegram_bot: "error",
        message: "TELEGRAM_BOT_TOKEN topilmadi",
      },
      { status: 500 },
    )
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        url: webhookUrl,
        allowed_updates: ["message", "callback_query"],
      }),
      cache: "no-store",
    })

    const telegram = (await response.json()) as {
      ok?: boolean
      description?: string
      result?: boolean
    }

    return NextResponse.json(
      {
        status: response.status,
        telegram_bot: telegram.ok ? "ok" : "error",
        webhook_url: webhookUrl,
        telegram,
      },
      { status: response.ok ? 200 : response.status },
    )
  } catch (error) {
    return NextResponse.json(
      {
        status: 502,
        telegram_bot: "error",
        message: error instanceof Error ? error.message : "Telegram API bilan ulanishda xatolik",
      },
      { status: 502 },
    )
  }
}

export async function POST() {
  return GET()
}
