import React, { useContext, useState } from 'react';
import { SemiTag, Tag, HtmlAttr, MultiAttrTag, HtmlTag, SemiMultiAttrTag, HtmlVal, ClassTag } from '../../ui/Tags';
import { Pad, jsVar, jsVar2, FuncVar, FuncVar2, jsVarName, jsMeth, method, jsThis, Method, Func, Consumers, Method2, jsObj } from '../../ui/JS';
import {AppContext} from './../../Provider'
import ImageText from '../../ui/ImageText';
import { Icons, Colors, Link } from '../../constant';
import CloseableInfo, { SUCCESS } from '../../ui/CloseableInfo';
import AutoCloseableInfo from '../../ui/AutoCloseableInfo';
import ViewsHolder, {View, CENTER} from './../../ui/ViewsHolder';
import { FaReact, FaDev, FaCloudDownloadAlt } from "react-icons/fa";
import './Component.css';
import TabPane, { Pane } from '../../ui/TabPane';
import {HP} from './../../Hanspet.js';
import FormViewCalendar from './../../ui/FormViewCalendar';
function Components(props) {
    
    

    return(
        <section id="l-comp">
            <Dialogue />
            <Closeable />
            <AutoCloseable />
            <ViewHolder />
            <TabsPane />
            <CalendarForm />
          </section>
    );
}

export default Components;

function Dialogue(){
    const context = useContext(AppContext);

    const callbackConfirm = ()=>{
        context.alert("Thanks for checking..");
    }

    return(
        <article id="comp-dialog">
        <h1>Dialog</h1>
        <p>The Dialog component has two children component- Alert and Confirm components. It 
        could be used to show feedback after performing an action or couple of actions.</p>
        <p>It expected that the component would be used in any of your activity or page hence,
         for convienient reasons, a Dialog component should  be implemented side-by-side other 
         components inside the {jsVar("render")} method of your root component.
         example below.. 
        </p>

        <pre className="html-pre">
              <FuncVar name="export App">
                <Pad sp={10}>
                    <FuncVar2 name="render" sp={2}>
                    <Pad sp={10}>
                        <Tag>
                            <SemiTag name ="Forms" sp={2} />
                            <SemiTag name ="Dialog" sp={2} />
                        </Tag>
                    </Pad>
                    
                </FuncVar2>
                </Pad>
                
              </FuncVar>  
        </pre>

        <h2>SetUp</h2>
        <p>
            The {jsVar("Dialog")} component must be encapsulated in the {jsVar("Provider")} component 
            irrespective of its placement in your activities. From the above example.. embed everything 
            in the above example inside {jsVar("Provider")} tag inside the {jsVar("render")} function. The {jsVar("Provider")} is a context 
            file that provides all methods and the state needed by the {jsVar("Dialog")} component.
        </p>

        <pre className="html-pre">
            <FuncVar name="export App">
              <Pad sp={10}>
                  <FuncVar2 name="render" sp={2}>
                  <Pad sp={10}>
                      <Tag name="Provider">
                          <SemiTag name ="Forms" sp={2} />
                          <SemiTag name ="Dialog" sp={2} />
                      </Tag>
                  </Pad>
                  
              </FuncVar2>
              </Pad>
              
            </FuncVar>  
      </pre>
    
      <h2>implementation</h2>
      <p>
            Here we are...the complex but easy part of the component.. By now you must have been thinking 
            that if the implementation requires a {jsVar("Provider")}, then it must have a {jsVar("Consumer")}...oh! yea..It does.
      </p>
      <p>
        The {jsVar("Consumer")} component or object takes an object of methods. It takes two object key- {jsVar("alert")} and {jsVar("confirm")}. 
        While {jsVar("alert")} method takes one parameter- {HtmlAttr("alert")}({jsVarName("String", "message")}), the {jsVar("confirm")} method takes 
        {HtmlAttr("confirm")}({jsVarName("String", "message")}, {jsVarName("Object", "callback")}). The {jsVar("message")} param takes the info to be displayed and the 
        the {jsVar("callback")} takes the method to be invoked if an option is accepted.
      </p>
      <p>
        Think about a form submission.. you might wanna display to a user upon the click of a submit button if 
        he/she is sure of submission. It is expected that you had kept a {jsVar("function")} to be fired as soon as the user answers yes or 
        proceed to submit. The kept {jsVar("function")} should encapsulate steps to be followed after the click. This 
        special {jsVar("function")} or {jsVar("callback")} is to be used inside the {jsVar("confirm")} method. 
    </p>
    <p>
    The {jsVar("Consumer")} component should reside inside the {jsVar("render")} method of your {jsVar("React")} component if you will be using both methods. Otherwise,
    use the {HtmlAttr("static")} typed variable called {jsVar("contextType")} and assign it {jsVar("AppContext")} if you are using a {jsVar("class")} component else, 
    use {jsVarName("const", "value")} - optional variable name and assigns it {method("useContext", "AppContext")}.  
    </p>
       
    <ImageText src={Icons.bell} color={Colors.main}>Imagine your implementation code resides in the {jsVar("<Forms /> component")}</ImageText>

       <h3>Alert Example- Functional Component</h3>
            
            <button onClick={()=>context.alert("Hey! whad up??")}>Click Me - alert</button>
        
            <pre className="html-pre">
                {jsVarName("const", "context")} = {method("useContext", "AppContext")}
                <FuncVar name="handleClick">
                    <Pad sp={10}>
                        {jsVar2("context")}.{method("alert", "\"Hey! whad up??\"")}
                    </Pad>
                </FuncVar>
                <MultiAttrTag name="button" attr={{onClick: "handleClick"}} c>Click Me - alert</MultiAttrTag>
            </pre>
        <h3>Confirm Example- Functional Component</h3>

            <button onClick={()=>context.confirm("Sure about leaving??", callbackConfirm)}>Click Me - confirm</button>
        
            <pre className="html-pre">
                {jsVarName("const", "context")} = {method("useContext", "AppContext")}
                <FuncVar name="callback">
                    <Pad sp={10}>
                        {jsVar2("context")}.{method("alert", "\"Thanks for checking..\"")}
                    </Pad> 
                </FuncVar>
                <FuncVar name="handleClick">
                    <Pad sp={10}>
                        
                        {jsVar2("context")}.{<Method name="confirm" params={["\"Sure about leaving??\"", jsMeth("callback")]} />}
                    </Pad>
                </FuncVar>
                <MultiAttrTag name="button" attr={{onClick: "handleClick"}} c>Click Me - confirm</MultiAttrTag>
            </pre>

            <h3>Alert Example- Class Component</h3>
            <button onClick={()=>context.alert("Hey! whad up??")}>Click Me - alert</button>
        
            <pre className="html-pre">
                {jsVarName("static", "contextType")} = {jsVar("AppContext")}
                <FuncVar name="handleClick">
                    <Pad sp={10}>
                        {jsThis("context")}.{method("alert", "\"Hey! whad up??\"")}
                    </Pad>
                </FuncVar>
                <MultiAttrTag name="button" attr={{onClick: "this.handleClick"}} c>Click Me - alert</MultiAttrTag>
            </pre>

            <h3>Confirm Example- Class Component</h3>
            <button onClick={()=>context.confirm("Sure about leaving??", callbackConfirm)}>Click Me - confirm</button>
        
            <pre className="html-pre">
                {jsVarName("static", "contextType")} = {jsVar("AppContext")};
                <FuncVar name="callbackConfirm">
                    <Pad sp={10}>
                        {jsThis("context")}.{method("alert", "\"Thanks for checking..\"")}
                    </Pad>
                </FuncVar>
                <FuncVar name="handleClick">
                    <Pad sp={10}>
                        {jsThis("context")}.<Method name="confirm" params={["\"Sure about leaving??\"", jsThis("callbackConfirm")]} />}                               
                    </Pad>
                </FuncVar>
                <MultiAttrTag name="button" attr={{onClick: "handleClick"}} c>Click Me - alert</MultiAttrTag>
            </pre>
      
            <h3>Alert and Confirm Example- Class Component (Render)</h3>

            <pre className="html-pre">
                {jsVarName("static", "contextType")} = {jsVar("AppContext")};
                
                <FuncVar name="handleClick" params="alert, confirm">
                    <Pad sp={10}>
                    <FuncVar name="callbackConfirm">
                    <Pad sp={10}>
                        {method("alert", "\"Thanks for checking..\"")}
                    </Pad>
                </FuncVar>
                        <Method name="confirm" params={["\"Sure about leaving??\"", jsMeth("callbackConfirm")]} />}                               
                    </Pad>
                </FuncVar>
                <Func name="render">
                    <Pad sp={10}>
                        <Method2 name="return">
                            
                            <Consumers name="Consumer" params={[jsVar("alert"), jsVar("confirm")]} >
                            
                                <MultiAttrTag 
                                name="button" 
                                attr={{onClick: "()=>this.handleClick(alert, confirm)"}} c>
                                Click me
                                </MultiAttrTag>
                            
                            </Consumers>
                        </Method2>
                    </Pad>
                </Func>
            </pre>
      
  </article>

    );
}

function Closeable(){
   
    const [msg, setMsg] = useState("I am closeable.");

    const closeInfo = ()=>{
        setMsg("");
    }

    
    return(
        <article id="comp-closeable">
            <h1>CloseableInfo 
            <a href={Link.download+"CloseableInfo.js"} className="update-download-icon" download>
                <FaCloudDownloadAlt />
            </a>
            </h1>
            <p>While most times the implementation of the {HtmlTag("Dialog")} could be a lot stressful, the  
             {HtmlAttr("CloseableInfo")} offers a painless approach. It is dynamic as well as static. It can be used 
             to show server, user inputs responses and can be used at {jsVar("ComponentDidMount")} to display some prompt text. 
             It also has a closing element at its top right corner to remove
             or it from the view. It does this by setting the value it displays to an empty {jsVar("String")} or null.
            </p>
            <p>It comes in three(3) different view types by color and intents-
             {jsVar("SUCCESS, WARNING, DANGER")}. For example, if the response to be displayed is an error message, 
             you would expected to use the {HtmlAttr("type")} = {"{"}{HtmlVal("DANGER")}{"}"}.
             </p>
            <p>
            It takes a non-optional {HtmlAttr("onChange")} attribute that sets the value of its info variable to null or empty string.
            It also takes an {HtmlAttr("info")} attribute that accepts a native variable with some text to be displayed.

            </p>
            <CloseableInfo onChange={closeInfo} type={SUCCESS} info={msg} />
            <pre className="html-pre">
            <code>import CloseableInfo, {"{"} SUCCESS {"}"} from './ui/CloseableInfo';</code>
            <br></br>
            <br></br>
                {jsThis("state")} = {jsObj({msg: "\"I am closeable\""}, 1)}

                <FuncVar name="closeInfo">
                    <Pad sp={10}>
                    {method("setState", jsObj({msg: "\"\""}, 1))}
                    </Pad>
                    
                </FuncVar>
                <SemiMultiAttrTag name="CloseableInfo" attr={{onChange: "closeInfo", type: "SUCCESS", info: "msg"}} c />
            </pre>


        </article>
    );
}

function AutoCloseable(){
   
    const [amsg, setAmsg] = useState("");

    const closeInfo = ()=>{
        setAmsg("");
    }

    const showInfo = ()=>{
        setAmsg("I am Auto closeable");
    }
    return(
        <article id="comp-auto-closeable">
            <h1>AutoCloseableInfo 
            <a href={Link.download+"AutoCloseableInfo.js"} className="update-download-icon" download>
                <FaCloudDownloadAlt />
            </a>
            </h1>
            <p>It takes all the attributes of {HtmlAttr("Closeable")} and adds an optional {jsVar("close")} attribute which takes timeout in milliseconds.</p>
           

            <ImageText src={Icons.note} color={Colors.main}>
            The component timeout can be delayed while the cursor is placed on the info..however, it 
            resumes its default or custom timeout on mouse out
            </ImageText>
            <p>Click on the button below to show AutoCloseable.</p>
            <AutoCloseableInfo onChange={closeInfo} close={4000} info={amsg} />    
            <button onClick={showInfo}>Show AutoCloseable</button>

            <pre className="html-pre">

            <br></br>
            <br></br>
                {jsThis("state")} = {jsObj({msg: "\"\""}, 1)}
                <br></br>
                <Func name="closeInfo">
                    <Pad sp={10}>
                    {method("setState", jsObj({msg: "\"\""}, 1))}
                    </Pad>
                    
                </Func>
<br></br>
                <Func name="showInfo">
                    <Pad sp={10}>
                    {method("setState", jsObj({msg: "\"I am Auto closeable\""}, 1))}
                    </Pad>
                    
                </Func>
                <br></br><br></br>
                <MultiAttrTag name="button" attr={{onClick: jsThis("showInfo")}} c>Show AutoCloseable</MultiAttrTag>

                <SemiMultiAttrTag name="AutoCloseableInfo" attr={{onChange: "closeInfo", close: "4000", info: "msg"}} c />
            </pre>


        </article>
    );
}

function ViewHolder(){

    return(
        <article id="comp-views-holder">

            <h1>ViewsHolder 
                <a href={Link.download+"ViewsHolder.js"} className="update-download-icon" download>
                    <FaCloudDownloadAlt />
                </a>
            </h1>

            <p>Just like the name implies a {HtmlAttr("ViewHolder")} holds views together and provides 
            a set of labels with {jsVar("onClick")} functions to swith its views.</p>

            <p>It takes two {jsVar("props")} which are {HtmlAttr("type")}-helps position the labels 
            and {HtmlAttr("labels")}- the label values.</p>

            <p>{jsVar("Props")} of name {HtmlAttr("type")} could be either {jsVar("CENTER")} or 
            {jsVar("BOTTOM")} which is the default. The Cenral position ignores the label values. {jsVar("Props")} of name {HtmlAttr("labels")} takes
             an {jsVar("array")} of length two. e.g {HtmlVal('["signup", "signin"]')}. Labels default values 
             are next and prev.</p>

             <p>It takes only {HtmlAttr("View")} component as its only children in order to seperate 
             each screen into sections. {HtmlAttr("View")} inturn takes the desired elements or componenents 
             as a child.</p>

             <p>Its takes sizing from the child elements wrapped by the {HtmlAttr("View")} component. It renders incorrectly if size properties- width and height are not found in the children view.</p>
             
             
             <ImageText src={Icons.bell} color={Colors.main}>
                If you have just 2 screens to show, e.g. a Login screen and a Sign up page, you should wrap 
                each screen in a {HtmlAttr("View")} component and all {HtmlAttr("View")}s should be wrapped under 
                the {HtmlAttr("ViewsHolder")}.
             </ImageText>


            <h3>Example</h3>

            <pre className="html-pre">

                <MultiAttrTag name="div" b>
                    <MultiAttrTag name="ViewsHolder" attr={{labels: "[forward, backward]"}} sp={2} c b>
                        <MultiAttrTag name="View" sp={4} b>
                        <SemiMultiAttrTag name="FaReact" sp={6} b />
                        </MultiAttrTag>
                        <MultiAttrTag name="View" sp={4} b>
                            <SemiMultiAttrTag name="FaDev" sp={6} b />
                        </MultiAttrTag>
                    </MultiAttrTag>
                </MultiAttrTag>
            </pre>

            <div className="cards" style={{width: 220, margin: "auto", textAlign: "center"}}>
                <ViewsHolder labels={["forward", "backward"]}>
                    <View>
                        <FaReact style={{width: 200, height: 200}} />
                    </View>
                    <View>
                        <FaDev style={{width: 200, height: 200}} />
                    </View>
                </ViewsHolder>
            </div>

            <h3>Example 2</h3>
            <p>Centralized labels.</p>
            <pre className="html-pre">

                <MultiAttrTag name="div"  b>
                    <MultiAttrTag name="ViewsHolder" attr={{type: "CENTER", labels: "[forward, backward]"}} sp={2} c b>
                        <MultiAttrTag name="View" sp={4} b>
                        <SemiMultiAttrTag name="FaReact" sp={6} b />
                        </MultiAttrTag>
                        <MultiAttrTag name="View" sp={4} b>
                            <SemiMultiAttrTag name="FaDev" sp={6} b />
                        </MultiAttrTag>
                    </MultiAttrTag>
                </MultiAttrTag>
            </pre> 

            <div className="cards" style={{width: 220, height: 210, margin: "auto", textAlign: "center"}}>
                <ViewsHolder type={CENTER}>
                    <View>
                        <FaReact style={{width: 200, height: 200}} />
                    </View>
                    <View>
                        <FaDev style={{width: 200, height: 200}} />
                    </View>
                </ViewsHolder>
            </div>

            
            <h3>Form Example</h3>
            <pre className="html-pre">
            
            <ClassTag name="form" val="form-block" b>
                    <MultiAttrTag name="ViewsHolder"  sp={2} c b>
                        <MultiAttrTag name="View" sp={4} b>
                            ....
                        </MultiAttrTag>
                        <MultiAttrTag name="View" sp={4} b>
                            ....
                        </MultiAttrTag>
                    </MultiAttrTag>
                </ClassTag></pre>

            <form className="form-block cards vh-leave-wrapper" style={{display: "inline-block"}}>
                <ViewsHolder>
                    <View>
                        <div className="vh-leave">
                            <h3>1 of 2</h3>
                            <label>Subject</label>
                            <input placeholder="subject" />
                            <label>Message</label>
                            <textarea placeholder="message"></textarea>
                        </div>
                    </View>                   
                    <View>
                        <div className="vh-leave">                       
                            <h3>2 of 2</h3>
                            <label>Phone</label>
                            <input placeholder="Phone" />
                            <label>Address</label>
                            <textarea placeholder="Address"></textarea>
                        </div>
                    </View>
                </ViewsHolder>
            </form>
        </article>
    )
}

function TabsPane(){

    return(
        <article id="comp-tab-pane">
            <h1>TabPane 
            <a href={Link.download+"TabPane.js"} className="update-download-icon" download>
                    <FaCloudDownloadAlt />
                </a>
            </h1>
            <p>The {HtmlAttr("TabPane")} component holds <b>Pane</b> component, Pane inturn holds your 
            desired views. It positions link(s) at the top of your views to help switch between them.</p>
            <p>The {HtmlAttr("Pane")} component- direct child of the <b>TabPane</b> takes a {HtmlVal("title")} prop 
            that is used in naming its switch link. It renames links anchor serially if a {HtmlVal("title")} prop for the component is {jsVar("undefined")}. </p>
            
            <ImageText src={Icons.bell} color={Colors.main}>
                If three Pane components are used under a TabPane component without titles, the link will be renamed as 
                Link 1, Link 2 and Link 3.
            </ImageText>

            <h3>Pane with titles.</h3>
            
            <pre className="html-pre">
                <MultiAttrTag name="TabPane">
                    <MultiAttrTag name="Pane" attr={{title: "Pane 1"}} sp={3} b>
                        <MultiAttrTag name="h2" sp={6}>Pane One</MultiAttrTag>
                        <MultiAttrTag name="p" sp={6}>lorem....</MultiAttrTag>
                    </MultiAttrTag>
                    <MultiAttrTag name="Pane" attr={{title: "Pane 2"}} sp={3} b>
                        <MultiAttrTag name="h2" sp={6}>Pane Two</MultiAttrTag>
                        <MultiAttrTag name="p" sp={6}>lorem....</MultiAttrTag>
                    </MultiAttrTag>
                    <MultiAttrTag name="Pane" attr={{title: "Pane 3"}} sp={3} b>
                        <MultiAttrTag name="h2" sp={6}>Pane Three</MultiAttrTag>
                        <MultiAttrTag name="p" sp={6}>lorem....</MultiAttrTag>
                    </MultiAttrTag>
                </MultiAttrTag>
            </pre>
            <TabPane>
                <Pane title="Pane 1">
                    <h2>Pane One</h2>
                    {HP.lorem}
                </Pane>
                <Pane title="Pane 2">
                    <h2>Pane Two</h2>
                    {HP.lorem}
                </Pane>
                <Pane title="Pane 3">
                    <h2>Pane Three</h2>
                    {HP.lorem}
                </Pane>
            </TabPane>

            <h3>Pane without titles.</h3>
            
            <pre className="html-pre">
                <MultiAttrTag name="TabPane">
                    <MultiAttrTag name="Pane"  sp={3} b>
                        <MultiAttrTag name="h2" sp={6}>Pane One</MultiAttrTag>
                        <MultiAttrTag name="p" sp={6}>lorem....</MultiAttrTag>
                    </MultiAttrTag>
                    <MultiAttrTag name="Pane"  sp={3} b>
                        <MultiAttrTag name="h2" sp={6}>Pane Two</MultiAttrTag>
                        <MultiAttrTag name="p" sp={6}>lorem....</MultiAttrTag>
                    </MultiAttrTag>
                    <MultiAttrTag name="Pane" sp={3} b>
                        <MultiAttrTag name="h2" sp={6}>Pane Three</MultiAttrTag>
                        <MultiAttrTag name="p" sp={6}>lorem....</MultiAttrTag>
                    </MultiAttrTag>
                </MultiAttrTag>
            </pre>
            <TabPane>
                <Pane>
                    <h2>Pane One</h2>
                    {HP.lorem}
                </Pane>
                <Pane>
                    <h2>Pane Two</h2>
                    {HP.lorem}
                </Pane>
                <Pane>
                    <h2>Pane Three</h2>
                    {HP.lorem}
                </Pane>
            </TabPane>
        </article>
    );
}

function CalendarForm(){

    const[event, setEvent] = useState("");
    const [change, setChange] = useState("");

    const handleChange = (e)=>{
        setChange(`onChange Result: ${JSON.stringify(e)}`);
      }
     
      const handleEvent = (e)=>{
         setEvent(`onEventCreate Result: ${JSON.stringify(e)}`);
      }

      const data = [
        {name: "Visit Sterling Tech", start: "2020-05-15", end: "2020-05-25", description: HP.lorem},
        {name: "Meeting at TAWOL", start: "2020-05-10", end: "2020-05-11", description: HP.lorem},
        {name: "Board Meeting", start: "2020-06-15", end: "2020-06-16", description: HP.lorem},
        {name: "State Works", start: "2020-04-15", end: "2020-04-16", description: HP.lorem}
     ];

    return(
        <article id="comp-form-view-calendar">
            <h1>FormViewCalendar 
            <a href={Link.download+"FormViewCalendar.js"} className="update-download-icon" download>
                    <FaCloudDownloadAlt />
                </a>
            </h1>
            <p>It is called {HtmlAttr("FormViewCalendar")} because it embeds a form that takes event parameter 
            and it can show events created.</p>
            <p>It handles five parameters-{HtmlVal("name")}, {HtmlVal("showForm")}, {HtmlVal("onChange")}, 
            {HtmlVal("onEventCreate")} and {HtmlVal("data")}.</p>

            <p>The {HtmlVal("name")} prop is a form identity for the component. The {HtmlVal("showForm")} takes a {jsVar("boolean")} value 
            to allow user have an access to the form view of the component (default is {jsVar("true")}). 
            The {HtmlVal("onChange")} prop is an handler that is fired each time a date is selected on the component. It returns 
            4 key-value pair data: date, month, year and a target object for name and value. 
            The {HtmlVal("onEventCreate")} is another handler that is fired when a user submit a form. It returns the state of the form 
            namely, name- the event's name, start- event's start date, end- event's end date and description- event's descriptions. 
            Lastly, the {HtmlVal("data")} prop is an array of objects with the kinda data in the state. It should contain a list of created event in this format</p>

            <pre>
            {`[{name: "Visit Sterling Tech", start: "2020-05-15", end: "2020-05-25", description: HP.lorem},
            {name: "Meeting at TAWOL", start: "2020-05-10", end: "2020-05-11", description: HP.lorem},
            {name: "Board Meeting", start: "2020-06-15", end: "2020-06-16", description: HP.lorem},
            {name: "State Works", start: "2020-04-15", end: "2020-04-16", description: HP.lorem}]`};
            </pre>

            <pre className="html-pre">
             <SemiMultiAttrTag name="FormViewCalendar" attr={{name: "formcalendar", showForm: "true", onChange: "this.handleChange", onEventCreate: "onEventCreate", data: "eventData"}} 
             cc={[0,1,1,1,1]}/>
            </pre>
            
            <p>{event}</p>
            
            <p>{change}</p>

            <p>Dates in red are created events.</p>
            <FormViewCalendar onChange={handleChange} name="formCalendar" 
           onEventCreate={handleEvent} data={data} showForm={true}/>
        </article>
    )
}