import React from 'react';
import { Icons, Colors, Link } from '../../constant';
import ImageText from '../../ui/ImageText';
import FancyList from '../../ui/FancyList';
import {FaCloudDownloadAlt} from 'react-icons/fa';
import './Update.css';
function Updated() {
    /*
    <ImageText src={Icons.time} color={Colors.main}>
                    <b>27 / 04 / 2020</b>
                </ImageText>
                <ul className="none">
                    <FancyList first>                     
                         <a href="#h-form-image">FormExample</a>
                         <a href={Link.download+"FormExample.js"} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                         </a>                   
                    </FancyList>
                </ul>
    */
    return(
        <section className="updates" id="h-update-page">
            <article>

                <h1>Updates</h1>
                <ImageText src={Icons.time} color={Colors.main}>
                    <b>08 / 05 / 2020</b>
                </ImageText>
                <ul className="none">
                <FancyList >                     
                         <a href="#comp-form-view-calendar" className="label-on">FormViewCalendar</a>
                         <a href={Link.download+"FormViewCalendar.js"} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                         </a>                   
                    </FancyList>
                    <FancyList >                     
                         <a href="#comp-tab-pane" className="label-on">TabPane</a>
                         <a href={Link.download+"TabPane.js"} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                         </a>                   
                    </FancyList>
                </ul>
                <ImageText src={Icons.time} color={Colors.main}>
                    <b>05 / 05 / 2020</b>
                </ImageText>
                <ul className="none">
                    <FancyList first>                     
                        <a href="#comp-views-holder">ViewsHolder</a>
                        <a href={Link.download+"ViewsHolder.js"} className="update-download-icon" download>
                            <FaCloudDownloadAlt />
                        </a>                   
                    </FancyList>
                    <FancyList>                     
                         <a href="#h-form-image">FormExample 2</a>
                         <a href={Link.download+"FormExample2.js"} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                         </a>                   
                    </FancyList>
                    <FancyList>                     
                         <a href="#h-form-image">ImageField</a>
                         <a href={Link.download+"ImageField.js"} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                         </a>                   
                    </FancyList>
                    <FancyList last>                     
                         <a href="#h-form-image">CSS</a>
                         <a href={Link.css} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                         </a>                   
                    </FancyList>
                </ul>

                <ImageText src={Icons.time} color={Colors.main}>
                    <b>27 / 04 / 2020</b>
                </ImageText>
                <ul className="none">
                    <FancyList first>                     
                         <a href="#h-form-image">FormExample</a>
                         <a href={Link.download+"FormExample.js"} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                         </a>                   
                    </FancyList>
                </ul>

                <ImageText src={Icons.time} color={Colors.main}>
                <b>17 / 04 / 2020</b>
                </ImageText>

                <ul className="none">
                     <FancyList first>                     
                         <a href="#h-form-image" className="label-on">CloseableInfo</a>
                         <a href={Link.download+"CloseableInfo.js"} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                         </a>                   
                    </FancyList>
                    <FancyList>                     
                         <a href="#h-form-image" className="label-on">AutoCloseableInfo</a>
                         <a href={Link.download+"AutoCloseableInfo.js"} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                         </a>                   
                    </FancyList>
                    <FancyList last>                     
                        <a href="#h-form-image" >Hanspet.css</a>
                        <a href={Link.css} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                        </a>                     
                    </FancyList>
                </ul>



                <ImageText src={Icons.time} color={Colors.main}>
                <b>07 / 04 / 2020</b>
                </ImageText>

                <ul className="none">
                     <FancyList first>                     
                         <a href="#h-form-image" >ImageField</a>
                         <a href={Link.download+"ImageField.js"} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                         </a>                   
                    </FancyList>
                    <FancyList last>                     
                        <a href="#h-form-image" >Hanspet.css</a>
                        <a href={Link.css} className="update-download-icon" download>
                                <FaCloudDownloadAlt />
                        </a>                     
                    </FancyList>
                </ul>    


                <ImageText src={Icons.time} color={Colors.main}>
                <b>05 / 04 / 2020</b>
                </ImageText>

                <ul className="none">
                     <FancyList first>                     
                         <a href="#comp-dialog">Dialog</a>                      
                    </FancyList>
                    <FancyList>                     
                         <a href="#h-form-radio" >Switch</a>                      
                    </FancyList>
                    <FancyList>                     
                         <a href="#h-form-radio2">FormSwitch</a>                      
                    </FancyList>
                    <FancyList last>                     
                         <a href={Link.css} download>Hanspet.css</a>                      
                    </FancyList>
                </ul>
                <ImageText src={Icons.time} color={Colors.main}>
                <b>30 / 03 / 2020</b>
                </ImageText>

                <ul className="none">
                     <FancyList first>                     
                         <a href="#h-form-search" >FormSearch</a>                      
                    </FancyList>
                    <FancyList>                     
                            <a href="#h-form-password" >PasswordField</a>                      
                    </FancyList>
                    <FancyList first>                     
                            <a href="#h-form-one-column" >One Column Form</a>                      
                    </FancyList>
                    <FancyList first>                     
                            <a href="#h-form-two-column" >Two Column Form</a>                      
                    </FancyList>
                    <FancyList first>                     
                            <a href="#h-form-example" >Form Example</a>                      
                    </FancyList>
                    <FancyList >                        
                            <a href="#h-form-image">ImageField</a>                       
                    </FancyList>
                    <FancyList >                        
                            <a href="#h-form-picture">FormPicture</a>                       
                    </FancyList>
                    <FancyList last>                       
                            <a href="#h-form-button">ButtonLoader</a>                       
                    </FancyList>
                </ul>
            </article>
        </section>
    );
}

export default Updated;