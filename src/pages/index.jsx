import Card from "../components/Card";
import {Container,
    ContentCards,
    Buttons} from './styles'

const Index = () => {

  return (
    <Container>
      <ContentCards>
        <Card />
      </ContentCards>
      <Buttons>
        <button>Next</button>
        <button>Prev</button>
      </Buttons>
    </Container>
  );
};

export default Index;
