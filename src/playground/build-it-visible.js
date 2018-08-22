class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };  
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// console.log('App Running');

// let visibility = false;
// const textToggle = () =>{
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const app = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={textToggle}>
//                 {visibility ? 'Click to See Text' : 'Click to Hide Text'}
//             </button>
//             {visibility && (
//             <div>
//               <p>Hey. These are some details you can now see!</p>
//             </div>
//           )}
//         </div>
//     );
//     ReactDOM.render(app, document.getElementById('app'));
// }

// render();

