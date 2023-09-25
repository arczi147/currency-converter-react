import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";

function App() {

  return (
    <Container>
      <Form />
      <Footer
        content="*Przelicznik kursu walut na dzień 24.02.2023 godz. 20:52 w Santander Bank."
      />
    </Container>
  )
}

export default App;