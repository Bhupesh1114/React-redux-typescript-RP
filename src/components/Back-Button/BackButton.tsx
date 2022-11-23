import { useNavigate } from 'react-router-dom';
import {Button} from "../styled-components/styled-components"
const BackButton = () => {                      // In navigate we can also add the path
    const navigate = useNavigate();
  return (
    <>
   <Button onClick={() => navigate(-1)}>&lt; Back</Button>     
    </>
  )
}

export default BackButton