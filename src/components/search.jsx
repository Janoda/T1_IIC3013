import {React, useEffect, useState} from "react"
import { Container, Jumbotron, Table } from "react-bootstrap";
import {
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import axios from 'axios';
import url from 'url';


function Search() {

  const searcht = window.location.search
  const busqueda = searcht.slice(searcht.indexOf("=")+1, searcht.length)
  const [characters, setCharacters] = useState([])

  useEffect(() => {

    axios.get(`https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=${busqueda}`)
        .then(response => {
          const data = response.data
          setCharacters(data)
          console.log(data)
        });

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [setCharacters, busqueda]);
  

    return (
      <Container>
        <Jumbotron>
          <h1 className = "header">  Busqueda</h1>
          <ul>
          {characters.map(el => (
              <li><Link to={`/character/${el.name}`}>{el.name}</Link></li>
          ))}
          </ul>

        </Jumbotron>
      </Container>
        

      
      );

  }
export default Search