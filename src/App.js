import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar.js'
import Home from './components/Home'
import People from './components/People';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';  


function App() {
  const baseURL = 'https://swapi.dev/api/people/?page=';
  //const pageNo = document.getElementById('pageNumber')
  //const prevPage= document.getElementById('prev');
 // const nextPage= document.getElementById('next');
  const [page, setPage] = useState(1);
  const [people, setPeople]=useState([]);
  //const [planet, setPlanet]=useState([]);
  const [loading, setLoading]=useState(true);
  /* const [currentPage, setCurrentPage]= useState(1);
  const [postsPerPage, setPostsPerPage]= useState(10) */

useEffect(()=>{
    async function fetchPeople(){
      const url = baseURL
    console.log(url);
      let res = await fetch(url);
      let data = await res.json();
      setPeople(data.results)
      setLoading(false);
    }
    fetchPeople();
  },[]);

  function goNext(){
    
    setPage(page+1);
    console.log(page);
    async function fetchPeople(){
      const url = baseURL + page
      let res = await fetch(url);
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }
    fetchPeople();
    //fetchPeople();
  }

  function goPrev(){
    
    setPage(page-1);
    console.log(page);
      async function fetchPeople(){
      const url = baseURL + page
      let res = await fetch(url);
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }
    fetchPeople();
  }

  /* prevPage.addEventListener("click", ()=>{
    page--
    fetchPeople();
  })

  nextPage.addEventListener("click", ()=>{
    page++
    fetchPeople();
  }) */
  //pagination
 /*  if(page===1){
    prevPage.disabled = true;
  }else{
    prevPage.disabled = false;
  }
  if(people.length < 10){
    nextPage.disabled = true;
  }else {
    nextPage.disabled = false;
  } */

  /* const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost= indexOfLastPost-postsPerPage;
  const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);
  console.log(people.length);

  const paginate=(pageNumber)=> setCurrentPage(pageNumber) */
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
            <button type="button" id="prev" onClick={goPrev}>Prev</button>
            <button type="button" id="next" onClick={goNext}>Next</button>
          </Route>
            </Switch>
            )}
            </Container>
            </Router>
    </div>
  );
}

export default App;