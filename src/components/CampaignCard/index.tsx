import { PencilSimpleLine, Trash } from "@phosphor-icons/react";
import React from "react";

interface CampaignCardProps extends React.HTMLAttributes<HTMLElement> {
  status: "in_progress" | "finished" | "closed";
  title: string;
  startDate: string;
  endDate: string;
  createdDate: string;
  createdByUser: string;
  onClickAction?: () => void;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  status,
  title,
  startDate,
  endDate,
  createdDate,
  createdByUser,
  onClickAction,
  ...args
}) => {
  return (
    <div
      {...args}
      className={`${args.className} flex flex-col gap-3 p-3 bg-white border border-[#DEE2E6] rounded-lg border-solid w-full max-w-[270px] cursor-pointer hover:opacity-75`}
      onClick={onClickAction}
    >
      <div className="flex justify-between items-center">
        <div
          className={` px-1.5 py-0.5 rounded-md h-fit text-sm  ${
            status === "in_progress" && "bg-[#A4DEF980]"
          } ${status === "finished" && "bg-[#6AD97233]"} ${
            status === "closed" && "bg-[#F75A6833]"
          }`}
        >
          {status === "in_progress" && <>Em andamento</>}
          {status === "finished" && <>Concluído</>}
          {status === "closed" && <>Encerrado</>}
        </div>
        <div className="flex gap-1">
          <div className="p-1 bg-[#F5F8FA] cursor-pointer hover:opacity-50 text-sm ">
            <PencilSimpleLine size={14} weight="light" />
          </div>
          <div className="p-1 bg-[#F5F8FA] cursor-pointer  hover:opacity-50 text-sm ">
            <Trash size={14} weight="light" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[2px]">
        <div className="font-medium text-xs">{title}</div>
        <div className="font-medium text-[8px] leading-[14px] text-[#6C757D]">
          {startDate} - {endDate}
        </div>
      </div>
      <div className="font-medium text-[8px] leading-[14px] text-[#1C1C1C]">
        Criado por {createdByUser} - {createdDate}
      </div>
    </div>
  );
};

export default CampaignCard;
