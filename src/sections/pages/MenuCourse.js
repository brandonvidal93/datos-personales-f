import React, { Component } from 'react';

import './MenuCourse.scss';

class MenuCourse extends Component {
  state = {
    unitActual: this.props.unitActual,
    nextUnit: this.props.nextUnit,
    positionMenu: this.props.menuPosition,
  }

  componentDidMount() {
    console.log(this.state.unitActual);
    for (var i = 0; i < 6; i++) {
      document.getElementsByClassName('buttonMenu')[i].classList.remove('animation');
    }
    document.getElementById('btnUnit-' + this.state.nextUnit).classList.add('animation');
  }

  // FUNCION PARA IR A LA UNIDAD
  goToUnit = e => {
    const { dataPage, goToPage, updateActualUnit, updateNextUnit } = this.props;

    let numIdButton = e.currentTarget.id.substring(8);

    updateActualUnit(numIdButton);
    updateNextUnit(parseInt(numIdButton) + 1);

    this.setState({ nIdButton: parseInt(numIdButton) + 1 });

    switch (parseInt(numIdButton)) {
      case 1:
        goToPage(dataPage.Units[0].goTo);
        break;
      case 2:
        goToPage(dataPage.Units[1].goTo);
        break;
      case 3:
        goToPage(dataPage.Units[2].goTo);
        break;
      case 4:
        goToPage(dataPage.Units[3].goTo);
        break;
      case 5:
        goToPage(dataPage.Units[4].goTo);
        break;
      case 6:
        goToPage(dataPage.Units[5].goTo);
        break;
      default:
    }
  }

  render() {
    const { Units, enableUnit, dataPage } = this.props;
    // const { Units, unitFinal, enableUnit, dataPage } = this.props;
    return (
      <div className = 'menuContent pAbs' style = { {'backgroundImage': "url(" + dataPage.background.bg + ")"} }>
        <div className = 'itemsContent'>
          {
            Units.map(unit =>
              <div
                className = { 'buttonTheme pAbs ' + (enableUnit[unit.unit - 1] === false ? 'disabledButton' : '') }
                key = { unit.unit }
                id = { 'btnBoxUnit-' + (unit.unit) }
                style={ {'width': unit.bgPos.width, 'height': unit.bgPos.height, 'top': unit.bgPos.posY, 'left': unit.bgPos.posX, 'backgroundImage': "url(" + unit.imgBg + ")"} } >

                <button
                  id = { 'btnUnit-' + (unit.unit) }
                  onClick = { this.goToUnit }
                  className = { 'btnStyle buttonMenu' }
                  style={ {'top': unit.btnPos.posY, 'left': unit.btnPos.posX} } >
                  <img
                    alt="Imagen"
                    className=""
                    src={ unit.imgBnt }
                  />
                </button>

              </div>
            )
          }
        </div>

      </div>
    );
  }
}

export default MenuCourse;
