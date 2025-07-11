import Link from "next/link";

export function Header({ active }: { active: string }) {
  return (
    <header className="w-full px-8 py-4 bg-card-bg shadow-eleven flex items-center justify-between sticky top-0 z-50">
      <div className="font-bold text-xl text-main">ElevenLabs</div>
      <nav className="space-x-6">
        <Link
          href="/dashboard"
          className={`${
            active === "dashboard"
              ? "text-main font-semibold"
              : "text-secondary hover:text-main focus-visible:text-primary-blue focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:outline-none transition-colors"
          } px-1 py-0.5 rounded`}
          style={
            active !== "dashboard" ? { color: "#1F2937", fontWeight: 500 } : {}
          }
        >
          Dashboard
        </Link>
        <Link
          href="/subscription"
          className={`${
            active === "subscription"
              ? "text-main font-semibold"
              : "text-secondary hover:text-main focus-visible:text-primary-blue focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:outline-none transition-colors"
          } px-1 py-0.5 rounded`}
          style={
            active !== "subscription"
              ? { color: "#1F2937", fontWeight: 500 }
              : {}
          }
        >
          Subscription
        </Link>
        <Link
          href="/conversational-ai"
          className={`${
            active === "conversational-ai"
              ? "text-main font-semibold"
              : "text-secondary hover:text-main focus-visible:text-primary-blue focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:outline-none transition-colors"
          } px-1 py-0.5 rounded`}
          style={
            active !== "conversational-ai"
              ? { color: "#1F2937", fontWeight: 500 }
              : {}
          }
        >
          Conversational AI
        </Link>
        <Link
          href="/voice-lab"
          className={`${
            active === "voice-lab"
              ? "text-main font-semibold"
              : "text-secondary hover:text-main focus-visible:text-primary-blue focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:outline-none transition-colors"
          } px-1 py-0.5 rounded`}
          style={
            active !== "voice-lab" ? { color: "#1F2937", fontWeight: 500 } : {}
          }
        >
          Voice Lab
        </Link>
        <Link
          href="/history"
          className={`${
            active === "history"
              ? "text-main font-semibold"
              : "text-secondary hover:text-main focus-visible:text-primary-blue focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:outline-none transition-colors"
          } px-1 py-0.5 rounded`}
          style={
            active !== "history" ? { color: "#1F2937", fontWeight: 500 } : {}
          }
        >
          History
        </Link>
      </nav>
    </header>
  );
}
