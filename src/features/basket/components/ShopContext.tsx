import { createContext, useContext, useState } from "react";
import { ProductDto } from "../../products/services";

type ShopContextType = {
  products: ProductDto[];
  addToBasket: (product: ProductDto) => void;
  removeFromBasket: (id: ProductDto["id"]) => void;
  amount: number;
};

const ShopContext = createContext<ShopContextType | null>(null);

export const useShopContext = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error(
      "Oh no! Component should be placed inside ShopContextProvider"
    );
  }

  return context;
};

const useShop = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);

  const addToBasket = (product: ProductDto) => {
    setProducts((currentProducts) => [...currentProducts, product]);
  };
  const removeFromBasket = (id: ProductDto["id"]) =>
    setProducts(products.filter((product) => product.id !== id));
  const amount = products.length;

  return { products, addToBasket, removeFromBasket, amount };
};

export const ShopContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 1 - create custom hook for logic
  // 2 - inside AuthContextProvider provide logic from pont 1

  return (
    <ShopContext.Provider value={useShop()}>{children}</ShopContext.Provider>
  );
};
