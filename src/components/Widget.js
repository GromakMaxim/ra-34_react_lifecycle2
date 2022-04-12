import React, {Component} from "react";
import InputField from "./InputField";
import '../css/main.css';
import '../css/defaults.css';
import Note from "./Note";

export default class Widget extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            notes: null
        }
        this.loadNotesFromAPI = this.loadNotesFromAPI.bind(this);
        this.renderNotes = this.renderNotes.bind(this);
    }

    renderNotes() {
        let arr = [];
        if (this.state.notes === null) return null;

        if (this.state.notes.length !== 0) {
            this.state.notes.forEach(note => {
                arr.push(<Note key={note.id} data={note} funcLoad={this.loadNotesFromAPI}/>)
            })
        } else {
            return null;
        }
        return arr;
    }

    async loadNotesFromAPI() {
        // fetch...
        let response = await fetch("https://react-lifecycle2.herokuapp.com/notes");
        if (response.ok) { // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
            let json = await response.json();
            this.setState({
                notes: json
            })
            return json;
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }

    componentDidMount() {
        this.loadNotesFromAPI();
    }

    render() {
        return (
            <div className='widget b1'>
                <button className='refresh' onClick={this.loadNotesFromAPI}>Refresh!</button>
                <div className='notes flex-row'>
                    {this.renderNotes()}
                </div>
                <InputField/>
            </div>
        );
    }
}
