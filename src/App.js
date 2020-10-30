import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar.js'
import Home from './components/Home'
import People from './components/People';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';  


function App() {
  const baseURL = 'https://swapi.dev/api/people/?page=';
  const [page, setPage] = useState(1);
  const [people, setPeople]=useState([]);
  const [loading, setLoading]=useState(true);
  
useEffect(()=>{
    async function fetchPeople(){
      const url = baseURL+page;
    console.log(url);
      let res = await fetch(url);
      let data = await res.json();
      setPeople(data.results)
      setLoading(false);
    }
    fetchPeople();
  },[page]);

  function goNext(){
    if(page < 9) {   
    setPage(page+1);}
  }

  function goPrev(){
    if(page >= 2){
    setPage(page-1);}
  }
  //Styling for button
const myStyle={
  height:'30px',
  width:'70px',
  padding:'3px',
  textAlign:'center',
  lineHeight:'10px',
  borderRadius:'10px',
  margin:'10px'
}
  return (
    <div className="App">
  <Router>
    <Navbar />
    <Container>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loader</Loader>
        </Dimmer>
      ):(
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
          <Route exact path='/people'>
            <People data={people}/>
            <p id="pageNumber"></p>
            <button type="button" id="prev" onClick={goPrev} style={myStyle}>Prev</button>
            <button type="button" id="next" onClick={goNext} style={myStyle}>Next</button>
          </Route>
            </Switch>
            )}
            </Container>
            </Router>
    </div>
  );
}

export default App;