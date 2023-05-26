import { Outlet } from 'react-router-dom';
import { Navigation } from '../index';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Container>
        <Outlet />
      </Container>
      <footer>
        <>
          <h2>it is footer</h2>
        </>
      </footer>
    </>
  );
};

export { SharedLayout };
