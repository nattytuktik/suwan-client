import React from "react";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <section>
        <Navbar />
      </section>
      {children}
    </div>
  );
}

export default Layout;
