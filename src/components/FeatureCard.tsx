type Props = { icon?: React.ReactNode; title: string; body: string; };
export default function FeatureCard({ icon, title, body }: Props) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="mb-3">{icon ?? <span className="inline-block h-9 w-9 rounded-lg bg-neutral-900" />}</div>
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-1 text-neutral-600">{body}</p>
    </div>
  );
}
