import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move'
}



const DragWord = ({ name, type, id, countWords, colorBg, posY, posX }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${type} item`);
        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO onDragEnd = { countWords }

        document.getElementById('dragWord-' + id).classList.add('dNone');
        document.getElementById('boxDrop-' + type).classList.add('WordDropped');
        document.getElementById('boxDrop-' + type).style.backgroundColor = colorBg;
        document.getElementById('boxDrop-' + type).innerHTML = '<h1 class = "">' + type + '</h1>';

        document.getElementById('audioNotification').src = 'audio/check.mp3';
        document.getElementById('audioNotification').play();
      } else {
        document.getElementById('audioNotification').src = 'audio/error.mp3';
        document.getElementById('audioNotification').play();
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const dragStart = (e) => {
    document.getElementById(e.currentTarget.id).classList.add('onDrag');
  }

  const dragOver = (e) => {
    e.stopPropagation();
  }

  const dragEnd = (e) => {
    document.getElementById(e.currentTarget.id).classList.remove('onDrag');
    countWords();
  };

  const opacity = isDragging ? 0.2 : 1

  return (
    <div
      onDragStart = { dragStart }
      onDragOver = { dragOver }
      onDragEnd = { dragEnd }
      className = { 'dragWord d-Flex j-C aI-C pAbs'}
      ref = { drag }
      style = {{ ...style, 'backgroundColor': colorBg, 'top': posY, 'left': posX }}
      id = {'dragWord-' + id } >
      <h1 className = '' dangerouslySetInnerHTML = {{ __html: type }}></h1>
    </div>
  )
}

export default DragWord;
