import React from "react";

export default function InputField(props) {
    async function send(e) {
        e.preventDefault();
        let obj = {
            id: 0,
            content: e.target.msg.value
        }

        let response = await fetch("https://react-lifecycle2.herokuapp.com/notes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        })

        let result = await response.text;
        e.target.msg.value = '';

        props.funcLoad();

    }

    return (
        <form onSubmit={send}>
            <div className='inputField b1 pos-rel'>
                <textarea placeholder='type smth here...' cols='30' resize='none' name='msg'/>
                <button type='submit' className='send b1 pos-abs' value='send'>Send!</button>
            </div>
        </form>
    );
}
