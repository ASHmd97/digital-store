const { default: axiosClient } = require("./axiosClint");

const addToCart = async (payload) => axiosClient.post(`/cards`, payload);

const getUserCartItems = async (email) =>
  axiosClient.get(
    `/cards?populate[products][populate]=banner&filters[email][$eq]=${email}`
  );

export default { addToCart, getUserCartItems };
