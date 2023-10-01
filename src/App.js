import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";
import { useCurrentDate } from "./Form/Clock/useCurrentDate";

function App() {

const date = useCurrentDate();

  return (
    <Container>
      <Form date={date}/>
      <Footer />
    </Container>
  )
}

export default App;