import { api } from "./AxiosSetup";

// its just a example
export const getFaturamentoComparadoMesAnterior = async () => {
  const response = await api
    .get("Venda/ObterFaturamentoComparadoMesAnterior")
    .then((response) => {
      // handle the response
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // handle the error
      return error;
    });
  return response;
};
export const getQtdVendasComparadoMesAnterior = async () => {
  const response = await api
    .get("Venda/ObterQtdVendasComparadoMesAnterior")
    .then((response) => {
      // handle the response
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // handle the error
      return error;
    });
  return response;
};
export const getFrequenciaVendas = async () => {
  const response = await api
    .get("Venda/ObterFrequenciaVendas")
    .then((response) => {
      // handle the response
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // handle the error
      return error;
    });
  return response;
};
export const getQtdClientesComparadoMesAnterior = async () => {
  const response = await api
    .get("Cliente/ObterQtdClientesComparadoMesAnterior")
    .then((response) => {
      // handle the response
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // handle the error
      return error;
    });
  return response;
};
export const getTopCincoVendas = async () => {
  const response = await api
    .get("Venda/ObterTopCincoVendas")
    .then((response) => {
      // handle the response
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // handle the error
      return error;
    });
  return response;
};
