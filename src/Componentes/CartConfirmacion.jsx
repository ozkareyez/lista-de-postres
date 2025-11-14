import { CartConfirItem } from "./CartConfirItem";
import { CartTotal } from "./CartTotal";
import { BotonCorfirmar } from "./BotonCorfirmar";
import { useCartStore } from "../Store/cartStore";

export const CartConfirmacion = () => {
  const { isClose, toggleclose, card, resetCart } = useCartStore();
  const handleNewOrder = () => {
    toggleclose();
    resetCart();
  };

  return (
    <dialog
      hidden={isClose}
      className="bg-black/50 -500 w-full fixed h-screen grid place-content-center"
    >
      <div className="w-[375px] md:w[6009x] py-10 px-6 bg-white rounded-xl">
        <img
          src="/assets/images/icon-order-confirmed.svg"
          alt="icon-order-confirmed.svg"
        />
        <h2 className="text-black/80 text-[40px] font-bold">
          Orden Confirmada
        </h2>
        <p className="text-black/50  font-bold mb-6">
          Esperamos que disfrute de su comida!
        </p>

        <div className="bg-rose-50/40">
          {card.map((item) => (
            <CartConfirItem key={item.name} {...item} />
          ))}
        </div>
        <CartTotal />
        <BotonCorfirmar onclick={handleNewOrder} texto="Iniciar Nuevo Pedido" />
      </div>
    </dialog>
  );
};
