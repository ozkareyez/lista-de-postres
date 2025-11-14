import { CardsContainer } from "./Componentes/CardsContainer";
import { Card } from "./Componentes/card";
import { CartConfirmacion } from "./Componentes/CartConfirmacion";

export function App() {
  return (
    <main className="flex justify-center">
      <section className="my-6">
        {/* <h1 className="text-[2.5rem] font-bold mb-[30px]">Desserts</h1> */}
        <img
          className="size-[180px] ml-16  md:size-[200px] "
          src="/public/assets/images/logo.png"
          alt=""
        />

        <div className="xl:flex xl:gap-6 xl:items-start">
          <CardsContainer />
          <Card />
        </div>
      </section>
      <CartConfirmacion />
    </main>
  );
}
