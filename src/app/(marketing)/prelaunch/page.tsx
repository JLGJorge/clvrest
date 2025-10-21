import Countdown from "@/components/Countdown";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata = {
  title: "CLVREST — Pre-launch",
};

export default function PrelaunchPage() {
  const when = process.env.NEXT_PUBLIC_LAUNCH_AT ?? "soon";

  return (
    <main className="min-h-dvh bg-white">
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          We’re launching soon
        </h1>
        <p className="mt-4 text-neutral-600">
          Join the waitlist and we’ll email you on launch day.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <Countdown />
        </div>

        <div className="mt-10 flex items-center justify-center">
          <WaitlistForm />
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          Target launch: <span className="font-medium">{when}</span>
        </p>
      </section>
    </main>
  );
}
