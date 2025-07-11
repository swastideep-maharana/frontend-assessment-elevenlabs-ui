"use client";
import { Button } from "@/components/ui/button";
import { BarChart2, User, Zap, ArrowRight, Plus } from "lucide-react";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-neutral-bg font-sans">
      <Header active="dashboard" />
      <main className="max-w-5xl mx-auto py-12 px-4">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-card-bg rounded-xl shadow-card p-5 flex flex-col items-start border border-border">
            <span
              className="text-secondary text-xs mb-1 flex items-center gap-1"
              style={{ color: "#1F2937", fontWeight: 500 }}
            >
              <BarChart2 className="w-4 h-4 text-main" />
              Total Credits
            </span>
            <span className="text-2xl font-bold text-main">18,000</span>
          </div>
          <div className="bg-card-bg rounded-xl shadow-card p-5 flex flex-col items-start border border-border">
            <span
              className="text-secondary text-xs mb-1 flex items-center gap-1"
              style={{ color: "#1F2937", fontWeight: 500 }}
            >
              <Zap className="w-4 h-4 text-main" />
              Used Credits
            </span>
            <span className="text-2xl font-bold text-main">12,000</span>
          </div>
          <div className="bg-card-bg rounded-xl shadow-card p-5 flex flex-col items-start border border-border">
            <span
              className="text-secondary text-xs mb-1 flex items-center gap-1"
              style={{ color: "#1F2937", fontWeight: 500 }}
            >
              <User className="w-4 h-4 text-main" />
              Active Voices
            </span>
            <span className="text-2xl font-bold text-main">4</span>
          </div>
          <div className="bg-card-bg rounded-xl shadow-card p-5 flex flex-col items-start border border-border">
            <span
              className="text-secondary text-xs mb-1 flex items-center gap-1"
              style={{ color: "#1F2937", fontWeight: 500 }}
            >
              <BarChart2 className="w-4 h-4 text-main" />
              Plan
            </span>
            <span className="text-2xl font-bold text-main">Pro</span>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-4 mb-10">
          <Button
            className="flex items-center gap-2"
            variant="outline"
            onClick={() => router.push("/voice-lab")}
          >
            <ArrowRight className="w-4 h-4 text-main" /> Go to Voice Lab
          </Button>
        </section>
        <section className="bg-card-bg rounded-xl shadow-card p-6 border border-border">
          <h2 className="text-lg font-semibold mb-4 text-main">
            Recent Activity
          </h2>
          <ul className="divide-y divide-border">
            <li className="py-3 flex items-center justify-between">
              <span className="text-main">
                Generated audio for "Product Demo"
              </span>
              <span
                className="text-xs text-secondary"
                style={{ color: "#1F2937", fontWeight: 500 }}
              >
                2 hours ago
              </span>
            </li>
            <li className="py-3 flex items-center justify-between">
              <span className="text-main">Upgraded to Pro Plan</span>
              <span
                className="text-xs text-secondary"
                style={{ color: "#1F2937", fontWeight: 500 }}
              >
                1 day ago
              </span>
            </li>
            <li className="py-3 flex items-center justify-between">
              <span className="text-main">Created new voice "AI Narrator"</span>
              <span
                className="text-xs text-secondary"
                style={{ color: "#1F2937", fontWeight: 500 }}
              >
                3 days ago
              </span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
