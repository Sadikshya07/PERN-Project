import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AdminLayout from "../../components/Layouts/AdminLayout";

export default function ViewUser() {
  return (
    <div>
      <Head>
        <title>View User</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>View User</AdminLayout>
    </div>
  );
}
