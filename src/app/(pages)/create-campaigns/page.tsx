"use client";
/* eslint-disable @next/next/no-img-element */
import React, { use, useState } from "react";
import Peaker from "@/components/datepicker";
import "./styles.css";
import { FileInput } from "@/components/FileInput/fileInput";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { create } from "domain";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type createCampaignFormData = z.infer<typeof createCampaignSchema>;

const createCampaignSchema = z.object({
  nome: z
    .string()
    .nonempty({ message: "É necessário fornecer um nome à campanha" }),
  canal: z.string().nonempty({ message: "Atribua um canal" }),
  msgCliente: z.string().nonempty({ message: "A mensagem é obrigatória" }),
  meta: z.string().nonempty({ message: "A meta é obrigatória" }),
  descricao: z
    .string()
    .nonempty({ message: "O campo descrição é obrigatório" }),
});

export default function CreateCampaigns() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createCampaignFormData>({
    resolver: zodResolver(createCampaignSchema),
  });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(new Date().setMonth(11)));

  function handleGetStartEndDate(dataInicial: any, dataFinal: any) {
    setStartDate(dataInicial);
    setEndDate(dataFinal);
  }

  function newCampaign(data: any) {
    const finaldata = { ...data, startDate, endDate };
    console.log("Os dados atribuido agora, foram:" + finaldata);
    setOutput(JSON.stringify(finaldata));
  }

  const [output, setOutput] = useState("");

  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-y-5 ">
      <div className="w-full border border-solid border-red flex items-center justify-center flex-col bg-fc-color-700 gap-5 py-5 rounded-2xl">
        <div className="w-[90%] h-11 flex flex-col items-start justify-center gap-7  text-2xl not-italic font-medium leading-7 border-fc-color-80 border-b border-solid">
          Dados da Campanha
        </div>
        <form
          id="campanhaForm"
          onSubmit={handleSubmit(newCampaign)}
          className="w-[90%] flex items-start justify-center flex-col gap-2.5 "
        >
          <div className="w-full flex items-start justify-center flex-row gap-2.5 ">
            <div className="w-1/2 flex flex-col gap-4">
              <div className=" h-1/5 flex flex-col text-fc-color-70 gap-1">
                <label
                  htmlFor="nome"
                  className="flex items-start justify-center flex-col gap-1 "
                >
                  Nome da Campanha
                  <input
                    type="text"
                    id="nome"
                    {...register("nome")}
                    className="w-full h-[56px] bg-fc-color-90 rounded-2xl border border-solid border-fc-color-80 "
                  />
                  {errors.nome && (
                    <span className="h-[10px] text-red-500 text-sm">
                      {errors.nome.message}
                    </span>
                  )}
                </label>
              </div>
              <div className=" h-1/5 flex flex-col text-fc-color-70 gap-1">
                {/* <label htmlFor="foto" className="flex items-start justify-center flex-col gap-1 focus:border-fc-color-100">
                                    Foto da Campanha
                                    <div className="w-full h-[120px] flex items-center justify-center flex-col bg-fc-color-90 rounded-2xl border-2 border-dashed border-fc-color-80">
                                        <input type="file" id="foto" name="foto" className=" w-full h-full flex items-center justify-center border-hidden file:hidden " />
                                    </div>
                                </label> */}

                <label
                  htmlFor="foto"
                  className="flex items-start justify-center flex-col gap-1 cursor-pointer "
                >
                  Foto da Campanha
                  <div id="foto" className="w-full h-[120px] ">
                    {/* <input id="foto" type="file" className="flex items-end justify-end border border-fc-color-100 file:hidden" /> */}
                    <FileInput />
                  </div>
                </label>
              </div>
              <div className=" h-1/5 flex flex-col gap-1 text-fc-color-70 ">
                <label
                  htmlFor="canal"
                  className="flex items-start justify-center flex-col gap-1"
                >
                  Qual canal de transmissão desta campanha?
                  <select
                    id="canal"
                    {...register("canal")}
                    className="w-full h-[56px] text-fc-color-70 text-sm rounded-2xl  bg-fc-color-90 border-fc-color-80 focus:border-fc-color-100 cursor-pointer"
                  >
                    <option selected>Escolha um Canal</option>
                    <option value="1">Ex1</option>
                    <option value="2">Ex2</option>
                    <option value="3">Ex3</option>
                    <option value="4">Ex4</option>
                  </select>
                  {errors.canal && (
                    <span className="h-[10px] text-red-500 text-sm">
                      {errors.canal.message}
                    </span>
                  )}
                </label>
              </div>

              <div className=" h-1/5 flex flex-col text-fc-color-70 gap-1">
                <label
                  htmlFor="msgCliente"
                  className="flex items-start justify-center flex-col gap-1"
                >
                  Mensagem da campanha que será enviada aos clientes
                  <textarea
                    {...register("msgCliente")}
                    id="msgCliente"
                    className="w-full h-[120px] resize-none w-full h-full border border-solid border-fc-color-80 rounded-2xl bg-fc-color-90 focus:ring-fc-color-100"
                  ></textarea>
                  {errors.msgCliente && (
                    <span className="h-[10px] text-red-500 text-sm">
                      {errors.msgCliente.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-4">
              <div className=" h-1/5 flex flex-col text-fc-color-70 gap-1">
                <label className="flex items-start justify-center flex-col gap-1">
                  Período da campanha
                  <div className="w-full h-[56px] bg-fc-color-90 rounded-2xl border border-hidden">
                    <Peaker handleGetStartEndDate={handleGetStartEndDate} />
                  </div>
                </label>
              </div>
              <div className=" h-1/5 flex flex-col text-fc-color-70 gap-1">
                <label
                  htmlFor="descricao"
                  className="flex items-start justify-center flex-col gap-1"
                >
                  Descrição da campanha
                  <textarea
                    {...register("descricao")}
                    id="descricao"
                    className="resize-none w-full h-[120px] border border-solid border-fc-color-80 rounded-2xl bg-fc-color-90 focus:ring-fc-color-100"
                  ></textarea>
                  {errors.descricao && (
                    <span className="h-[10px] text-red-500 text-sm">
                      {errors.descricao.message}
                    </span>
                  )}
                </label>
              </div>
              <div className=" h-1/5 flex flex-col text-fc-color-70 gap-1">
                <label
                  htmlFor="meta"
                  className="flex items-start justify-center flex-col gap-1"
                >
                  Qual a meta da campanha?
                  <div className="w-[50%] h-[56px] bg-fc-color-90 rounded-2xl  focus:ring-fc-color-100 ">
                    <input
                      type="number"
                      {...register("meta")}
                      id="meta"
                      placeholder="R$ "
                      className="w-full h-full border border-solid border-fc-color-80 rounded-2xl bg-fc-color-90 focus:ring-fc-color-100 pl-3"
                    ></input>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between flex-row gap-2.5 ">
            <div className="w-[20%] flex flex-row items-center justify-between">
              <img className="w-[15%]" src="/Alerta.svg" alt="Icone Alerta" />
              <p className="w-[75%] text-sm not-italic font-normal leading-[18px] text-fc-color-70 ">
                Preencha todos os dados com cuidado.
              </p>
            </div>
            <div className="h-full ">
              <button
                type="submit"
                className="w-full h-full bg-fc-color-100 p-1 box-border rounded-[10px] text-fc-color-700 text-right text-base not-italic font-medium leading-[26px] py-0 px-[15px]"
              >
                Concluir criação
              </button>
            </div>
          </div>
        </form>
        <pre>{output}</pre>
      </div>
    </section>
  );
}

function record(arg0: any) {
  throw new Error("Function not implemented.");
}
