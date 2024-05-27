import { Badge } from "react-bootstrap";

const Tags = ({text, color}) =>{
  return(
    <h4>
      <Badge bg={color}>{text}</Badge>
    </h4>
  )
}

export default Tags