"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { useQueries } from "@tanstack/react-query";
import {
  getCampanhas,
  getQuantidadeCampanhasAtivas,
} from "@/services/MarketingApi";

import Button from "@/components/Button";
import CampaignCard from "@/components/CampaignCard";
import Card from "@/components/Card";

import {
  ChartLine,
  HandCoins,
  HandTap,
  Megaphone,
  Plus,
  ThumbsUp,
} from "@phosphor-icons/react";

import "./styles.scss";

const Campaigns: React.FC = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("listagem_campanhas");

  const tabs = [
    {
      name: "Listagem das campanhas",
      key: "listagem_campanhas",
      isActive: selectedTab === "listagem_campanhas" ? true : false,
    },
    {
      name: "Análise de campanhas",
      key: "analise_campanhas",
      isActive: selectedTab === "analise_campanhas" ? true : false,
    },
  ];

  const [todasCampanhas, quantidadeCampanhasAtivas] = useQueries({
    queries: [
      {
        queryKey: ["todasCampanhas"],
        queryFn: () => getCampanhas(),
      },
      {
        queryKey: ["quantidadeCampanhasAtivas"],
        queryFn: () => getQuantidadeCampanhasAtivas(),
      },
    ],
  });

  if (todasCampanhas.isLoading || quantidadeCampanhasAtivas.isLoading)
    return <div>Carregando...</div>;

  function formatString(str: string) {
    const number = parseFloat(str);
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return (
    <div>
      <div className="flex w-full">
        {" "}
        {tabs.map((tab) => {
          return (
            <>
              <div
                className={` max-[600px]:text-sm border-b-2 border-gray-400 p-3 w-[50%] text-center cursor-pointer opacity-60  ${
                  tab.isActive
                    ? "bg-[#6AD97233] !opacity-100 font-bold text-black"
                    : ""
                } `}
                onClick={() => setSelectedTab(tab.key)}
              >
                {tab.name}
              </div>
            </>
          );
        })}
      </div>

      {selectedTab === "listagem_campanhas" ? (
        <>
          <div className="flex justify-end">
            <Button
              className="bg-[#106E41] mt-[24px] px-3 py-[10px] flex items-center justify-center gap-[8px] hover:opacity-50 max-[600px]:text-sm max-[600px]:max-w-[220px]"
              onClick={() => router.push("/create-campaigns")}
            >
              <Plus size={14} weight="bold" />
              Adicionar uma campanha
            </Button>
          </div>

          <div>
            <div className="text-lg not-italic font-medium leading-6 mt-4">
              Campanhas Frequentes
            </div>
            <div className="flex min-[768px]:flex-wrap max-[767px]:grid max-[767px]:grid-cols-2 gap-[27px] mt-4">
              <CampaignCard
                title={"Campanha Quarta do Bebê"}
                status="in_progress"
                startDate="27 de setembro"
                endDate="01 de Dezembro"
                createdByUser="Matheus Patriota"
                createdDate="23 de Setembro"
              />
              <CampaignCard
                title={"Campanha Quarta do Bebê"}
                status="closed"
                startDate="27 de setembro"
                endDate="01 de Dezembro"
                createdByUser="Matheus Patriota"
                createdDate="23 de Setembro"
              />
              <CampaignCard
                title={"Campanha Quarta do Bebê"}
                status="finished"
                startDate="27 de setembro"
                endDate="01 de Dezembro"
                createdByUser="Matheus Patriota"
                createdDate="23 de Setembro"
              />
              <CampaignCard
                title={"Campanha Quarta do Bebê"}
                status="in_progress"
                startDate="27 de setembro"
                endDate="01 de Dezembro"
                createdByUser="Matheus Patriota"
                createdDate="23 de Setembro"
              />
            </div>
          </div>
          <div className="">
            <div className="text-lg not-italic font-medium leading-6 mt-4">
              Todas as Campanhas
            </div>
            <div className="flex gap-[27px] mt-4 min-[768px]:flex-wrap max-[767px]:grid max-[767px]:grid-cols-2">
              {todasCampanhas.data?.map((campanha: any, key: any) => {
                return (
                  <CampaignCard
                    key={key}
                    title={campanha.nome_Campanha}
                    status={campanha.status === true ? "in_progress" : "closed"}
                    startDate={campanha.dataInicio}
                    endDate={campanha.data_Termino}
                    createdByUser={campanha.email_Criador}
                    createdDate={campanha.dataCriacao}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap gap-6 justify-between  max-w-full max-h-[20%] mt-6">
            <Card
              titulo="Número de Campanhas Ativas"
              icon={<Megaphone size={16} />}
              valor={quantidadeCampanhasAtivas.data.quantidadeCampanhasAtivas}
              percentual="20"
              href={"#"}
            />
            <Card
              titulo="Retorno sobre o Investimento (ROI)"
              icon={<HandCoins size={16} />}
              valor={formatString("2420")}
              percentual="20"
              href={"#"}
            />
            <Card
              titulo="Taxa de Cliques (CRT)"
              icon={<HandTap size={16} />}
              valor={formatString("2420")}
              percentual="20"
              href={"#"}
            />
            <Card
              titulo="Taxa de Conversão de Campanha"
              icon={<ChartLine size={16} />}
              valor={formatString("2420")}
              percentual="20"
              href={"#"}
            />
            <Card
              titulo="Taxa de engajamento nas Redes Sociais"
              icon={<ThumbsUp size={16} />}
              valor={formatString("2420")}
              percentual="20"
              href={"#"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Campaigns;
