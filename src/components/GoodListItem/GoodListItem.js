import { GoodCard } from '../../components';
import { Item } from './GoodListItem.styled';

const GoodListItem = ({ goodItem }) => {
  console.log(goodItem);
  return (
    <Item>
      <GoodCard goodInfo={goodItem} />
    </Item>
  );
};
export { GoodListItem };
