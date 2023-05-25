import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #c920fа;
  padding: 20px;

  &: hover {
    color: #c92000;
  }
`;

export const Nav = styled.nav`
  display: flex;

  align-item: center;
`;
