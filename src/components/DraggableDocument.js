import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './subcomponents/DnDDocument/DropLabel';
import DragWord from './subcomponents/DnDDocument/DragLabel';

// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggableDocument.scss';

// library.add(fas, fab, far);

class DraggableWordBox extends Component {
  state = {
    count: 0
  }

  countWords = () => {
    let parent = document.getElementById('contentDrop');
    let cantidad = parent.getElementsByClassName('itemInfo').length;

    this.setState({
      count: this.state.count + 1
    })

    this.state.count === cantidad ? this.props.isEnded(true) : console.log('No ha finalizado');
  }
  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableDocument d-Flex j-Bt aI-S'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />

        <DndProvider backend = { HTML5Backend }>
          <div className = 'contentDrop' id = 'contentDrop'>
            {
              multimedia.dropInfo.info.map((item, i) => {
                return(
                  <div className = 'itemInfo mB-025 d-Flex d-R j-S aI-C dNone' id = { 'itemInfo-' + item.key } key = { item.key } >
                    <h4 className = {'animated fadeIn textItem'} dangerouslySetInnerHTML = {{ __html: '0' + item.key }} style = {{ 'backgroundColor': item.color }} />
                    <p id = { item.key } >{ item.text }</p>
                  </div>
                )
              })
            }
            {
              multimedia.dropZone.drops.map((item, i) => {
                return(
                  <div key = { item.key } className = 'itemDrop pAbs'>
                    <DropWord id = { item.key } type = { item.type } text = { item.text } />
                  </div>
                )
              })
            }
          </div>

          <div className = 'contentWords d-Flex d-R j-C aI-S wW' id = 'contentWords' >
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <div key = { item.id } className = 'd-Flex d-R j-S aI-C'>
                    <DragWord
                      key = { item.id }
                      id = { item.id }
                      name = { item.text }
                      type = { item.type }
                      img = { item.img }
                      countWords = { this.countWords }
                      colorBg = { item.color }/>
                  </div>
                )
              })
            }
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default DraggableWordBox;
