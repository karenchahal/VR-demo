"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import { ViroScene, Viro360Image, ViroText, ViroBox } from "react-viro";

export default class HelloTunnelScene extends Component {
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
        <Viro360Image source={require("./res/mutianyu_1k.jpg")} />
        <ViroText
          text="To the window..."
          width={1}
          height={1}
          position={[-2, -0.6, -2]}
          transformBehaviors={["billboard"]}
          style={styles.helloWorldTextStyle}
        />
        <ViroText
          text="Here is a tunnel"
          width={1}
          height={1}
          position={[0, 0, -2]}
          style={styles.helloWorldTextStyle}
        />
        <ViroText
          text="...To the Wall"
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
          // onClick={this._showHelloBeachScene}
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
    color: "#FFFF00",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

module.exports = HelloTunnelScene;
