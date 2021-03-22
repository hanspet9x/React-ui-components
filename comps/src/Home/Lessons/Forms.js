import React, { useState, useEffect, Component } from 'react';
import { ClassTag, SemiMultiAttrTag, Tag, MultiAttrTag, IdTag, HtmlAttr, HtmlVal, HtmlTag} from '../../ui/Tags';
import Switch from './../../ui/Switch';
import { FuncVar, jsVarName, Meth, FuncVar2, MethJS, jsThis, jsObj, jsVar} from '../../ui/JS';
import FormPicture from '../../ui/FormPicture';
import '../../ui/FormPicture.css';
import FormSwitch from '../../ui/FormSwitch';
import ImageText from '../../ui/ImageText';
import {Icons, Colors} from '../../constant';
import LinksHolder from '../../ui/LinksHolder';
import ImageField from '../../ui/ImageField';
import ButtonLoader from '../../ui/ButtonLoader';
import PasswordField from '../../ui/PasswordField';
import FormSearch from '../../ui/FormSearch';
import {DiReact} from 'react-icons/di';
import CloseableInfo, { DANGER, SUCCESS } from './../../ui/CloseableInfo';
import {Consumer} from './../../Provider';


function Forms(props){

    const [sw, setSw] = useState(false);

    const switchClicked = (state)=>{
        setSw(state);
    }

    useEffect(()=>{
        
    },[sw]);
    const handleButtonClicked = (anim)=>{
        
        setTimeout(() => {
            anim();
        }, 2000);
    }
    const handleChange =(e)=>{
        // console.log(e.target);
    }

    /*
    Searches */
    const [searchResults, setSearchReults] = useState([]);
    const [searchSelect, setSearchSelect] = useState([]);
    const fakeHandler=(name, id) =>{
        return {id: id,
                search : <div><b>{name}</b><br/><small>Hey! you searched for me...</small></div>}
        
    }

    let bank = [
        ["Deji", fakeHandler("Deji", 1)],
        ["Deji", fakeHandler("Deji", 8)],
        ["Abey", fakeHandler("Abey", 2)],
        ["Abey", fakeHandler("Abey", 3)],
        ["Rotimi", fakeHandler("Rotimi", 4)],
        ["Ayo", fakeHandler("Ayo", 5)],
        ["Ayo", fakeHandler("Ayo", 6)],
        ["Ayo", fakeHandler("Ayo", 7)],
        ["Kay", fakeHandler("Kay", 9)],
    ];

    
    const onSearchInputs = (value)=>{
        let searched = bank.filter((e) =>{
            return e[0].includes(value) || e[0].includes(value.toUpperCase()) ? true:false;
        });

        let jsonObj = [];
        searched.forEach((e) =>{
            jsonObj.push(e[1]);
        });

        setSearchReults(jsonObj);
    }

    const onSelectedSearch = (id, data) =>{
        
        setSearchSelect([id, data]);
        console.log(data);
              
    }
 


    
    /**Search ends */


    return(
        <section>
            <article id="h-form">
                <h1>Forms Layout</h1>
                <p>
                    Just like the layout container, the form root must also have a 
                    <span className="html-attr"> class</span> attribute with the value 
                    <span className="html-val"> form-block</span>. Popular child elements are:
                    <span className="tags">Label</span><span className="tags">Switch</span>
                    <span className="tags">LinksHolder</span>
                    <span className="tags">Input</span><span className="tags">Select</span>
                    <span className="tags">FormImage</span><span className="tags">Textarea</span>
                    
                </p>
                
                <article id="h-form-label">
                    <h2>Label</h2>
                    <p>Label's got nothing special... besides showing description it could help show if a field is
                    required. The label in our example takes the <span className="html-attr">class</span> attribute 
                    with value <span className="html-val">on</span>
                    <br></br>
                    </p> 
                    <form className="form-block">
                        <label className="on">Name</label>
                        <input type="text" placeholder="Username" />
                    </form>
                    See code below:
                    

                    <pre className="html-pre">
                        <ClassTag name="form" val="form-block" >
                            <ClassTag name="label" val="on" sp={2}>name</ClassTag>
                            <SemiMultiAttrTag name="input" attr={{type: "text", placeholder: "Username"}} sp={2} />
                        </ClassTag>
                    </pre>

                    </article>
                
                <article id="h-form-radio"> 
                    <h2>Switch</h2>
                    <p>The switch component replaces the convetional radio and checkboxes in modern UI.
                        In a form context, it takes a <span className="html-attr">name</span> attribute with your desired value. However,
                        it's implementation could go without the name attribute when used in descision-making.
                        The switch takes 3 important attributes - 1 key attribute (onClick) and 2 others(values, xs). See examples below: 
                    </p>

                    <h4>Type One</h4>
                    <p>It implements just the <span className="html-attr">onClick</span>! attribute to work.
                    A personal question to be asked that requires a strict response is
                    <em>"Why would i need a Switch if i have no callback implementation itention."?</em> The answer is <b>DON'T!!</b></p>
                    <Switch onClick={switchClicked} />

                    <pre className="html-pre">
                        <FuncVar name="switchClicked" params="state" >state is either true or false</FuncVar>
                        <SemiMultiAttrTag name="Switch" attr={{onClick: "switchClicked"}} c />
                    </pre>

                    <h4>Type Two</h4>
                    <p>Type two takes an optional <span className="html-attr">values</span>- array 
                    type attribute to display feedback. While index 0 in the array amounts to true, index 1 amounts to false.</p>
                   
                    <Switch onClick={switchClicked} values={["yes", "no"]}/>
                    <br></br>
                    <Switch onClick={switchClicked} values={["Active", "Inactive"]}/>

                    <pre className="html-pre">
                     <SemiMultiAttrTag name="Switch" attr={{onClick: "switchClicked", values: '["yes", "no"]'}} c /> 
                     <SemiMultiAttrTag name="Switch" 
                     attr={{onClick: "switchClicked", values: '["Active", "Inactive"]'}} c /> 
                    
                     </pre>
                    <h4>Type 3</h4>
                    "That switch is way too big for me... i'd rather go with something simple and petit.." Just add the 
                    <span className="html-attr">xs</span> attribute and off u go....
<br></br><br></br>
                    <Switch onClick={switchClicked} values={["Yes", "No"]} xs/>
<br></br>
                    <Switch onClick={switchClicked} xs c/>

                    <pre className="html-pre">
                    <SemiMultiAttrTag name="Switch" attr={{onClick: "switchClicked", values: '["yes", "no"]', xs: ""}} c /> 
                    <SemiMultiAttrTag name="Switch" attr={{onClick: "switchClicked", xs: ""}} c />
                    </pre>
                </article>
                
                <article id="h-form-radio2"> 
                    <h2>FormSwitch</h2>
                    <p>The switch component replaces the convetional radio and checkboxes in modern UI.
                        In a form context, it takes a <span className="html-attr">name</span> attribute with your desired value. However,
                        it's implementation could go without the name attribute when used in descision-making.
                        The switch takes 3 important attributes - 1 key attribute (onClick) and 2 others(values, xs). See examples below: 
                        Unlike the Switch component discussed above, the FormSwitch implements the <span className="html-attr">onChange</span> 
                        and name form attributes to synchronize values with other Form's children. It doesn't regard the 
                        <span className="html-attr">xs</span> and <span className="html-attr">onClick</span> attributes.
                    </p>

                    <FormSwitch title="sex" onChange={handleChange} name="sex" values={["female", "male"]}/>

                    <pre className="html-pre">
                    <SemiMultiAttrTag name="FormSwitch" attr={{onChange: "handleChange", values: '["female", "male"]'}} c />
                    </pre>
                </article>

                <article id="h-form-picture">
                    <h2>FormPicture</h2>
                    <p>The FormPicture component replaces the popular <span className="html-tag">input</span>
                    tag with the <span className="html-attr">file</span> attribute. It accepts a <span className="html-attr">name</span>
                     and <span className="html-attr">onChange</span> attributes to make it work proper and it returns an image encoded in string
                    The former attribute maps the component target and the latter attribute triggers after image capture.           
                    </p>
                    <ImageText src={Icons.bell} color={Colors.main}>
                        Watchout for FormPicture release 2.
                    </ImageText>
                    <FormPicture name="photo" onChange={handleChange} />
                    <pre className="html-pre">
                        <FuncVar params="e" name="handleChange">
                            <div>
                            {jsVarName("let", "name")}= e.target.name;<br />
                            {jsVarName("let", "value")}= e.target.value;
                            </div> 
                        </FuncVar>

                        <SemiMultiAttrTag name="FormPicture" attr={{name: "photo", onChange: "handleChange"}} c />
                    </pre>
                    
                    


                </article>

                <article id="h-form-links">
                    <h2>LinksHolder</h2>

                    <p>Just like the name sounds, it holds searched or selected links. This helps to 
                    put together a list of diesired values from a pool of values. Like others it takes the 
                    <span className="html-attr">name, onChange</span> attributes and an optional list <span className="js-var">array</span> type
                    attribute called <span className="html-attr">options</span>.
                     See implementation below..</p>
                    <ImageText src={Icons.note} color={Colors.main}>LinksHolder returns a comma-seperated list of strings.</ImageText>
                     <form className="form-block">
                        <h4>Send Message</h4>
                        <label className="on">Receipient</label>
                        <LinksHolder name="receipient" onChange={handleChange} options={["Deji", "Ade", "Bimpe", "Simi"]} />
                        <textarea placeholder="message goes here.."></textarea>
                        <button>send message</button>
                     </form>

                     <p>Codes for the above form.</p>
                     <pre className="html-pre">

                     <FuncVar params="e" name="handleChange">
                        {jsVarName("let", "name")} = e.target.name;<br></br>
                        {jsVarName("let", "value")} = e.target.value;<br></br>
                     </FuncVar>
                        <ClassTag name="form" val="form-block">
                            <Tag name="h4" sp={2}>Send Message</Tag>
                            <SemiMultiAttrTag name="LinksHolder" attr={{name: "receipient", onChange: "handleChange", 
                            options:'["Deji", "Ade", "Bimpe", "Simi"]'}} sp={2} c />
                            <MultiAttrTag name="textarea" attr={{placeholder: "message goes here.."}} sp={2} />
                            <IdTag name="button" val="send" sp={2}>send message</IdTag>
                        </ClassTag>
                     </pre>

                     
                </article>

                <article id="h-form-password">
                    <h2>PasswordField</h2>
                    <p>
                        PasswordField as the name implies is an HTMLInputElement - {HtmlAttr("input")}
                         with {HtmlAttr("type")} = {HtmlVal("password")}. The visibility states of the field
                         makes it unique and hence could be considered as being secured. It takes {HtmlAttr("name")}, 
                         {HtmlAttr("onChange")}, {HtmlAttr("required")} and {HtmlAttr("placeholder")}. By now, we already knew that all children of a form take
                         the {HtmlAttr("name")} and {HtmlAttr("onChange")} attributes seriously.

                         See example below..
                    </p>
                    <ImageText src={Icons.bell} color={Colors.main}>
                        SVG Icon Credits: <b>
                            <a href="https://iconmonstr.com">https://iconmonstr.com</a>
                        </b>
                    </ImageText>
                    <form  className="form-block">
                        
                        <PasswordField onChange={handleChange} name="password" placeholder="password" />
             
                        <pre className="html-pre">
                        <SemiMultiAttrTag name="PasswordField" 
                        attr={{onChange: "handleChange", name: "password", placeholder: "password"}}
                        cc={[1,0,0]} />
                        
                        </pre>
                   
                        </form>
                    <pre></pre>
                </article>
                
                <article id="h-form-image">
                    <h2>ImageField</h2>
                    <p>This is an all-in-one component that adds an <span className="html-tag">image</span> icon and takes care of the <span className="html-tag">input</span>
                    <span className="html-tag">select</span>, and the <span className="html-tag">textarea</span> form fields.abs
                    Just like what you would expect, it takes <span className="html-attr">onChange, src, data, name, type, placeholder, required, tag and value</span> attributes
                    All attributes except the <span className="html-attr">onChange</span> and <span className="html-attr">name</span> attributes are optional.
                    The <span className="html-attr">src</span> takes image path, <span className="html-attr">data</span> is a wrapper for {HtmlVal("data-type")}, <span className="html-attr">name</span>
                     helps map field values, <span className="html-attr">type</span> is peculiar to the <span className="html-attr">input</span> field,
                     <span className="html-attr"> placeholder</span> handles the field intent, <span className="html-attr">required</span> makes sure field's value ain't null and it takes false as default,
                     <span className="html-attr"> tag</span> states field type- input, select or textarea and it takes i, p, s or t for input, password, select or textarea respectively, finally...
                     <span className="html-attr">value</span> attribute takes in a default value for the field. 
                    See example below..
                    </p>

                    <h5>Input</h5>

                    <ImageField onChange={handleChange} src={Icons.elink} placeholder="webLink" />

                    <pre className="html-pre">
                        <SemiMultiAttrTag name="ImageField" attr={{onChange: "handleChange", src: "{Icons.elink}", placeholder: "webLink"}} cc={[1, 1, 0]}/>
                    </pre>

                    <h5>Input Number</h5>

                    <ImageField onChange={handleChange} src={Icons.elink} type="number" value="07030890313" />

                    <pre className="html-pre">
                        <SemiMultiAttrTag name="ImageField" attr={{ onChange: "handleChange", src: "{Icons.elink}", type: "number", value: "07030890313"}} cc={[1, 1, 0, 0]} />
                    </pre>

                    <h5>Input Date</h5>

                    <ImageField onChange={handleChange} src={Icons.download} type="date" />

                    <pre className="html-pre">
                        <SemiMultiAttrTag name="ImageField" attr={{ onChange: "handleChange", src: "{Icons.download}", type: "date"}} cc={[1, 1, 0]} />
                    </pre>
                    <h5>Input Password</h5>

                    <ImageField onChange={handleChange} src={Icons.lock} name="password2" placeholder="password" tag="p" />

                    <pre className="html-pre">
                    <SemiMultiAttrTag name="ImageField" 
                    attr={{onChange: "handleChange", src: "Icons.lock", name: "password2", placeholder: "password", tag: "p"}}
                    cc={[1,1,0,0,0]} />
                    </pre>
                    <h5>Select</h5>

                    <ImageField tag="s" onChange={handleChange} src={Icons.bell}>
                        <option value="Simi">Simi</option>
                        <option value="Ade">Ade</option>
                        <option value="Deji">Deji</option>
                    </ImageField>

                    <pre className="html-pre">
                        <MultiAttrTag name="ImageField" attr={{ onChange: "handleChange", src: "{Icons.bell}", tag: "s"}} cc={[1, 1, 0]} >
                            <MultiAttrTag name="option" attr={{value: "Simi"}} sp={2}>Simi</MultiAttrTag>
                            <MultiAttrTag name="option" attr={{value: "Ade"}} sp={2}>Ade</MultiAttrTag>
                            <MultiAttrTag name="option" attr={{value: "Deji"}} sp={2}>Deji</MultiAttrTag>
                        </MultiAttrTag>
                    </pre>

                    <h5>Textarea</h5>

                    <ImageField onChange={handleChange} src={Icons.download} placeholder="Type in here.." tag="t"/>

                    <pre className="html-pre">
                        <SemiMultiAttrTag name="ImageField" attr={{ onChange: "handleChange", src: "{Icons.download}", placeholder: "Type in here..", tag: "t"}} cc={[1, 1, 0, 0]} />
                    </pre>
                
                    <h5>Using React Icons</h5>
                        <pre className="html-pre">
                         import {"{"}DiReact{"}"} from 'react-icons/di';
                         
                        <SemiMultiAttrTag name="ImageField" attr={{ onChange: "handleChange", src: "<DiReact />", placeholder: "Type in here.."}} cc={[1, 1, 0]} />
                        </pre>
            
                    <ImageField onChange={handleChange} src={<DiReact />} placeholder="Type in here.." />

                </article>

                <article id="h-form-button">
                    <h2>ButtonLoader</h2>

                    <p>The ButtonLoader helps control helps showcase loading, disables and animates itself once clicked.
                    It has a method called <span className="js-meth">toogleState</span> which is responsible for toggling between the 
                    active and Inactive states of the button. This method will be automatically called if the <span className="html-attr">onClick </span>
                    attribute is added to the <span className="html-tag">ButtonLoader</span> and its value implemented on the form page.
                    ButtonLoader does not monitor the validity of a form for simplicity sakes, hence it is advised that a form page implements
                    the <span className="js-meth">onInvalid</span> event of the form handler and invokes then invokes the <span className="js-meth"> toogleState </span> 
                    to switch from inactive state to the active state for resubmission after performing neccessary form corrections. <br></br>
                    Complicated??????.......Nah!!!!!! lol.
                    Click on the button below to toggle from active to inactive state...the button timesout from inactive back to active state in 2secs;
                    </p>
                    <ImageText src={Icons.bell} color={Colors.main}>
                            Animation credit: <b><a href="https://www.loading.io">www.loading.io</a></b>
                        </ImageText>
                        
                        <ButtonLoader onClick={handleButtonClicked}>ButtonLoader</ButtonLoader>

                        <pre className="html-pre">
                        <FuncVar name="handleButtonClicked" params="toggleState" sp={10}>
                            <Meth name="setTimeout" bparam={2000}>
                                toggleState();
                            </Meth>
                        </FuncVar>
                            <MultiAttrTag name="ButtonLoader" attr={{onClick: "handleButtonClicked"}} c>ButtonLoader</MultiAttrTag>
                        </pre>
                        
                        <p>It can also take an extra icon image..In the example below, first ButtonLoader takes the {HtmlAttr("src")} but without the {HtmlAttr("rtl")} attribute while,
                        the second ButtonLoader takes both {HtmlAttr("src")} and {HtmlAttr("rtl")} attributes.
                        </p>
                        
                        <ButtonLoader onClick={handleButtonClicked} src={Icons.elink}>ButtonLoader</ButtonLoader>
                        <pre className="html-pre">
                        <MultiAttrTag name="ButtonLoader" attr={{onClick: "handleButtonClicked", src: "Icons.elink"}} cc={[1, 1]} >ButtonLoader</MultiAttrTag>
                        </pre>
                       
                        <ButtonLoader rtl onClick={handleButtonClicked} src={Icons.elink}>ButtonLoader</ButtonLoader>
                        <pre className="html-pre">
                        <MultiAttrTag name="ButtonLoader" attr={{onClick: "handleButtonClicked", src: "Icons.elink", rtl: ""}} cc={[1, 1, 0]} >ButtonLoader</MultiAttrTag>
                        </pre>
                        </article>
                    
                <article id="h-form-search">
                <h2>FormSearch</h2>
               
                <p>Use FormSearch to search contents in a page or in the database. It implements the
                {HtmlAttr("onChange")} event and fires it while a user types in the field and returns the value being typed to your form page.
                It is also pertinent that you add the {HtmlAttr("onInputResults")} and the {HtmlAttr("onSelectedSearch")} method attributes.
                See example below..
                </p>

                <pre className="html-pre">
                    <MethJS name="constructor">
                        {jsThis("state")} = {jsObj({searchResults: '[{"id1": "data1"}, {"id2": "data2"}]'})}
                    </MethJS>
                    
                    <FuncVar2 name="onSearchInputs" params="value" />
                    <br></br>
                    <FuncVar2 name="onSelectedSearch" params="id, value" />
                    
                    
                    <SemiMultiAttrTag name="FormSearch" 
                    attr={{onChange: "onSearchInputs", onInputResults: "this.state.searchResults", onSelectedSearch: "onSelectedSearch"}} c />
                </pre>

                <h4>onChange</h4>
                <p>
                    The onChange handler is called each time the search field receives an input by the user.
                    You would be expected to take the {jsVar("value")} param passed into the function for your backend search.
                    Upon results arrival from the backend invoke {jsThis("setName({searchResults: backend results go here})")} 
                    to set a new value to the searchResults state. 
                   
                </p>

                <ImageText src={Icons.note} color={Colors.main}>
                searchResults can only take an {jsVar("array")} of {jsVar("JSON")} as seen above.. e.g {jsObj({searchResults: '[{"id1": "data1"}, {"id2": "data2"}]'})}
                 {jsVar("id")} represents the backend unique key for fetching purposes and the {jsVar("data")} represents 
                 your searched strings or values which can be optionally styled before forwarding it to the FormSearch component.
                </ImageText>
                <h4>onInputResults</h4>
                <p>Since {jsThis("setName({searchResults: backend results go here})")} is to be called upon results arrival
                 this handler passes the new {jsVar("state")} or results into the FormSearch for a display of the result's list.
                 On arrival into the FormSearch Component, an {jsVar("event")} handler which listens for a click event from the user will be automatically assigned to each result.</p>
                
                 <h4>onSelectedSearch</h4>
                 <p>This function is fired whenever a user selects or clicks from a list of results passed through the {jsVar("onInputResults")} 
                 .It returns the {jsVar("id")} and {jsVar("data")} of the clicked result. You could make a GET request back to the server with the id to showcase a full result of the chunk that was earlier displayed.</p>
                 
                 <p>Here comes the example...</p>
                 <ImageText src={Icons.bell} color={Colors.main}>You wouldn't wanna search our database right??...lol.. nevertheless, an {jsVar("Array")} of items had been created to simulate the FormSearch operations...I gat u.. You can either 
                {HtmlTag("Search for:")} Deji, Rotimi, Abbey, Ayo or Kay. Then click on an item on the search result.</ImageText>
                 
                 <div>
                {searchSelect.length > 1? <div>Search Results: <br></br>ID {searchSelect[0]}: <span>{searchSelect[1]}</span></div>: ""}
                <br></br></div>

               <FormSearch type={1} onChange={onSearchInputs} onInputResults={searchResults} onSelectedSearch={onSelectedSearch} />
                           
                 <pre className="html-pre">
                    <SemiMultiAttrTag name="FormSearch" attr={{type: "1", onChange: "this.onSearchInputs", 
                onInputResults: "this.state.searchResults", onSelectedSearch: "this.onSelectedSearch"}} c />
                 </pre>
     
                 <h4>FormSearch Type</h4>
                 <p>In the above example the FormSearch component has the {HtmlAttr("type")}= {HtmlVal("0")} attribute - value
                 . Eventhough this was used, the FormSearch can also take {HtmlAttr("type")}= {HtmlVal("0")}
                    The {HtmlAttr("type")}= {HtmlVal("1")} (default setting..no declaration of {HtmlAttr("type")}) eliminates traveling back and forth to get search lists. Hence, the arrow icon should be used to get search results.
                    The {HtmlAttr("type")}= {HtmlVal("0")} simulates a real-time search engine.. Play with both to identify key differences.
                    </p>
                    <br></br>
                 <ImageText src={Icons.bell} color={Colors.main}>Watchout! for FormSearch v2.. It should help reduce travelling 
                 back and forth by caching {jsVar("only")} trusted results..</ImageText>
                 
            </article>

                <article id="h-form-one-column">
                    <h2>One Column Form Layout</h2>
                    <p>Required: Just a root container with {HtmlAttr("className")} = {HtmlVal("form-block")}</p>
                    <form className="form-block">
                        <label className="on">Username</label>
                        <input type="text" />

                        <label className="on">Email</label>
                        <input type="email" />
                        <label className="on">Salutation</label>
                        <select>
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <label className="on">Message</label>
                        <textarea></textarea>
                    </form>

                    <pre className="html-pre">
                        <ClassTag name="form" val="form-block">
                            <ClassTag name="label" val="on" sp={2}>Username</ClassTag>
                            <SemiMultiAttrTag name="input" attr={{type: "text"}} sp={2}/>
                            <br></br>
                            <ClassTag name="label" val="on" sp={2}>Email</ClassTag>
                            <SemiMultiAttrTag name="input" attr={{type: "email"}} sp={2}/>
                            <br></br>
                            <ClassTag name="label" val="on" sp={2}>Salutation</ClassTag>
                            <Tag name="select" sp={2} b>
                                <Tag name="option" sp={4}></Tag>
                                <Tag name="option" sp={4}>Male</Tag>
                                <Tag name="option" sp={4}>Female</Tag>
                            </Tag>
                            <ClassTag name="label" val="on" sp={2}>Message</ClassTag>
                            <Tag name="textarea" sp={2}></Tag>
                        </ClassTag>
                    </pre>

                    
                </article>

                <article id="h-form-two-column">
                <h2>Two Columns Form Layout</h2>
                <p>Required: A root container with {HtmlAttr("className")} = {HtmlVal("form-block")} 
                and a sub container with {HtmlAttr("className")} = {HtmlVal("form-inline")} </p>
                <form className="form-block">
                <div className="form-inline">
                    <label className="on">Username</label>
                    <input type="text" />
                </div>
                <div className="form-inline">
                    
                    <label className="on">Email</label>
                    <input type="email" />
                </div>
                <label className="on">Message</label>
                <textarea></textarea>
            </form>

                </article>

                <article id="h-form-example">
                    <h2>Form Example</h2>
                    <p>Tryna submit without fillin all fields..then submit after filling all fields and 
                    await feedback in 3secs.</p>
                    <FormExample />

                    <h2>Form Example 2</h2>
                    <p>Tryna use the add button, fill all fields and submit.</p>
                    <AddField />
                </article>

            </article>
            <div>{sw}</div>
            
        </section>
    );
}





class FormExample extends Component {

    constructor(props){
        super(props);
        this.state = {username: "", password: "password", country: "", message: "",
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
    handleInpChange = (e)=>{
        console.log(e.target);
        let name = e.target.name;
        let value = e.target.value;
        console.log(value);
        /*
         update this.fields
        */
        this.fields[name] = value;

        /**
         * set form state
         */
        this.setState({[name]: value});
    }

    /**Validate that user fills all fields */
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
                <h3>Simple Form</h3>
            <CloseableInfo  type={this.state.closeableType} info={this.state.closeabelMsg} onChange={this.changeCloseable} />

                <Consumer>
                    {({alert, confirm}) => (
                    <form className="form-block" onSubmit={this.handleSubmit.bind(null, alert, confirm)}>

                        <div className="form-inline">
                            <ImageField data="user" name="username" onChange={this.handleInpChange} src={Icons.user} type="text" placeholder="Username" /> 
                        </div>

                        <div className="form-inline">
                            <ImageField name="password" tag="p" onChange={this.handleInpChange} src={Icons.lock} placeholder="Password" />
                        </div>

                        <ImageField name="country" tag= "s" onChange={this.handleInpChange} src={Icons.map} >
                            <option value="">Choose Country</option>
                            <option>Nigeria</option>
                            <option>Europe</option>
                        </ImageField>
                        
                        <ImageField name="message" tag= "t" onChange={this.handleInpChange} src={Icons.modified} placeholder="Type here.." />
                        
                        <ButtonLoader src={Icons.elink} active={this.state.btnAnim}>Submit</ButtonLoader>
            
                    </form>
        
                    )}
                </Consumer>
            </div>
    
        );
    }
}


class AddField extends Component {

    constructor(props){
        super(props);
        this.state = {extraFieldname:"phone", extraFields: [], extraCount: 0, result: ""}
        /**
         * create an empty field to receive all field values..
         */
        this.fields = {};
    }

    
    /**
     * metthod called by the addphone label.
     * it creates new and unique state properties by incrementing and 
     * appending extraCount to new property name, and add new name into
     * an array. on setState, app re-renders with new properties in the state object to create 
     * extra fields.
     */
    addFileds = ()=>{
        
        this.setState(state => {
            // increment extraCount
            let count = state.extraCount+1;
            // create new property name
            let name = state.extraFieldname+count;
            //update state obj.
            return {[name]: "", extraFields: state.extraFields.concat(name), extraCount: count}
        })
        
    }

    handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        /**
         * add and updates only fields value not equal to extraField.
         * extrafields would be included inside onHandleSubmit with comma seperation.
         */
        if(!name.includes(this.state.extraFieldname)){
            this.fields[name] = value;
        }
        this.setState({[name]:value});
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        //call methods to add extra fields to this.fields
        let fields = this.getAllFields();
        this.setState({result: JSON.stringify(fields)});
        //sendToServer(url, fields);
    }

    getAllFields = ()=>{
        let fieldValues = "";
        let field = this.state.extraFieldname;
        /**
         * convert object to array and fetch only prop with extrafieldname
         * append it to variable fieldValues with comma seperation.
         * note: seperation technique should be made complex if ur field value would take comma 
         * ordinarily e.g.. if a user types under the phone field 070,080,090. since comma is used here
         * ur seperation should take another char or modes of 3-4 chars to alley confusion at the backend
         */
        Object.entries(this.state).forEach(([k, v]) => {
            if(k.includes(field) && v !== ""){
                fieldValues +=`${v},`;
            }
        });
        //remove the last comma
        fieldValues = fieldValues.substring(0, fieldValues.length-1);
        //append extra properties to the properties in this.fields
        let newField = Object.assign(this.fields, {[field]: fieldValues});
        return newField;
    }
    render() {
      
        return (
            <div className="cards" id="h-form-example2">
            <h3>Simple Extra Fields Form</h3>
            <form className="form-block" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <ImageField onChange={this.handleChange} name="name" value={this.state.name} placeholder="name" />

            <label>Email</label>
            <ImageField onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder="name" />

            <label>Phones</label>
            <ImageField type="number" onChange={this.handleChange} name="phone" value={this.state.phone} placeholder={this.state.extraFieldname} />

            <div className="form-extra-fields">

                <div className="form-extras">
                    {
                        /**
                         * upon redering properties key in the exreafields array creates extra fields
                         * take note of class names and tags for design purposes.
                         */
                        this.state.extraFields.map((name, i) => (
                        <ImageField type="number" onChange={this.handleChange} key={i} name={name} value={this.state.name} placeholder={this.state.extraFieldname} />
                    ))}
                </div>

                <span onClick={this.addFileds} className="form-add-field" >add phone</span>
            </div>
            <div>{this.state.result}</div>
            <br></br>
            <ButtonLoader active={false}>Submit</ButtonLoader>
                
        </form>
    
            </div>
           );
    }
}

export default Forms;