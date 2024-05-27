import Header from './components/Header'
import MyCard  from './components/MyCard'
import Tags from './components/Tags'
import Footer from './components/Footer'
import id1 from './assets/img/rocko.jpg'
import id2 from './assets/img/miloski.jpg'
import id3 from './assets/img/chokita.jpg'
import id4 from './assets/img/momo.jpg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const dogData = [
  {
    id: 1,
    name: 'Rocko',
    description: 'Perro adulto, sabe leer y escribir. Compite con machos alfa',
    tagText: 'Adopción Urgente',
    tagColor: 'danger',
    image: id1
  },
  {
    id: 2,
    name: 'Miloski',
    description: 'Cachorro muy locochón, necesita que le enseñen a tener auto-control',
    tagText: 'Hogar Temporal',
    tagColor: 'success',
    image: id2
  },
  {
    id: 3,
    name: 'Chokita',
    description: 'Perra tranquila, especial para departamento',
    tagText: 'Hogar Definitivo',
    tagColor: 'info',
    image: id3
  },
  {
    id: 4,
    name: 'Momo',
    description: 'Perro muy juguetón, aunque sabe comportarse',
    tagText: 'Hogar Definitivo',
    tagColor: 'info',
    image: id4
  }
]
  return (
    <>
    <div className="main-container">
      <div className="header-container">
        <Header title="Adopta un Perrito"/>
      </div>
      <div className="content-container">
        <Container fluid="md">
          <Row>
            {dogData.map((dog)=>(
              <Col key={dog.id}>
                <MyCard
                image={dog.image}
                name={dog.name}
                description={dog.description}
                tagText={dog.tagText}
                tagColor={dog.tagColor}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>

    </>
  )
}

export default App
