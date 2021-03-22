import React from 'react';
import PasswordField from './PasswordField';

function ImageField({onChange, src, name, type, data, placeholder, required, tag, children, value}) {
    const handleChange =(e)=>{
        onChange(e);
    }
    var objRep = null;

    if(typeof src === "string"){
        objRep = <img src={src} alt="input-img" />;
    }else{
        objRep = src;
    }

    var mainTag = null;
    switch (tag) {
        case "i":
            mainTag = <input type={type} 
            placeholder={placeholder} 
            required={required} 
            name={name} 
            defaultValue={value}
            data-type={data}
            onChange={handleChange} />
            break;
        case "s":
            mainTag = <select 
            required={required} 
            name={name} 
            defaultValue={value}
            data-type={data}
            onChange={handleChange}>{children}</select>
            break;
        case "t":
            mainTag = <textarea 
            placeholder={placeholder} 
            required={required} 
            name={name} 
            defaultValue={value}
            data-type={data}
            onChange={handleChange} />
            break;
        case "p":
            mainTag = <PasswordField 
            placeholder={placeholder} 
            required={required} 
            name={name}
            data-type={data}
            onChange={handleChange} />
            break;
        default:
            mainTag = <input type={type} 
            placeholder={placeholder} 
            required={required} 
            name={name} 
            data-type={data}
            defaultValue={value}
            onChange={handleChange} />
            
            break;
    }
    
    return(
        <div className="img-form">
            {objRep}
            {mainTag}
        </div>
    );
}

export default ImageField;