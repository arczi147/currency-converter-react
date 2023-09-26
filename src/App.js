import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";
import { useCurrentDate } from "./Form/Clock/useCurrentDate";

function App() {

const date = useCurrentDate();

  return (
    <Container>
      <Form date={date}/>
      <Footer
        content="*Przelicznik kursu walut na dzień 24.02.2023 godz. 20:52 w Santander Bank."
      />
    </Container>
  )
}

export default App;