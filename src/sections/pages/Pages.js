import React, { Component } from 'react';
import MenuCourse from './MenuCourse';
import Instruction from '../../components/Instruction';
import InteractiveSubtitle from '../../components/InteractiveSubtitle';
import InteractiveSubtitle2 from '../../components/InteractiveSubtitle2';
import InteractiveAudio from '../../components/InteractiveAudio';
import InteractiveFlip from '../../components/InteractiveFlip';
import InteractiveCircle from '../../components/InteractiveCircle';
import InteractiveTimeLine from '../../components/InteractiveTimeLine';
import ModalVideo from '../../components/ModalVideo';
import ModalVideo2 from '../../components/ModalVideo2';
import DraggableWordBox from '../../components/DraggableWordBox';
import DraggableDot from '../../components/DraggableDot';
import DraggableDot3 from '../../components/DraggableDot3/DraggableDot';
import DraggableCircle from '../../components/DraggableCircle';
import DraggableLabel from '../../components/DraggableLabel';
import DraggableDocument from '../../components/DraggableDocument';
import DraggableIcon from '../../components/DraggableIcon/DraggableIcon';
import DraggableWords from '../../components/DraggableWords/DraggableWords';
import DraggableFV from '../../components/DraggableFV';
import ModalInfo from '../../components/ModalInfo';
import ModalInfo3 from '../../components/ModalInfo3';
import ModalInfo4 from '../../components/ModalInfo4';
import ModalInfo4Act3 from '../../components/ModalInfo4Act3';
import ModalInfo5 from '../../components/ModalInfo5';
import ModalInfo6 from '../../components/ModalInfo6';
import ModalInfo7 from '../../components/ModalInfo7';
import ModalInfo7Rec from '../../components/ModalInfo7Rec';
import InteractivePath from '../../components/InteractivePath';
import InteractivePath2 from '../../components/InteractivePath2';
import ActPage19 from '../../components/ActPage19';
import Slide from '../../components/Slide';
import Quiz from '../../components/Quiz';

import './Pages.scss';

class Cover extends Component {
  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL CURSO
  startCourse = e => {
    e.preventDefault();
    this.props.startCourse(e.target.id);
  }

  render() {
    const { dataPage } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return (
      <div className={ (dataPage.type) + ' pL-4 animated fadeIn' } style = { style }>
        <div className="c-45 dF-C-cs">
          {
            dataPage.logoCourse ? <img
              alt = 'Imagen Corporativa'
              className = 'imageLogo mT-7 mL-1 mB-5'
              src = { dataPage.logoCourse }/> : null
          }
          {
            dataPage.title ? <h1 className = 'mT-7 mL-3 mB-05 fw-7 color-22 F2' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1> : null
          }
          {
            dataPage.subTitle ? <h3 className = 'mB-05 mL-3' dangerouslySetInnerHTML = {{ __html: dataPage.subTitle }}></h3> : null
          }
          {
            dataPage.module ? <h3 className = 'mB-1 mL-3' dangerouslySetInnerHTML = {{ __html: dataPage.module }}></h3> : null
          }
          {
            dataPage.courseName ? <p className = 'mB-1 mL-3' dangerouslySetInnerHTML = {{ __html: dataPage.courseName }}></p> : null
          }

          <button
            className = 'buttonStart pT-05 pB-05 mL-3'
            id = 'btnStart'
            onClick = { this.startCourse }>
            { dataPage.buttonStart }
          </button>

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
        </div>

      </div>
    );
  }
}

class Page1 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(1, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'c-10 animated fadeIn'>
          <div>
            <img alt = 'Imagen' className = 'imageNPC pAbs' src = { dataPage.resources.img2 }/>
          </div>
          <div>
            <img alt = 'Imagen' className = 'mT-1 mL-4' src = { dataPage.resources.img1 }/>
          </div>
          <div className = 'mB-2 mL-4'>
            <InteractiveSubtitle dataPage={ dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>
      </div>
    )
  }
}

class Page2 extends Component {
  render() {
    const { dataPage, goToPage, menuPosition, unitActual, nextUnit, updateActualUnit, updateNextUnit, unitFinal, enableUnit } = this.props;
    const { Units } = this.props.dataPage;
    return (
      <div className = { 'pageContent ' + (dataPage.type) + ''}>
        { /* LLAMADO DEL COMPONENTE MENU */ }
        <MenuCourse
          dataPage = { dataPage }
          goToPage = { goToPage }
          menuPosition = { menuPosition }
          Units = { Units }
          unitActual = { unitActual }
          nextUnit = { nextUnit }
          updateActualUnit = { updateActualUnit }
          updateNextUnit = { updateNextUnit }
          unitFinal = { unitFinal }
          enableUnit = { enableUnit } />

          <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page3 extends Component {
  state = {
    showModal: false,
    showInfo: 0
  }

  handleClick = (infoContent) => {
    this.setState({
      showModal: !this.state.showModal,
      showInfo: parseInt(infoContent)
    });

    document.querySelector('.footer').classList.add('dNone');
  }

  hideModal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });

    document.querySelector('.footer').classList.remove('dNone');
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(3, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <ModalInfo dataPage = { dataPage.multimedia.content } hideModal = { this.hideModal } showInfo = { this.state.showInfo } showModal = { this.state.showModal }/>

        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <p className = 'mL-1 mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <DraggableWordBox multimedia = { dataPage.multimedia } handleClick = { this.handleClick  } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page4 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(4, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
          <p className = 'mL-1 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <DraggableCircle multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page5 extends Component {
  state = {
    showModal: false,
    showInfo: 0
  }

  handleClick = () => {
    this.setState({
      showModal: !this.state.showModal,
      showInfo: 0
    });

    document.querySelector('.footer').classList.add('dNone');
  }

  hideModal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });

    document.querySelector('.footer').classList.remove('dNone');
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(5, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <ModalInfo3 dataPage = { dataPage.multimedia.content } hideModal = { this.hideModal } showInfo = { this.state.showInfo } showModal = { this.state.showModal }/>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
          <p className = 'mL-1 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <DraggableDot multimedia = { dataPage.multimedia } handleClick = { this.handleClick  } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page6 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(6, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>

          <InteractiveFlip dataPage = { dataPage.multimedia } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page7 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(10, end);
  }

  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;

    return(
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo2 dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'animated fadeIn mL-3 mT-2 d-Flex d-C'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <p className = 'mL-1 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <div className = 'd-Flex j-C aI-C'>
            <button className = 'buttonVideo mR-6' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page8 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(7, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
          <p className = 'mL-1 mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <DraggableLabel multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page9 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(8, end);
  }

  render() {
    const { dataPage } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.resources.bg + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 360
    }

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <div className = 'd-Flex d-C j-S aI-S'>
            <div className = 'c-95'>
              <h3 className = 'mL-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
            </div>

            <div className = 'c-8 mL-1' style = {{ ...style }} >
              <div className = 'scrollBox-1 mT-2 mL-4 pB-1 pT-1'>
                <h3 className = 'mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.subTitle }}></h3>
                <p className = 'mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

                <div className = 'd-Flex j-C aI-C mB-2'>
                  <img alt = 'Imagen' className = 'imageCenter' src = { dataPage.resources.img1 }/>
                </div>

                <ModalInfo4 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
              </div>
            </div>
          </div>

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page10 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    console.log('Recibí: ' + end);
    checkEndActivity(9, end);
  }

  componentDidMount() {
    this.props.checkEndUnit(0);
    this.props.checkEnabledUnit(1);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <div className = 'd-Flex d-C j-S aI-S'>
            <div className = 'c-95'>
              <h3 className = 'mL-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
            </div>

            <div className = 'c-8 mL-1'>
              <ModalInfo4Act3 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
            </div>
          </div>

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page11 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(11, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>

          <div className = 'c-10 d-Flex j-C aI-C'>
            <InteractiveAudio dataPage={ dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>
      </div>
    )
  }
}

class Page12 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(12, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
          <p className = 'mL-1 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <InteractiveCircle dataPage = { dataPage } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page13 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(13, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
          <p className = 'mL-1 mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <DraggableFV multimedia = { dataPage.multimedia } handleClick = { this.handleClick } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page14 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(14, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalInfo5 dataPage = { dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <div className = 'd-Flex j-S aI-S'>
            <div className = 'c-35 mL-1'>
              <h3 className = 'mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
              <p className = 'mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>
              <img alt = 'Imagen' className = 'imageCenter' src = { dataPage.img }/>
            </div>

            <div className = 'c-65 pL-3'>
              <div className = 'd-Flex j-C aI-C'>
                <button className = 'buttonVideo' onClick = { this.showModal }>
                  <img
                    alt = 'Imagen Corporativa'
                    className = 'imageFooter'
                    src = { dataPage.boxInfo.imgBg }/>
                </button>
              </div>
            </div>
          </div>

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page15 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    // <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
    checkEndActivity(16, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <div className = 'd-Flex d-C j-S aI-S'>
            <div className = 'c-35 mL-1 mT-2 mB-2'>
              <p className = 'mL-1' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>
            </div>

            <div className = 'c-95 pL-3'>
              <InteractivePath2 dataPage = { dataPage.multimedia } isEnded = { this.isEnded } />
            </div>
          </div>

          <Instruction dataPage = { dataPage.instruction } />

          <p className = 'mL-7 mT-2 c-5' dangerouslySetInnerHTML = {{ __html: dataPage.nota }}></p>
        </div>
      </div>
    )
  }
}

class Page16 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(15, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>

          <DraggableDocument multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page17 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(17, end);
  }

  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;

    return(
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'animated fadeIn mL-3 mT-2 d-Flex d-C'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
          <p className = 'mL-1 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <div className = 'd-Flex j-C aI-C'>
            <button className = 'buttonVideo mR-6' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page18 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(18, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>

          <div className = 'c-10 d-Flex j-C aI-C'>
            <InteractiveAudio dataPage={ dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>
      </div>
    )
  }
}

class Page19 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(19, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
          <p className = 'mL-1 mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <ActPage19 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page20 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(20, end);
  }

  // <div className = 'd-Flex j-S aI-S'>
  //   <div className = 'c-35 mL-1'>
  //     <h3 className = 'mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
  //     <p className = 'mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>
  //
  //     <button className = 'buttonModal-2' onClick = { this.showModal }>Actividad</button>
  //   </div>
  //
  //   <div className = 'c-65 pL-3'>
  //     <img alt = 'Imagen' className = '' src = { dataPage.resources.img1 }/>
  //   </div>
  // </div>

  // {/* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
  // { this.state.openModal !== false ? <ModalInfo6 multimedia = { dataPage.multimedia } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }


  render() {
    const { dataPage } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.resources.bg + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 360
    }

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <div className = 'c-95'>
            <h3 className = 'mL-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
          </div>

          <div className = 'c-8 mL-1 pT-2' style = {{ ...style }} >
            <div className = 'scrollBox-1 mL-4 pB-1'>
              <div className = 'd-Flex j-C aI-C'>
                <img alt = 'Imagen' className = 'imageCenter c-10 pT-2 pB-2 pR-2 pL-2' src = { dataPage.resources.img2 }/>
              </div>

              <div className = 'd-Flex j-C aI-C mB-1'>
                <img alt = 'Imagen' className = 'imageCenter' src = { dataPage.resources.img1 }/>
              </div>

              <ModalInfo6 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
            </div>
          </div>

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page21 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(21, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <div className = 'd-Flex j-S aI-S'>
            <div className = 'c-45 mL-1 mT-2'>
              <h3 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
              <p className = 'mB-2 c-9' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>
            </div>

            <div className = 'c-5 mT-2'>
              <InteractivePath dataPage = { dataPage.multimedia } isEnded = { this.isEnded } />
            </div>
          </div>

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page22 extends Component {
  state = {
    openModal: false,
    openModal2: false,
    openModal3: false,
    count: 0
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      count: this.state.count + 1
    });
    console.log(this.state.count);

    if (this.state.count >= 2) {
      this.isEnded(true);
    }
  }

  showModal2 = () => {
    this.setState({
      openModal2: !this.state.openModal2,
      count: this.state.count + 1
    });
    console.log(this.state.count);

    if (this.state.count >= 2) {
      this.isEnded(true);
    }
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(22, end);
  }

  showModal3 = () => {
    this.setState({
      openModal3: !this.state.openModal3
    });
  }

  componentDidMount() {
    this.props.checkEndUnit(1);
    this.props.checkEnabledUnit(2);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalInfo7 dataModal={ dataPage.boxInfo[0] } showModal={ this.showModal } swModal = { this.showModal3 } count = { this.state.count } /> : null }
        { this.state.openModal2 !== false ? <ModalInfo7 dataModal={ dataPage.boxInfo[1] } showModal={ this.showModal2 } swModal = { this.showModal3 } count = { this.state.count } /> : null }
        { this.state.openModal3 !== false ? <ModalInfo7Rec dataModal={ dataPage.boxInfo[2] } showModal={ this.showModal3 } /> : null }

        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <div className = 'd-Flex d-C j-S aI-S'>
            <div className = 'c-8 mL-1'>
              <h3 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
              <p className = 'mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>
            </div>

            <div className = 'c-9 mT-3'>
              <div className = 'd-Flex j-C aI-C'>
                <button className = 'buttonVideo mR-2 ' onClick = { this.showModal }>
                  <img
                    alt = 'Imagen Corporativa'
                    className = 'imageFooter'
                    src = { dataPage.boxInfo[0].imgBg }/>
                </button>
                <button className = 'buttonVideo ' onClick = { this.showModal2 }>
                  <img
                    alt = 'Imagen Corporativa'
                    className = 'imageFooter'
                    src = { dataPage.boxInfo[1].imgBg }/>
                </button>
              </div>
            </div>
          </div>

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page23 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(23, end);
  }

  componentDidMount() {
    this.props.checkEndUnit(2);
    this.props.checkEnabledUnit(3);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <p className = 'mL-1 mB-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <DraggableIcon multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page24 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(24, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <p className = 'mL-1 mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <DraggableWords multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page25 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(25, end);
  }

  componentDidMount() {
    this.props.checkEndUnit(3);
    this.props.checkEnabledUnit(4);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
          <p className = 'mL-1 mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <DraggableFV multimedia = { dataPage.multimedia } handleClick = { this.handleClick } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page26 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(26, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <p className = 'mL-1 mT-2 mB-1 c-65' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <InteractiveTimeLine dataPage = { dataPage } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page27 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(27, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>

          <div className = 'mL-1 c-9'>
            <Slide multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>

        </div>
      </div>
    )
  }
}

class Page28 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(29, end);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <p className = 'mL-1 mB-3 c-5' dangerouslySetInnerHTML = {{ __html: dataPage.text  }}></p>

          <div className = 'mB-2'>
            <InteractiveSubtitle2 dataPage={ dataPage.multimedia } isEnded = { this.isEnded } />
          </div>

          <div className = 'mL-1 d-Flex d-R j-S aI-C wW c-7'>
            <div className = 'd-Flex j-S aI-C c-4 mR-1 mB-1'>
              <img alt = 'Imagen' className = 'mR-1' src = { dataPage.resources.img3 }/>
              <p dangerouslySetInnerHTML = {{ __html: dataPage.link4.text  }}></p>
            </div>

            <div className = 'd-Flex j-S aI-C c-4 mB-1'>
              <a className = 'mR-1' href = { dataPage.link2.route } target = '_blank' rel='noopener noreferrer'><img alt = 'Imagen' className = '' src = { dataPage.resources.img2 }/></a>
              <p dangerouslySetInnerHTML = {{ __html: dataPage.link2.text  }}></p>
            </div>

            <div className = 'd-Flex j-S aI-C c-4 mR-1'>
              <a className = 'mR-1' href = { dataPage.link.route } target = '_blank' rel='noopener noreferrer'><img alt = 'Imagen' className = '' src = { dataPage.resources.img2 }/></a>
              <p dangerouslySetInnerHTML = {{ __html: dataPage.link.text  }}></p>
            </div>

            <div className = 'd-Flex j-S aI-C c-4'>
              <a className = 'mR-1' href = { dataPage.link3.route } target = '_blank' rel='noopener noreferrer'><img alt = 'Imagen' className = '' src = { dataPage.resources.img2 }/></a>
              <p dangerouslySetInnerHTML = {{ __html: dataPage.link3.text  }}></p>
            </div>
          </div>

          <Instruction dataPage = { dataPage.instruction } />

          <img alt = 'Imagen' className = 'imageNPC-2 pAbs' src = { dataPage.resources.img1 }/>
        </div>
      </div>
    )
  }
}

class Page29 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(28, end);
  }

  componentDidMount() {
    this.props.checkEndUnit(4);
    this.props.checkEnabledUnit(5);
  }

  // { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
  // { this.state.openModal !== false ? <ModalInfo8 dataPage = { dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
          <p className = 'mL-1 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

          <DraggableDot3 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page30 extends Component {
  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL QUIZ
  startQuiz = e => {
    e.preventDefault();
    this.props.startQuiz(e.target.id);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mT-7'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <img alt = 'Imagen' className = 'imageNPC-3 pAbs' src = { dataPage.img }/>

          <div className = 'c-5 mL-1 mT-2 mB-2'>
            <h3 className = 'mL-1 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>
            <p className = 'mL-1 mB-2' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>

            <button
              className = 'buttonQuiz pT-1 pB-1 pL-2 pR-2 mL-1'
              id = 'btnQuiz'
              onClick = { this.startQuiz }>
              { dataPage.button }
            </button>
          </div>

          <Instruction dataPage = { dataPage.instruction } />

        </div>
      </div>
    )
  }
}

class Page31 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(31, end);
  }

  componentDidMount() {
    this.props.checkEndUnit(5);
    this.props.checkEnabledUnit(6);
  }

  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL QUIZ
  endQuiz = (buttonPress) => {
    // e.preventDefault();
    this.props.endQuiz(buttonPress);
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = { 'pageContent'}>
        <div className = 'animated fadeIn mL-3 mT-2'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1'>
            <h3
              className = 'textHeader'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h3>
            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <h3 className = 'mL-1 mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3>

          <Quiz multimedia = { dataPage.multimedia } isEnded = { this.isEnded } endQuiz = { this.endQuiz } setScore = { this.props.setScore } />

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    )
  }
}

class Page32 extends Component {
  render() {
    const { dataPage, calificacion } = this.props;
    console.log('Calificación: ' + calificacion);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return (
      <div className={ (dataPage.type) + ' pL-4' } style = { style }>
        <div className="c-5 d-Flex d-C aI-C j-C">
          {
            dataPage.logoCourse ? <img
              alt = 'Imagen Corporativa'
              className = 'imageLogo'
              src = { dataPage.logoCourse }/> : null
          }
          {
            dataPage.message.success.title ? <h1 className = 'mB-2 mR-2 fw-7 color-22 F2-5 tCenter' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.title : dataPage.message.error.title }}></h1> : null
          }
          {
            dataPage.message.success.module ? <h3 className = '' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.module : dataPage.message.error.module }}></h3> : null
          }
          {
            dataPage.message.success.courseName ? <p className = 'mB-2 mR-2 tCenter' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.courseName : dataPage.message.error.courseName }}></p> : null
          }
          {
            dataPage.message.success.subTitle ? <h3 className = 'mR-2 tCenter F2-5' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.subTitle : dataPage.message.error.subTitle }}></h3> : null
          }

          <p
            className = 'buttonEnd mT-2 pT-05 pB-05 pR-1 pL-1'
            id = 'btnEnd'>
            { dataPage.buttonEnd }
          </p>

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
        </div>

      </div>
    );
  }
}

class InstructionCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 0,
      showModal: true
    }
  }

  componentDidMount() {
    document.querySelector('.footer').classList.add('dNone');
  }

  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL CURSO
  startCourse = e => {
    e.preventDefault();
    this.props.startCourse(e.target.id);
  }

  // MOSTRAR ITEM
  showItem = e => {
    e.preventDefault();

    let numId = parseInt(e.target.id.substring(12, 13));

    this.setState({
      item: numId
    });
  }

  // OCULTAR MODAL
  hideModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });

    document.querySelector('.footer').classList.remove('dNone');
  }

  render() {
    const { dataPage } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.resources.bg + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 420
    }

    return (
      <div className = { 'pageContent'}>
        {
          this.state.showModal ?
          <div className = 'modalInstruction'>
            <div className = 'bgCircle dF-R-cc showModal'>
              <div className = 'boxInfo d-C d-Flex j-C aI-C pT-2 pB-2 pL-2 pR-2'>
                <hr className = 'mB-1 line-5'></hr>
                <p className = 'tCenter blanco mB-1'>
                  Antes de iniciar, te invitamos a hacer el recorrido de navegación dando clic en el siguiente botón.
                </p>
                <button
                  className = 'buttonClose blanco'
                  onClick = { this.hideModal } >
                  Instructivo
                </button>
              </div>
            </div>
          </div> :
          null
        }

        <div className = 'c-10 animated fadeIn'>
          <div className = 'c-3 mB-3'>
            <h2 className = 'mT-4 mL-4 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2>
          </div>


          <div className = 'c-10 d-Flex d-C j-E aI-C' style = {{ ...style, 'paddingTop': 18, 'paddingLeft': 270, 'paddingRight': 270, 'paddingBottom': 130 }} >
            <div className = 'boxContent d-Flex d-C j-C aI-C pT-1'>
              {
                (this.state.item !== dataPage.information.length - 1) ?
                dataPage.information.map((item, i) => {
                  return(
                    <div
                      className = { 'd-Flex d-C j-C aI-C animated fadeIn ' + (this.state.item === i ? '' : 'dNone') }
                      key = { i }>
                      {
                        item.img1 ? <img
                          alt = 'Imagen'
                          className = 'mB-025'
                          src = { item.img1 }/> : null
                      }
                      {
                        item.text1 ? <p className = 'tCenter c-7 mB-025' dangerouslySetInnerHTML = {{ __html: item.text1 }}></p> : null
                      }
                      {
                        item.img2 ? <img
                          alt = 'Imagen'
                          className = 'mB-025'
                          src = { item.img2 }/> : null
                      }
                    </div>
                  )
                }) :
                <div className = { 'c-10 d-Flex j-C aI-C' }>
                  <button
                    className = 'buttonStart'
                    id = 'btnInstruction'
                    onClick = { this.startCourse }>
                    Continuar
                  </button>
                </div>
              }
            </div>
            <div className = 'buttonBoxInst d-Flex j-C aI-C'>
              {
                dataPage.information.map((button, i) => {
                  return(
                    <div
                      className = { 'btnItemInst ' + (this.state.item === i ? 'btnActive': '') }
                      id = { 'btnItemInst-' + i }
                      key = { i }
                      onClick = { this.showItem } >
                    </div>
                  )
                })
              }
            </div>
          </div>

          <Instruction dataPage = { dataPage.instruction } />
        </div>
      </div>
    );
  }
}

export {
  Cover, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10,
  Page11, Page12, Page13, Page14, Page15, Page16, Page17, Page18, Page19, Page20,
  Page21, Page22, Page23, Page24, Page25, Page26, Page27, Page28, Page29, Page30,
  Page31, Page32, InstructionCourse
};
