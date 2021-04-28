import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalVideo2.scss';

library.add(fas, fab, far);

class ModalVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ended: false,
      time: 0
    }
  }

  componentWillReceiveProps() {
    this.setState({ time: this.video.currentTime });
  }

  componentDidMount() {
    this.video.addEventListener("timeupdate", () => {

      if (this.video !== null) {
        let time = this.video.currentTime;
        if (time !== this.state.time) { this.setState({ time: Math.round(time) }); }
      }
    });

    this.video.addEventListener("ended", () =>  {
        this.setState({ ended: true })
        // console.log(this.state.ended);
        this.props.isEnded(true);
        // AQUI VA LA MODAL PARA FINALIZAR
    });

    document.querySelector('.footer').classList.add('dNone');
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER
  hideModal = () => {
    document.querySelector('.footer').classList.remove('dNone');
    this.props.showModal();
  }

  render() {
    const { dataModal } = this.props;
    return (
      <div className = 'modalVideo2 animated fadeIn'>
        <div className = 'showModal'>
          <video
            allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            controls
            autoPlay
            className = { 'iframeVideo' }
            frameBorder = "0"
            height = "315"
            style = {{ 'opacity': this.state.ended === false ? 1 : 0 }}
            src = { dataModal.modal.urlVideo }
            title = ''
            width = "560"
            ref = { (video) => { this.video = video } } />

          {
            this.state.ended !== false ?
            <div className = { 'pAbs endInfo animated fadeIn' }>
              <p className = 'tCenter' dangerouslySetInnerHTML = {{ __html: dataModal.modal.text }} ></p>
              <button
                className = 'buttonClose'
                onClick = { this.hideModal }
                >
                <span className = 'fa-layers fa-fw iconButton' >
                  <FontAwesomeIcon icon="circle" />
                  <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                </span>
              </button>
            </div> :
            null
          }


        </div>
      </div>
    );
  }
}

export default ModalVideo;

// { dataModal.modal.closedModal === true ?
//   <button
//     className = 'buttonClose'
//     onClick = { this.hideModal }
//     style = {{ 'opacity': this.state.ended === false ? 1 : 0 }}
//     >
//     <span className = 'fa-layers fa-fw iconButton' >
//       <FontAwesomeIcon icon="circle" />
//       <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
//     </span>
//   </button> : null
// }
