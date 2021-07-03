import React from 'react';
const FormLabel =({text, children})=>{
    return (
        <label>
            {text}
            {children}
        </label>
    )
}

export default FormLabel