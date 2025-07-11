import { Button } from "@/components/ui/button";
import { Play, Download, Filter } from "lucide-react";
import { Header } from "@/components/Header";

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-neutral-bg font-sans">
      <Header active="history" />
      <main className="max-w-5xl mx-auto py-12 px-4">
        <section className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-main">
            Audio Generation History
          </h2>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-secondary" /> Filter
          </Button>
        </section>
        <section className="bg-card-bg rounded-xl shadow-card overflow-x-auto border border-border">
          <table className="min-w-full text-sm">
            <thead>
              <tr
                className="text-left text-secondary border-b border-border"
                style={{ color: "#1F2937", fontWeight: 500 }}
              >
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Project</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4">Playback</th>
                <th className="py-3 px-4">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border last:border-0">
                <td className="py-3 px-4 text-main">May 10, 2024</td>
                <td className="py-3 px-4 text-main">Product Demo</td>
                <td className="py-3 px-4 text-main">00:45</td>
                <td className="py-3 px-4">
                  <Button size="icon" variant="ghost" aria-label="Play">
                    <Play className="w-4 h-4 text-main" />
                  </Button>
                </td>
                <td className="py-3 px-4">
                  <Button size="icon" variant="ghost" aria-label="Download">
                    <Download className="w-4 h-4 text-main" />
                  </Button>
                </td>
              </tr>
              <tr className="border-b border-border last:border-0">
                <td className="py-3 px-4 text-main">May 8, 2024</td>
                <td className="py-3 px-4 text-main">Support Call</td>
                <td className="py-3 px-4 text-main">01:12</td>
                <td className="py-3 px-4">
                  <Button size="icon" variant="ghost" aria-label="Play">
                    <Play className="w-4 h-4 text-main" />
                  </Button>
                </td>
                <td className="py-3 px-4">
                  <Button size="icon" variant="ghost" aria-label="Download">
                    <Download className="w-4 h-4 text-main" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-main">May 5, 2024</td>
                <td className="py-3 px-4 text-main">AI Narrator Test</td>
                <td className="py-3 px-4 text-main">00:58</td>
                <td className="py-3 px-4">
                  <Button size="icon" variant="ghost" aria-label="Play">
                    <Play className="w-4 h-4 text-main" />
                  </Button>
                </td>
                <td className="py-3 px-4">
                  <Button size="icon" variant="ghost" aria-label="Download">
                    <Download className="w-4 h-4 text-main" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
