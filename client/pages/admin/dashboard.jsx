import Head from "next/head";
import AdminLayout from "../../components/Layouts/AdminLayout";
import { FiLogOut } from "react-icons/fi";

export default function Dashboard() {
  return (
    <AdminLayout>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page-content flex justify-center items-center gap-8 absolute top-4 right-10">
        <p className="text-2xl text-orange font-semibold">Welcome, admin!</p>
        <div className="logout flex items-center gap-x-4">
          <h2 className="text-2xl font-bold text-orange">Logout</h2>
          <FiLogOut className="text-4xl" />
        </div>
      </div>
    </AdminLayout>
  );
}
