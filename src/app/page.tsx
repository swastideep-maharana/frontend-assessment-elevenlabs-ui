import { Header } from "../components/Header";
import Image from "next/image";
import Wave from "../components/Wave";

export default function Home() {
  return (
    <>
      <Header active="home" />
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 bg-card-bg relative overflow-hidden">
        <Image
          src="/elevenlabs-logo.svg"
          alt="ElevenLabs Logo"
          width={96}
          height={96}
          className="mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-main mb-4 text-center">
          The Most Powerful AI Voice Platform
        </h1>
        <p className="text-lg md:text-xl text-main mb-8 text-center max-w-2xl">
          Create lifelike, expressive voices for your apps, content, and
          products. Experience the next generation of AI audio with ElevenLabs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="/dashboard"
            className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-gray-700 transition-colors"
          >
            Go to Dashboard
          </a>
          <a
            href="/voice-lab"
            className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-gray-700 transition-colors"
          >
            Try Voice Lab
          </a>
          <a
            href="/conversational-ai"
            className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-gray-700 transition-colors"
          >
            Conversational AI
          </a>
        </div>
        <div className="flex flex-wrap gap-6 justify-center text-secondary text-base">
          <a
            href="/subscription"
            className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-gray-700 transition-colors"
          >
            Subscription
          </a>
          <a
            href="/history"
            className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-gray-700 transition-colors"
          >
            History
          </a>
        </div>
        <Wave />
      </main>
    </>
  );
}
