import { Outlet } from 'react-router-dom';
import { Navigation } from '../index';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <>
          <h2>it is footer</h2>
        </>
      </footer>
    </>
  );
};

export { SharedLayout };
