import {React, useEffect, useState} from "react"
import { Container, Jumbotron } from "react-bootstrap";
import {
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import axios from 'axios';


function Season() {
  let { seriesname, seasonid } = useParams();
  const match  = useRouteMatch();
  const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    //axios.get('https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=Better+Call+Saul')
    axios.get(`https://tarea-1-breaking-bad.herokuapp.com/api/episodes?series=${seriesname}`)
        .then(response => {
          const data = response.data
          setEpisodes(data)
          console.log(data)
        });

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [setEpisodes, seriesname]);
  

    return (
      <Container>
        <Jumbotron>
          <h1 className = "header"> {seriesname} temporada {seasonid} </h1>
        <ul className = "list-group">
          {episodes.map(el => {
            if (el.season === seasonid){
              return(
              <li className = "list-group-item"><Link to={`${match.url}/${el.episode_id}`}>{el.title}</Link> </li>
              )
            }
          })}
        </ul>

        </Jumbotron>
      </Container>
        

      
      );

  }
export default Season