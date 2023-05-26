import { Title } from './GoodCard.styled';
const GoodCard = ({ goodInfo }) => {
  console.log('goodInfo', goodInfo);
  return (
    <>
      <img src="goodInfoURL" alt={goodInfo.name} />
      <h3>{goodInfo.name}</h3>
      <Title>price</Title>
      <Title>{goodInfo.price}</Title>
      <button type="button">add to Cart</button>
    </>
  );
};

export { GoodCard };
