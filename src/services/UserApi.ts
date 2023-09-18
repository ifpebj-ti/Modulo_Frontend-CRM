import { api } from "./AxiosSetup";

// its just a example
api.get('/users')
  .then((response) => {
    // handle the response
  })
  .catch((error) => {
    // handle the error
  })