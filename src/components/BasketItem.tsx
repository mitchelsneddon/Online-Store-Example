import { Button, Stack } from 'react-bootstrap';
import { useShoppingBasket } from '../context/ShoppingBasketContext';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type BasketItemProps = {
  id: number;
  quantity: number;
};

export function BasketItem({ id, quantity }: BasketItemProps) {
  const { removeFromBasket } = useShoppingBasket();
  const item = storeItems.find(i => i.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        alt="item"
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className="me-auto">
        <div>
          {item?.name}{' '}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: '.75rem' }}>
          {formatCurrency(item?.price || 0)}
        </div>
      </div>
      <div>{formatCurrency(item?.price || 0 * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromBasket(item?.id || 0)}
      >
        &times;
      </Button>
    </Stack>
  );
}
