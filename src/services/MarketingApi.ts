import { marketingApi } from "./MarketingApiSetup";

export const getCampanhas = async () => {
  const response = await marketingApi
    .get("Campanha/GetCampanhas")
    .then((response) => {
      // handle the response
      return response.data;
    })
    .catch((error) => {
      // handle the error
      return error;
    });
  return response;
};
export const getQuantidadeCampanhasAtivas = async () => {
  const response = await marketingApi
    .get("/Campanha/GetQuantidadeCampanhasAtivas")
    .then((response) => {
      // handle the response
      return response.data;
    })
    .catch((error) => {
      // handle the error
      return error;
    });
  return response;
};
export const postCreateCampanha = async () => {
  const response = await marketingApi
    .post("/Campanha/CadastrarCampanha")
    .then((response) => {
      // handle the response
      return response.data;
    })
    .catch((error) => {
      // handle the error
      return error;
    });
  return response;
};
