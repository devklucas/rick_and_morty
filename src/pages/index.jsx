import { useCharacter } from "../providers";
import Card from "../components/Card";
import {Container,
    ContentCards,
    Buttons} from './styles'

const Index = () => {
  const { urlPrev, urlNext, nextPage, prevPage } = useCharacter();

  return (
    <Container>
      <ContentCards>
        <Card />
      </ContentCards>
      <Buttons>
        {urlNext !== null ? <button onClick={nextPage}>Next</button> : null}
        {urlPrev !== null ? <button onClick={prevPage}>Prev</button> : null}
      </Buttons>
    </Container>
  );
};

export default Index;
