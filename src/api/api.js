import axios from "axios";

export const productsApi = {
  getProducts(currentPage, pageSize) {
    return axios
      .get("http://testtask.alto.codes/front-products.php?page=1")
      .then((response) => response);
  },
};
