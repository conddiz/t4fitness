export default function MediaBreak() {
  return (
    <section className="relative h-125 bg-gradient-to-r from-black to-black/50 overflow-hidden">
      <img
        src="/cardio-01.jpeg"
        alt="Área de cardio da T4 Fitness"
        className="absolute inset-0 w-full h-full object-cover opacity-78"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6">
        <div className="font-display uppercase text-white">
          <p className="text-7 font-bold leading-tight">VAI NO</p>
          <p className="text-12 font-black leading-none text-orange-500">
            SEU RITMO
          </p>
          <p className="text-7 font-bold leading-tight">VAI MAIS LONGE</p>
        </div>
      </div>
    </section>
  );
}
