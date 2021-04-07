import React from "react"
import Container from 'react-bootstrap/Container';
import { Jumbotron, Table } from 'react-bootstrap';
import {
  Link,
} from "react-router-dom";
function Home() {

    const dataB = [1,2,3,4,5];
      
    
    return (

      <Container className="p-3">
        
        <Jumbotron>
        <h1 className="header">
          Series
        </h1>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Serie</th>
              <th>Temporada</th>
              
            </tr>
          </thead>
          <tbody>
            {dataB.map(el =>(
              <tr>
                <td>Breaking Bad</td>
                <td><Link to={"/series/Breaking Bad/" + el}>Temporada {el}</Link></td>
              </tr>
            ))}
            {dataB.map(el =>(
              <tr>
                <td>Better Call Saul</td>
                <td><Link to={"/series/Better Call Saul/" + el}>Temporada {el}</Link></td>
              </tr>
            ))}
           
          </tbody>
        </Table>
  
        </Jumbotron>
   
        
      </Container>

    );
  }

  export default Home;