export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-[120px] pb-[80px] bg-black text-white overflow-hidden flex flex-col"
      style={{ height: "min(780px, calc(100vh - 34px))" }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/unidade-exterior.jpeg"
          alt="Fachada de uma unidade T4 Fitness"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center 56%",
            filter: "saturate(0.9) contrast(1.05)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #090909 3%, rgba(9,9,9,.88) 28%, rgba(9,9,9,.25) 65%, rgba(9,9,9,.3))",
          }}
        />
        <div
          className="absolute inset-0 z-10 opacity-17"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(90deg, #000, transparent 69%)",
          }}
        />
      </div>

      <div className="relative z-20 flex-1 flex flex-col justify-center wrap">
        <div className="mb-[18px] flex items-center gap-[9px]">
          <span style={{ width: "30px", height: "2px", background: "#ff6a00" }} />
          <p
            style={{
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#fff",
              margin: 0,
            }}
          >
            T4 FITNESS · FORTALEZA
          </p>
        </div>

        <h1 style={{ color: "white", marginBottom: "25px" }}>
          Mais energia para{" "}
          <em style={{ fontStyle: "normal", color: "#ff6a00" }}>
            a sua evolução.
          </em>
        </h1>

        <p
          style={{
            width: "min(440px, 100%)",
            fontSize: "15px",
            lineHeight: 1.65,
            color: "#ececec",
            marginBottom: "25px",
          }}
        >
          Treine onde o seu ritmo acontece. Estrutura completa, modalidades para
          todos os estilos e uma comunidade que puxa você pra cima.
        </p>

        <div className="flex flex-col md:flex-row gap-[30px] items-start md:items-center">
          <button
            onClick={() => {
              document
                .getElementById("unidades")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn btn-orange"
          >
            Encontre sua unidade <span>↘</span>
          </button>
          <a
            href="#experiencia"
            className="text-link"
          >
            Conheça a T4 <span>→</span>
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-[70px] right-6 z-20 hidden md:flex gap-[30px]"
        style={{ maxWidth: "calc(100vw - 48px)" }}
      >
        {[
          { strong: "7", span: "unidades" },
          { strong: "+", span: "energia todo dia" },
          { strong: "VIP", span: "ofertas exclusivas" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              borderLeft: "1px solid #ff6a00",
              paddingLeft: "13px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <strong style={{ fontFamily: "Barlow Condensed", fontSize: "32px" }}>
              {stat.strong}
            </strong>
            <span
              style={{
                fontSize: "9px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginTop: "7px",
              }}
            >
              {stat.span}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          document
            .getElementById("unidades")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-5 left-6 z-20"
        style={{
          fontSize: "9px",
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: "#fff",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        Role para descobrir{" "}
        <i
          style={{
            height: "1px",
            width: "40px",
            background: "#ff6a00",
            display: "inline-block",
          }}
        />
      </button>
    </section>
  );
}
