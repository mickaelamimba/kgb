import React from 'react';
import DisplayMessage from "./DisplayMessage";
const DisplayError = ({ message }) => {
    return (
        <DisplayMessage message={message} backgroundColor='#d9534f' />
    )
}
export default DisplayError;