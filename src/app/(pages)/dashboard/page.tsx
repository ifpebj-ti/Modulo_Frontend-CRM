"use client";
import Card from "@/components/Card";
import { DotChart } from "@/components/DotChart";
import Dropdown from "@/components/Dropdown";
import { LineChart } from "@/components/LineChart";
import {
  ChartBar,
  CurrencyCircleDollar,
  Megaphone,
  Users,
} from "@phosphor-icons/react";
import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  // title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};
export default function Dashboard() {
  return (
    <main className="h-full w-full ">
      <div className="bg-[#F5F8FA] flex flex-col gap-[32px] h-full w-full">
        <div className="flex gap-[104px] items-center h-[10%]">
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
              <input
                type="text"
                placeholder="Pesquise aqui..."
                className="bg-transparent active:border-none focus:border-none"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-between  max-w-full max-h-[20%]">
          <Card
            titulo="Número de Clientes Associados"
            icon={<Users size={16} />}
            valor="2.420"
            percentual="20"
            href={"#"}
          />
          <Card
            titulo="Número de Campanhas Ativas"
            icon={<Megaphone size={16} />}
            valor="2.420"
            percentual="20"
            href={"#"}
          />
          <Card
            titulo="Número de Vendas do Mês"
            icon={<ChartBar size={16} />}
            valor="2.420"
            percentual="20"
            href={"#"}
          />
          <Card
            titulo="Faturamento do Mês"
            icon={<CurrencyCircleDollar size={16} />}
            valor="2.420"
            percentual="20"
            href={"#"}
          />
        </div>
        <div className=" flex gap-[34px]  h-[30%]">
          <div className="flex flex-col items-start gap-18 w-[480px] p-[16px] bg-[#FFF] border-[1px] border-[#E9ECEF] rounded-[4px]">
            <div className="flex gap-8 flex-col justify-between w-full items-center">
              <div className="flex justify-between items-center w-full">
                <span className="text-[14px] font-bold">
                  Clientes que mais compraram no mês
                </span>
                <Dropdown name={"Farmácia 24 Horas"} />
              </div>
              <div className="w-full">
                <table className="w-full">
                  <thead className="bg-white">
                    <tr>
                      <th className="text-left">Medalha</th>
                      <th className="text-left">Nome</th>
                      <th className="text-left">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="23"
                          viewBox="0 0 16 23"
                          fill="none"
                        >
                          <path
                            d="M9.38816 22.7827L11.5156 19.4131C11.5756 19.3181 11.6892 19.2717 11.7985 19.2976L15.676 20.2172C15.884 20.2665 16.0608 20.0601 15.9801 19.8622L12.6886 11.7949L5.6311 14.6744L8.92251 22.7416C9.00335 22.9397 9.27402 22.9635 9.38816 22.7827Z"
                            fill="#F41943"
                          />
                          <path
                            d="M10.566 15.6138L8.26512 21.1302L6.01465 15.6138H10.566Z"
                            fill="#BA0F38"
                          />
                          <path
                            d="M10.3685 14.6741L9.98524 15.6137L8.568 19.0872L8.50943 19.2304L7.99982 20.4801L7.07704 22.7414C6.9963 22.9393 6.72573 22.9631 6.6113 22.7825L4.48405 19.4131C4.42445 19.3182 4.31059 19.2716 4.20103 19.2977L0.323568 20.2172C0.11596 20.2665 -0.0607729 20.0599 0.0199686 19.862L3.31138 11.7947L10.3685 14.6741Z"
                            fill="#F41943"
                          />
                          <path
                            d="M13.6536 14.1601C13.3457 14.4345 11.1684 16.312 8.00003 16.312C7.40368 16.312 6.80724 16.2501 6.2239 16.126C4.78908 15.8211 3.44136 15.1356 2.34644 14.1601L3.3115 11.7947L4.41643 12.2457L4.51673 12.2869L8.00012 13.7073L11.4835 12.2869L11.5838 12.2457L12.6887 11.7947L13.6536 14.1601Z"
                            fill="#BA0F38"
                          />
                          <path
                            d="M8.00007 15.6139C12.3117 15.6139 15.807 12.1186 15.807 7.80695C15.807 3.49529 12.3117 0 8.00007 0C3.68841 0 0.193115 3.49529 0.193115 7.80695C0.193115 12.1186 3.68841 15.6139 8.00007 15.6139Z"
                            fill="#F9B906"
                          />
                          <path
                            d="M7.99995 14.9196C11.9282 14.9196 15.1127 11.7351 15.1127 7.80683C15.1127 3.87858 11.9282 0.694092 7.99995 0.694092C4.07169 0.694092 0.887207 3.87858 0.887207 7.80683C0.887207 11.7351 4.07169 14.9196 7.99995 14.9196Z"
                            fill="#E8A615"
                          />
                          <path
                            d="M8.00016 14.4845C11.688 14.4845 14.6776 11.4949 14.6776 7.80705C14.6776 4.11922 11.688 1.12964 8.00016 1.12964C4.31233 1.12964 1.32275 4.11922 1.32275 7.80705C1.32275 11.4949 4.31233 14.4845 8.00016 14.4845Z"
                            fill="#F9B906"
                          />
                          <path
                            d="M11.378 2.04815L2.00194 10.7402C1.56726 9.85444 1.32251 8.8585 1.32251 7.80671C1.32251 7.02662 1.45705 6.27796 1.70386 5.58159L6.39435 1.32475C6.90874 1.19713 7.44708 1.12939 8.00039 1.12939C9.23209 1.12949 10.3865 1.46443 11.378 2.04815Z"
                            fill="#FFC943"
                          />
                          <path
                            d="M14.2112 5.35532L5.08646 13.8147C4.16733 13.3671 3.36581 12.7151 2.74121 11.9176L12.5997 2.97021C13.297 3.63364 13.8513 4.44564 14.2112 5.35532Z"
                            fill="#FFC943"
                          />
                        </svg>
                      </td>
                      <td className="text-gray-800">Matheus Patriota</td>
                      <td className="text-gray-800">R$ 1.000</td>
                    </tr>
                    <tr>
                      <td className="bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="24"
                          viewBox="0 0 16 24"
                          fill="none"
                        >
                          <path
                            d="M9.38811 23.6873L11.5155 20.3177C11.5755 20.2228 11.6892 20.1764 11.7984 20.2023L15.6759 21.1219C15.8838 21.1712 16.0607 20.9648 15.9799 20.7668L12.6885 12.6997L5.6311 15.5791L8.92247 23.6463C9.00321 23.8443 9.27397 23.8682 9.38811 23.6873Z"
                            fill="#F41943"
                          />
                          <path
                            d="M10.5661 16.5186L8.26519 22.0349L6.01465 16.5186H10.5661Z"
                            fill="#BA0F38"
                          />
                          <path
                            d="M10.3686 15.579L9.98532 16.5185L8.5681 19.992L8.50954 20.1352L7.99993 21.3848L7.07716 23.6461C6.99642 23.844 6.72585 23.8678 6.61143 23.6873L4.48402 20.3178C4.42443 20.2229 4.31057 20.1763 4.20101 20.2023L0.323596 21.1218C0.115991 21.1711 -0.0608328 20.9646 0.0200012 20.7667L3.31137 12.6995L10.3686 15.579Z"
                            fill="#F41943"
                          />
                          <path
                            d="M13.6535 15.0651C13.3456 15.3394 11.1683 17.217 7.99995 17.217C7.40361 17.217 6.80718 17.155 6.22385 17.031C4.78904 16.7261 3.44134 16.0406 2.34644 15.0651L3.31148 12.6997L4.4164 13.1507L4.5167 13.1919L7.99995 14.6125L11.4833 13.1921L11.5836 13.1509L12.6885 12.6999L13.6535 15.0651Z"
                            fill="#BA0F38"
                          />
                          <path
                            d="M7.99996 16.5187C12.3116 16.5187 15.8068 13.0235 15.8068 8.71187C15.8068 4.40027 12.3116 0.905029 7.99996 0.905029C3.68836 0.905029 0.193115 4.40027 0.193115 8.71187C0.193115 13.0235 3.68836 16.5187 7.99996 16.5187Z"
                            fill="#EBF2F2"
                          />
                          <path
                            d="M8.00034 15.8244C11.9285 15.8244 15.113 12.64 15.113 8.71176C15.113 4.78356 11.9285 1.59912 8.00034 1.59912C4.07213 1.59912 0.887695 4.78356 0.887695 8.71176C0.887695 12.64 4.07213 15.8244 8.00034 15.8244Z"
                            fill="#C3DBDA"
                          />
                          <path
                            d="M8.00007 15.3893C11.6879 15.3893 14.6774 12.3998 14.6774 8.71199C14.6774 5.02421 11.6879 2.03467 8.00007 2.03467C4.31229 2.03467 1.32275 5.02421 1.32275 8.71199C1.32275 12.3998 4.31229 15.3893 8.00007 15.3893Z"
                            fill="#EBF2F2"
                          />
                          <path
                            d="M11.3777 2.95331L2.00193 11.6453C1.56726 10.7596 1.32251 9.76367 1.32251 8.71189C1.32251 7.93181 1.45705 7.18316 1.70385 6.48681L6.39428 2.23002C6.90866 2.1024 7.447 2.03467 8.0003 2.03467C9.23199 2.03467 10.3864 2.36961 11.3777 2.95331Z"
                            fill="white"
                          />
                          <path
                            d="M14.211 6.26032L5.08643 14.7195C4.16732 14.272 3.3658 13.62 2.74121 12.8225L12.5996 3.87524C13.2969 4.53866 13.8512 5.35065 14.211 6.26032Z"
                            fill="white"
                          />
                        </svg>
                      </td>
                      <td className="text-gray-800">Matheus Patriota</td>
                      <td className="text-gray-800">R$ 500</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="24"
                          viewBox="0 0 16 24"
                          fill="none"
                        >
                          <path
                            d="M9.38812 23.5921L11.5155 20.2225C11.5755 20.1276 11.6892 20.0812 11.7985 20.1071L15.6759 21.0267C15.8839 21.076 16.0607 20.8696 15.9799 20.6716L12.6886 12.6045L5.6311 15.4839L8.92248 23.5511C9.00331 23.7491 9.27397 23.773 9.38812 23.5921Z"
                            fill="#F41943"
                          />
                          <path
                            d="M10.566 16.4233L8.26509 21.9397L6.01465 16.4233H10.566Z"
                            fill="#BA0F38"
                          />
                          <path
                            d="M10.3686 15.4838L9.9853 16.4233L8.56809 19.8968L8.50952 20.04L7.99991 21.2896L7.07715 23.5509C6.99641 23.7488 6.72584 23.7726 6.61141 23.5921L4.484 20.2226C4.4244 20.1277 4.31054 20.0811 4.20098 20.1071L0.323564 21.0266C0.115959 21.0759 -0.0607722 20.8694 0.0199684 20.6715L3.31134 12.6042L10.3686 15.4838Z"
                            fill="#F41943"
                          />
                          <path
                            d="M13.6535 14.9697C13.3456 15.244 11.1683 17.1215 7.99996 17.1215C7.40362 17.1215 6.80719 17.0596 6.22386 16.9355C4.78905 16.6306 3.44135 15.9451 2.34644 14.9697L3.31148 12.6042L4.41641 13.0553L4.5167 13.0965L8.00005 14.5169L11.4834 13.0965L11.5837 13.0553L12.6886 12.6042L13.6535 14.9697Z"
                            fill="#BA0F38"
                          />
                          <path
                            d="M8.00022 16.4235C12.3118 16.4235 15.8071 12.9283 15.8071 8.61667C15.8071 4.30506 12.3118 0.809814 8.00022 0.809814C3.68861 0.809814 0.193359 4.30506 0.193359 8.61667C0.193359 12.9283 3.68861 16.4235 8.00022 16.4235Z"
                            fill="#E37F22"
                          />
                          <path
                            d="M8.00011 15.7295C11.9283 15.7295 15.1128 12.545 15.1128 8.61681C15.1128 4.6886 11.9283 1.50415 8.00011 1.50415C4.07189 1.50415 0.887451 4.6886 0.887451 8.61681C0.887451 12.545 4.07189 15.7295 8.00011 15.7295Z"
                            fill="#BA6017"
                          />
                          <path
                            d="M7.99984 15.2941C11.6876 15.2941 14.6772 12.3046 14.6772 8.61679C14.6772 4.929 11.6876 1.93945 7.99984 1.93945C4.31205 1.93945 1.32251 4.929 1.32251 8.61679C1.32251 12.3046 4.31205 15.2941 7.99984 15.2941Z"
                            fill="#E37F22"
                          />
                          <path
                            d="M11.3775 2.8581L2.00168 11.5501C1.56701 10.6644 1.32227 9.66847 1.32227 8.61669C1.32227 7.8366 1.4568 7.08795 1.70361 6.3916L6.39405 2.1348C6.90843 2.00719 7.44676 1.93945 8.00007 1.93945C9.23166 1.93945 10.3861 2.27439 11.3775 2.8581Z"
                            fill="#F79A4D"
                          />
                          <path
                            d="M14.2108 6.16511L5.08619 14.6243C4.16707 14.1768 3.36556 13.5248 2.74097 12.7273L12.5994 3.78003C13.2967 4.44345 13.8509 5.25544 14.2108 6.16511Z"
                            fill="#F79A4D"
                          />
                        </svg>
                      </td>
                      <td className="text-gray-800">Matheus Patriota</td>
                      <td className="text-gray-800">R$ 250</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex w-[512px] flex-col items-start gap-6 rounded border border-[#E9ECEF] p-4 border-solid bg-white">
            <div className="flex justify-between items-center w-full">
              <span className="text-[14px] font-bold">
                Análise de Clientes e Compras - Frequência de Compra x Valor
                gasto
              </span>
            </div>
            <div className="flex w-full justify-center items-center h-[200px]">
              <DotChart />
            </div>
          </div>
        </div>
        <div className="flex gap-[34px]  h-[30%]">
          <div className="flex w-[512px] h-[100%] flex-col items-start gap-6 rounded border border-[#E9ECEF] p-4 border-solid bg-white">
            <div className="flex justify-between items-center w-full h-[10%]">
              <span className="text-[14px] font-bold">
                Análise de tração de clientes durante o ano
              </span>
              <Dropdown name={"Idade"} />
            </div>
            <div className="flex w-full justify-center items-center h-[80%]">
              <Chart
                chartType="PieChart"
                width="100%"
                data={data}
                options={options}
              />
            </div>
          </div>
          <div className="flex w-[512px] flex-col items-start gap-6 rounded border border-[#E9ECEF] p-4 border-solid bg-white">
            <div className="flex justify-between items-center w-full">
              <span className="text-[14px] font-bold">
                Distribuição de Clientes por Idade ou Gênero
              </span>
            </div>
            <div className="flex w-full justify-center items-center h-[200px]">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
