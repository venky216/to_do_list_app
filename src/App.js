import React, { Component } from 'react';
import './App.css';
import Input from './Components/Input';
import Particle from './Components/Particles/Particles';
import Logo from './Components/Logo/Logo';
import Search from './Components/Search';
const date = () => {};
class App extends Component {
	state = {
		inputValue: '',
		title: 'To-Do-List App',
		options: [
			{ value: 'Film Introduction Video', done: false },
			{ value: 'Write the CLI task management post', done: false },
			{ value: "Watch today's Noruto episode", done: false },
			{ value: 'Drop off package at post office', done: false },
			{ value: 'Buy some fruits and milk', done: false }
		],
		time: new Date(),
		searching: ''
	};

	date = () => {
		let d = new Date();
		let n = d.getTime();
	};
	Changed = (e) => {
		this.setState({
			inputValue: e.target.value
		});
	};
	addoption = (e) => {
		e.preventDefault();
		const newOption = {
			value: this.state.inputValue,
			done: false
		};
		const options = this.state.options;
		options.push(newOption);
		this.setState({
			options: options
		});
		e.target.elements.option.value = '';
	};
	completed = (index) => {
		console.log('clicked', index);
		const options = this.state.options;
		options[index].done = !options[index].done;
		this.setState({
			options: this.state.options
		});
		this.setState({ state: this.state });
	};
	delete = (itemIndex) => {
		const options = this.state.options;
		options.splice(itemIndex, 1);
		this.setState({ options: options });
	};
	searching = (e) => {
		this.setState({
			searching: e.target.value
		});
		console.log(e.target);
	};
	render() {
		var filteredOptions = this.state.options.filter((option) => {
			return option.value.toLowerCase().indexOf(this.state.searching) !== -1;
		});
		return (
			<div className="App">
				<Logo />
				<Particle />
				<div className="container-wrap">
					<Search searching={this.searching} />
					{filteredOptions.map((option, index) => {
						return (
							<div
								key={index}
								index={index}
								className="cont-wrap"
								style={{ textDecoration: option.done ? 'line-through' : 'none' }}
							>
								<div className="left-wrap">
									<span className="text-for">{option.value}</span>
									<p className="created-text">
										created on {this.state.time.toLocaleDateString()} @{' '}
										{this.state.time.toLocaleTimeString()}
									</p>
								</div>
								<div>
									<button className="btn draw-border btn-1" onClick={() => this.completed(index)}>
										{' '}
										{option.done ? 'undo' : 'DONE'}
									</button>
									<button className="btn draw-border" onClick={() => this.delete(index)}>
										Remove
									</button>
								</div>
							</div>
						);
					})}
					<Input Changed={this.Changed} addoption={this.addoption} />
				</div>
			</div>
		);
	}
}

export default App;
