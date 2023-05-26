import { ShopListItem } from '../../components';
import { ShopListContainer } from './ShopList.styled';
const ShopList = ({ shops = [], onClick }) => {
  return (
    <ShopListContainer>
      <h2>Shops:</h2>
      <ul>
        {shops.map(shop => (
          // <h1>{shop.name}</h1>
          <ShopListItem key={shop.id} shopItem={shop} onButtonClick={onClick} />
        ))}
      </ul>
    </ShopListContainer>
  );
};

export { ShopList };
