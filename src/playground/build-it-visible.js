// let State = false;

// const changeState = () => {
//     State = !State;
//     render();
// }

// const render = () => {

// var template = (
//     <div>
//         <h1>Visible Toggle</h1>
//         <button ton onClick={changeState} id='btn'>
//             {State ? "Hide details" : "Show details"}
//         </button>
//         {
//             State && (
//                 <div>
//                     <p>This is details you can see</p>
//                 </div>
//             )
//         }
//     </div>
// );
//     ReactDOM.render(template, document.getElementById('app'));
// }

// render();


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleState = this.handleState.bind(this);
        this.state = {
            State: false
        }
    }
    handleState() {
        this.setState((prevState) => {
            return {
                State: !prevState.State
            };
        })
    }
    render() {
        return (
            <div>
                <h1>Visible Toggle</h1>
                <button onClick={this.handleState}>
                    {this.state.State ? "Hide details" : "Show details"}
                </button>
                {
                    this.state.State && (
                        <div>
                            <p>This is details you can see</p>
                        </div>
                    )
                }
            </div>
        );
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
