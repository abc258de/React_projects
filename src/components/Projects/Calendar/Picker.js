import React, { Component } from 'react';
import Calendar from 'react-calendar'

import "./picker.css";

class Picker extends Component {
    state = {
        date:new Date(),
        showDate:false
    }
    onChange = date =>{
        this.setState({
            date
        })
    }
    validation = () => {
        this.setState({
            showDate: true
        })
        console.log(this.state.date);
    }
    reset = () => {
        this.setState({
            showDate: false
        })
    }
    render() {
        return (
            <div style={{boxShadow: "5px 5px 25px"}}>
                <div onClick={this.reset}>
                    <Calendar
                        onChange = {this.onChange}
                        selectRange = {true}
                        value = {this.state.date}
                    />
                </div>
                <button onClick={this.validation}>Select</button>
                {this.state.showDate ? (
                    <div>
                        <p>From : {this.state.date[0].toLocaleDateString()}</p>
                        <p>To : {this.state.date[1].toLocaleDateString()}</p>
                    </div>
                ):null}
            </div>
        );
    }
}

export default Picker;