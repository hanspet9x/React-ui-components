import React from 'react';
import LabelField from '../UI/LabelField';
import FormField from '../UI/FormField';
import Selector from '../UI/Selector';
import FormPicture from '../UI/FormPicture';
function FormFIeldFIle(props) {

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
                <Selector values={["Male", "Female", "Tolu"]} name="gender" onChange={handleChange}/>
            </form>
        </div>
    );
}

export default FormFIeldFIle;