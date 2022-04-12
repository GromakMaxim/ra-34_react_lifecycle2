import React from "react";

export default function Note(props) {

    return (
        <div id={props.data.id} className='note b1'>
            {props.data.content}
            <div className='delete b1'>X</div>
        </div>
    );
}
