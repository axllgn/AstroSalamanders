/* Main container for the game */

import React from 'react';
import Board from './Board.js';

class Game extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    let height = $(document).height();
    let width = $(document).width();

    let Game = $('#Game');

    $(Game).css({ width: width,
                  height: height,
                  minWidth: width, 
                  minHeight: height
                });

  }


  render(){
    return( 
        <div id="Game">
          <Board />
        </div>

    );
  }

}

export default Game;