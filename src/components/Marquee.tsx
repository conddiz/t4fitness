export default function Marquee() {
  return (
    <section className="bg-orange-500 overflow-hidden py-4">
      <div className="flex whitespace-nowrap gap-7.5 w-max animate-marquee font-display font-bold text-6xl md:text-7xl">
        <span>SEU CORPO · SEU RITMO · SUA T4</span>
        <span>✦</span>
        <span>SEU CORPO · SEU RITMO · SUA T4</span>
        <span>✦</span>
        <span>SEU CORPO · SEU RITMO · SUA T4</span>
        <span>✦</span>
      </div>
    </section>
  );
}
