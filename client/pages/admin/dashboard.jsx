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
      <div className="page-content">
        <div className="logout flex items-center gap-x-4 absolute top-6 right-10">
          <h2 className="text-2xl font-bold text-orange">Logout</h2>
          <FiLogOut className="text-4xl" />
        </div>
        <div className="info">
          <p className="text-5xl text-orange font-bold">Welcome, admin!</p>
        </div>
      </div>
    </AdminLayout>
  );
}
