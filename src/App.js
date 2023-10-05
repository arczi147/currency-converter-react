import Form from "./Form";
import Container from "./Container";
import { useCurrentDate } from "./Form/Clock/useCurrentDate";

function App() {

  const date = useCurrentDate();

  return (
    <Container>
      <Form date={date} />
    </Container>
  )
}

export default App;