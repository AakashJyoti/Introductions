import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import { Container } from "./Components/styles/Container.styled";
import GlobalStyles from "./Components/styles/Global";

const theme = {
  colors: {
    header: "#EBFBFF",
    body: "#FFFFFF",
    footer: "#003333",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Astr</h1>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
