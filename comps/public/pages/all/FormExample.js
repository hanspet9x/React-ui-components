import React, { Component } from "react";
import ButtonLoader from "../../../src/ui/ButtonLoader";
import { Icons } from "../../../src/constant";
import ImageField from "../../../src/ui/ImageField";
import FormPicture from "../../../src/ui/FormPicture";
import { Consumer } from "../../../src/Provider";
import CloseableInfo, { SUCCESS, DANGER } from "../../../src/ui/CloseableInfo";

class FormExample extends Component {

    constructor(props){
        super(props);
        this.state = {
                        username: "", password: "password", country: "", message: "",
                         btnAnim: false, closeabelMsg: "", closeableType: DANGER
        }
        /*
        only form fields shoul be here
        */
       this.fields = {username: "", password: "password", country: "", message: ""}
    }
    /*
        handle all inputs change, changes statez values and keeps form this.fields holder up to date
    */
    handleChange = (e)=>{

        let name = e.target.name;
        let value = e.target.value;

        /*
         update this.fields
        */
        this.fields[name] = value;

        /**
         * set form state
         */
        this.setState({[name]: value});
    }

    /**Validate that user fill all fields */
    validateFields = ()=>{
        
        for (const key in this.fields) {

            /**if a field is found empty bring up the danger typed closeables. */
            if(this.fields[key] === ""){
                console.log("yes");
                this.setState({closeabelMsg: `${key} is required.`, closeableType: DANGER});
                return false;
            }
            
        }
         /**dont leave this out */
         this.setState({closeabelMsg: "", closeableType: SUCCESS});
         /**this line is important */
         return true;
    }

    handleSubmit = (alert, confirm, e)=>{
        e.preventDefault();
        /**NO 3 */
        const serverResults = (data)=>{
            /**result is back from the server if no redirection..show an alert */
            /**no redirection */
            alert(data.status);

            /** if there is redirection keep ur redirection component in ur state and implement in
             * ur render as the first component to avoid clean ups error or leakages.
            */

            /**switch off btn animation */
            this.setState({btnAnim: false});
            /** you can also empty all fields 
            this.setState(state=>{
                return {...state, btnAnim: false, username: "", password: "", country: "", message: ""}
            });
            */
        }
        /**NO 2 
         * this is invoked when user clicks yes to submit
         * 
        */
        const confirmCallbak = ()=>{
                       
           
                /**all fields are filled. change the button state to true, post this.fields to server 
                 * and keep a callback to turn off ur button state and update closeables or dialog.
                */
                
                this.setState({btnAnim: true});

                /**post ur object to server here.. aint using ma backend for shit..lol..
                 * ill simulate a real live server..
                 */
                //HttpFactory.postObject("url", this.fields, serverResults);
                /**simulation...dont do this */
                
                setTimeout(() => {
                    let data = {error: false, status: "Form submitted."};
                    /** this is a callback after form submission */
                    serverResults(data);
                }, 3000);
                
            
        }
        /**
         * NO 1
         * validate that all fields are filled if only validateFields returns true
         * confirm from user if they really wanna submit
         * and keep a confrim callback in dz function to get notified of a yes.
         */
        
         
        if(!!this.validateFields()){
            confirm("Do you wanna submit now?", confirmCallbak);
        }
    }

    changeCloseable = ()=>{
        this.setState({closeabelMsg: ""});
    }

    render() {
        return (
            <div className="cards" style={{padding: "10px"}}>

            <CloseableInfo  type={this.state.closeableType} info={this.state.closeabelMsg} onChange={this.changeCloseable} />

                <Consumer>
                    {({alert, confirm}) => (
                    <form className="form-block" onSubmit={this.handleSubmit.bind(null, alert, confirm)}>

                        <FormPicture onChange={this.handleChange} name="photo" />

                        <div className="form-inline">
                            <ImageField name="username" onChange={this.handleChange} src={Icons.user} type="text" placeholder="Username" /> 
                        </div>

                        <div className="form-inline">
                            <ImageField name="password" tag="p" onChange={this.handleChange} src={Icons.lock} placeholder="Password" />
                        </div>

                        <ImageField name="country" tag= "s" onChange={this.handleChange} src={Icons.map} >
                            <option value="">Choose Country</option>
                            <option>Nigeria</option>
                            <option>Europe</option>
                        </ImageField>
                        
                        <ImageField name="message" tag= "t" onChange={this.handleChange} src={Icons.modified} placeholder="Type here.." />
                        
                        <ButtonLoader src={Icons.elink} active={this.state.btnAnim}>Submit</ButtonLoader>
            
                    </form>
        
                    )}
                </Consumer>
            </div>
    
        );
    }
}

export default FormExample;