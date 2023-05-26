import { GoodListItem } from '../../components';
import { GoodsListContainer, List } from './GoodsList.styled';

const GoodsList = ({ goods, onClick }) => {
  console.log(goods);
  return (
    <GoodsListContainer>
      <h2>Goods:</h2>
      <List>
        {goods.map(good => (
          // <h1>{shop.name}</h1>
          <GoodListItem key={good.id} goodItem={good} onButtonClick={onClick} />
        ))}
      </List>
    </GoodsListContainer>
  );
};

export { GoodsList };
