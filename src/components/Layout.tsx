import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ContenedorToasts } from './ContenedorToasts';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-stone-900 bg-[conic-gradient(var(--color-stone-800)_25%,transparent_0_50%,var(--color-stone-800)_0_75%,transparent_0)] bg-size-[64px_64px] font-sans text-2xl text-stone-100">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ContenedorToasts />
    </div>
  );
}
