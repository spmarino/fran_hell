import { createContext, useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, count) => {
    let item = { product, count };

    let aux = [];

    if (isInCart(product.id)) {
      item = cart.find((e) => e.product.id === product.id);

      item.count += count;
      aux = [...cart];
    } else {
      aux = [...cart, item];
    }
    setCart(aux);
    console.log(cart)
  };

  const removeItem = (itemId) => {};

  const clear = () => {};

  const isInCart = (id) => {
    cart.some((i) => i.product.id === id);
  };

  return (
    <Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </Provider>
  );
};

export default CartCustomProvider;
