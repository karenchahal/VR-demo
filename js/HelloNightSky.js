"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import { ViroScene, Viro360Image, ViroText, ViroBox } from "react-viro";

export default class HelloNightSky extends Component {
  constructor() {
    super();

    this.state = {}; // initialize state

    this._showHelloWorldScene = this._showHelloWorldScene.bind(this);
    this._showRuins = this._showRuins.bind(this);
  }

  _showRuins() {
    this.props.sceneNavigator.push({ scene: require("./HelloWorldScene.js") });
  }

  render() {
    return (
      <ViroScene onClick={this._showHelloWorldScene}>
        <Viro360Image source={require("./res/moonless_golf_1k.jpg")} />
        <ViroText
          text="This is the night sky"
          width={1}
          height={1}
          position={[0, 2, -2]}
          style={styles.helloWorldTextStyle}
        />
        <ViroText
          text="Return to the day"
          width={1}
          height={1}
          position={[-3, 1, -2]}
          transformBehaviors={["billboard"]}
          style={styles.helloWorldTextStyle}
        />
        <ViroBox
          position={[-3, 0, -2]}
          scale={[0.5, 0.5, 0.2]}
          materials={["grid"]}
          onHover={this._showRuins}
        />
      </ViroScene>
    );
  }

  _showHelloWorldScene() {
    this.props.sceneNavigator.pop();
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "#37FF33",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

module.exports = HelloNightSky;
