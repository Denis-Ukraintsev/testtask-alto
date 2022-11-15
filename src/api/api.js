import axios from "axios";

export const productsApi = {
  getProducts(currentPage, pageSize) {
    return axios
      .get("http://testtask.alto.codes/front-products.php")
      .then((response) => response);
  },
};
