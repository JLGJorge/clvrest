"use client";
import { useEffect, useMemo, useState } from "react";

function toParts(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const targetIso = process.env.NEXT_PUBLIC_LAUNCH_AT ?? "2025-12-15T14:00:00Z";
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const { days, hours, minutes, seconds } = toParts(diff);
  const done = diff <= 0;

  return (
    <div className="grid grid-cols-4 gap-3 w-full max-w-xl text-center">
      {done ? (
        <div className="col-span-4 text-2xl font-semibold">We are live! 🚀</div>
      ) : (
        <>
          <Unit label="Days" value={days} />
          <Unit label="Hours" value={hours} />
          <Unit label="Minutes" value={minutes} />
          <Unit label="Seconds" value={seconds} />
        </>
      )}
    </div>
  );
}

function Unit({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="text-3xl font-bold tabular-nums">{value.toString().padStart(2, "0")}</div>
      <div className="text-xs opacity-70">{label}</div>
    </div>
  );
}
