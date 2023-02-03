// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api/admin/aboutus/management",
});
