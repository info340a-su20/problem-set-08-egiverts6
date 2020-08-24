import React, { Component } from 'react'; //import React Component
import './style.css';
import { render } from 'enzyme';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      pets: this.props.pets,
      adopted: false
    }
  }


  adopt = (name) => {


    this.state




    this.setState((currState, currProps) => {
      let stateChanges = {adopted: !currState.adobted}
      return stateChanges;
    })



    let stateChanges = { }
    this.setState(stateChanges);
  }



  render() {
    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <BreedNav breeds={this.state.pets} />
              <AboutNav />
            </div> 

            <div id="petList" className="col-9">
              <PetList pets={this.state.pets} />
            </div> 
          </div> 
        </main>

        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
      </div>
    );
  }
}

export default App;


export class AboutNav extends Component {


  render(){
    return(
      <div>
          <nav id="aboutLinks">
            <h2>About</h2>
            <ul className="list-unstyled">
              <li><a href="#/">How to Adopt</a></li>
              <li><a href="#/">Volunteering</a></li>
              <li><a href="#/">Events</a></li>
              <li><a href="#/">Donate</a></li>
              <li><a href="#/">About Us</a></li>
            </ul>
          </nav>
        </div>
    );
  }
}


export class BreedNav extends Component {



  render(){

    let breedLink = this.props.breeds.map((brd) => {
      return <li key={brd.name}><a href="">{brd.breed}</a></li>;
    })


    return (
      <div>
      <nav id="breedLinks">
            <h2>Pick a Breed</h2>
            <ul className="list-unstyled">
              {breedLink}
            </ul>            
        </nav>
      </div>
    );
  }
}


export class PetCard extends Component {
  
  render(){
    return(
      <div className="card">
            <img className="card-img-top" src={this.props.breeds.img} alt={this.props.breeds.name} />
            <div className="card-body">
              <h3 className="card-title">{this.props.breeds.name}</h3>
              <p className="card-text">{this.props.breeds.breed}</p>
            </div>
          </div>
    );
  }
}


export class PetList extends Component {
  

  render(){

    let breedCard = this.props.pets.map((brd) => {
      return <PetCard breeds={brd} />;
    })

    return(
      <div>
        <h2>Dogs for Adoption</h2>
          <div className="card-deck">
            {breedCard}
          </div>

      </div>
    );
  }

}