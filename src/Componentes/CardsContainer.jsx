import { ProductoContainer } from "./ProductoContainer";

import { useCartStore } from "../Store/cartStore";

export const CardsContainer = () => {
  const { products } = useCartStore();
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6  w-[307px] md:w-[688px]">
      {products.map((item) => (
        <ProductoContainer key={item.name} {...item} />
      ))}
    </div>
  );
};
