import type { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {/* <h1 className="text-4xl font-bold">레이아웃</h1> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}