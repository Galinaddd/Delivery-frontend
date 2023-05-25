import { StyledLink, Nav } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Shop</StyledLink>
      <StyledLink to="/cart">Shopping Cart</StyledLink>
    </Nav>
  );
};

export { Navigation };
