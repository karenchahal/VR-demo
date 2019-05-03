"use strict";

import React, { Component } from "react";
// import navigator.geolocation from "react-native-geolocation-service";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  ViroARImageMarker,
  ViroARTrackingTargets
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      string: ""
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: false,
        timeout: 2000,
        maximumAge: 2000,
        distanceFilter: 1
      }
    );
  }

  render() {
    const { latitude, longitude } = this.state;
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {/* <ViroARImageMarker target={"targetOne"}> */}
        <ViroText
          text={`Latitude: ${latitude}, Longitude: ${longitude}`}
          width={2}
          height={2}
          position={[0, 0, -2]}
          style={styles.helloWorldTextStyle}
        />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require("./res/grid_bg.jpg")
  }
});

module.exports = HelloWorldSceneAR;
