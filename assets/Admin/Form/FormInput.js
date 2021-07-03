import React from 'react';
const FormInput =({type,placeholder,require=false})=>{
    return(
        <p>
            <input type={type} placeholder={placeholder} required={require} />
        </p>
    )
}
export default FormInput