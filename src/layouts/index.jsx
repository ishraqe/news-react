import Container from "@mui/material/Container";

import Footer from "./footer";
import Header from "./header";

const index = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          marginTop: "8rem"
        }}
      >
        <Container className="main-container">{children}</Container>
      </main>

      <Footer />
    </>
  );
};

export default index;