import Head from "next/head";
import AdminLayout from "../../components/Layouts/AdminLayout";

export default function AddPopup() {
  return (
    <div>
      <Head>
        <title>Add Popup</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <AdminLayout>
        Popup controllers here
     </AdminLayout>
    </div>
  );
}
