import { useShopContext } from "./ShopContext";

export const ShoppingCart = () => {
  const context = useShopContext();

  return (
    <div>
      <p>Items: {context.amount} </p>
      {context.products.map((elem, index) => (
        <div key={`${elem.id}-${index}`}>
          <p>
            {elem.fields.name}, ${elem.fields.price}
          </p>
        </div>
      ))}
    </div>
  );
};
