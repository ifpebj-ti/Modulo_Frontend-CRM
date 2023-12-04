"use client";
import Peaker from '@/components/datepicker';
import Dropdown from '@/components/Dropdown';
import { useQuery } from '@tanstack/react-query';
import React, { use, useState } from 'react';

import { getAvailableBranches } from '../../../services/SalesApi';
import SalesStructure from './useSalesStructure';

function Sales() {
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [selectedBranchID, setSelectedBranchID] = useState(undefined);
  const [selectedBranchName, setSelectedBranchName] = useState("");
  const topFiveVendas = [
    { nomeClienteCompleto: "teste", valorVenda: 20 },
    { nomeClienteCompleto: "teste2", valorVenda: 30 },
    { nomeClienteCompleto: "teste3", valorVenda: 40 },
  ];

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const {
    data: availableBranches,
    isLoading: isAvailableBranchesLoading,
    error: availableBranchesError,
  } = useQuery(["AvailableBranches"], () => getAvailableBranches());

  if (isAvailableBranchesLoading) {
    return <div>Loading available branches...</div>;
  }

  if (availableBranchesError) {
    return <div>Error loading available branches...</div>;
  }

  console.log(availableBranches);

  function handleGetStartEndDate(dataInicial: any, dataFinal: any) {
    setStartDate(dataInicial);
    setEndDate(dataFinal);
  }
  function handleGetSelectedOption(selectedOption: any, name: string) {
    setSelectedBranchID(selectedOption);
    setSelectedBranchName(name);
    console.log(selectedOption);
    console.log(name);
  }

  return (
    <div className="bg-[#F5F8FA] flex flex-col gap-[32px] h-full w-full">
      <div className="flex flex-col gap-6 justify-between  max-w-full max-h-[20%]">
        <div className="flex gap-12 ">
          <div className=" flex flex-col gap-2  w-[20%]">
            <span className=" text-sm not-italic font-normal leading-[18px]">
              Filial
            </span>
            <Dropdown
              name={"Selecione Filial..."}
              handleGetSelectedOption={handleGetSelectedOption}
              options={availableBranches.branchs}
            />
          </div>
          <div className="flex flex-col gap-2 w-[30%]">
            <span className=" text-sm not-italic font-normal leading-[18px]">
              Período
            </span>
            <div className="w-full h-[56px] bg-fc-color-90 rounded-2xl border border-hidden">
              <Peaker
                handleGetStartEndDate={handleGetStartEndDate}
                className="p-3"
              />
            </div>
          </div>
        </div>
        <div>
          {selectedBranchID && startDate && endDate && (
            <SalesStructure
              startDate={startDate}
              endDate={endDate}
              selectedBranchID={selectedBranchID}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Sales;
