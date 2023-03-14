const { default: axios } = require("axios");

export default axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/admin/home/homepageImage`,
});
