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
    <section>
      <div className="flex h-screen w-screen">
        <SideBard />
        <div className="flex flex-col h-full w-full pl-[4rem] pb-[40px] justify-around flex-wrap">
          <div className="flex w-full max-w-[710px] items-center justify-between h-[10%]">
            <div className="flex flex-col">
              <span className="text-[34px] leading-[44px]">
                Olá, <strong>Graça</strong>
              </span>
              <div className="leading-[22px] text-[#808080]">
                {currentDateFormatted}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 border-[1px] w-full border-[#BBBDC9] rounded-[20px] px-2 py-2">
                <MagnifyingGlass size={18} weight="bold" color="#525466"/>
                <input
                  type="text"
                  placeholder="Pesquise uma campanha"
                  className="bg-transparent active:border-none focus:border-none placeholder:text-[#525466] placeholder:text-sm w-full"
                />
              </div>
            </div>
          </div>
          <main className="h-[85%] 3xl:max-w-[2260px] 2xl:max-w-[1240px] xll:max-w-[1148px] xl:max-w-[980px] lg:max-w-[730px]">{children}</main>
        </div>
      </div>
    </section>
  );
}
