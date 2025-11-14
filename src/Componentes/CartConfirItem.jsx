export const CartConfirItem = ({ image, name, price, quantity }) => {
  return (
    <>
      <div className="border border-transparent border-b-amber-600 text-sm py-4">
        <div className="flex justify-between items-center px-4 ">
          <div className="flex gap-4">
            <img className="size-12" src={image.thumbnail} alt="" />
            <div>
              <h3 className="font-bold ">{name}</h3>
              <div className="flex gap-2">
                <p className="text-red-500 font-bold">{quantity}x</p>
                <p className="text-amber-900">@{price.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <p className="text-amber-950 font-bold">
            ${(quantity * price).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};
