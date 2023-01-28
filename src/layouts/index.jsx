import Container from "@mui/material/Container";

import Header from "./header";

const index = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          marginTop: "8rem",
          minHeight: "80vh"
        }}
      >
        <Container className="main-container">{children}</Container>
      </main>
    </>
  );
};

export default index;
