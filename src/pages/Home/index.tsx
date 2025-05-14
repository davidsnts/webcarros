import { Container } from "../../components/container";

export function Home() {
  return (
    <Container>
      <section className="bg-white p-4 rounded-lg rounded-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          className="w-full border-2 border-gray-300 rounded-lg h-9 px-3 outline-none"
          type="text"
          name=""
          id=""
          placeholder="Digite o nome do carro..."
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-16">
        {" "}
        Carros novos e usados em todo o Brasil
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all object-cover"
            src="https://www.webmotors.com.br/wp-content/uploads/2024/07/31154848/Audi-A6-e-tron-traseira.webp"
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">Audi A6</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              Ano 2016/2016 | 23.000 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 190.000,00
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">Campo grande MS</span>
          </div>
        </section>

        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://www.webmotors.com.br/wp-content/uploads/2024/07/31154848/Audi-A6-e-tron-traseira.webp"
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">Audi A6</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              Ano 2016/2016 | 23.000 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 190.000,00
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">Campo grande MS</span>
          </div>
        </section>

        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://www.webmotors.com.br/wp-content/uploads/2024/07/31154848/Audi-A6-e-tron-traseira.webp"
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">Audi A6</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              Ano 2016/2016 | 23.000 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 190.000,00
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">Campo grande MS</span>
          </div>
        </section>

        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://www.webmotors.com.br/wp-content/uploads/2024/07/31154848/Audi-A6-e-tron-traseira.webp"
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">Audi A6</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              Ano 2016/2016 | 23.000 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 190.000,00
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">Campo grande MS</span>
          </div>
        </section>

        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://www.webmotors.com.br/wp-content/uploads/2024/07/31154848/Audi-A6-e-tron-traseira.webp"
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">Audi A6</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              Ano 2016/2016 | 23.000 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 190.000,00
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">Campo grande MS</span>
          </div>
        </section>
        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 md: hover:scale-105 transition-all"
            src="https://www.webmotors.com.br/wp-content/uploads/2024/07/31154848/Audi-A6-e-tron-traseira.webp"
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">Audi A6</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              Ano 2016/2016 | 23.000 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 190.000,00
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">Campo grande MS</span>
          </div>
        </section>
      </main>
    </Container>
  );
}
