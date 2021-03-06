import React, { Component } from "react";
import { ComputerKeyboard, MonoSynth, AudioOutput, Distortion, Tremolo, Connector } from "../lib";

class App extends Component {
	state = {}

	constructor() {
	  super();
	  this.state = {
	    input: "tremolo",
	  };
	}

	render() {
	  return (
	    <Connector>
				it is possible to route the inputs and outputs however you like:
	      <button onClick={() => this.setState({ input: "tremolo" })}>{"synth -> tremolo -> output"}</button>
	      <button onClick={() => this.setState({ input: "distortion" })}>{"synth -> distortion -> output"}</button>

	      <ComputerKeyboard controlled keyboardLayout="azerty">
	        {msg => <MonoSynth midiMsg={msg} output={"monosynth"} />}
	      </ComputerKeyboard>

	      <Distortion input={"monosynth"} output={"distortion"} />
	      <Tremolo input={"monosynth"} output={"tremolo"} />
	      <AudioOutput input={this.state.input} />
	    </Connector>
	  );
	}
}

export default App;

