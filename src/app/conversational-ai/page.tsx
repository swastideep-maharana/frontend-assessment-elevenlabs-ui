import { Button } from "@/components/ui/button";
import { Mic, Send, MessageSquare, History } from "lucide-react";
import { Header } from "@/components/Header";

export default function ConversationalAIPage() {
  return (
    <div className="min-h-screen bg-neutral-bg font-sans">
      <Header active="conversational-ai" />
      <main className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 bg-card-bg rounded-xl shadow-card p-4 mb-6 md:mb-0 flex flex-col gap-4 h-fit border border-border">
          <div className="flex items-center gap-2 mb-2 text-main font-semibold">
            <History className="w-4 h-4 text-main" /> Conversation History
          </div>
          <ul className="space-y-2">
            <li className="p-2 rounded bg-neutral-bg text-main cursor-pointer font-medium">
              Product Demo
            </li>
            <li
              className="p-2 rounded hover:bg-neutral-bg text-secondary cursor-pointer"
              style={{ color: "#1F2937", fontWeight: 500 }}
            >
              Support Call
            </li>
            <li
              className="p-2 rounded hover:bg-neutral-bg text-secondary cursor-pointer"
              style={{ color: "#1F2937", fontWeight: 500 }}
            >
              AI Narrator Test
            </li>
          </ul>
        </aside>
        <section className="flex-1 bg-card-bg rounded-xl shadow-card flex flex-col h-[600px] border border-border">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center">
                <MessageSquare
                  className="w-5 h-5 text-main"
                  style={{ color: "#1F2937", fontWeight: 500 }}
                />
              </div>
              <div className="bg-neutral-bg rounded-lg px-4 py-2 max-w-md">
                <span className="text-main">
                  Hello! How can I help you today?
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-primary-blue flex items-center justify-center text-white font-bold">
                U
              </div>
              <div className="bg-primary-blue/10 rounded-lg px-4 py-2 max-w-md">
                <span className="text-main">
                  Can you generate a product demo script?
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center">
                <MessageSquare
                  className="w-5 h-5 text-main"
                  style={{ color: "#1F2937", fontWeight: 500 }}
                />
              </div>
              <div className="bg-neutral-bg rounded-lg px-4 py-2 max-w-md">
                <span className="text-main">
                  Absolutely! Here is a sample script for your product demo...
                </span>
              </div>
            </div>
          </div>
          <form className="flex items-center gap-2 border-t border-border px-4 py-3">
            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label="Record audio"
            >
              <Mic
                className="w-5 h-5 text-main"
                style={{ color: "#1F2937", fontWeight: 500 }}
              />
            </Button>
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary-blue/30 text-main bg-card-bg"
            />
            <Button
              type="submit"
              size="icon"
              variant="default"
              aria-label="Send message"
              className="bg-primary-blue text-white hover:bg-primary-blue/90"
            >
              <Send className="w-5 h-5 text-white" />
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
