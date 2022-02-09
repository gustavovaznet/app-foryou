//INPUT COMPONENT

//IMPORTING
import React, {InputHTMLAttributes} from 'react';
import './styles.css';

//INPUT
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;  
}
const Input: React.FC<InputProps> = ({label, name,  ...rest}) => {
    
    //RETURN
    return (
    <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} {...rest}/>
    </div>
    );
}

export default Input;
