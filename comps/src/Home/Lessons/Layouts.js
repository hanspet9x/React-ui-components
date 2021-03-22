import React from 'react';
import {ClassTag, OpenTag, CloseTag, Tag, SemiTag} from '../../ui/Tags';
import {HP} from './../../Hanspet';
import './Layout.css';
import ImageText from '../../ui/ImageText';
import {Icons, Colors} from './../../constant';

function Layouts(params) {
    
    return(
        <section>
            <article id="h-container">
                <h1>Layouts</h1>
                <p>All layouts must have a root element called <b>Containers</b>. This could be implemented
                by adding a <span className="html-attr">class</span></p> 
                attribute with a <span className="html-val">container</span> value as seen below.
                
                <pre className="html-pre">
                    <code>
                     <ClassTag name="div" val="container" />
                    </code>
                </pre>
            </article>

            <article id="h-two">
                <h1>Two's</h1>
                <p>Two's are the kinda layouts you might wanna consider each time you wanna have a &nbsp; 
                 <b>two columns</b> kinda design or whenever you wished to spread your contents in two-gummed
                 seperate containers. This could be achieved by specifying <span className="html-val">two</span> 

                   &nbsp;in the <span className="html-attr">class</span> attribute. <br></br>
                 
                 </p>
                 <ImageText  src={Icons.bell} color={Colors.main}>This kinda layout transforms
                 into one column on small devices</ImageText>
                 <div className="container">
                    <div className="two" style={{
                        backgroundColor: "#ccffcc",
                        padding: "90px 0px"
                    }}>First Container</div>
                    <div className="two" style ={{
                        backgroundColor: "#ccccff",
                        padding: "90px 0px"}}>Second Container</div>
                 </div>

                 <p>Code for the above layouts</p>

                 <pre className="html-pre">
                    <OpenTag name="div" attr="className" val="container" />
                     <ClassTag name="div" val="two" sp={2}/>
                     <ClassTag name="div" val="two" sp={2}/>
                    <CloseTag name="div" />
                 </pre>
            </article>
                        
            <article id="h-three">
                <h1>Three's</h1>
                <p>
                        Just like the <b>Two's</b> in its neighbourhood, Three's layout contents in 3 columns.
                        It can be implemented by using..

                        <br></br>

                        
                     </p>

                     <pre className="html-pre">
                        <OpenTag name="div" attr="className" val="container" />

                         <ClassTag name="div" val="three" sp={2}/>
                         <ClassTag name="div" val="three" sp={2}/>
                         <ClassTag name="div" val="three" sp={2}/>

                        <CloseTag name="div" />
                     </pre>
                    <br>
                    </br>

                    <ImageText src={Icons.note} color={Colors.main}>This kinda layout spreads out into three columns on large
                    devices but stacks on small devices. See example below..</ImageText>
                    <div className="container">
                    <div className="three" style={{
                        backgroundColor: "#ccffcc",
                        padding: "90px 0px"
                    }}>First Container</div>
                    <div className="three" style ={{
                        backgroundColor: "#ccccff",
                        padding: "90px 0px"}}>Second Container</div>
                        <div className="three" style ={{
                            backgroundColor: "#ffcccc",
                            padding: "90px 0px"}}>Third Container</div>
                 </div>
                 
            

                
            </article>

            <article id="h-four">
                <h1>Four's</h1>
                <p>
                        Just like the <b>Two's</b> in its neighbourhood, Four's layout contents in 4 columns.
                        It can be implemented by using..

                        <br></br>

                    </p>    
                     
                    <pre className="html-pre">
                        <OpenTag name="div" attr="className" val="container" />

                         <ClassTag name="div" val="four" sp={2}/>
                         <ClassTag name="div" val="four" sp={2}/>
                         <ClassTag name="div" val="four" sp={2}/>
                         <ClassTag name="div" val="four" sp={2}/>
                        <CloseTag name="div" />
                     </pre>
                    <br>
                    </br>

                    <ImageText src={Icons.note} color={Colors.main}>This kinda layout spreads out into four columns on large
                    devices but stacks on small devices. See example below..</ImageText>
                    <div className="container">
                    <div className="four" style={{
                        backgroundColor: "#ccffcc",
                        padding: "90px 0px"
                    }}>First Container</div>
                    <div className="four" style ={{
                        backgroundColor: "#ccccff",
                        padding: "90px 0px"}}>Second Container</div>
                        <div className="four" style ={{
                            backgroundColor: "#ffcccc",
                            padding: "90px 0px"}}>Third Container</div>
                            <div className="four" style ={{
                                backgroundColor: "#ffffcc",
                                padding: "90px 0px"}}>Forth Container</div>
                 </div>
                 
            

                
            </article>
            
            <article id="h-three-one">
                <h1>Three's & One's</h1>
                <p>Three-One and One-Three are special kinda containers that divides the screen into 
                a 65% - 35%. Three-One as the name implies occupies more spaces (65%) 
                than the counterpart One-Three which
                indeed occupies 35% width of the screen. Also, this special container stacks on small devices but spreads out on large devices.</p>
                                See example below..

                                <div className="container">
                                <div className="three-one" style={{
                                    backgroundColor: "#ccffcc",
                                    padding: "90px 0px"
                                }}>First Container</div>
                                <div className="one-three" style ={{
                                    backgroundColor: "#ccccff",
                                    padding: "90px 0px"}}>Second Container</div>
                                    
                             </div>

                <pre className="html-pre">
                <OpenTag name="div" attr="className" val="container" />

                <ClassTag name="div" val="three-one" sp={2}/>
                <ClassTag name="div" val="one-three" sp={2}/>
               <CloseTag name="div" />
                </pre>

                <br></br>

                The containers can also be interchanged. See example below..

                <div className="container">
                                <div className="one-three" style={{
                                    backgroundColor: "#ccffcc",
                                    padding: "90px 0px"
                                }}>First Container</div>
                                <div className="three-one" style ={{
                                    backgroundColor: "#ccccff",
                                    padding: "90px 0px"}}>Second Container</div>
                                    
                             </div>

                <pre className="html-pre">
                <OpenTag name="div" attr="className" val="container" />

                    <ClassTag name="div" val="one-three" sp={2}/>
                    <ClassTag name="div" val="three-one" sp={2}/>
                    <CloseTag name="div" />
                </pre>

                </article>                  
            
            <article id="h-four-one">
                <h1>Four's & One's</h1>
                <p>Four-One and One-Four are special kinda containers that divides the screen into 
                a 70% - 30%. Four-One as the name implies occupies more spaces (70%) than the counterpart one-four whicj
                indeed occupies 30% width of the screen. Also, this special container stacks on small devices but spreads out on large devices.</p>
                                See example below..

                                <div className="container">
                                <div className="four-one" style={{
                                    backgroundColor: "#ccffcc",
                                    padding: "90px 0px"
                                }}>First Container</div>
                                <div className="one-four" style ={{
                                    backgroundColor: "#ccccff",
                                    padding: "90px 0px"}}>Second Container</div>
                                    
                             </div>

                <pre className="html-pre">
                <OpenTag name="div" attr="className" val="container" />

                <ClassTag name="div" val="four-one" sp={2}/>
                <ClassTag name="div" val="one-four" sp={2}/>
               <CloseTag name="div" />
                </pre>

                <br></br>

                The containers can also be interchanged. See example below..

                <div className="container">
                                <div className="one-four" style={{
                                    backgroundColor: "#ccffcc",
                                    padding: "90px 0px"
                                }}>First Container</div>
                                <div className="four-one" style ={{
                                    backgroundColor: "#ccccff",
                                    padding: "90px 0px"}}>Second Container</div>
                                    
                             </div>

                <pre className="html-pre">
                <OpenTag name="div" attr="className" val="container" />

                    <ClassTag name="div" val="one-four" sp={2}/>
                    <ClassTag name="div" val="four-one" sp={2}/>
                    <CloseTag name="div" />
                </pre>

                </article>
            
            <article id="h-layout-conclusion">
                <h1>Layouts Note</h1>
                <p>
                Do not style to alter the sizes of the container's layout children. If altering is required,
                add a styled child to the the container's children. See below to learn how to style the container's child..
                </p>
                <pre className="html-pre">
                <OpenTag name="div" attr="className" val="container" />
                    <OpenTag name="div" attr="className" val="two" sp={2}/> 
                        <Tag name="div" sp={4}> style this child.</Tag>
                    <CloseTag name="div" sp={2}/>
                    <OpenTag name="div" attr="className" val="two" sp={2}/> 
                        <Tag name="div" sp={4}> style this child.</Tag>
                    <CloseTag name="div" sp={2}/>
                <CloseTag name="div" />
            </pre>
               
            <br></br>

            <p>Layouts are nestable.</p>

            <div className="container">
            <div className="two" style={{backgroundColor: "#ccffcc",padding: "40px 0px"}}>               
                <div className="container">
                    <div className="two" style={{backgroundColor: "#ccccff",padding: "30px 0px"}}>                   
                    </div>
                    <div className="two" style ={{backgroundColor: "#ffccff",padding: "30px 0px"}}>               
                    </div>
                </div> 
            </div>
            <div className="two" style ={{backgroundColor: "#ccccff",padding: "40px 0px"}}>
                <div className="container">
                    <div className="two" style={{backgroundColor: "#ff00ff",padding: "30px 0px"}}>                   
                    </div>
                    <div className="two" style ={{backgroundColor: "#00ccff",padding: "30px 0px"}}>               
                    </div>
                </div>
            </div>
            </div>      
         <p>Code for the above layouts</p>

         <pre className="html-pre">
            <OpenTag name="div" attr="className" val="container"/>
                <OpenTag name="div" attr="className" val="two" sp={2}/> 
                    <OpenTag name="div" attr="className" val="container" sp={4}/>
                        <ClassTag name="div" val="two" sp={6}/>
                        <ClassTag name="div" val="two" sp={6}/>
                    <CloseTag name="div" sp={4}/>
                <CloseTag name="div" sp={2}/>
                <OpenTag name="div" attr="className" val="two" sp={2}/> 
                    <OpenTag name="div" attr="className" val="container" sp={4}/>
                        <ClassTag name="div" val="two" sp={6}/>
                        <ClassTag name="div" val="two" sp={6}/>
                    <CloseTag name="div" sp={4}/>
                <CloseTag name="div" sp={2}/>
            <CloseTag name="div" />
         </pre>
            </article>

            <article id="h-layout-example">
                <h1>Layout: Mini Website</h1>
                <div id="mini-web">
                    <div className="container" id="mw-header">
                        <header className="one-four">
                                    <b>Mini</b>
                        </header>
                        <nav className="four-one">
                                <span >Home</span>
                                <span >About</span>
                                <span >Contact</span>
                        </nav>
                    </div>

                    <div className="container" id="mw-msg">
                        <div className="three-one" id="mw-main">
                          {HP.lorem}
                          <br></br>
                          <button>Learn More</button>
                        </div>
                        <div className="one-three">
                           <img src="img/maintenance.png" alt="desc" id="mw-img" />
                        </div>
                    </div>


                </div>

                <pre className="html-pre">
                    <OpenTag name="div" attr="id" val="mini-web" />
                        <OpenTag name="div" attr="className" val="container" sp={2}/>
                            <ClassTag name="header" attr="className" val="one-four" sp={4} b>
                                    <Tag name="b" sp={6}>Mini</Tag>
                            </ClassTag>
                            <ClassTag name="nav" attr="className" val="four-one" sp={4} b>
                                    <Tag name="span" sp={6}>Home</Tag>
                                    <Tag name="span" sp={6}>About</Tag>
                                    <Tag name="span" sp={6}>Contact</Tag>
                            </ClassTag>
                        <CloseTag name="div" sp={2} /> 

                        <ClassTag name="div" attr="className" val="container" sp={2} b>
                            <ClassTag name="div" attr="className" val="three-one" sp={4} b>
                                    <Tag name="div" sp={6} b>
                                        {HP.lorem}
                                    </Tag>
                                    <Tag name="button" sp={6} >Learn More</Tag>
                            </ClassTag>
                            <ClassTag name="div" attr="className" val="three-one" sp={4} b>                                
                                    <SemiTag name="img" sp={6} />
                            </ClassTag>
                        </ClassTag>
                    <CloseTag name="div" />
                </pre>
            </article>
        </section>
    );
}

export default Layouts;