
import { useCartStore } from "../Store/cartStore";

export const ProductoContainer = ({ name, image, category, price }) => {
  //const [quantity, setQuantity] = useState(0);

  const { addItemCart, updateItemIncart, deleteItemfromCart, card } =
    useCartStore();

  let quantity = 0;
  const itemsInCart = card.filter((item) => item.name === name);
  if (itemsInCart.length > 0) {
    quantity = itemsInCart[0].quantity;
  }

  const addone = () => {
    const newQuantity = quantity + 1;
    
    // setQuantity(newQuantity);

    if (newQuantity > 1) {
      updateItemIncart({
        image,
        name,
        price,
        quantity: newQuantity,
        
      });
    } else {
      addItemCart({
        image,
        name,
        price,
        quantity: newQuantity,
      });
    }
  };

  const subtractone = () => {
    const newQuantity = quantity - 1;

    //setQuantity(newQuantity);

    if (newQuantity === 0) {
      deleteItemfromCart(name);
    } else {
      updateItemIncart({
        image,
        name,
        price,
        quantity: newQuantity,
      });
    }
  };

  return (
    <div className="relative ">
      <picture>
        <img
          className="rounded-lg mb-9 hover:border-3 transition-colors border-red-600"
          src={image.mobile}
          alt="waffle-desktop.jpg"
        />
        <source media="(min-width: 668px)" srcSet={image.tablet} />
      </picture>

      {quantity === 0 ? (
       
          <button
            onClick={addone}
            className="bg-white border border-red-300  rounded-full flex justify-center gap-2 p-3 w-40 absolute left-0 right-0 top-[175px] mx-auto md:top-30  cursor-pointer hover:border-red-500 transition-colors"
          >
            <img
              src="public/assets/images/icon-add-to-cart.svg"
              alt="icon-add-to-cart.svg"
            />
            <span>Add to Cart</span>
          </button>
       
      ) : (
        <div className="  bg-red-600 border border-rose-200 w-40 items-center rounded-full flex justify-between gap-2 p-3 absolute left-0 right-0 top-[175px] mx-auto md:top-30 cursor-pointer ">
          <img
            onClick={subtractone}
            className=" size-[18px] p-1 text-center border border-white rounded-full  "
            src="/assets/images/icon-decrement-quantity.svg"
            alt=""
          />
          <p className="text-white text-[1.0rem]">{quantity}</p>
          <img
            onClick={addone}
            className="size-[18px] p-1 text-center border border-white rounded-full "
            src="/assets/images/icon-increment-quantity.svg"
            alt=""
          />
        </div>
      )}
      <div className="pt-3">
        <p className="text-amber-600">{category}</p>
        <h2 className="text-amber-950 font-bold">{name}</h2>
        <p className="text-red-500">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};
