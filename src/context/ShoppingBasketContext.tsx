import { createContext, ReactNode, useContext, useState } from 'react';
import { ShoppingBasket } from '../components/ShoppingBasket';
import { useLocalStorage } from '../hooks/useLocalStorage';

type ShoppingBasketProviderProps = {
  children: ReactNode;
};
type BasketItem = {
  id: number;
  quantity: number;
};
type ShoppingBasketContextProps = {
  openBasket: () => void;
  closeBasket: () => void;
  getItemQuantity: (id: number) => number;
  increaseBasketQuantity: (id: number) => void;
  decreaseBasketQuantity: (id: number) => void;
  removeFromBasket: (id: number) => void;
  BasketQuantity: number;
  BasketItems: BasketItem[];
};

const ShoppingBasketContext = createContext({} as ShoppingBasketContextProps);

export function useShoppingBasket() {
  return useContext(ShoppingBasketContext);
}

export function ShoppingBasketProvider({ children }: ShoppingBasketProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [BasketItems, setBasketItems] = useLocalStorage<BasketItem[]>(
    'shopping-Basket',
    []
  );
  const BasketQuantity = BasketItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const openBasket = () => setIsOpen(true);
  const closeBasket = () => setIsOpen(false);
  const getItemQuantity = (id: number) => {
    return BasketItems.find(item => item.id === id)?.quantity || 0;
  };
  function increaseBasketQuantity(id: number) {
    setBasketItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseBasketQuantity(id: number) {
    setBasketItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromBasket(id: number) {
    setBasketItems(currItems => {
      return currItems.filter(item => item.id !== id);
    });
  }
  return (
    <ShoppingBasketContext.Provider
      value={{
        getItemQuantity,
        increaseBasketQuantity,
        decreaseBasketQuantity,
        removeFromBasket,
        openBasket,
        closeBasket,
        BasketItems,
        BasketQuantity,
      }}
    >
      {children}
      <ShoppingBasket isOpen={isOpen} />
    </ShoppingBasketContext.Provider>
  );
}
