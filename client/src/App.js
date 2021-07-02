import React from 'react'
// import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'

const App = () => {
  // const [drinks, setDrinks] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get('/api/drinks')
  //     setDrinks(data)
  //   }
  //   getData()
  // }, [])

  return (
    <>
      {/* {drinks.map(drink => <h1 key={drink._id}> {drink.drink} </h1>)} */}
      <Container fluid className="hero">
        <Navbar expand="lg">
          <Container>
            <div className="navbar-left">
              <Navbar.Brand href="#home">Heiss</Navbar.Brand>
            </div>
            <div className="navbar-right">
              <Navbar.Brand href="#index">Our Coffees</Navbar.Brand>
              <Navbar.Brand href="#index">Our Teas</Navbar.Brand>
              <Navbar.Brand href="#index">Order Online</Navbar.Brand>
              <Navbar.Brand href="#index">Heiss Room</Navbar.Brand>
              <Navbar.Brand href="#index">About us</Navbar.Brand>
              <Button variant="outline-light">Sign up</Button>{' '}
              <Button variant="outline-light">Login</Button>{' '}
            </div>
          </Container>
        </Navbar>
        <Container>
          <h2>Hot Drinks Around The World</h2>
          <p>Your favourite tea and coffee.</p>
          <Container>
            <Button variant="outline-light">Suggest Hot Drinks</Button>{' '}
            <Button variant="warning">Shop Hot Drinks</Button>{' '}
          </Container>
        </Container>
      </Container>
      <Figure>
        <Figure.Image
          alt="zig-zag"
          src="./styles/images/style.png" 
        /> 
      </Figure>
      
    </>
  )
}

export default App
