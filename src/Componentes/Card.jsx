import { Cartitem } from "./Cartitem";
import { CartTotal } from "./CartTotal";
import { BotonCorfirmar } from "./BotonCorfirmar";
import { useCartStore } from "../Store/cartStore";

export const Card = () => {
  const { toggleclose, card } = useCartStore();

  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-red-500 font-bold text-2xl mb-6">
        Your Cart({card.length})
      </h2>

      {card.map((item) => (
        <Cartitem key={item.name} {...item} />
      ))}
      <CartTotal />

      <div className="bg-rose-100 rounded-lg flex justify-center gap-1 p-4 mb-6">
        <img src="public/assets/images/icon-carbon-neutral.svg" alt="" />
        <p className="text-sm">
          Este es un envio <span className="font-bold">carbon neutral</span>
        </p>
      </div>

      <BotonCorfirmar onclick={toggleclose} texto="Confirmar Orden" />
    </div>
  );
};
