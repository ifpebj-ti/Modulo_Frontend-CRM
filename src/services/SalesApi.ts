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
export const getTicketsByIntervalAndBranch = async (startDate: any,endDate: any, branchID: number) => {
  const response = await salesApi
    .get("/ticket/ticketsByIntervalAndBranch", { params: { startDate: startDate, endDate: endDate, branchId: branchID } })
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
export const getTotalBilling = async (startDate: any,endDate: any, branchID: number) => {
  const response = await salesApi
    .get("/sales/totalBilling", { params: { startDate: startDate, endDate: endDate, branchId: branchID } })
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
export const getAvailableBranches = async () => {
  const response = await salesApi
    .get("/branch/availableBranchs")
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