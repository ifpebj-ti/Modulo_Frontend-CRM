"use client";
import React from "react";
import Card from "@/components/Card";
import LogoWhite from "../../../public/logo-white.svg";
import Image from "next/image";
import {
  Users,
  ChartBar,
  Megaphone,
  CurrencyCircleDollar,
} from "@phosphor-icons/react";
export default function Dashboard() {
  return (
    <main className="grid grid-cols-12 h-full w-full gap-8">
      <div className="col-span-2">
        <div className="h-full w-full bg-fc-color-500 flex flex-col justify-between items-center pt-[36px] pb-[36px] pl-[21px] pr-[19px]">
          <Image src={LogoWhite} alt={"Logo Cavalcante"} />
          <div>
            <div className="flex flex-col gap-[40px] ">
              <span>Inicio</span>
              <span>Campanhas</span>
              <span>Vendas</span>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div>botao cor</div>
            <div>sair</div>
          </div>
        </div>
      </div>
      <div className="col-span-9 pt-[40px] pl-[40px] ">
        <div className="flex gap-[104px]">
          <div className="flex flex-col">
            <span className="text-[34px] leading-[44px]">
              Olá, <strong>Graça</strong>
            </span>
            <div className="leading-[22px] text-[#808080]">
              Segunda-Feira, 11 de setembro de 2023
            </div>
          </div>
          <div>
            <div className="border-2 border-[#BBBDC9] rounded-[20px] p-2 pl-[15px]">
              <input type="text" placeholder="Pesquise aqui..."  className="bg-transparent active:border-none focus:border-none"/>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-between mt-[40px]">
          <Card
            titulo="Número de Clientes Associados"
            icon={<Users size={32} />}
            valor="Valor do Card"
            percentual="Percentual do Card"
            href={"#"}
          />
          <Card
            titulo="Número de Campanhas Ativas"
            icon={<Megaphone size={32} />}
            valor="Valor do Card"
            percentual="Percentual do Card"
            href={"#"}
          />
          <Card
            titulo="Número de Vendas do Mês"
            icon={<ChartBar size={32} />}
            valor="Valor do Card"
            percentual="Percentual do Card"
            href={"#"}
          />
          <Card
            titulo="Faturamento do Mês"
            icon={<CurrencyCircleDollar size={32} />}
            valor="Valor do Card"
            percentual="Percentual do Card"
            href={"#"}
          />
        </div>
        <div className=" flex mt-[34px] gap-[34px]">
          <div className="flex flex-col items-start gap-18 w-480 p-16 bg-[#D6D6D6]">
            Clientes que mais compraram no mês
          </div>
          <div className="flex flex-col items-start gap-18 w-480 p-16 bg-[#D6D6D6]">
            Análise de Clientes e Compras
          </div>
        </div>
        <div className=" flex mt-[34px] gap-[34px]">
          <div className="flex flex-col items-start gap-18 w-480 p-16 bg-[#D6D6D6]">
            Distribuição de Clientes por Idade ou Gênero
          </div>
          <div className="flex flex-col items-start gap-18 w-480 p-16 bg-[#D6D6D6]">
            Análise de tração de clientes durante o ano
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </main>
  );
}
