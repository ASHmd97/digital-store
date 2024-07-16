const { default: axiosClient } = require("./axiosClint");

const getProducts = async () => axiosClient.get("/products?populate=*");

const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);

// const getProductsByCategory = async (category) => {
//   return axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);
// };

const getProductsByCategory = async (category) => {
  try {
    const response = await axiosClient.get(
      `/products?filters[category][$eq]=${category}&populate=*`
    );
    return response;
  } catch (error) {
    console.error("Error in getProductsByCategory:", error);
    throw error;
  }
};

module.exports = { getProducts, getProductById, getProductsByCategory };
