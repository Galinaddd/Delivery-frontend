import { GoodListItem } from '../../components';
const GoodsList = ({ goods, onClick }) => {
  console.log(goods);
  return (
    <>
      <h2>Goods:</h2>
      <ul>
        {goods.map(good => (
          // <h1>{shop.name}</h1>
          <GoodListItem key={good.id} goodItem={good} onButtonClick={onClick} />
        ))}
      </ul>
    </>
  );
};

export { GoodsList };
