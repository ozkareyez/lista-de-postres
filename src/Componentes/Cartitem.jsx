import { useCartStore } from "../Store/cartStore";

export const Cartitem = ({ name, price, quantity }) => {
  const { deleteItemfromCart } = useCartStore();

  return (
    <div className="border border-transparent border-b-amber-600 text-sm py-4">
      <div className="flex justify-between items-center">
        <div className="">
          <h3>{name}</h3>
          <div className="flex gap-2">
            <p className="text-red-500 font-semibold">{quantity}x</p>
            <p className="text-amber-900">@{price.toFixed(2)}</p>
            <p>${(quantity * price).toFixed(2)} </p>
          </div>
        </div>
        <img
          onClick={() => deleteItemfromCart(name)}
          className="size-[18px] border border-rose-300 rounded-full p-0.5 cursor-pointer"
          src="/assets/images/icon-remove-item.svg"
          alt=""
        />
      </div>
    </div>
  );
};
