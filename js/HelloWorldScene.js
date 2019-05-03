"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroScene,
  ViroText,
  Viro360Image,
  ViroBox,
  ViroMaterials
} from "react-viro";

export default class HelloWorldScene extends Component {
  constructor() {
    super();

    this.state = {
      text: "Welcome to Weoley Castle!"
    }; // Set initial state here

    this._onBoxHover = this._onBoxHover.bind(this);
    this._showHelloBeachScene = this._showHelloBeachScene.bind(this);
    this._showTheNight = this._showTheNight.bind(this);
  }

  _onBoxHover(isHovering) {
    let text = isHovering
      ? "I will show you what these ruins looked like in the past!"
      : "Welcome to Weoley Castle Ruins! Find boxes like the one below to begin exploring!";
    this.setState({
      text
    });
  }

  _showHelloBeachScene() {
    this.props.sceneNavigator.push({ scene: require("./HelloBeachScene.js") });
  }

  _showTheNight() {
    this.props.sceneNavigator.push({ scene: require("./HelloNightSky") });
  }

  render() {
    const { text } = this.state;
    return (
      <ViroScene>
        <Viro360Image source={require("./res/roofless_ruins_1k.jpg.jpg")} />
        <ViroText
          text={text}
          width={2}
          height={2}
          position={[0, 0, -2]}
          style={styles.helloWorldTextStyle}
        />
        <ViroBox
          position={[0, -1, -2]}
          scale={[0.5, 0.5, 0.2]}
          materials={["grid"]}
          onHover={this._onBoxHover}
        />
        <ViroText
          text="Just a pile of rocks!"
          width={2}
          height={2}
          position={[0, -5, -2]}
          transformBehaviors={["billboard"]}
          style={styles.helloWorldTextStyle}
        />
        <ViroText
          text="The sky!"
          width={2}
          height={2}
          position={[0, 5, -2]}
          transformBehaviors={["billboard"]}
          onHover={this._showTheNight}
          style={styles.helloWorldTextStyle}
        />
        <ViroBox
          position={[-5, 0, -2]}
          scale={[0.5, 0.5, 0.2]}
          materials={["grid"]}
          onHover={this._showHelloBeachScene}
        />
        <ViroText
          text="Here is the wall!"
          width={2}
          height={2}
          position={[5, 0, -2]}
          transformBehaviors={["billboard"]}
          style={styles.helloWorldTextStyle}
        />
      </ViroScene>
    );
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 15,
    color: "#808000",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require("./res/castlelogo.png")
  }
});

module.exports = HelloWorldScene;
