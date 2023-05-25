import { ShopListItem } from '../../components';
const ShopList = ({ shops = [], onClick }) => {
  return (
    <>
      <h2>Shops:</h2>
      <ul>
        {shops.map(shop => (
          // <h1>{shop.name}</h1>
          <ShopListItem key={shop.id} shopItem={shop} onButtonClick={onClick} />
        ))}
      </ul>
    </>
  );
};

export { ShopList };
