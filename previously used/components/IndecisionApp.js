import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';;
import Header from './Header.js';
import Action from './Action.js';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handelDeleteOption = this.handelDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    //Lifecycle Component
    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }
        
        }catch (e) {
            //Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    //Delete All Options
    handelDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handelDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }));
    }

    //Used on Action to randomly pick option
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    //Add Options
    handleAddOption(option){

        if(!option) {
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat((option))
        }));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handelDeleteOptions = {this.handelDeleteOptions}
                    handelDeleteOption = {this.handelDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}



