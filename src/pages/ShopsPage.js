import { useState } from 'react';

import { GoodsList, ShopList } from 'components';

const ShopsPage = () => {
  const handleClickShopButton = id => {
    console.log('here will be go to beckend and get chosen shops goods');
    //go to beckend and get chosen shops goods
  };

  const [shopList /*setshopList*/] = useState([
    { id: '1', name: 'Mackdonalds' },
    { id: '2', name: 'CFK' },
  ]);

  const [goodsList] = useState([
    { id: '1', name: 'Burger1', price: 11, imgURL: 'imgURL1' },
    { id: '2', name: 'Burger2', price: 22, imgURL: 'imgURL2' },
  ]);
  console.log('goods in shopepage', goodsList);

  return (
    <div>
      <h1>ShopsPage</h1>
      <ShopList shops={shopList} onClick={handleClickShopButton} />
      <GoodsList goods={goodsList} />
    </div>
  );
};
export { ShopsPage };
