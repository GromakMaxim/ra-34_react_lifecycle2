import React from "react";

export default function Note(props) {

    async function deleteNote(e) {
        let response = await fetch("https://react-lifecycle2.herokuapp.com/notes/" + e.target.id, {
            method: 'DELETE',
            body: e.target.id
        }).then(response => response.text());

        props.funcLoad();
    }

    return (
        <div className='note b1 pos-rel'>
            {props.data.content}
            <div id={props.data.id} className='delete b1 pos-abs' onClick={deleteNote}>X</div>
        </div>
    );
}
