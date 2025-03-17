import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="container-fluid pt-5">
        <Outlet />
      </main>
    </>
  );
}