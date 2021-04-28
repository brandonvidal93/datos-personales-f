import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move'
}

const dragStart = (e) => {
  document.getElementById(e.currentTarget.id).classList.add('onDrag');
}

const dragOver = (e) => {
  e.stopPropagation();
}

const dragEnd = (e) => {
  document.getElementById(e.currentTarget.id).classList.remove('onDrag');
};

const DragWord = ({ name, type, id, countWords, colorBg, img }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type, id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // console.log('Recibo del Drop el name: ' + dropResult.name);

        let numItem = parseInt(item.id);
        // let numItem = parseInt(dropResult.name.substring(0));
        // console.log('parseInt: ' + numItem);
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${type} item`);

        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR LA INFO
        document.getElementById('dragWord-' + numItem).classList.add('dNone');
        document.getElementById('itemInfo-' + numItem).classList.remove('dNone');

        document.getElementById('audioNotification').src = 'audio/check.mp3';
        document.getElementById('audioNotification').play();

        countWords();
      } else {
        document.getElementById('audioNotification').src = 'audio/error.mp3';
        document.getElementById('audioNotification').play();
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.4 : 1

  return (
    <div
      className = { 'dragWord d-Flex j-C aI-C'}
      ref = { drag }
      style = {{ ...style, 'backgroundColor' : colorBg }}
      id = {'dragWord-' + id }
      onDragStart = { dragStart }
      onDragOver = { dragOver }
      onDragEnd = { dragEnd } >
      <h1 className = 'labelDrag tCenter' dangerouslySetInnerHTML = {{ __html: name }} ></h1>
    </div>
  )
}

export default DragWord;
