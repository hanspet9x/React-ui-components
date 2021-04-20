import React from 'react';
import LabelField from '../LabelField';
import Selector from '../Selector';
import FormPicture from '../FormPicture';
function FormFieldFile(props) {

    const handleChange = (e)=>{

    }

    const styles = {
            width: 800,
            maxWidth: "90%",
            margin: "auto",
            marginTop: 30
        }
    
    return (
        <div style={styles}>
            <form className="form-block">
                <FormPicture name="" />
                <br></br>
                <LabelField label="Subject" on onChange={handleChange}/>
                <br></br>
                <Selector value="Female" values={["Male", "Female", "Tolu"]} name="gender" onChange={handleChange}/>
            </form>
        </div>
    );
}

export default FormFieldFile;