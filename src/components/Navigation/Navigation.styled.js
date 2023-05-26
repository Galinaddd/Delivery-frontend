import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  color: var(--main-accent-color);
  padding: 20px;
  text-decoration: none;

  &: hover {
    color: var(--active-color);
  }
  &.active {
    color: var(--active-color);
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-item: center;
`;
