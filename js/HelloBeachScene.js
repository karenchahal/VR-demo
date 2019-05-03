"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import { ViroScene, Viro360Image, ViroText, ViroBox } from "react-viro";

export default class HelloBeachScene extends Component {
  constructor() {
    super();

    this.state = {}; // initialize state

    this._showHelloWorldScene = this._showHelloWorldScene.bind(this);
    this._showHelloTunnelScheme = this._showHelloTunnelScheme.bind(this);
    this._showRuins = this._showRuins.bind(this);
  }

  _showRuins() {
    this.props.sceneNavigator.push({ scene: require("./HelloWorldScene.js") });
  }
  _showHelloTunnelScheme() {
    this.props.sceneNavigator.push({ scene: require("./HelloTunnelScene") });
  }

  render() {
    return (
      <ViroScene onClick={this._showHelloWorldScene}>
        <Viro360Image source={require("./res/music_hall_02_1k.jpg")} />
        <ViroText
          text="This is what the music hall looked like in the past"
          width={1}
          height={1}
          position={[0, 0, -2]}
          style={styles.helloWorldTextStyle}
        />
        <ViroText
          text="Go down to the tunnels"
          width={1}
          height={1}
          position={[-2, 1, -2]}
          transformBehaviors={["billboard"]}
          style={styles.helloWorldTextStyle}
        />
        <ViroBox
          position={[-2, 0, -2]}
          scale={[0.5, 0.5, 0.2]}
          materials={["grid"]}
          onHover={this._showHelloTunnelScheme}
        />
        <ViroText
          text="Go back to the ruins"
          width={1}
          height={1}
          position={[5, 0.5, -2]}
          transformBehaviors={["billboard"]}
          style={styles.helloWorldTextStyle}
        />
        <ViroBox
          position={[5, 0, -2]}
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
    color: "#FF6347",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

module.exports = HelloBeachScene;
