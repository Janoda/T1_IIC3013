import { React, useEffect, useState } from "react"
import { Container, Jumbotron, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';


function Character() {
  let { charname } = useParams();
  const [character, setCharacter] = useState([])
  const [quotes, setQuotes] = useState([])


  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get(`https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=${charname}`)
        .then(response => {
          const data = response.data
          setCharacter(data)
          console.log(data)
        });
    
    axios.get(`https://tarea-1-breaking-bad.herokuapp.com/api/quote?author=${charname}`)
        .then(response => {
          const data = response.data
          setQuotes(data)
          console.log("quotess es", data)
        });

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [setCharacter, charname]);
  

    return (
      <Container>
        <Jumbotron>
          <h1 className = "header"> {charname}  </h1>
          <img src={character[0] && character[0].img} alt="asd" className="rounded mx-auto d-block" style={{height:"330px"}}></img>




        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Serie</th>
              <th>Ocupación</th>
              <th>Sobrenombre</th>
              <th>Cumpleaños</th>
              <th>Estado</th>
              <th>Actor-Actriz</th>
              <th>Temporadas de Breaking Bad en las que aparece</th>
              <th>Temporadas de Better Call Saul en las que aparece</th>
              
            </tr>
          </thead>
          <tbody>       
              <tr>
                <td>{character[0] && character[0].category}</td>
                <td>{character[0] && character[0].occupation.map(el =>(
                    <li>{el}</li>
                ))}</td>
                <td>{character[0] && character[0].nickname}</td>
                <td>{character[0] && character[0].birthday}</td>
                <td>{character[0] && character[0].status}</td>
                <td>{character[0] && character[0].portrayed}</td>
                <td>
                  {character[0] && character[0].appearance.map(el => (
                    <li><Link to={`/series/Breaking Bad/${el}`}> Temporada {el} </Link></li>
                  ))}
                
                </td>

                <td>
                  {character[0] && character[0].better_call_saul_appearance.map(el => (
                    <li><Link to={`/series/Better Call Saul/${el}`}> Temporada {el} </Link></li>
                  ))}
                
                </td>


              </tr>


           
          </tbody>
        </Table>
        <h1 className="header">Quotes</h1>
        <ul>
            {quotes[0] && quotes.map(el => (
                <li> {el.quote} </li>
            ))}
        </ul>

        </Jumbotron>
      </Container>
        

      
      );

  }
export default Character