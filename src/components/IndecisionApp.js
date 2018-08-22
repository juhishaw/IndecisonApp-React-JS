import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';;
import Header from './Header.js';
import Action from './Action.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    //Modal Close
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    //Delete All Options
    handelDeleteOptions = (e) => {
        this.setState(() => ({ options: [] }));
    };

    handelDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }));
    };
     //Used on Action to randomly pick option
    handlePick = (e) => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    //Add Options
    handleAddOption = (option) => {

        if(!option) {
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat((option))
        }));
    };


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

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}
                    />
                        <div className="widget">
                            <Options 
                                options={this.state.options}
                                handelDeleteOptions = {this.handelDeleteOptions}
                                handelDeleteOption = {this.handelDeleteOption}
                            />
                            <AddOption 
                                handleAddOption = {this.handleAddOption}
                            />
                        </div>
                    </div>
                    <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    />
            </div>
        );
    }
}



