// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/admin/aboutus/management`,
});
