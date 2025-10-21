import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";

export const metadata = {
  title: "CLVREST",
  description: "The social marketplace for creator deals.",
};

export default function MarketingPage() {
  return (
    <main className="bg-white text-neutral-900">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Discover creators,<br className="hidden sm:block" /> connect with brands
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Discover talent and manage deals with ease.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="/prelaunch" className="rounded-lg bg-neutral-900 px-5 py-3 text-white hover:opacity-90">
              Browse Creators →
            </a>
            <a href="/prelaunch" className="rounded-lg border px-5 py-3 hover:bg-neutral-100">
              Browse Brands
            </a>
          </div>
        </div>
        

        {/* muted logo row placeholder */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-5 gap-3 opacity-70">
          {[0,1,2,3,4].map(i => (
            <div key={i} className="h-8 rounded-md border bg-neutral-50" />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y bg-neutral-50/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-center text-3xl font-bold">Everything You Need</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-600">
            Built for creators and brands to work together seamlessly
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Portfolio Builder" body="Create stunning portfolios in minutes. Your public page lives at /u/@handle." />
            <FeatureCard title="Smart Discovery" body="Find perfect fits by niche, rate, and audience size." />
            <FeatureCard title="Secure Payments" body="Escrow-style via Stripe. Funds are released on approval." />
            <FeatureCard title="Deal Management" body="Track requests to payouts with clear statuses." />
            <FeatureCard title="Verified Creators" body="Optional verification flow for added trust." />
            <FeatureCard title="Fast Payouts" body="Automatic transfers to your Stripe Connect account." />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold">How It Works</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 font-semibold text-neutral-800">For Creators</h3>
            <ol className="space-y-4 text-neutral-700">
              {[
                "Create your portfolio",
                "Get discovered",
                "Accept deals",
                "Get paid",
              ].map((t, i) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-medium">
                    {i + 1}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-neutral-800">For Brands</h3>
            <ol className="space-y-4 text-neutral-700">
              {[
                "Browse creators",
                "Send requests",
                "Pay securely",
                "Approve & release",
              ].map((t, i) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-medium">
                    {i + 1}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-neutral-100">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-2xl font-extrabold">Ready to Get Started?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-neutral-600">
            Join Top creators and brands already working together. 
          </p>
          <a href="/prelaunch" className="mt-6 inline-flex items-center justify-center rounded-lg bg-neutral-900 px-5 py-3 text-white hover:opacity-90">
            Create Your Account →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
