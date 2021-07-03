import React from 'react';
const Form =({bntTexte, children})=>{
    return (
        <form>
            <div>
                {children}
            </div>
            <button type='submit'>{bntTexte}</button>
        </form>
    )
}
export default Form