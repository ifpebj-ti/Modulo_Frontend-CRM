import React, { useState } from "react";
import Peaker from "@/components/datepicker"
import "./styles.css"
import { FileInput } from "@/components/FileInput/fileInput";

const onSubmit = () => { }

export default function createCampaigns() {
    return (
        <section className="w-full h-full flex flex-col items-center justify-center gap-y-5 "  >
            <div className="w-full border border-solid border-red flex items-center justify-center flex-col bg-fc-color-700 gap-5 py-5 rounded-2xl">
                <div className="w-[90%] h-11 flex flex-col items-start justify-center gap-7  text-2xl not-italic font-medium leading-7 border-fc-color-80 border-b border-solid">
                    Dados da Campanha
                </div>
                <form id="campanhaForm" className="w-[90%] flex items-start justify-center flex-col gap-2.5 ">
                    <div className="w-full flex items-start justify-center flex-row gap-2.5 ">
                        <div className="w-1/2 flex flex-col gap-4">
                            <div className=" h-1/5 flex flex-col text-fc-color-70 gap-1">
                                <label htmlFor="nome" className="flex items-start justify-center flex-col gap-1">
                                    Nome da Campanha
                                    <input type="text" id="nome" name="nome" className="w-full h-[56px] bg-fc-color-90 rounded-2xl border border-solid border-fc-color-80 "  >
                                    </input>
                                </label>
                            </div>
                            <div className=" h-1/5 flex flex-col text-fc-color-70 gap-1">
                                {/* <label htmlFor="foto" className="flex items-start justify-center flex-col gap-1 focus:border-fc-color-100">
                                    Foto da Campanha
                                    <div className="w-full h-[120px] flex items-center justify-center flex-col bg-fc-color-90 rounded-2xl border-2 border-dashed border-fc-color-80">
                                        <input type="file" id="foto" name="foto" className=" w-full h-full flex items-center justify-center border-hidden file:hidden " />
                                    </div>
                                </label> */}

                                <label htmlFor="foto" className="flex items-start justify-center flex-col gap-1 cursor-pointer ">
                                    Foto da Campanha
                                    <div className="w-full h-[120px] ">
                                        {/* <input id="foto" type="file" className="flex items-end justify-end border border-fc-color-100 file:hidden" /> */}
                                        <FileInput />
                                    </div>
                                </label>

                            </div>
                            <div className=" h-1/5 flex flex-col gap-1 text-fc-color-70 ">
                                <label htmlFor="canal" className="flex items-start justify-center flex-col gap-1">
                                    Qual canal de transmissão desta campanha?
                                    <div className="w-full h-[56px] bg-fc-color-90 rounded-2xl border border-hidden "  >
                                        <select id="canal" name="canal" className="w-full h-[100%] text-fc-color-70 text-sm rounded-2xl  bg-fc-color-90 border-fc-color-80 focus:border-fc-color-100 cursor-pointer">
                                            <option selected>Escolha um Canal</option>
                                            <option value="1">Ex1</option>
                                            <option value="2">Ex2</option>
                                            <option value="3">Ex3</option>
                                            <option value="4">Ex4</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="w-1/2 flex flex-col gap-4">
                            <div className=" h-1/5 flex flex-col text-fc-color-70 gap-1">
                                <label htmlFor="periodo" className="flex items-start justify-center flex-col gap-1">
                                    Período da campanha
                                    <div className="w-full h-[56px] bg-fc-color-90 rounded-2xl border border-hidden "  >
                                        <Peaker />
                                    </div>
                                </label>
                            </div>
                            <div className=" h-1/5 flex flex-col text-fc-color-70 gap-1">
                                <label htmlFor="descricao" className="flex items-start justify-center flex-col gap-1">
                                    Descrição da campanha
                                    <div className="w-full h-[120px] bg-fc-color-90 rounded-2xl  focus:ring-fc-color-100">
                                        <textarea name="descricao" id="descricao" className="resize-none w-full h-full border border-solid border-fc-color-80 rounded-2xl bg-fc-color-90 focus:ring-fc-color-100"></textarea>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between flex-row gap-2.5 ">
                        <div className="w-[20%] flex flex-row items-center justify-between">
                            <img className="w-[15%]" src="/Alerta.svg" alt="Icone Alerta" />
                            <p className="w-[75%] text-sm not-italic font-normal leading-[18px] text-fc-color-70">
                                Preencha todos os dados com cuidado.
                            </p>
                        </div>
                        <div className="h-full ">
                            <button type="submit" className="w-full h-full bg-fc-color-100 p-1 box-border rounded-[10px] text-fc-color-700 text-right text-base not-italic font-medium leading-[26px] py-0 px-[15px]">
                                Concluir criação
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}