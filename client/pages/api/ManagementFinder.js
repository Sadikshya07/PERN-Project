// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:3000/api/admin/aboutus/management",
});
