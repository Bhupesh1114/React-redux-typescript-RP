import { useNavigate } from 'react-router-dom';
import {Button, Container} from "../styled-components/styled-components"
const BackButton = () => {                      // In navigate we can also add the path
    const navigate = useNavigate();
  return (
    <Container>
   <Button onClick={() => navigate(-1)}>&lt; Back</Button>     
    </Container>
  )
}

export default BackButton