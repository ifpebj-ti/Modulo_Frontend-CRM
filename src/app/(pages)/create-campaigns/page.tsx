"use client";
/* eslint-disable @next/next/no-img-element */
import React, { use, useState } from "react";
import Peaker from "@/components/datepicker";
import "./styles.scss";
import { FileInput } from "@/components/FileInput/fileInput";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { create } from "domain";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { postCreateCampanha } from "@/services/MarketingApi";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

type createCampaignFormData = z.infer<typeof createCampaignSchema>;

const createCampaignSchema = z.object({
  nome: z.string().nonempty({ message: "*" }),
  canal: z.string().nonempty({ message: "*" }),
  msgCliente: z.string().nonempty({ message: "*" }),
  meta: z.string().nonempty({ message: "*" }),
  descricao: z.string().nonempty({ message: "*" }),
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
  const router = useRouter();

  function handleGetStartEndDate(dataInicial: any, dataFinal: any) {
    setStartDate(dataInicial);
    setEndDate(dataFinal);
  }

  function newCampaign(data: any) {
    const finaldata = { ...data, startDate, endDate };

    const dataToEndpoint = {
      nome_Campanha: finaldata.nome,
      nome_Criador: "Administrador",
      email_Criador: "adm@adm.com",
      descricao: finaldata.descricao,
      data_Inicio: finaldata.startDate,
      data_Termino: finaldata.endDate,
      data_Criacao: new Date(),
      mensagem: finaldata.msgCliente,
      observacao: "string",
      valor_Meta: finaldata.meta,
      recorrente: true,
      frequencia: 0,
      dia_Da_Semana_Da_Recorrencia: 0,
      dia_Do_Mes_Da_Recorrencia: 0,
      frequencia_de_Repeticao: 0,
    };

    postCreateCampanha(dataToEndpoint).then((response) => {
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Campanha cadastrada com sucesso!",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/campaigns");
    });
  }

  return (
    <section className="container-CC ">
      <div className="content-CC">
        <div className="title-CC">Dados da Campanha</div>
        <form
          id="campaignForm"
          onSubmit={handleSubmit(newCampaign)}
          className=""
        >
          <div className="field-form-CC ">
            <div className="line1-form-CC">
              <div className="box-name-CC ">
                <label htmlFor="nome" className="l-name-CC">
                  <div className="text-name-CC">
                    Nome da Campanha
                    {errors.nome && (
                      <span className="msg-error">{errors.nome.message}</span>
                    )}
                  </div>
                  <input
                    type="text"
                    {...register("nome")}
                    className="ipt-name-CC "
                  />
                </label>
              </div>
              <div className="box-period-CC ">
                <label className="l-period-CC ">
                  <div className="text-period-CC">Período da campanha</div>
                  <div className="peaker-CC">
                    <Peaker handleGetStartEndDate={handleGetStartEndDate} />
                  </div>
                </label>
              </div>
            </div>

            <div className="line2-form-CC">
              <div className="box-img-CC ">
                <label htmlFor="foto" className="l-img-CC ">
                  <div className="text-img-CC">Foto da Campanha</div>
                  <div id="foto" className="ipt-img-CC">
                    <FileInput />
                  </div>
                </label>
              </div>
              <div className="box-descript-CC ">
                <label htmlFor="descricao" className="l-descript-CC ">
                  <div className="text-descript-CC">
                    Descrição da campanha
                    {errors.descricao && (
                      <span className="msg-error">
                        {" "}
                        {errors.descricao.message}
                      </span>
                    )}
                  </div>

                  <textarea
                    {...register("descricao")}
                    id="descricao"
                    className="txt-descript-CC"
                  ></textarea>
                </label>
              </div>
            </div>

            <div className="line3-form-CC">
              <div className="box-channel-CC">
                <label htmlFor="canal" className="l-channel-CC ">
                  <div className="text-channel-CC">
                    Qual canal de transmissão desta campanha?
                    {errors.canal && (
                      <span className="msg-error">{errors.canal.message}</span>
                    )}
                  </div>
                  <select
                    id="canal"
                    {...register("canal")}
                    className="slct-channel-CC "
                  >
                    <option selected>Escolha um Canal</option>
                    <option value="1">Facebook</option>
                    <option value="2">WhatsApp</option>
                    <option value="3">Instagram</option>
                    <option value="4">SMS</option>
                    <option value="5">E-mail</option>
                  </select>
                </label>
              </div>
              <div className="box-meta-CC ">
                <label htmlFor="meta" className="l-meta-CC ">
                  <div className="text-meta-CC">Qual a meta da campanha?</div>

                  <input
                    type="number"
                    {...register("meta")}
                    id="meta"
                    placeholder="R$ "
                    className="ipt-meta-CC "
                  ></input>
                </label>
              </div>
            </div>
            <div className="line4-form-CC">
              <div className="box-msg-CC ">
                <label htmlFor="msgCliente" className="l-msg-CC ">
                  <div className="text-msg-CC">
                    Mensagem da campanha que será enviada aos clientes
                    {errors.msgCliente && (
                      <span className="msg-error">
                        {errors.msgCliente.message}
                      </span>
                    )}
                  </div>
                  <textarea
                    {...register("msgCliente")}
                    id="msgCliente"
                    className="txta-msg-CC "
                  ></textarea>
                </label>
              </div>
            </div>
          </div>

          <div className="box-btn-CC ">
            <div className="alert-btn-CC ">
              <img
                className="alert-img-CC "
                src="/Alerta.svg"
                alt="Icone Alerta"
              />
              <p className="alert-text-CC ">
                Preencha todos os dados com cuidado.
              </p>
            </div>
            <div className="field-btn-CC ">
              <button type="submit" className="btn-CC ">
                Concluir criação
              </button>
            </div>
          </div>
        </form>
        {/* <pre>{output}</pre> */}
      </div>
    </section>
  );
}

function record(arg0: any) {
  throw new Error("Function not implemented.");
}
