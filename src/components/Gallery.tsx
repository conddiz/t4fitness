export default function Gallery() {
  return (
    <section className="wrap py-30 md:py-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.75 h-140">
        <div className="relative md:col-span-2 overflow-hidden bg-gray-200">
          <img
            src="/cardio-02.jpeg"
            alt="Esteiras e equipamentos da T4 Fitness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-start p-6.25">
            <div className="font-display text-white text-3.5 md:text-5.25 font-bold leading-tight uppercase">
              <p>ENERGIA EM</p>
              <p>CADA</p>
              <p>DETALHE</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3.75 md:gap-3.75">
          <div className="flex-1 overflow-hidden bg-gray-200">
            <img
              src="/reception.jpeg"
              alt="Recepção de uma unidade T4 Fitness"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 overflow-hidden bg-gray-200">
            <img
              src="/locker-room.jpeg"
              alt="Vestiário moderno da T4 Fitness"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
