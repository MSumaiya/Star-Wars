
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar.js'
import Home from './components/Home'
import People from './components/People';
import Pagination from './components/Pagination';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';  


function App() {

  const [people, setPeople]=useState([]);
  //const [planet, setPlanet]=useState([]);
  const [loading, setLoading]=useState(true);
  const [currentPage, setCurrentPage]= useState(1);
  const [postsPerPage, setPostsPerPage]= useState(10)
useEffect(()=>{
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/?page=');
      let data = await res.json();
      setPeople(data.results)
    }
    fetchPeople();
    setLoading(false);
  },[]);
 

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost= indexOfLastPost-postsPerPage;
  const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);
  console.log(people.length);

  const paginate=(pageNumber)=> setCurrentPage(pageNumber)
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
            <People data={currentPosts}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={people.length}/>
          </Route>
            </Switch>
            )}
            </Container>
            </Router>
    </div>
  );
}

export default App;