import React, { Component } from 'react';
// import Header from './Header';
import Footer from './Footer';

import './Content.scss'

// IMPORTAR LOS COMPONENTES DE CADA PÁGINA
import {
  Cover, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10,
  Page11, Page12, Page13, Page14, Page15, Page16, Page17, Page18, Page19, Page20,
  Page21, Page22, Page23, Page24, Page25, Page26, Page27, Page28, Page29, Page30,
  Page31, Page32, InstructionCourse  } from './pages/Pages';

class Content extends Component {
  showContent = () => {
    const { actualIndex, clickNavigation, data, goToPage, menuPosition, checkEnabledUnit, unitActual, nextUnit, updateActualUnit, unitFinal, enableUnit, endActivities, checkEndActivity, checkEndUnit, setScore, updateNextUnit, calificacion } = this.props;
    switch (actualIndex) {
      case 0:
        // COVER
        return (
          <Cover dataPage = { data.coverPage } startCourse = { clickNavigation } />
        );

      case 33:
        // INDICACIONES DE NAVEGACION
        return(
          <InstructionCourse dataPage = { data.instructionPage } startCourse = { clickNavigation } />
        );

      case 1:
        return (
          <Page1 dataPage = { data.page1 } endActivities = { endActivities[1] } checkEndActivity = { checkEndActivity } />
        );

      case 2:
        // MENU
        return (
          <Page2
            dataPage = { data.page2 }
            goToPage = { goToPage }
            menuPosition = { menuPosition }
            unitActual = { unitActual }
            nextUnit = { nextUnit }
            updateActualUnit = { updateActualUnit }
            updateNextUnit =  { updateNextUnit }
            unitFinal = { unitFinal }
            enableUnit = { enableUnit }
          />
        );

      // UNIDAD 1 ---------------------------------------------------------------------------
      case 3:
        return (
          <Page3 dataPage = { data.page3 } endActivities = { endActivities[3] } checkEndActivity = { checkEndActivity } />
        );
      case 4:
        return (
          <Page4 dataPage = { data.page4 } endActivities = { endActivities[4] } checkEndActivity = { checkEndActivity } />
        );
      case 5:
        return (
          <Page5 dataPage = { data.page5 } endActivities = { endActivities[5] } checkEndActivity = { checkEndActivity }/>
        );
      case 6:
        return (
          <Page6 dataPage = { data.page6 } endActivities = { endActivities[6] } checkEndActivity = { checkEndActivity } />
        );
      case 7:
        return (
          <Page8 dataPage = { data.page8 } endActivities = { endActivities[7] } checkEndActivity = { checkEndActivity } />
        );
      case 8:
        return (
          <Page9 dataPage = { data.page9 } endActivities = { endActivities[8] } checkEndActivity = { checkEndActivity } />
        );
      case 9:
        return (
          <Page10 dataPage = { data.page10 } endActivities = { endActivities[9] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } />
        );
      // FIN UNIDAD 1 ---------------------------------------------------------------------------

      // UNIDAD 2 ---------------------------------------------------------------------------
      case 10:
        return (
          <Page7 dataPage = { data.page7 } endActivities = { endActivities[10] } checkEndActivity = { checkEndActivity } />
        );
      case 11:
        return (
          <Page11 dataPage = { data.page11 } endActivities = { endActivities[11] } checkEndActivity = { checkEndActivity } />
        );
      case 12:
        return (
          <Page12 dataPage = { data.page12 } endActivities = { endActivities[12] } checkEndActivity = { checkEndActivity } />
        );
      case 13:
        return (
          <Page13 dataPage = { data.page13 } endActivities = { endActivities[13] } checkEndActivity = { checkEndActivity } />
        );
      case 14:
        return (
          <Page14 dataPage = { data.page14 } endActivities = { endActivities[14] } checkEndActivity = { checkEndActivity } />
        );
      case 15:
        return (
          <Page16 dataPage = { data.page16 } endActivities = { endActivities[15] } checkEndActivity = { checkEndActivity } />
        );
      case 16:
        return (
          <Page15 dataPage = { data.page15 } endActivities = { endActivities[16] } checkEndActivity = { checkEndActivity } />
        );
      case 17:
        return (
          <Page17 dataPage = { data.page17 } endActivities = { endActivities[17] } checkEndActivity = { checkEndActivity } />
        );
      case 18:
        return (
          <Page18 dataPage = { data.page18 } endActivities = { endActivities[18] } checkEndActivity = { checkEndActivity } />
        );
      case 19:
        return (
          <Page19 dataPage = { data.page19 } endActivities = { endActivities[19] } checkEndActivity = { checkEndActivity } />
        );
      case 20:
        return (
          <Page20 dataPage = { data.page20 } endActivities = { endActivities[20] } checkEndActivity = { checkEndActivity } />
        );
      case 21:
        return (
          <Page21 dataPage = { data.page21 } endActivities = { endActivities[21] } checkEndActivity = { checkEndActivity } />
        );
      case 22:
        return (
          <Page22 dataPage = { data.page22 } endActivities = { endActivities[22] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } />
        );
      // FIN UNIDAD 2 ---------------------------------------------------------------------------

      // UNIDAD 3 ---------------------------------------------------------------------------
      case 23:
        return (
          <Page23 dataPage = { data.page23 } endActivities = { endActivities[23] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } />
        );
      // FIN UNIDAD 3 ---------------------------------------------------------------------------

      // UNIDAD 4 ---------------------------------------------------------------------------
      case 24:
        return (
          <Page24 dataPage = { data.page24 } endActivities = { endActivities[24] } checkEndActivity = { checkEndActivity } />
        );
      case 25:
        return (
          <Page25 dataPage = { data.page25 } endActivities = { endActivities[25] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } />
        );
      // FIN UNIDAD 4 ---------------------------------------------------------------------------

      // UNIDAD 5 ---------------------------------------------------------------------------
      case 26:
        return (
          <Page26 dataPage = { data.page26 } endActivities = { endActivities[26] } checkEndActivity = { checkEndActivity } />
        );
      case 27:
        return (
          <Page27 dataPage = { data.page27 } endActivities = { endActivities[27] } checkEndActivity = { checkEndActivity } />
        );
      case 28:
        return (
          <Page29 dataPage = { data.page29 } endActivities = { endActivities[28] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } />
        );
      // FIN UNIDAD 5 ---------------------------------------------------------------------------

      // UNIDAD 6 ---------------------------------------------------------------------------
      case 29:
        return (
          <Page28 dataPage = { data.page28 } endActivities = { endActivities[29] } checkEndActivity = { checkEndActivity } />
        );
      case 30:
        return (
          <Page30 dataPage = { data.page30 } startQuiz = { clickNavigation } />
        );
      case 31:
        return (
          <Page31 dataPage = { data.page31 } endQuiz = { clickNavigation } setScore = { setScore } endActivities = { endActivities[31] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } />
        );
      case 32:
        return (
          <Page32 dataPage = { data.page32 } calificacion = { calificacion } />
        );
      // FIN UNIDAD 6 ---------------------------------------------------------------------------

      default:
        break;
    }
  }

  render() {
    return (
      <div className='content'>
        { /* LLAMADO DE LA FUNCION QUE RETORNA EL CONTENT */ }
        { this.showContent() }

        {/* CARGA DEL COMPONENTE FOOTER */}
        <Footer
          actualIndex = { this.props.actualIndex }
          clickNavigation = { this.props.clickNavigation }
          data = { this.props.data }
          imageFooter = { this.props.imageFooter }
          labelFooter = { this.props.labelFooter }
          bgFooter = { this.props.bgFooter }
          limitNavigation = { this.props.limitNavigation }
          showLastPage = { this.props.showLastPage }
          getPos = { this.getPos }
          endActivities = { this.props.endActivities }/>
      </div>
    );
  }
}

export default Content;
