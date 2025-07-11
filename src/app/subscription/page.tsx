import { Slider } from "@radix-ui/react-slider";
import { Button } from "@/components/ui/button";
import { BadgeCheck, CreditCard, Download, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-neutral-bg font-sans">
      <Header active="subscription" />
      <main className="max-w-4xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-card-bg rounded-xl shadow-card p-6 flex flex-col gap-4 border border-border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-main">Pro Plan</h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent-green/10 text-accent-green mt-1">
                <BadgeCheck className="w-4 h-4 mr-1 text-accent-green" />{" "}
                Current Plan
              </span>
            </div>
            <Button className="flex items-center gap-1" variant="outline">
              Manage <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-3xl font-bold mt-2 text-main">
            $22
            <span className="text-base font-normal text-secondary">/month</span>
          </div>
          <ul
            className="text-secondary text-sm mt-2 space-y-1"
            style={{
              color: "var(--tw-color-text-secondary, #1F2937)",
              fontWeight: 500,
            }}
          >
            <li>• 30,000 credits/month</li>
            <li>• Priority support</li>
            <li>• Commercial usage</li>
          </ul>
          <div className="mt-4">
            <div
              className="flex justify-between text-xs text-secondary mb-1"
              style={{
                color: "var(--tw-color-text-secondary, #1F2937)",
                fontWeight: 500,
              }}
            >
              <span>Credit Usage</span>
              <span>12,000 / 30,000</span>
            </div>
            <Slider
              defaultValue={[40]}
              max={100}
              step={1}
              disabled
              className="relative w-full h-2 bg-border rounded-full"
            >
              <div
                className="absolute left-0 top-0 h-2 bg-primary-blue rounded-full"
                style={{ width: "40%" }}
              />
            </Slider>
          </div>
          <div
            className="flex justify-between items-center mt-4 text-sm text-secondary"
            style={{
              color: "var(--tw-color-text-secondary, #1F2937)",
              fontWeight: 500,
            }}
          >
            <div>
              <div>Next billing date</div>
              <div className="font-medium text-main">May 30, 2024</div>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-main" />
              <span>Visa •••• 4242</span>
            </div>
          </div>
        </section>
        <section className="bg-card-bg rounded-xl shadow-card p-6 flex flex-col gap-4 border border-border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-main">Billing History</h2>
            <Button size="sm" variant="outline">
              Update Payment
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr
                  className="text-left text-secondary border-b border-border"
                  style={{
                    color: "var(--tw-color-text-secondary, #1F2937)",
                    fontWeight: 500,
                  }}
                >
                  <th className="py-2 pr-4">Date</th>
                  <th className="py-2 pr-4">Amount</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2">Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border last:border-0">
                  <td className="py-2 pr-4 text-main">Apr 30, 2024</td>
                  <td className="py-2 pr-4 text-main">$22.00</td>
                  <td className="py-2 pr-4 text-accent-green">Paid</td>
                  <td className="py-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label="Download invoice"
                    >
                      <Download className="w-4 h-4 text-main" />
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-border last:border-0">
                  <td className="py-2 pr-4 text-main">Mar 30, 2024</td>
                  <td className="py-2 pr-4 text-main">$22.00</td>
                  <td className="py-2 pr-4 text-accent-green">Paid</td>
                  <td className="py-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label="Download invoice"
                    >
                      <Download className="w-4 h-4 text-main" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-main">Feb 29, 2024</td>
                  <td className="py-2 pr-4 text-main">$22.00</td>
                  <td className="py-2 pr-4 text-accent-green">Paid</td>
                  <td className="py-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label="Download invoice"
                    >
                      <Download className="w-4 h-4 text-main" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
