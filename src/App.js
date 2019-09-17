import React, {Component} from 'react';
import MatchCards from './components/MatchCards/MatchCards';
import Wrapper from './components/Wrapper/Wrapper';
import Grid from "./components/Grid/Grid";
import Title from "./components/Title/Title";
import creature from './creature.json';

  let cardsClicked = [];
  let message = "Click an image to start";
  let score = 0;
  let highscore = 0;
class App extends Component {


  state = {
    creature,
    cardsClicked,
    message,
    score,
    highscore

  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  clickedCard = id => {
    if (cardsClicked.includes(id)) {
      score = 0;
      message = "Wrong Guess... Game over...";
      cardsClicked = [];
    } else {
      cardsClicked.push(id);
      score += 1;
      message = "Right Guess";
      if (score > highscore) {
        highscore = score;
    
      }
    }
    this.shuffle(creature);
    this.setState({ creature, score, highscore, message });
  };

  render() {

    return (
      <Wrapper>
        <Title score={score} highscore={highscore} message={message}></Title>
        <Grid>
          {this.state.creature.map(creature => (
            <MatchCards
              id={creature.id}
              name={creature.name}
              image={creature.image}
              clickedCard={this.clickedCard}

            />
          ))}
        </Grid>
      </Wrapper>
    );
  }

}

export default App;
