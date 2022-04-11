import React, {Component} from "react";
import InputField from "./InputField";

export default class Widget extends Component {


    constructor(props, context) {
        super(props, context);
    }

    renderNotes() {
        return null;
    }

    render() {
        return (
            <div>
                <div className='notes'>
                    {this.renderNotes()}
                </div>
                <InputField/>
            </div>
        );
    }
}
