"use client"

import SideBard from "@/components/SideBard";
import "./styles.scss"
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function PagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container-layout">

      <div className="sidebar-layout">
        <SideBard />
      </div>

      <div className="content-layout">

        <div className="box-menu-layout ">
          <div className="box-search-layout">
            <div className="search-layout">
              <MagnifyingGlass size={18} weight="bold" color="#525466"/>
              <input
                type="text"
                placeholder="Pesquise aqui"
                className="ipt-search-layout"
              />
            </div>
          </div>
        </div>

        <main className="main-layout ">{children}</main>
      </div>
    </section>
  );
}
