import { Button } from "@/components/ui/button";
import { Slider } from "@radix-ui/react-slider";
import { Mic, Plus, Edit, Trash2 } from "lucide-react";
import { Header } from "@/components/Header";

export default function VoiceLabPage() {
  return (
    <div className="min-h-screen bg-neutral-bg font-sans">
      <Header active="voice-lab" />
      <main className="max-w-5xl mx-auto py-12 px-4 flex flex-col gap-10">
        <section className="bg-card-bg rounded-xl shadow-card p-8 flex flex-col gap-6 border border-border">
          <h2 className="text-xl font-semibold mb-2 text-main">
            Create New Voice
          </h2>
          <form className="flex flex-col md:flex-row gap-6 items-end">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-medium text-main">
                Voice Name
              </label>
              <input
                type="text"
                placeholder="e.g. AI Narrator"
                className="px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue/30 text-main bg-card-bg"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-sm font-medium text-main">
                Sample Audio
              </label>
              <Button
                type="button"
                variant="outline"
                className="flex items-center gap-2"
              >
                <Mic
                  className="w-4 h-4 text-main"
                  style={{ color: "#1F2937", fontWeight: 500 }}
                />{" "}
                Record
              </Button>
            </div>
            <Button
              type="submit"
              className="flex items-center gap-2 bg-primary-blue text-black hover:bg-primary-blue/90"
              variant="default"
            >
              <Plus className="w-4 h-4 text-black" /> Create Voice
            </Button>
          </form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div>
              <div className="flex justify-between mb-1 text-sm text-main font-medium">
                <span>Stability</span>
                <span>70%</span>
              </div>
              <Slider
                defaultValue={[70]}
                max={100}
                step={1}
                className="relative w-full h-2 bg-border rounded-full"
              >
                <div
                  className="absolute left-0 top-0 h-2 bg-primary-blue rounded-full"
                  style={{ width: "70%" }}
                />
              </Slider>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm text-main font-medium">
                <span>Clarity</span>
                <span>80%</span>
              </div>
              <Slider
                defaultValue={[80]}
                max={100}
                step={1}
                className="relative w-full h-2 bg-border rounded-full"
              >
                <div
                  className="absolute left-0 top-0 h-2 bg-primary-blue rounded-full"
                  style={{ width: "80%" }}
                />
              </Slider>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm text-main font-medium">
                <span>Similarity</span>
                <span>60%</span>
              </div>
              <Slider
                defaultValue={[60]}
                max={100}
                step={1}
                className="relative w-full h-2 bg-border rounded-full"
              >
                <div
                  className="absolute left-0 top-0 h-2 bg-primary-blue rounded-full"
                  style={{ width: "60%" }}
                />
              </Slider>
            </div>
          </div>
        </section>
        <section className="bg-card-bg rounded-xl shadow-card p-8 border border-border">
          <h2 className="text-lg font-semibold mb-4 text-main">Your Voices</h2>
          <ul className="divide-y divide-border">
            <li className="flex items-center justify-between py-4">
              <div>
                <div className="font-medium text-main">AI Narrator</div>
                <div
                  className="text-xs text-secondary"
                  style={{ color: "#1F2937", fontWeight: 500 }}
                >
                  Created 2 days ago
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" aria-label="Edit">
                  <Edit className="w-4 h-4 text-main" />
                </Button>
                <Button size="icon" variant="ghost" aria-label="Delete">
                  <Trash2 className="w-4 h-4 text-main" />
                </Button>
              </div>
            </li>
            <li className="flex items-center justify-between py-4">
              <div>
                <div className="font-medium text-main">Product Demo Voice</div>
                <div
                  className="text-xs text-secondary"
                  style={{ color: "#1F2937", fontWeight: 500 }}
                >
                  Created 1 week ago
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" aria-label="Edit">
                  <Edit className="w-4 h-4 text-main" />
                </Button>
                <Button size="icon" variant="ghost" aria-label="Delete">
                  <Trash2 className="w-4 h-4 text-main" />
                </Button>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
