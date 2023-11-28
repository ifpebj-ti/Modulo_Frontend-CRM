"use client"

import SideBard from "@/components/SideBard";
import { currentDateFormatted } from "@/utils/formatDate";
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
          <div className="box-text-layout">
            <span className="saudacao-layout">
              Olá, <strong>Graça</strong>
            </span>
            <div className="data-layout">
              <span>
                Segunda-Feira,
              </span>
              <span>
                11 de setembro de 2023
              </span>
            </div>
          </div>
          <div className="box-search-layout">
            <div className="search-layout">
              <input
                type="text"
                placeholder="Pesquise aqui..."
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
