import React, { useState } from 'react';

const Form = ({ action, options: { buttonValue='Send', index=0 } = {} }) => { 
    const [inputValue, setInputValue] = useState('');

    return (
        <form onSubmit={ (e) => { e.preventDefault(); action(inputValue, index) } }>
            <input type='text' 
                   value={ inputValue }  
                   onChange={ e => setInputValue(e.target.value) } />
            <input type='submit' value={ buttonValue } />
        </form>
    );
}

export default Form;