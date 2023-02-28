import Navbar from "../Navbar";
import Footer from "../Footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
