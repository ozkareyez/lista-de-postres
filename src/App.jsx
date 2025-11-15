import { CardsContainer } from "./Componentes/CardsContainer";
import { Card } from "./Componentes/card";
import { CartConfirmacion } from "./Componentes/CartConfirmacion";

export function App() {
  return (
    <main className="flex justify-center">
      <section className="my-6">
        <h1 className="text-[3.5rem] font-bold mb-[30px] text-amber-700">
          Postres
        </h1>

        <div className="xl:flex xl:gap-6 xl:items-start">
          <CardsContainer />
          <Card />
        </div>
      </section>
      <CartConfirmacion />
    </main>
  );
}
