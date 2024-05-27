import Container from 'react-bootstrap/Container'

function Header({title}) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

export default Header
