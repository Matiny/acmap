import React, { Component } from 'react';
import logo from './images/svg/abstergo.svg';
import './styles.min.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { BrowserRouter, Route, Link } from 'react-router-dom';


import Pages from './pages';

import one from './images/svg/redlogo0.svg'
import two from './images/svg/redlogo1.svg'
import three from './images/svg/redlogo2.svg'
import four from './images/svg/redlogo3.svg'
import rogue from './images/svg/redlogo4.svg'
import unity from './images/svg/redlogo5.svg'
import syn from './images/svg/redlogo6.svg'
import origins from './images/svg/redlogo7.svg'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 37.5, lng: -26.275 }}
  >
    <Marker
      icon={one}
      position={{ lat: 31.264, lng: 35.11}}
      onClick={() => props.pickGameFunc("ac1")}>
      {props.mapchoice == "ac1" ? <InfoWindow
        onCloseClick={() => props.pickGameFunc("")}>
        <Link to={{
          pathname: '/game',
          state: { game: ["Altair", "Israel"] }
        }}>
          <div>
            <img src={require("./images/jpg/ac1-icon.jpg")} alt="" className="picture"/>
            <p className="info">Assassin's Creed 1</p>
          </div>
        </Link>

      </InfoWindow>:null}

    </Marker>

    <Marker
      icon={one}
      position={{ lat: 41.5, lng: 15}}
      onClick={() => props.pickGameFunc("ac2")}>
      {props.mapchoice == "ac2" ? <InfoWindow
        onCloseClick={() => props.pickGameFunc("")}>
        <Link to={{
          pathname: '/game',
          state: { game: ["Ezio", "Italy"] }
        }}>
        <div>
          <img src={require("./images/jpg/ac2-icon.jpg")} alt="" className="picture"/>
          <p className="info">Assassin's Creed 2</p>
        </div>
        </Link>

      </InfoWindow>:null}

    </Marker>

    <Marker
      icon={one}
      position={{ lat: 42, lng: -75.5}}
      onClick={() => props.pickGameFunc("ac3")}>
      {props.mapchoice == "ac3" ? <InfoWindow
        onCloseClick={() => props.pickGameFunc("")}>
        <Link to={{
          pathname: '/game',
          state: { game: ["Connor", "America"] }
        }}>
        <div>
          <img src={require("./images/jpg/ac3-icon.jpg")} alt="" className="picture"/>
          <p className="info">Assassin's Creed 3</p>
        </div>
        </Link>
      </InfoWindow>:null}

    </Marker>

    <Marker
      icon={one}
      position={{ lat: 24.73, lng: -77.565}}
      onClick={() => props.pickGameFunc("ac4")}>
      {props.mapchoice == "ac4" ? <InfoWindow
        onCloseClick={() => props.pickGameFunc("")}>
        <Link to={{
          pathname: '/game',
          state: { game: ["Edward", "Bahamas"] }
        }}>
        <div>
          <img src={require("./images/jpg/ac4-icon.jpg")} alt="" className="picture"/>
          <p className="info">Assassin's Creed 4</p>
        </div>
        </Link>
      </InfoWindow>:null}

    </Marker>

    <Marker
      icon={one}
      position={{ lat: 44.384, lng: -63.57}}
      onClick={() => props.pickGameFunc("acr")}>
      {props.mapchoice == "acr" ? <InfoWindow
        onCloseClick={() => props.pickGameFunc("")}>
        <Link to={{
          pathname: '/game',
          state: { game: ["Shay", "Canada"] }
        }}>
        <div>
          <img src={require("./images/jpg/acr-icon.jpg")} alt="" className="picture"/>
          <p className="info">Assassin's Creed Rogue</p>
        </div>
        </Link>
      </InfoWindow>:null}

    </Marker>

    <Marker
      icon={one}
      position={{ lat: 46.6, lng: 2.79}}
      onClick={() => props.pickGameFunc("acu")}>
      {props.mapchoice == "acu" ? <InfoWindow
        onCloseClick={() => props.pickGameFunc("")}>
        <Link to={{
          pathname: '/game',
          state: { game: ["Arno", "France"] }
        }}>
        <div>
          <img src={require("./images/jpg/acu-icon.jpg")} alt="" className="picture"/>
          <p className="info">Assassin's Creed Unity</p>
        </div>
        </Link>
      </InfoWindow>:null}

    </Marker>

    <Marker
      icon={one}
      position={{ lat: 52.68, lng: -1.84}}
      onClick={() => props.pickGameFunc("acs")}>
      {props.mapchoice == "acs" ? <InfoWindow
        onCloseClick={() => props.pickGameFunc("")}>
        <Link to={{
          pathname: '/game',
          state: { game: ["Jacob & Evie", "England"] }
        }}>
        <div>
          <img src={require("./images/jpg/acs-icon.jpg")} alt="" className="picture"/>
          <p className="info">Assassin's Creed <br/>Syndicate</p>
        </div>
        </Link>
      </InfoWindow>:null}

    </Marker>

    <Marker
      icon={one}
      position={{ lat: 26, lng: 29.8}}
      onClick={() => props.pickGameFunc("aco")}>
      {props.mapchoice == "aco" ? <InfoWindow
        onCloseClick={() => props.pickGameFunc("")}>
        <Link to={{
          pathname: '/game',
          state: { game: ["Bayek & Aya", "Egypt"] }
        }}>
        <div>
          <img src={require("./images/jpg/aco-icon.jpg")} alt="" className="picture"/>
          <p className="info">Assassin's Creed<br/>Origins</p>
        </div>
        </Link>
      </InfoWindow>:null}

    </Marker>

  </GoogleMap>
))

class Main extends Component {
  constructor() {
    super();
    this.state = {
      selection: ""
    }
  }

  pickGame = (selection) => {
    this.setState({selection});
  }


  render() {
    let mapselection = this.state.selection;
    return (
      <div className="content">
        <div className="title"></div>
        <div className="second">
          <header>
            <img src={logo} alt=""/>
            <h1>SELECT A LOCATION</h1>
          </header>

          <hr className="red"/>
          <hr className="greytop"/>

          <section className="map">
            <MyMapComponent
              mapchoice={mapselection}
              pickGameFunc={this.pickGame}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxLYsJIPa4MG7dYmUt7-MTjxjxOuoXH1E&callback=initMap"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
        />
          </section>

          <hr className="greybottom"/>
          <hr className="greysmall"/>
        </div>
      </div>
    );
  }
}

export default Main;
