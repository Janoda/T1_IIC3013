import {React, useEffect, useState} from "react"
import { Container, Jumbotron, Table } from "react-bootstrap";
import {
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import axios from 'axios';


function Episode() {
  let { seriesname, seasonid, episodeid } = useParams();
  const match  = useRouteMatch();
  const [episode, setEpisode] = useState([])

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get(`https://tarea-1-breaking-bad.herokuapp.com/api/episodes/${episodeid}`)
        .then(response => {
          const data = response.data
          setEpisode(data)
          console.log(data)
        });

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [setEpisode, episodeid]);
  

    return (
      <Container>
        <Jumbotron>
          <h1 className = "header"> {episode[0] && episode[0].title}  </h1>




        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Serie</th>
              <th>Temporada</th>
              <th>Numero capitulo</th>
              <th>Nombre Capitulo</th>
              <th>Fecha emision</th>
              <th>Personajes</th>
              
            </tr>
          </thead>
          <tbody>       
              <tr>
                <td>{episode[0] && episode[0].series}</td>
                <td>{episode[0] && episode[0].season}</td>
                <td>{episode[0] && episode[0].episode}</td>
                <td>{episode[0] && episode[0].title}</td>
                <td>{episode[0] && episode[0].air_date}</td>
                <td>
                  {episode[0] && episode[0].characters.map(el => (
                    <li><Link to={`/character/${el}`}> {el} </Link></li>
                  ))}
                
                </td>


              </tr>


           
          </tbody>
        </Table>

        </Jumbotron>
      </Container>
        

      
      );

  }
export default Episode