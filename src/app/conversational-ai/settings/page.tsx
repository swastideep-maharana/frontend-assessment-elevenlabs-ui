import { Button } from "@/components/ui/button";
import { Switch } from "@radix-ui/react-switch";
import { Slider } from "@radix-ui/react-slider";
import { ChevronDown } from "lucide-react";
import { Header } from "@/components/Header";

export default function ConversationalAISettingsPage() {
  return (
    <div className="min-h-screen bg-neutral-bg font-sans">
      <Header active="conversational-ai" />
      <main className="max-w-2xl mx-auto py-12 px-4">
        <section className="bg-card-bg rounded-xl shadow-card p-8 flex flex-col gap-8 border border-border">
          <h2 className="text-xl font-semibold mb-2 text-main">
            Conversational AI Settings
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-main">
                Enable Voice Responses
              </div>
              <div
                className="text-secondary text-sm"
                style={{ color: "#1F2937", fontWeight: 500 }}
              >
                Allow the AI to respond with synthesized voice.
              </div>
            </div>
            <Switch className="w-12 h-6 bg-border rounded-full relative outline-none cursor-pointer">
              <span className="block w-6 h-6 bg-card-bg rounded-full shadow-card absolute left-0 top-0 transition-transform" />
            </Switch>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-main">Default Language</div>
              <div
                className="text-secondary text-sm"
                style={{ color: "#1F2937", fontWeight: 500 }}
              >
                Choose the default language for responses.
              </div>
            </div>
            <button className="flex items-center px-4 py-2 border border-border rounded-md bg-neutral-bg text-main hover:bg-card-bg">
              English{" "}
              <ChevronDown
                className="w-4 h-4 ml-2 text-main"
                style={{ color: "#1F2937", fontWeight: 500 }}
              />
            </button>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-medium text-main">Response Speed</div>
                <div
                  className="text-secondary text-sm"
                  style={{ color: "#1F2937", fontWeight: 500 }}
                >
                  Adjust how quickly the AI responds.
                </div>
              </div>
              <span className="text-main font-semibold">Normal</span>
            </div>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="relative w-full h-2 bg-border rounded-full"
            >
              <div
                className="absolute left-0 top-0 h-2 bg-primary-blue rounded-full"
                style={{ width: "50%" }}
              />
            </Slider>
          </div>
          <Button
            className="self-end bg-primary-blue text-white hover:bg-primary-blue/90"
            variant="default"
          >
            Save Settings
          </Button>
        </section>
      </main>
    </div>
  );
}
