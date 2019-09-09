import React, {Component} from 'react';
import MatchCards from './components/MatchCards/MatchCards';
import Wrapper from './components/Wrapper/Wrapper';
import Title from "./components/Title/Title";
import creature from './creature.json';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    creature
  };


  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.creature.map(creature => (
          <MatchCards
            id={creature.id}
            name={creature.name}
            image={creature.image}

          />
        ))}
      </Wrapper>
    );
  }

}



export default App;
