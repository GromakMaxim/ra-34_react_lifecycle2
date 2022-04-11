import React from "react";

export default function InputField(props){
    return (
        <div className='inputField b1'>
            <input type='text' placeholder='type smth here...'/>
            <div className='send b1'>Send!</div>
        </div>
    );
}
