import Head from "next/head";
import Link from "next/link";
import AdminLayout from "../../components/Layouts/AdminLayout";

export default function AddUser() {
  return (
    <div>
      <Head>
        <title>Add User</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AdminLayout>
        <div className="form-container">
          <form>
              <h1>Add User</h1>
              <label htmlFor="name"> Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="border-2"
                required
              ></input>
              <br />
              <label for="file">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border-2"
              ></input>
              <br />
              <label for="file">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="border-2"
              ></input>
              <br />
              <label for="file">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="border-2"
              ></input>
              <br />
              <button type="submit" className="border-2">
                Submit
              </button>
            </form>
        </div>
      </AdminLayout>
    </div>
  );
}
