import React from 'react';

class Tile extends React.Component {

    constructor(props){
        super(props);
        this.state = {className:"work_box"}

        this.changeClass = this.changeClass.bind(this);
    }

    render(){
        return(
            <div className={this.state.className} onClick={this.changeClass}>
                {this.props.image}
                <p>{this.props.desc}</p>
            </div>
        );
    }

    changeClass(){
        if(this.state.className === "work_box"){
            this.setState({className:"work_box_big"})
        }
        else{
            this.setState({className:"work_box"})
        }
    }
}

export default Tile;