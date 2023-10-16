"use client";
import Button from "@/components/Button";
import { Plus } from "@phosphor-icons/react";
import React, { useState } from "react";

const Campaigns: React.FC = () => {
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

  return (
    <div>
      <div className="flex w-full">
        {" "}
        {tabs.map((tab) => {
          return (
            <>
              <div
                className={`${
                  tab.isActive ? "bg-[#6AD97233] opacity-100 font-bold" : ""
                } border-b-2 border-gray-400 p-3 w-[50%] text-center cursor-pointer opacity-60`}
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
              onClick={() => alert("Cliquei")}
              className="bg-[#106E41] mt-[24px] p-3 flex items-center justify-center gap-[8px] hover:opacity-50"
            >
              <Plus size={14} weight="bold" />
              Adicionar uma campanha
            </Button>
          </div>
          <div>campanha frequentes</div>
          <div>todas as campanhas</div>
        </>
      ) : (
        <>teste</>
      )}
    </div>
  );
};

export default Campaigns;
