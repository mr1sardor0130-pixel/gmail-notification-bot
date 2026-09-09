'use client'

import { useMemo, useState } from 'react'
import {
  Bell,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  Code2,
  Copy,
  Filter,
  Gauge,
  Inbox,
  LayoutDashboard,
  Mail,
  Menu,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Send,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

const messages = [
  { id: 1, sender: 'Google Security', email: 'accounts-noreply@google.com', subject: 'Your Google verification code', code: '482 901', time: '2 daqiqa oldin', tag: 'OTP', color: 'blue', unread: true },
  { id: 2, sender: 'Click', email: 'notify@click.uz', subject: 'To‘lov muvaffaqiyatli amalga oshirildi', code: 'INV-84921', time: '8 daqiqa oldin', tag: 'To‘lov', color: 'green', unread: true },
  { id: 3, sender: 'Amazon Web Services', email: 'no-reply@aws.amazon.com', subject: 'AWS Console sign-in verification', code: '739 114', time: '19 daqiqa oldin', tag: 'OTP', color: 'blue', unread: false },
  { id: 4, sender: 'Support team', email: 'help@acme.io', subject: 'Ticket #TK-2948 has been updated', code: 'TK-2948', time: '1 soat oldin', tag: 'Ticket', color: 'orange', unread: false },
]

const filters = [
  { name: 'OTP kodlar', detail: '6 xonali tasdiqlash kodlari', count: '24', color: 'blue', active: true },
  { name: 'Buyurtma kodlari', detail: 'ORD-, INV- prefikslar', count: '8', color: 'green', active: true },
  { name: 'Ticket kodlari', detail: 'TK- prefiksli xabarlar', count: '5', color: 'orange', active: true },
]

export default function Page() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<number | null>(1)
  const [notifications, setNotifications] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const filteredMessages = useMemo(() => messages.filter((message) => `${message.sender} ${message.subject} ${message.code}`.toLowerCase().includes(query.toLowerCase())), [query])
  const selectedMessage = messages.find((message) => message.id === selected)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <aside className={`${menuOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-sidebar p-5 transition-transform lg:static lg:translate-x-0`}>
          <div className="flex items-center gap-3 px-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm"><Bot className="size-5" /></div>
            <div><p className="font-semibold tracking-tight">MailPilot</p><p className="text-xs text-muted-foreground">Inbox automation</p></div>
            <button onClick={() => setMenuOpen(false)} className="ml-auto rounded-lg p-1 text-muted-foreground hover:bg-accent lg:hidden" aria-label="Menyuni yopish"><X className="size-4" /></button>
          </div>
          <nav className="mt-10 space-y-1" aria-label="Asosiy navigatsiya">
            {[['Overview', LayoutDashboard], ['Inbox', Inbox], ['Code filters', Code2], ['Notifications', Bell]].map(([label, Icon]) => (
              <button key={label as string} onClick={() => setActiveTab(label as string)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${activeTab === label ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}><Icon className="size-4" />{label as string}{label === 'Inbox' && <span className="ml-auto rounded-full bg-primary-foreground/15 px-2 py-0.5 text-[11px]">12</span>}</button>
            ))}
          </nav>
          <div className="mt-8 border-t border-border pt-6"><p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Workspace</p><button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"><Users className="size-4" />Team members</button><button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"><Settings2 className="size-4" />Settings</button></div>
          <div className="mt-auto rounded-2xl bg-accent p-4"><div className="mb-3 flex items-center justify-between"><span className="text-xs font-semibold">Telegram bot</span><span className="flex items-center gap-1 text-[11px] text-emerald-600"><span className="size-1.5 rounded-full bg-emerald-500" />Connected</span></div><p className="truncate text-xs text-muted-foreground">@mailpilot_alerts_bot</p><button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-background py-2 text-xs font-medium shadow-sm hover:bg-card"><Send className="size-3.5 text-[#229ED9]" />Open bot</button></div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-20 items-center justify-between border-b border-border bg-background/90 px-5 backdrop-blur md:px-8"><div className="flex items-center gap-3"><button onClick={() => setMenuOpen(true)} className="rounded-lg p-2 hover:bg-accent lg:hidden" aria-label="Menyuni ochish"><Menu className="size-5" /></button><div><p className="text-sm text-muted-foreground">Tuesday, September 9, 2026</p><h1 className="text-xl font-semibold tracking-tight">Good morning, Azizbek</h1></div></div><div className="flex items-center gap-3"><button onClick={() => setNotifications(!notifications)} className="relative rounded-xl border border-border p-2.5 text-muted-foreground hover:bg-accent" aria-label="Bildirishnomalar"><Bell className="size-4" />{notifications && <span className="absolute right-2 top-2 size-1.5 rounded-full bg-destructive" />}</button><div className="flex items-center gap-2 border-l border-border pl-3"><div className="flex size-9 items-center justify-center rounded-full bg-[#dcecff] text-xs font-semibold text-[#315a86]">AN</div><div className="hidden text-left sm:block"><p className="text-sm font-medium">Azizbek N.</p><p className="text-[11px] text-muted-foreground">Admin</p></div><ChevronDown className="size-4 text-muted-foreground" /></div></div></header>

          <div className="mx-auto max-w-[1500px] p-5 md:p-8">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium text-muted-foreground"><span className="size-1.5 rounded-full bg-emerald-500" />All systems operational</div><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Your inbox, <span className="text-muted-foreground">in sync.</span></h2><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Gmail xabarlarini Telegram bot orqali tezkor qabul qiling, kodlarni ajrating va jamoangiz bilan birgalikda boshqaring.</p></div><div className="flex gap-2"><button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-accent"><CircleHelp className="size-4" />Yordam</button><button className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90"><Plus className="size-4" />Ulash</button></div></div>

            <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Stat icon={Mail} label="Bugungi xabarlar" value="128" trend="+18.4%" color="blue" /><Stat icon={Code2} label="Ajratilgan kodlar" value="37" trend="+12.1%" color="green" /><Stat icon={Gauge} label="O‘rtacha tezlik" value="1.2s" trend="-0.3s" color="orange" /><Stat icon={ShieldCheck} label="Filtr aniqligi" value="98.6%" trend="+2.4%" color="purple" /></div>

            <div className="grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(300px,0.85fr)]"><section className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_8px_30px_rgb(0,0,0,0.03)]"><div className="flex flex-col gap-4 border-b border-border p-5 md:flex-row md:items-center md:justify-between"><div><h3 className="font-semibold">Recent messages</h3><p className="mt-1 text-xs text-muted-foreground">Gmail’dan kelgan so‘nggi xabarlar</p></div><div className="flex items-center gap-2"><div className="relative"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search messages" className="h-9 w-44 rounded-lg border border-input bg-background pl-9 pr-3 text-xs outline-none ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring" /></div><button className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-accent" aria-label="Filter"><SlidersHorizontal className="size-4" /></button></div></div><div className="divide-y divide-border">{filteredMessages.map((message) => <button key={message.id} onClick={() => setSelected(message.id)} className={`flex w-full items-center gap-3 p-4 text-left transition hover:bg-accent/50 ${selected === message.id ? 'bg-accent/40' : ''}`}><div className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${message.color === 'blue' ? 'bg-[#e6f0ff] text-[#3970b9]' : message.color === 'green' ? 'bg-[#e4f5ea] text-[#2f8b50]' : 'bg-[#fff0e4] text-[#b86d32]'}`}><Mail className="size-4" /></div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="truncate text-sm font-medium">{message.sender}</p>{message.unread && <span className="size-1.5 shrink-0 rounded-full bg-primary" />}</div><p className="truncate text-xs text-muted-foreground">{message.subject}</p></div><div className="hidden min-w-24 text-right sm:block"><p className="font-mono text-xs font-semibold tracking-wide text-foreground">{message.code}</p><p className="mt-1 text-[11px] text-muted-foreground">{message.time}</p></div><span className={`hidden rounded-md px-2 py-1 text-[10px] font-semibold sm:block ${message.color === 'blue' ? 'bg-[#e6f0ff] text-[#3970b9]' : message.color === 'green' ? 'bg-[#e4f5ea] text-[#2f8b50]' : 'bg-[#fff0e4] text-[#b86d32]'}`}>{message.tag}</span></button>)}</div><div className="flex items-center justify-between border-t border-border px-5 py-3"><span className="text-xs text-muted-foreground">Showing {filteredMessages.length} of 128 messages</span><button className="text-xs font-medium text-primary hover:underline">View all messages →</button></div></section>

              <aside className="space-y-6"><div className="rounded-2xl border border-border bg-card p-5 shadow-[0_8px_30px_rgb(0,0,0,0.03)]"><div className="mb-5 flex items-start justify-between"><div><h3 className="font-semibold">Active filters</h3><p className="mt-1 text-xs text-muted-foreground">Avtomatik kod ajratish</p></div><button className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-accent" aria-label="Filterlarni boshqarish"><Filter className="size-4" /></button></div><div className="space-y-3">{filters.map((filter) => <div key={filter.name} className="flex items-center gap-3 rounded-xl border border-border p-3"><div className={`size-2 rounded-full ${filter.color === 'blue' ? 'bg-[#4d8bd6]' : filter.color === 'green' ? 'bg-[#4ea96c]' : 'bg-[#d88b4a]'}`} /><div className="min-w-0 flex-1"><p className="text-xs font-medium">{filter.name}</p><p className="truncate text-[11px] text-muted-foreground">{filter.detail}</p></div><span className="font-mono text-xs text-muted-foreground">{filter.count}</span></div>)}</div><button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-border py-2.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"><Plus className="size-3.5" />Yangi filter qo‘shish</button></div><div className="rounded-2xl bg-primary p-5 text-primary-foreground"><div className="mb-4 flex items-center justify-between"><div className="flex size-9 items-center justify-center rounded-xl bg-primary-foreground/10"><Sparkles className="size-4" /></div><span className="rounded-full bg-primary-foreground/10 px-2 py-1 text-[10px] font-medium">PRO</span></div><h3 className="font-semibold">Ko‘proq imkoniyat kerakmi?</h3><p className="mt-2 text-xs leading-5 text-primary-foreground/70">Ko‘p mijozli jamoangiz uchun cheksiz filterlar va rivojlangan analytics.</p><button className="mt-4 rounded-lg bg-primary-foreground px-3 py-2 text-xs font-semibold text-primary hover:opacity-90">Upgrade plan</button></div></aside></div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"><div className="rounded-2xl border border-border bg-card p-5"><div className="mb-5 flex items-center justify-between"><div><h3 className="font-semibold">Selected message</h3><p className="mt-1 text-xs text-muted-foreground">Botga yuboriladigan ko‘rinish</p></div>{selectedMessage && <span className="rounded-md bg-[#e6f0ff] px-2 py-1 text-[10px] font-semibold text-[#3970b9]">{selectedMessage.tag}</span>}</div>{selectedMessage ? <div className="rounded-xl bg-accent/70 p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-sm font-semibold">{selectedMessage.subject}</p><p className="mt-1 text-xs text-muted-foreground">From: {selectedMessage.email}</p></div><button className="rounded-lg bg-background p-2 text-muted-foreground shadow-sm hover:text-foreground" aria-label="Copy code" onClick={() => navigator.clipboard?.writeText(selectedMessage.code)}><Copy className="size-3.5" /></button></div><div className="mt-5 flex items-center justify-between rounded-lg border border-border bg-background px-3 py-3"><span className="text-xs text-muted-foreground">Detected code</span><span className="font-mono text-lg font-semibold tracking-[0.16em]">{selectedMessage.code}</span></div></div> : <p className="text-sm text-muted-foreground">Xabar tanlang.</p>}</div><div className="rounded-2xl border border-border bg-card p-5"><div className="flex items-center justify-between"><div><h3 className="font-semibold">Telegram delivery</h3><p className="mt-1 text-xs text-muted-foreground">Real-time bot status</p></div><button onClick={() => setNotifications(!notifications)} className={`relative h-6 w-11 rounded-full transition ${notifications ? 'bg-primary' : 'bg-muted'}`} aria-label="Telegram bildirishnomalarini almashtirish"><span className={`absolute top-1 size-4 rounded-full bg-primary-foreground transition ${notifications ? 'left-6' : 'left-1'}`} /></button></div><div className="mt-5 space-y-3"><div className="flex items-center gap-3"><div className="flex size-8 items-center justify-center rounded-lg bg-[#e2f3fb] text-[#229ED9]"><Send className="size-4" /></div><div className="flex-1"><p className="text-xs font-medium">@mailpilot_alerts_bot</p><p className="text-[11px] text-muted-foreground">12 chats connected</p></div><Check className="size-4 text-emerald-500" /></div><div className="flex items-center gap-3"><div className="flex size-8 items-center justify-center rounded-lg bg-[#e4f5ea] text-[#2f8b50]"><Bell className="size-4" /></div><div className="flex-1"><p className="text-xs font-medium">Notifications</p><p className="text-[11px] text-muted-foreground">Instant delivery enabled</p></div><span className="text-[11px] font-medium text-emerald-600">Live</span></div></div></div></div>
          </div>
        </section>
      </div>
    </main>
  )
}

function Stat({ icon: Icon, label, value, trend, color }: { icon: typeof Mail; label: string; value: string; trend: string; color: string }) {
  const backgrounds: Record<string, string> = { blue: 'bg-[#e6f0ff] text-[#3970b9]', green: 'bg-[#e4f5ea] text-[#2f8b50]', orange: 'bg-[#fff0e4] text-[#b86d32]', purple: 'bg-[#eee9ff] text-[#7555b5]' }
  return <div className="rounded-2xl border border-border bg-card p-5 shadow-[0_8px_30px_rgb(0,0,0,0.03)]"><div className="flex items-center justify-between"><div className={`flex size-9 items-center justify-center rounded-xl ${backgrounds[color]}`}><Icon className="size-4" /></div><span className="text-[11px] font-medium text-emerald-600">{trend}</span></div><p className="mt-5 text-2xl font-semibold tracking-tight">{value}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>
}
