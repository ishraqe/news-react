import Footer from "./footer";
import Header from "./header";

type layoutProps = {
  children: React.ReactNode;
};

const index = ({ children }: layoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default index;
