import { salesApi } from "./SalesApiSetup";

export const getTotalSales = async (startDate: any,endDate: any, branchID: number) => {
  const response = await salesApi
    .get("/sales/totalSales", { params: { startDate: startDate, endDate: endDate, branchId: branchID } })
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
export const getTicketMedio = async (startDate: any,endDate: any, branchID: number) => {
  const response = await salesApi
    .get("/sales/totalSales", { params: { startDate: startDate, endDate: endDate, branchId: branchID } })
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