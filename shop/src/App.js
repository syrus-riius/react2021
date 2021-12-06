import React, { useState } from 'react';
import { Navbar, Container,Nav, NavDropdown, Button } from 'react-bootstrap';
import Detail from './Detail.js';
import Data from './data.js';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';


function App() {

  let [shoes, changeShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#/">SYRUS X NIKE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
      <Route exact path="/">
      <div className="jumbotron background">
        <div className="bg-light p-5 rounded-lg m-3 bg-opacity-10">
          <h1 className="display-4">20% Off 2021 w/f</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <Button className="btn btn-primary btn-lg" href="#" role="button">Learn more</Button>
        </div>
      </div>
        <div>메인페이지</div>

      <div className="container">
        <div className="row">
          {
            shoes.map((a, i) => {
              return <Card shoes={shoes[i]} i={i} key={i} />
            })
          }
        </div>
      </div>
      </Route>



      <Route path="/detail/:id">
        <Detail shoes={shoes} />
      </Route>

      <Route path="/:id">
        <div>아무거나적었을때 이거 보여주</div>
      </Route>
      {/* <Route path="/order" component={order}></Route> */}
      </Switch>
    </div>
  );
}

function Card (props){
  return(
    <>
    <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes'+ ((props.i)+1 )+ '.jpg' } width="100%" alt=""/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content }</p>
      <p>{ props.shoes.price }</p>
    </div>
  </>
  )
}
export default App;

// function MainPage(props) {
//   return(
//     <>
//     <div className="jumbotron background">
//     <div className="bg-light p-5 rounded-lg m-3 bg-opacity-10">
//       <h1 className="display-4">20% Off 2021 w/f</h1>
//       <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//       <hr className="my-4" />
//       <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//       <Button className="btn btn-primary btn-lg" href="#" role="button">Learn more</Button>
//     </div>
//   </div>

//   <div className="container">
//     <div className="row">
//       {
//         props.shoes.map((a, i) => {
//           return <Card shoes={props.shoes[i]} i={i} key={i} />
//         })
//       }
//     </div>
//   </div>
//   </>
//   )
// }

