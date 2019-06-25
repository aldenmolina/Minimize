import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./CurrentLocation";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={"current location"} />
        <Marker
          onClick={this.onMarkerClick}
          name={
            "Goodwill Donation Center 2720 Van Aken Blvd, Cleveland, OH 44120"
          }
          title={"GoodWillDonationCenter"}
          icon={"./images/GoodwillLogo.png"}
          position={{ lat: 41.483298, lng: -81.58883 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={
            "Goodwill Donation Center 8623 Pearl Rd, Strongsville, OH 44136"
          }
          title={"GoodWillDonationCenter"}
          icon={"./images/GoodwillLogo.png"}
          position={{ lat: 41.345559, lng: -81.822848 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"GoodWill Donation Center 14690 Snow Rd, Brook Park, OH 44142"}
          title={"GoodWillBrookPark"}
          icon={"./images/GoodwillLogo.png"}
          position={{ lat: 41.405727, lng: -81.799134 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={
            "Salvation Army Donation Center 4972 Turney Rd, Garfield Hts, OH 44125"
          }
          title={"SalvationArmyGarfieldHts"}
          icon={"./images/SalArmyMarker.png"}
          position={{ lat: 41.424429, lng: -81.612718 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Salvation Army Donation Center 1449 Middle Rd, Avon, OH 44011"}
          title={"SalvationArmyAvon"}
          icon={"./images/SalArmyMarker.png"}
          position={{ lat: 41.468621, lng: -82.021018 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Donation Drop Center 8911 W Ridgewood Dr, Parma, OH 44130"}
          title={"DonationDropCenter"}
          position={{ lat: 41.38409, lng: -81.746558 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={
            "City Mission Household Donation Center 4334 Crabwood Pkwy, Warrensville Heights, OH 44128"
          }
          title={"CityMission"}
          position={{ lat: 41.441694, lng: -81.548421 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={
            "Goodwill Industries of Greater Cleveland 6068 Royalton Rd, North Royalton, OH 44133"
          }
          title={"GoodwillIndustries"}
          icon={"./images/GoodwillLogo.png"}
          position={{ lat: 41.314509, lng: -81.727207 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Savers (440)347-0200"}
          title={"Savers"}
          position={{ lat: 41.640312, lng: -81.47227 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={
            "Catholic Charities 2012 W 25th St, Cleveland, OH 44113 (216) 696-2197"
          }
          title={"Catholic"}
          position={{ lat: 41.483837, lng: -81.703488 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={
            "Make-A-Wish Car Donation 600 W Superior Ave, Cleveland, OH 44114"
          }
          title={"MakeAWish"}
          icon={"./images/MakeAWish.jpg"}
          position={{ lat: 41.501331, lng: -81.6896 }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `AIzaSyBGgOWYDkNTZ8YKobmOJVhPr4uNLP8Unjs`
})(MapContainer);
