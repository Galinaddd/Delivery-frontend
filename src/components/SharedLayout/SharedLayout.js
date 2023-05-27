import { Outlet } from 'react-router-dom';
import { Navigation } from '../index';
import { Container, Footer } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Container>
        <Outlet />
      </Container>
      <Footer>
        <>
          <h4>Delivery</h4>
        </>
      </Footer>
    </>
  );
};

export { SharedLayout };
