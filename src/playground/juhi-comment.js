class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    //Delete All Options
    handelDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        this.setState(() => ({ options: [] }));
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

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat((option))
        //     };
        // });
        this.setState((prevState) => ({
            options: prevState.options.concat((option))
        }));
    }

    render() {
        // const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        // const options =['Thing one', 'Thing Two', 'Thing Three', 'Thing Four'];
        
        return (
            <div>
                {/* <Header title={title} subtitle={subtitle} /> */}
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handelDeleteOptions = {this.handelDeleteOptions}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

//Default Props
IndecisionApp.defaultProps = {
    options: []
}


//Stateless Functional Component of Header
// const Header = (props) => {
//     return (
//       <div>
//         <h1>{props.title}</h1>
//         <h2>{props.subtitle}</h2>
//       </div>
//     );
//   };
  
//Default Props
const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  };
Header.defaultProps = {
    title: 'Indecision'
}


// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

//Stateless Functional Component of Action
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What Should I Do?
            </button>
        </div>
    );
};

// class Action extends React.Component {
//     // handlePick() {
//     //     alert ('handlePick');
//     // }
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                     >
//                     What Should I Do?
//                 </button>
//             </div>
//         );
//     }
// }



//Stateless Functional Component of Options
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handelDeleteOptions}>Remove All</button>
            <p>The length of the options: {props.options.length}</p>
            {
                props.options.map((option) => <Option key={option} optionText={option}/>)
            }
        </div>
    );
};

// class Options extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll() {
//     //     console.log(this.props.options);
//     //     // alert ('handleRemoveAll');
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handelDeleteOptions}>Remove All</button>
//                 <p>The length of the options: {this.props.options.length}</p>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/>)
//                 }
//             </div>
//         );
//     }
// }



//Stateless Functional Component of Option
const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
};;


// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }


class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return { error };
        // });
        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type = "text" name = "option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

// ReactDOM.render(<User name="Andrew" age={26} />, document.getElementById('app'));