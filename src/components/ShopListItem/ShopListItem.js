const ShopListItem = ({ shopItem, onButtonClick }) => {
  const handleClickButton = () => {
    onButtonClick(shopItem.id);
  };
  return (
    <li>
      <button tupe="button" onClick={handleClickButton}>
        {shopItem.name}
      </button>
    </li>
  );
};

export { ShopListItem };
