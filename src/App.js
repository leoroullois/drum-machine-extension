import "./App.css";
import React from "react";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
		};
		this.onKeyPressed = this.onKeyPressed.bind(this);
		this.onKeyUnPressed = this.onKeyUnPressed.bind(this);
		this.playAudio = this.playAudio.bind(this);
	}
	componentDidMount() {
		document.addEventListener("keydown", this.onKeyPressed);
		document.addEventListener("keyup", this.onKeyUnPressed);
	}
	onKeyUnPressed(e) {
		const elt = document.getElementById(e.key.toUpperCase());
		if (elt != null) {
			elt.style.color = "black";
		}
	}
	onKeyPressed(e) {
		const elt = document.getElementById(e.key.toUpperCase());
		// console.log(document.getElementById(e.key.toUpperCase()));
		if (elt != null) {
			elt.style.color = "white";
			elt.children[0].play();
			this.setState({ name: e.key.toUpperCase() });
		}
	}
	playAudio(e) {
		console.log(e.target.id);
		this.setState({ name: e.target.id });
		e.target.children[0].play();
	}
	render() {
		return (
			<div className='App' id='drum-machine'>
				<header>
					<h1>👋 Welcome to my Drum Machine !</h1>
					<h2>🥁 Enjoy creating songs !</h2>
				</header>
				<section id='display'>
					<DrumPad
						letter={"A"}
						audioSource='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
						color={{ backgroundColor: "#3498db" }}
						onClick={this.playAudio}
					/>
					<DrumPad
						letter={"Z"}
						audioSource='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
						color={{ backgroundColor: "#2ecc71" }}
						onClick={this.playAudio}
					/>
					<DrumPad
						letter={"E"}
						audioSource='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
						color={{ backgroundColor: "#1abc9c" }}
						onClick={this.playAudio}
					/>
					<DrumPad
						letter={"Q"}
						audioSource='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
						color={{ backgroundColor: "#34495e" }}
						onClick={this.playAudio}
					/>
					<DrumPad
						letter={"S"}
						audioSource='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
						color={{ backgroundColor: "#8e44ad" }}
						onClick={this.playAudio}
					/>
					<DrumPad
						letter={"D"}
						audioSource='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
						color={{ backgroundColor: "#e74c3c" }}
						onClick={this.playAudio}
					/>
					<DrumPad
						letter={"W"}
						audioSource='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
						color={{ backgroundColor: "#e67e22" }}
						onClick={this.playAudio}
					/>
					<DrumPad
						letter={"X"}
						audioSource='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
						color={{ backgroundColor: "#1abc9c" }}
						onClick={this.playAudio}
					/>
					<DrumPad
						letter={"C"}
						audioSource='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
						color={{ backgroundColor: "#f39c12" }}
						onClick={this.playAudio}
					/>
					{/* {this.state.name} */}
					<footer id='display'>
						{/* {this.state.name} */}
						<h3>{this.state.name}</h3>
					</footer>
				</section>
			</div>
		);
	}
}
class DrumPad extends React.Component {
	render() {
		return (
			<button
				className='drum-pad'
				id={this.props.letter}
				style={this.props.color}
				onClick={this.props.onClick}
			>
				{this.props.letter}
				<audio
					src={this.props.audioSource}
					className='clip'
					id={this.props.letter}
				></audio>
			</button>
		);
	}
}
export default App;
