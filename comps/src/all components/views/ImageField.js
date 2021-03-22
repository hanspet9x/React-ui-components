import React from 'react';
import PasswordField from './PasswordField';

function ImageField({onChange, src, id, className, name, type, data, placeholder, required, tag, children,defaultValue, value}) {
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
            id={id}
            className={className}
            placeholder={placeholder} 
            required={required} 
            name={name} 
            value={value}
            defaultValue={defaultValue}
            data-type={data}
            onChange={handleChange} />
            break;
        case "s":
            mainTag = <select 
            required={required}
            id={id}
            className={className} 
            name={name} 
            value={value}
            defaultValue={defaultValue}
            data-type={data}
            onChange={handleChange}>{children}</select>
            break;
        case "t":
            mainTag = <textarea 
            placeholder={placeholder} 
            id={id}
            className={className}
            required={required} 
            name={name} 
            value={value}
            defaultValue={defaultValue}
            data-type={data}
            onChange={handleChange} />
            break;
        case "p":
            mainTag = <PasswordField 
            placeholder={placeholder} 
            id={id}
            className={className}
            required={required} 
            name={name}
            defaultValue={defaultValue}
            data-type={data}
            onChange={handleChange} />
            break;
        default:
            mainTag = <input type={type} 
            placeholder={placeholder} 
            id={id}
            className={className}
            required={required} 
            name={name} 
            data-type={data}
            value={value}
            defaultValue={defaultValue}
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