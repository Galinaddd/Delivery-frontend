const GoodListItem = ({ goodItem }) => {
  console.log(goodItem);
  return (
    <li>
      {goodItem.name}
      <button tupe="button">add to Cart</button>
    </li>
  );
};
export { GoodListItem };
