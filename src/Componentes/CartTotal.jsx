import { useCartStore } from "../Store/cartStore";
export const CartTotal = () => {
  const { totalCard } = useCartStore();
  return (
    <div className="flex justify-between items-center my-6 p-4">
      <p className="text-[18px] text-black/50">Total Orden</p>
      <p className="text-2xl font-bold">${totalCard().toFixed(2)} </p>
    </div>
  );
};
