import Head from "next/head";
import AdminLayout from "../../components/Layouts/AdminLayout";

export default function AddPopup() {
  return (
    <div>
      <Head>
        <title>Admin | Add Popup</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AdminLayout>
        <label htmlFor="image">Popup Image:</label>
        <input
          type="file"
          id="image"
          placeholder="choose file"
          className="border-2"
        ></input>
        <br />
      </AdminLayout>
    </div>
  );
}
