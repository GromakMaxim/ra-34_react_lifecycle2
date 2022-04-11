import React, {Component} from "react";
import InputField from "./InputField";
import '../css/main.css';
import '../css/defaults.css';
import Note from "./Note";

export default class Widget extends Component {


    constructor(props, context) {
        super(props, context);
    }

    renderNotes() {
        return null;
    }

    loadNotesFromAPI(){
        // fetch...
    }

    componentDidMount() {
        this.loadNotesFromAPI();
    }

    render() {
        return (
            <div className='widget b1'>
                <div className='notes flex-row'>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                </div>
                <InputField/>
            </div>
        );
    }
}
