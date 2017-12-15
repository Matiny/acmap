import React from 'react';
import ReactDOM from 'react-dom';


export default class Page extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
      location: this.props.location.state.game[1],
      character: this.props.location.state.game[0],
      view: true
   }
  }

  switchGame = (location, character) => {
    this.setState({location, character});
  }

  charView = () => {
    this.setState({ view: true });
  }

  locView = () => {
    this.setState({ view: false });
  }

  render() {

    //Set the title text based off the chosen view
    let title = this.state.view?
    this.state.character:
    this.state.location;

    let selectLine = this.state.view?
    {left: `41%`} : {left: `56.25%`}

    return(
      <section
        className="page"
        style={{backgroundImage: `url(
          ${require(`./images/bgs/${this.state.location}.jpg`)}
        )`}}>

      {/*Sets the image colors based off the location state*/}

        <span className="ac1"
            onClick={() => {this.switchGame("Israel", "Altair")}}>

          <img src={
            require(`./images/svg/${
              this.state.location == "Israel"?
              "red" : "white"
            }logo0.svg`)
          } alt=""/>
        </span>
        <span className="ac2"
            onClick={() => {this.switchGame("Italy", "Ezio")}}>

          <img src={
            require(`./images/svg/${
              this.state.location == "Italy"?
              "red" : "white"
            }logo1.svg`)
          } alt=""/>
        </span>
        <span className="ac3"
          onClick={() => {this.switchGame("America", "Connor")}}>
          <img src={
            require(`./images/svg/${
              this.state.location == "America"?
              "red" : "white"
            }logo2.svg`)
          } alt=""/>
        </span>
        <span className="ac4"
          onClick={() => {this.switchGame("Bahamas", "Edward")}}>
          <img src={
            require(`./images/svg/${
              this.state.location == "Bahamas"?
              "red" : "white"
            }logo3.svg`)
          } alt=""/>
        </span>
        <span className="acr"
          onClick={() => {this.switchGame("Canada", "Shay")}}>

          <img src={
            require(`./images/svg/${
              this.state.location == "Canada"?
              "red" : "white"
            }logo4.svg`)
          } alt=""/>
        </span>
        <span className="acu"
          onClick={() => {this.switchGame("France", "Arno")}}>

          <img src={
            require(`./images/svg/${
              this.state.location == "France"?
              "red" : "white"
            }logo5.svg`)
          } alt=""/>
        </span>
        <span className="acs"
          onClick={() => {this.switchGame("England", "Jacob & Evie")}}>
          <img src={
            require(`./images/svg/${
              this.state.location == "England"?
              "red" : "white"
            }logo6.svg`)
          } alt=""/>
        </span>
        <span className="aco"
          onClick={() => {this.switchGame("Egypt", "Bayek & Aya")}}>
          <img src={
            require(`./images/svg/${
              this.state.location == "Egypt"?
              "red" : "white"
            }logo7.svg`)
          } alt=""/>
        </span>

        {/*The rest of the images*/}

        <div className="title-area">
          <img src={require("./images/title-area.png")} alt="" />
          <p>{title.toUpperCase()}</p>
        </div>

        {this.state.view?
          <img src=
            {require(`./images/jpg/${this.state.character}.jpg`)}
            alt="" className="character"/>:null}


        <footer className="views">
          <p id="one"
            onClick={this.charView}>CHARACTER VIEW</p>
          <p id="two"
            onClick={this.locView}>LOCATION VIEW</p>
        </footer>
        <hr className="baseline"/>
        <hr className="selectline" style={selectLine}/>
      </section>
    )
  }
}
