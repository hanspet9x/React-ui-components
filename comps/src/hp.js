function _(x){
    return document.getElementById(x);
}

function __(x){
    return document.getElementsByClassName(x);
}

function ___(x){
    return document.getElementsByTagName(x);
}

function l(data){
    console.log(data);
}

function getImgDate(){
    var date = new Date();
    return "IMG_"+date.getFullYear()+""+date.getMonth()+""+date.getDate()+"_"+date.getHours()+""+date.getMinutes()+""+date.getSeconds()+""+date.getMilliseconds();

}

function getTableData(array, htmlTagContainer, htmlTag, returnTag = true){
    
    var col = "";
    
     for (var item in array) {
         
         var row = "";

         for (var itez in array[item]) {
            
             if(returnTag){
                 row += '<'+htmlTag+'>'+array[item][itez]+'</'+htmlTag+'>';
             }else{
                 row += array[item][itez];
             }
         }
         if(returnTag){
             col +='<'+htmlTagContainer+'>'+row+'</'+htmlTagContainer+'>';
         }else{
             col += row;
         }
     }
     return col;
}

function getTags(array, htmlTag){
        var col = "";
    
     for (var item in array) {
         
         for (var itez in array[item]) {
             
                col += '<'+htmlTag+'>'+array[item][itez]+'</'+htmlTag+'>';     
         }
         
     }
     return col;
}

function getDistrictFromArrayData(from, destination){
    destination.splice(0, destination.length);
    for (var i = 0; i < from.length; i++) {
        
        var val = from[i];
        
        if(i > 0){
            if(!destination.includes(val)){
                destination.push(val);
            }
        }else{
             destination.push(val);
        }

    }
    
}

function getRadioValue(radio){
    var radioi = document.getElementsByName(radio);
    for (var i = 0; i < radioi.length; i++) {
        if(radioi[i].checked){
            return radioi[i].value;
        }
    }
    return null;
}

function validateEmail(email){
    var check = [".", "com", "@"];
    
    for (var i = 0; i < check.length; i++) {
        
        if(!email.includes(check[i])){
            return false;
        }
    }
    
    return true;
}

function validateInt(value){
    if(value.length > 0){
        var regExp = /[^0-9]/g;
       return regExp.test(value) === false?true:false;
    }
    return false;
}

/*
 * LOADERS
 */
function toggleLoader(loaderID, message = "please wait..", lock = false){
    
    var loader = _(loaderID);
    if(lock === true){
       loader.children[1].textContent = message; 
    }else{
        if(loader.style.display === "flex" ){
           setTimeout(function(){
               loader.style.display = "none";
           },500);
           loader.children[1].textContent = message;
       }else if(loader.style.display === "none" || loader.style.display === ""){
           loader.style.display = "flex";
           loader.children[1].textContent = message;
       }
    }
    
}

function infoAlert(message, type, holder = "info-box"){
    //1 = success, 2 = warning, 3 = danger
    var element = "";
    switch (type) {     
        case 1:
            element = '<div class="info info-s"><span class="out"></span>'+message+'</div>';
            break;
        case 2:
            element = '<div class="info info-w"><span class="out"></span>'+message+'</div>';
            break;
        case 3:
            element = '<div class="info info-d"><span class="out"></span>'+message+'</div>';
            break;
        default:
            element = '<div class="info"><span class="out"></span>'+message+'</div>';
            break;
    }
    _(holder).innerHTML+=element;
    infoBoxOutListener();
}

function toggleInfoBoxDisplayByOut(){
    var box = this.parentNode;
        box.style.opacity = 0;
        setTimeout(function(){
            box.parentNode.removeChild(box);
        },300);
        
}

function infoBoxOutListener(){
    var boxOutButtons = __("out");
 
    for (var i = 0; i < boxOutButtons.length; i++) {
          
         boxOutButtons[i].addEventListener("click", toggleInfoBoxDisplayByOut);
    }
}

function toggleDisplay(element1, type){
    _(element1).style.display = type;
}



function HPnotify(){
 	var obj = this;
        var time;
        
        this.init = function(){
            var container = document.createElement("div");
                container.setAttribute("id", "HPnotifiy");
            var child = document.createElement("div");
                child.setAttribute("id", "HPFtext");
                container.appendChild(child);
            document.querySelector("body").appendChild(container);
            document.getElementById('HPFtext').addEventListener("mouseenter", this.pause,false);
            document.getElementById('HPFtext').addEventListener("mouseout", this.hide, false);
        };
 	
        this.pause = function(){
          
            window.clearTimeout(time);
        };
           
 	this.show = function(msg, timeElapsed =3000){
                this.message(msg);
 		document.getElementById('HPnotifiy').style.bottom = "15px";
 		document.getElementById('HPnotifiy').style.opacity= 1;
                this.hide(timeElapsed);
 	};

 	this.message= function(msg){
 		document.getElementById('HPFtext').innerHTML = msg;
 	};

 	this.hideTemp = function hideTemp(){
 		document.getElementById('HPnotifiy').style.opacity= 0;
 	};

 	this.hide = function hide(timeElapsed){
                
                time = window.setTimeout(function(){
                   obj.hideTemp();
                    setTimeout(function(){
                        document.getElementById('HPnotify').style.bottom = "-100px";
                    }, 1000);
                }, timeElapsed);
 		
 		
 	};
 }
 //slideInView
function HPsinv(){
    var obj = this;
    
    this.init = function(tile, toTop = true){
        this.tile = document.getElementById(tile);
        this.toTop = toTop;
        console.log(this.tile.offsetWidth, this.tile.offsetHeight);
        this.resetSize();
    };
    
    this.resetSize = function(){
      this.tile.style.width = "auto";
      this.tile.style.height ="auto";
      this.tile.parentNode.style.width = this.tile.offsetWidth + "px";
      this.tile.parentNode.style.height = this.tile.offsetHeight + "px";
       console.log(this.tile.offsetWidth, this.tile.offsetHeight);
    };
    this.setValue = function(newVal){
        this.newVal = newVal;
        this.slideOut();
    };
    
    this.slideOut = function(){
        
       var size = this.getSize();
              
           this.setSpeed(".2s");
           this.setPosition(-size);
           
           setTimeout(function(){
               obj.setSpeed("0s");
               obj.setPosition(size);
               obj.setNewValue();
               
               setTimeout(function(){
                   obj.slideIn();
               },50);
               
           },200);
             
    };
    
    this.slideIn = function(){       
        this.setSpeed("all .5s cubic-bezier(.55, .3, .5, 1.65)");
        this.setPosition(0);
    };
   
    this.setNewValue = function(){
      this.tile.innerHTML = this.newVal;
      this.resetSize();
    };
    
    this.setPosition = function(pos){
        if(!!this.toTop){
            this.tile.style.top = pos+"px";
        }else{
            this.tile.style.left = -pos+"px";
        }
    };
    
    this.setSpeed = function(spdValue){
        this.tile.style.transition = spdValue;
    };
    
    this.getSize = function(){
        if(!!this.toTop){
            return this.tile.offsetHeight;
        }else{
            return this.tile.offsetWidth;
        }
    };
}

function HPduoContent(){
    var obj = this;
    this.opened = false;
    this.opened2 = false;
    this.currentPage = 0;
    this.articleWidth = 0;
    this.pad = 10;
    this.startTouch = 0;
    this.stopTouch = 0;
    this.activeColor = "#fff";
    this.inactiveColor = "#000";
    this.activeBgColor = "#3366ff";
    this.inactiveBgColor = "#efefe0";
    this.activateControl = true;
    
    this.init = function(col_type){
        this.section = document.getElementById(col_type);
        this.navContainer = document.getElementById(col_type).children[0];
        this.article = document.getElementById(col_type).children[1];
        this.pageContainer = this.article.children[1];
        this.navToggle = document.getElementById(col_type+"-toggle");
        this.navLinks = document.getElementsByClassName(col_type+"-nav");
        this.navPage = document.getElementsByClassName(col_type+"-page");
        
        this.setListeners();
        this.defaultPagePosition();
        this.articleWidth = this.getArticleWidth();
        
        this.setActiveLink(this.navLinks[this.currentPage]);
        
    };
    
    this.setListeners = function(){
        
        this.navContainer.addEventListener("click", this.hideSelf);
        this.navToggle.addEventListener("click", this.navigationState);
        
        for (var i = 0; i < this.navLinks.length; i++) {
            this.navLinks[i].addEventListener("click", this.linksClicked);
        }
        
        for (var i = 0; i < this.navPage.length; i++) {
            this.navPage[i].addEventListener("touchstart", this.touchStarted);
            this.navPage[i].addEventListener("touchmove", this.touchMoved);
            this.navPage[i].addEventListener("touchend", this.touchEnded);
        }
        
        window.addEventListener("resize", this.defaultPagePosition);
               
    };
    
    this.touchStarted = function(e){
        
        var touch = e.changedTouches[0];
            obj.startTouch = touch.pageX;
    };
    
    this.touchMoved = function(e){
        
        var touch = e.changedTouches[e.changedTouches.length-1];
           obj.stopTouch = touch.pageX;
    };
    
    this.touchEnded = function(e){
        obj.slidePage(obj.startTouch, obj.stopTouch);
    };
    
    this.slidePage = function(x0, x1){
        
        if(x0 > x1){
            //next
            this.nextPage();
        }else{
            //previous
            this.previousPage();
        }
    };
    
    this.nextPage = function(){
        if(this.currentPage < this.navPage.length-1){
            var cp = this.currentPage+1;
            obj.setContainersHeight(cp);
 
            this.goLeft(this.currentPage);
            this.show(this.currentPage+1);
            this.setCurrentPageIndex(cp);
            obj.setActiveLink(obj.navLinks[cp]);
           
        }
    };
    
    this.previousPage = function(){
       
        if(this.currentPage !== 0){
            
            var pp = this.currentPage-1;
            obj.setContainersHeight(pp);
            
            this.goRight(this.currentPage);
            this.show(pp);
            this.setCurrentPageIndex(pp);
             obj.setActiveLink(obj.navLinks[pp]);
        }
    };
     
    this.setContainersHeight = function(index){
      
        obj.pageContainer.style.height = obj.navPage[index].offsetHeight +obj.pad+"px";
        obj.article.style.height = obj.pageContainer.offsetTop + obj.pageContainer.offsetHeight + obj.pad+"px";
   
    };
    
    this.defaultPagePosition = function(){
        obj.setContainersHeight(0);
        for (var i = 1; i < obj.navPage.length; i++) {
            obj.navPage[i].style.left = obj.getArticleWidth()+100+"px";
        }
    };
    
    this.getArticleWidth = function(){
        return this.article.offsetWidth;
    };
    
    this.getCurrentPage = function(){
        return this.navPage[this.currentPage];
    };
    
    this.linksClicked = function(){
        
        
        var currentPageIndex = obj.getClickedListNo(this);
        obj.setContainersHeight(currentPageIndex);
       
        if(currentPageIndex !== obj.currentPage){
            
            if(currentPageIndex > obj.currentPage){
                obj.goLeft(obj.currentPage);
                obj.show(currentPageIndex);
                obj.setCurrentPageIndex(currentPageIndex);
                
            }else{
                obj.goRight(obj.currentPage);
                obj.show(currentPageIndex);
                obj.setCurrentPageIndex(currentPageIndex);
            }
        }
         obj.setActiveLink(this);
    };
    
    this.setCurrentPageIndex = function(index){
        this.currentPage = index;
    };
    
    this.setLinkStyle = function(bg, col, bg2, col2){
        this.activeBgColor = bg;
        this.activeColor = col;
        this.inactiveBgColor = bg2;
        this.inactiveColor = col2;
    };
    
    this.setActiveControl = function(stat){
        this.activateControl = stat;
    };
    
    this.goLeft = function(index){
        this.navPage[index].style.left = -this.articleWidth+"px";
                
    };
    
    this.show = function(index){
         this.navPage[index].style.left = "0px";
    };
    
    this.goRight = function(index){
         this.navPage[index].style.left = this.articleWidth+"px";
    };
    
    this.getClickedListNo = function(link){
        
        for (var i = 0; i < this.navLinks.length; i++) {
            if(link === this.navLinks[i]){
                this.navPage[i].style.zIndex = "2";
                return i;
            }else{
                this.navPage[i].style.zIndex = "1";
            }
        }
    };
    
    this.setActiveLink = function(navLink){
       
        navLink.style.color = obj.activeColor;
        navLink.style.backgroundColor = obj.activeBgColor;
        for (var i = 0; i < obj.navLinks.length; i++) {
            if(i !== obj.currentPage){
                 obj.navLinks[i].style.color = obj.inactiveColor;
                 obj.navLinks[i].style.backgroundColor = obj.inactiveBgColor;
            }
        }
    };
    
    this.navigationState = function (){
        
        if(obj.opened === false){
           obj.showNavigation();
           obj.opened2 = true;
           obj.opened = true;
        }else{
            obj.hideNavigation();
            obj.opened = false;
        }
    };
    
    this.showNavigation = function(){
        this.navContainer.style.left = "0px";
    };
    
    this.hideNavigation = function(){
        this.navContainer.style.left = "-110%";
    };
    
    this.hideSelf = function(){
        if(obj.opened2 === true){
            obj.hideNavigation();
            obj.opened2 = false;
            obj.opened = false;
        }
    };
}

function HPradio(){
    this.holder;
    var obj = this;
    this.init = function(){
       
        this.holder = document.getElementsByClassName("HPradio");
        this.addListener();
    };
    
    this.addListener = function(){
        if(this.holder.length <= 0)return;
        for (var i = 0; i < this.holder.length; i++) {
            
            this.holder[i].firstElementChild.addEventListener("click", this.clicked, true);
        }
    };
    
    this.clicked = function(e){
        console.log(e);
        var input = e.target.nextElementSibling;
        var value = input.value;
        
        if(value === "N" || value === 0 || value === "0" || value === "n"){
            
            e.target.style.left = "40px";
           input.value = obj.numAlph(value);
           e.target.parentNode.style.backgroundColor = "#ccffcc";
                 
        }else{
           e.target.style.left = "5px";
           input.value = obj.numAlph(value);
           e.target.parentNode.style.backgroundColor = "#eef0ee";
           l(e.target.nextElementSibling.value); 
        }
          
         
        
    };
    
    this.numAlph = function(val){
        var ret;
        switch (val) {
            case "N":
                ret = "Y";
                break;
             case "Y":
                ret = "N";
                break;
            case 0:
                ret = 1;
                break;
            case 1:
                ret = 0;
                break;
            case "1":
                ret = "0";
                break;
            case "0":
                ret = "1";
                break;
            case "n":
                ret = "y";
                break;
            case "y":
                ret = "n";
                break;
            default:
                
                break;
        }
        return ret;
    };
    
}

function HPalrtConfm(){
    var obj = this;
    this.alert = function(msg){
        this.create(1, msg);
    };
    
    this.confirm = function(msg){
        this.create(2, msg);
    };
    
    this.closeAlertBox = function(){
        document.body.removeChild(obj.wrapper);
    };
    
    this.setListeners = function(){
        var boxHolder = document.getElementById(this.typeName);
            var btnWrapper = boxHolder.children[2];
            
                if(this.type === 2){                    
                    btnWrapper.firstElementChild.addEventListener("click", this.yes);
                    btnWrapper.firstElementChild.addEventListener("click", this.closeAlertBox);
                    btnWrapper.lastElementChild.addEventListener("click", this.closeAlertBox);
                }else{
                    btnWrapper.firstElementChild.addEventListener("click", this.closeAlertBox);
                }
                btnWrapper.firstElementChild.focus();
    };
    
    this.create = function(type, msg){
        var div = document.createElement("div");
            div.setAttribute("id", "HPalrtConfm");
        var ul = document.createElement("ul");
            ul.setAttribute("id", this.getAttribute(type));
            ul.innerHTML = this.getTitle(type);
            ul.innerHTML +=this.getMessage(msg);
            ul.innerHTML +=this.getButtons(type);
            
            div.appendChild(ul);
            document.body.appendChild(div);
            this.wrapper = div;
            this.setListeners();
            
    };
    
    this.getMessage = function(msg){
        return '<li>'+msg+'</li>';
    };
    
    this.getButtons = function(type){
        if(type === 1){
            return '<li><button>ok</button></li>';
        }else{
            return '<li><button>ok</button><button>cancel</button></li>';
        }
    };
    
    this.getTitle = function(type){
        if(type === 1){
            return '<li>Alert</li>';
        }else{
            return '<li>Confirm</li>';
        }
    };
    
    this.getAttribute = function(type){
        if(type === 1){
            this.type = 1;
            this.typeName = "HPalert";
            return "HPalert";
        }else{
            this.type = 2;
            this.typeName = "HPconfirm";
            return "HPconfirm";
        }
    };
     
}

function HPformDropdown(){
    
    var obj = this;
    
    this.setNewListener = function(container){
        this.container = document.getElementsByClassName(container); 
        this.lists = this.container.children;
       
        for (var i = 0; i < this.lists.length; i++) {
            this.lists[i].addEventListener("click", this.listClicked);
        }
    };
    
    this.listClicked = function(){
            obj.hideLists();
            obj.list(this);
        };
      
    this.hideLists = function(){
        this.container.parentNode.removeChild(this.container);
    };
    
    this.showLists = function(container, lists){
        var ul = document.createElement("ul");
            ul.setAttribute("class", "form-dropdown");
            ul.innerHTML = lists;
        _(container).innerHTML = ul;      
        this.setListener(ul);
    };
    
}

function HPCountContent(){
    var obj = this;
    this.countStore;
    
    this.init = function(){
        this.countStore = new Map();        
        this.inputs = document.getElementsByClassName("HPcount");
        
        for (var i = 0; i < this.inputs.length; i++) {
            
            var limit = this.inputs[i].getAttribute("maxlength");            
            this.countStore.set(this.inputs[i], parseInt(limit));
            var cl = this.inputs[i].classList;
            var isRequired = this.inputs[i].required;
            
            var text = cl[cl.length-1];
            this.parent = this.inputs[i].parentNode;
            var counter = this.createCounter(limit, text, isRequired);
            this.parent.insertBefore(counter, this.inputs[i]);
            
            this.inputs[i].addEventListener("keyup", this.count);
            
        }
        
        
    };
    
    this.createCounter = function(limit, text, isRequired){
        text = text.replace(/-/g, " ");
        var container = document.createElement("div");
            container.setAttribute("class", "count-indicator");
            if(!!isRequired){
                container.innerHTML = '<span class="on">'+text+'</span><span>'+limit+'</span>';
            }else{
                container.innerHTML = '<span>'+text+'</span><span>'+limit+'</span>';
            }
           
        return container;
    };
    
    this.count = function(e){
       
       obj.counter = this.previousElementSibling.children[1];
       var limit = obj.countStore.get(this);
       var val = this.value.length;
       console.log(e);
        var remainder = limit-val;
            obj.counter.textContent = remainder;
            
            obj.monitor(remainder, e);
    };
    
    this.monitor = function(rem, ev){
        if(rem === 0){
            ev.returnValue = false;
        }
    };
   
}

class HPwhitespace{
    
    margin = 8;
    inView = 4;
    activeSlideNo = 0;
    leftNavIcon = "⊲";
    rightNavIcon = "⊳";
    
    constructor(listWrapper){
       this.listWrapper = document.getElementById(listWrapper);
       this.slideNav = document.getElementsByClassName(this.navs);
       
    }
    
    create(){
        this.setSizes();
        this.createNavigator();
        this.setNavigationsDisplay();
        this.setSlidesPosition();
    }
    /**
     * This set list wrapper height, and expected slide width and height.
     * @returns {undefined}
     */
    setSizes(){
        var slide = this.listWrapper.children[0];
            this.slideHeight = slide.offsetHeight;
            this.slideWidth = slide.offsetWidth;
            this.slideSize = slide.offsetWidth+slide.offsetLeft;
            this.listWrapper.style.height = this.slideHeight+this.margin+"px";
    }
    
    setSlidesWidth(){
        
    }
    createNavigator(){
        this.left = document.createElement('li');
            this.left.setAttribute('class', 'HPwsnav');
            this.left.textContent = this.leftNavIcon;
            this.left.addEventListener("click", (e)=>this.leftClicked(e));
        this.right = document.createElement('li');
            this.right.setAttribute('class', 'HPwsnav');
            this.right.textContent = this.rightNavIcon;
            this.right.addEventListener("click", (e)=>this.rightClicked(e));
            
        this.listWrapper.appendChild(this.left);
        this.listWrapper.appendChild(this.right);
        
    }
    
    leftClicked(e){
        
        if(this.canScroll()){
            this.moveSlidesLeft();
             this.activeSlideNo++;
        }
       
    }
    
    rightClicked(e){
        if(this.slidesHadMovedLeft()){
            this.moveSlidesRight();
            this.activeSlideNo--;
        }
        
    }
    
    moveSlidesLeft(){
        var slides = this.listWrapper.children;
        for (var i = 0; i < slides.length - 2; i++) {
            slides[i].style.left = `${slides[i].offsetLeft - (this.slideSize+this.margin)}px`;
        }
    }
    moveSlidesRight(){
        var slides = this.listWrapper.children;
        for (var i = slides.length-2; i > 0; i--) {
            slides[i-1].style.left = `${slides[i-1].offsetLeft + (this.slideWidth)}px`;
        }
    }
    /**
     * checks if the slides had moved. It returns true if slide had moved.
     * @returns {Boolean}
     */
    slidesHadMovedLeft(){
        var x = this.listWrapper.children[0].offsetLeft;
        return x < 0;
    };
    /**
     * Order slides in horizontal position
     * @returns {undefined}
     */
    setSlidesPosition(){
       
        var slides = this.listWrapper.children;
        for (var j = 1; j < slides.length-2; j++) {
                
                var x = slides[j-1].offsetWidth + slides[j-1].offsetLeft;              
                    slides[j].style.left = x +"px";               
            }
    
    }
    /**
     * This meth checks if the slides csn be scrolled. if yes, setNavgationPosition is invoked else the navs
     * are hidden.
     * @returns {undefined}
     */
    setNavigationsDisplay(){
        if(!this.canScroll(this.activeSlideNo)){
            this.left.style.display = "none";
            this.right.style.display="none";
        }else{
            this.setNavigationsPosition();
        }
    }
    
    /**
     * This method sets the navs positions and it
     *  is invoked inside setNavigationsDisplay if the slides can scroll
     * @returns {undefined}
     */
    setNavigationsPosition(){
        var pos = (this.slideHeight/2)-this.left.offsetHeight+"px"; 
        this.left.style.top = pos;
        this.right.style.top = pos;
    }
    
    /**
     * Sum up all slides length of the wrapper and compare their lengths with the wrappers length.
     * returns true if slides can be scrolled else, false.
     * @returns {Boolean}
     */
    canScroll(){
        var slides = this.listWrapper.children;
        var totalSlideWidth = 0;
        for (var i = this.activeSlideNo; i < slides.length-2; i++) {
            totalSlideWidth+=slides[i].offsetWidth;
        }
        
        return totalSlideWidth > this.listWrapper.offsetWidth; 
    }
}

 /*
  * SERVER
  */
function HPjax(){
    var obj = this;
    this.receiving = true;
    
    this.send = function(data, method, url, type="", showProgress = false, receiving = true){
        
        this.data = data;
        this.url = url;
        this.method = method;
        this.type = type;
              
        this.showProgress = showProgress;
        this.create();
        this.start();
    };
    
    this.setReceiving = function(stat){
        this.receiving = stat;
    };
    
    this.create = function(){
       this.ajax = new XMLHttpRequest();
       this.ajax.addEventListener("load", this.loaded);
       this.ajax.addEventListener("error", this.error);
       this.ajax.addEventListener("aborted", this.aborted);
       
       if(!!this.showProgress){
           this.ajax.upload.addEventListener("progress", this.progress);
       }
    };
    
    this.start = function(){
        this.ajax.open(this.method, this.url);
        this.ajax.responseType = this.type;
        this.setReceiving(false);
        this.ajax.send(this.data);
    };
    
    this.loaded = function(){
        obj.setReceiving(true);
        obj.result(obj.ajax.response);
    };
    
    this.progress = function(e){
        var curValue = Math.floor(e.loaded / e.total * 100);
            obj.rate(curValue, this);              
    };
}

class HPImageCrop extends HTMLElement{
    
    width = 0;
    height = 0;
    color= "blue";
    
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.context();
        
    }
    
    context(){
        this.wrapper = this.parentNode;
        this.wrapper.style.position = "relative";       
        this.width = this.wrapper.offsetWidth; 
        
        this.canvas = this.ce('canvas');
        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.width);
        if(this.hasAttribute('radius')){
            this.canvas.style.borderRadius = this.ga('radius')+"px";
        }
        if(this.hasAttribute("title")){
            this.canvas.setAttribute('title', this.ga('title'));
        }
        this.ctx = this.canvas.getContext('2d');
        
        if(this.hasAttribute("src")){
               var image = new Image();
                    image.addEventListener("load", (e)=>this.onImageLoaded(e.target));
                    image.addEventListener("error", ()=>this.onError());
                    image.src = this.ga("src");
            }
        else{
               this.onError(); 
            }
            
        
    }
    
    onError(){
        this.filtered = this.ce('div');
                this.filtered.setAttribute('class', 'loading');
//                this.filtered.style.boxShadow = "0px 1px 1px rgba(0,0,0,0.3)";
                this.msg = this.ce('span');
                this.msg.textContent = "No Path";
                this.filtered.appendChild(this.msg);
                this.filtered.style.display = "flex";
                this.filtered.style.width = this.width+"px";
                this.filtered.style.height = this.width+"px";
                var style = this.ce('style');
                    style.textContent = this.getStyle();
                this.shadow.appendChild(style);
                this.shadow.appendChild(this.filtered);
                throw "NoPathException: specify file path";
    }
    
    onImageLoaded(img){
        
        var width = img.width;
        var height = img.height;
        
        if(width > height){
            //horizontal
            this.drawImageX(img, width, height);
        }else if(width < height){
            //vertical
            this.drawImageY(img, width, height);
        }else{
            //square
            this.drawImage(img, width, height);
        }
        
        if(this.hasAttribute('preload')){ 
            this.wrapper.removeChild(this.wrapper.children[0]);
        }
    }
    
    drawImageX(image, w, h){
        
            var dx = (w/2) - (h/2);          
            this.ctx.drawImage(image, dx, 0, h, h, 0, 0, this.width, this.width);
            this.shadow.appendChild(this.canvas);
    }
    
    drawImageY(image, w, h){
       
            var dy = ((h-w)/2)/2;
            this.ctx.drawImage(image, 0, dy, w, w, 0, 0, this.width, this.width);
            this.shadow.appendChild(this.canvas);
    }
    
    drawImage(image, w, h){
        
            this.ctx.drawImage(image, 0, 0, w, h, 0, 0, this.width, this.width);
            this.shadow.appendChild(this.canvas);
    }
    
    ce(e){
        return document.createElement(e);
    }
    
    ga(e){
        return this.getAttribute(e);
    }
    
    getStyle(){
        return `.loading{
    position: absolute;
    top:0px;
    left:0px;
    height:100%;
    width:100%;
    background-color: rgba(255,255,255,.8);
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
}`;
    }
}

class HPoll {
    
    receiving = true;
    
    constructor(method, url, type=""){
       this.ajax = new XMLHttpRequest();
       this.method = method; 
       this.url = url;
       this.type = type;
       
       this.ajax.addEventListener("load", this.loaded.bind(this));
       this.ajax.addEventListener("error", this.error);
       this.ajax.addEventListener("aborted", this.aborted);
       
       if(!!this.showProgress){
           this.ajax.upload.addEventListener("progress", this.progress.bind(this));
       }
       this.waiting = false;
       
    }
    setHeader(header, value){
        this.ajax.setRequestHeader(`${header}: ${value}`);
    }
    send(data = null){
        
        if(data)
        this.waiting = true;
        this.ajax.open(this.method, this.url);
        this.ajax.responseType = this.type;
        this.data = data;
        this.ajax.send(this.data);
       
    };
    
    start(){
        this.ajax.open(this.method, this.url);
        this.ajax.responseType = this.type;
    };
    
    loaded(){
        this.waiting = false;
        if(this.method == "GET")this.restoreURL();
        this.onResult(this.ajax.response);
    };
    
    error(){
        throw "An error has occured";
    }
    
    aborted(){
        throw "process aborted";
    }
    
    progress(e){
        var curValue = Math.floor(e.loaded / e.total * 100);
            this.onRate(curValue, this);              
    };
    
    restoreURL(){
        if(this.url.includes("?")){
            this.url = this.url.replace(this.GETData, "");
        }
    }
    setUrl(url){
       this.url = url; 
    }
    setMethod(method){
        this.method = method;
    }
    setProgress(bool){
        this.showProgress = bool;
    }
    setReceiving(stat){
        this.receiving = stat;
    };
    setGetData(data){
        if(this.method == "GET"){
            this.GETData = `?${data}`;
            this.url +=this.GETData;
        }else{
            throw "Request method is not GET";
        }
        
    }
}

class HPImageRedraw{  
    textHeight = 40;
    textLength = 0;
    canvasClassName="";
    textClassName="";
    limit = 0;
    createValue = false;
    valueClassName = "";
    
    constructor(container, width, height, displacement = 0, comment = false){
        this.container = document.getElementById(container);
        this.width = width;
        this.height = height;
        this.displacement = displacement;
        this.comment = comment;
        this.refresh();
    }
    
    readFile(files){
        var startCompare = (image)=>{
            this.compareSizes(image);
        };
        if(files.length > 0 && files[0] instanceof File){
            var len = (this.limit === 0)?files.length:this.limit;
            len = (len > files.length)?files.length:len;
            for (var i = 0; i < len; i++) {
                var reader = new FileReader();
                    reader.onload = (e)=>{
                        var image = new Image();
                            image.src = e.target.result;
                            image.onload = ()=>{
                                startCompare(image);
                            };
                    };
                    reader.readAsDataURL(files[i]);
            }
            this.processFinished();
            
        }else{
            throw "Not a File Object";
        }
    }
    
    compareSizes(image){
       var w = image.width;
       var h = image.height;
       
        w < h?this.drawSquare(image, w, h):this.drawRectangle(image, w, h);    
    }
    
    drawSquare(image, w, h){
        var rem = (h - w)/2;
        var top = rem - this.displacement;
        var dy = (top <= 0)?rem:top;
        var canvas = document.createElement("canvas");
            canvas.setAttribute("width", this.width);
            canvas.setAttribute("height", this.height);
            canvas.setAttribute("class", this.canvasClassName);
            var ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, dy, w, w, 0, 0, this.width, this.width);
                this.createThumbnail(canvas, this.width);
                
    }
    
    drawRectangle(image, w, h){
        var dh = (h * this.width) / w;
        var canvas = document.createElement("canvas");
            canvas.setAttribute("width", this.width);
            canvas.setAttribute("height", this.height); 
            if(!!this.canvasClassName){
                    canvas.setAttribute("class", this.canvasClassName);
                }
            
            var ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0, w, h, 0, 0, this.width, dh);
                this.createThumbnail(canvas, dh);
    }
    
    createThumbnail(canvas, height){
        var canvCon = document.createElement("div"); 
            canvCon.setAttribute("class", "hp-canv-con");
            
            if(!!this.createValue){
                var inp = document.createElement("input");
                    inp.setAttribute("type", "hidden");
                    inp.setAttribute("class", this.valueClassName);
                    inp.setAttribute("value", canvas.toDataURL());
                    canvCon.appendChild(inp);
            }
        if(this.comment === false){
            canvCon.setAttribute("style", "width:"+this.width+"px;height:"+height+"px;");
            canvCon.appendChild(canvas);
            this.container.appendChild(canvCon);
        }else{
            canvCon.setAttribute("style", "width:"+this.width+"px;height:"+eval(height+this.textHeight)+"px;");
            canvCon.setAttribute("class", "hp-canv-con");  
             canvCon.appendChild(canvas);
             var text = document.createElement("textarea");
                text.setAttribute("style", "top:"+eval(height+1)+"px;width:"+eval(this.width-6)+"px;height:"+eval(this.textHeight-6)+"px;");
                text.setAttribute("placeholder", "write caption here..");
                if(!!this.textClassName){
                    text.setAttribute("class", this.textClassName);
                }
                if(this.textLength !== 0){
                    text.setAttribute("maxlength", this.textLength);
                }
                canvCon.appendChild(text);
                this.container.appendChild(canvCon);
        }
        
            
        
    }
    
    createOriginal(){
        
    }
    
    setContainer(container){
        this.container = container;
    }
    
    setWidth(width){
        this.width = width;
    }
    
    setHeight(height){
        this.height = height;
    }
    
    setTextHeight(n){
        if(isNaN(n))this.textHeight = n;
    }
    setTextLengthSize(n){
        this.textLength = n;
    }
    setTextClassName(name){
        this.textClassName = name;
    }
    
    setCanvasClassName(name){
        this.canvasClassName = name;
    }
    
    setCommentStatus(bool){
        this.comment = bool;
    }
    
    setLimit(n){
        this.limit = n;
    }
    
    setCreateValue(bool, className){
        this.createValue = bool;
        this.valueClassName = className;
    }
    
    refresh(){
        this.container.innerHTML = "";
    }
}

class HPLightSlider{
    slides;
    currentSlide = 0;
    showTime;
    Timer;
    constructor(showTime = 3000){
        this.slides = document.getElementsByClassName("hpls");
        this.showTime = 3000;
        
    }
    
    start(obj){
       this.hide();
       this.animate(obj);
    }
   
    hide(){
        
        for (var i = 1; i < this.slides.length; i++) {
            this.slides[i].style.opacity = 0;
            this.slides[i].style.display = "none";
        }
    }
    show(obj){
        if(this.currentSlide > 0){
            this.slides[this.currentSlide-1].style.opacity = 0;
        }
        this.slides[this.currentSlide].style.display = "block";
        setTimeout(() =>{
         obj.slides[obj.currentSlide].style.opacity = 1;    
        },100);
    }
    
    resetCount(){
        if(this.currentSlide === this.slides.length){
            this.hide();
            this.currentSlide = 0;
        }
    }
    animate(obj){
        
       this.Timer = setTimeout(() =>{
           obj.currentSlide++;
           obj.resetCount();
           obj.show(obj);
           
           obj.animate(obj);
        }, obj.showTime); 
    }
}

class HPImageCutOut{
    imgHeight;
    imgWidth;
    virtualImg;
    zoomValue = 10;
    canvasSize = 100;
    contW;
    contH;
    image;
    moved = false;
    cropStatus = false;
    inputHidden = "";
    
    constructor(container, virtualImg, canvas, reference){    
      this.virtualImg = document.getElementById(virtualImg);  
      this.container = document.getElementById(container);
      this.reference = document.getElementById(reference);
      this.canvas = document.getElementById(canvas);
      this.ctx = this.canvas.getContext('2d');
      this.container.addEventListener("mousemove", (e)=>{
          this.onCanvasMove(e);
      });
      this.container.addEventListener("touchmove", (e)=>{
          this.onCanvasMove(e);
      });
    }
    
    
    show(image){
        this.image = image;
        this.contW = this.container.offsetWidth;
        this.contH = this.container.offsetHeight;
        this.imgHeight = image.height;
        this.imgWidth = image.width;
//        this.setContainerAspect();
        this.virtualImg.src = image.src;
        
    }
    
    
    setContainerAspect(){
        var w = this.container.offsetWidth;
        var h = (this.imgHeight * w)/this.imgWidth;
        this.container.style.height = `${h}px`;
//          var h = this.container.offsetHeight;
//         var w = (this.imgWidth * h)/this.imgHeight;
//         this.container.style.width = `${w}px`;
    }
    
    onFileRead(file, obj){
        
                var reader = new FileReader();
                    reader.onload = (e)=>{
                        var img = new Image();
                            img.src = e.target.result;
                            img.onload = ()=>{
                                obj.show(img);
                            };
                    };
                    reader.readAsDataURL(file);
            
    }
    
    onCanvasMove(e){
        e.preventDefault();  
            if(!this.moved){
                var px = 0;
                var py = 0;
                
                console.log(px);
            }
            var x = e.clientX - this.reference.offsetLeft - 70;
            var y = e.clientY - this.reference.offsetTop - 100;
            
            var reg = /touch/gi;
            var stat = reg.test(e.type);
            if(!!stat){
               
               var touch = e.changedTouches[0];
               x = touch.clientX - this.reference.offsetLeft - 70;
               y = touch.clientY - this.reference.offsetTop - 100;
               
            }
            
            px = x-this.canvasSize/2;
            py = y-this.canvasSize/2;
            if(px < 0)px = 0;
            if(py < 0)py = 0;
            if(px > this.contW-this.canvasSize)px = this.contW-this.canvasSize;
            if(py > this.contH-this.canvasSize)py = this.contH-this.canvasSize;
            
            if(!!stat){
               this.canvas.style.left = px+"px";
               this.canvas.style.top = py+"px"; 
            }else{
                
                if(!!e.ctrlKey){
                    
                    this.canvas.style.left = px+"px";
                    this.canvas.style.top = py+"px";
                }
            }
       this.moved = true;     
    }
    
    zoomIn(){
       var w = this.virtualImg.offsetWidth + this.zoomValue;
       var h = this.virtualImg.offsetHeight + this.zoomValue;
       this.setVirtualImageSize(w, h);
    }
    
    zoomOut(){
        var w = this.virtualImg.offsetWidth - this.zoomValue;
        var h = this.virtualImg.offsetHeight - this.zoomValue;
        if(w > this.container.offsetWidth || h > this.container.offsetHeight){
            this.setVirtualImageSize(w, h);
        }else{
            this.setVirtualImageSize(w, h, true)
        }
    }
    
    setCanvasSize(size){
        this.canvasSize = size;
    }
    
    crop(){
        var sx = (this.imgWidth * this.canvas.offsetLeft) / this.virtualImg.offsetWidth;
        var sy = (this.imgHeight * this.canvas.offsetTop) / this.virtualImg.offsetHeight;
        var sw = (this.imgWidth * this.canvas.offsetWidth) / this.virtualImg.offsetWidth;
        var sh = (this.imgHeight * this.canvas.offsetHeight) / this.virtualImg.offsetHeight;
        console.log(sx,sy,sw,sh);
        this.ctx.drawImage(this.image, sx, sy, sw, sh, 0, 0, this.canvasSize, this.canvasSize);
        this.cropStatus = true;
    }
    
    done(dummyImg){
        if(dummyImg instanceof Image){
           if(!this.cropStatus){
               this.crop();
               dummyImg.src = this.canvas.toDataURL(); 
           }else{
               dummyImg.src = this.canvas.toDataURL(); 
           }
           
           if(!!this.inputHidden){
               this.inputHidden.setAttribute("value", dummyImg.src);
               dummyImg.parentNode.appendChild(this.inputHidden);
           }
        }
    }
    
    
    reset(){
        this.cropStatus = false;
        this.ctx.clearRect(0,0,100,100);
    }
    
    setVirtualImageSize(w, h, displace = false){
        if(!displace){
            this.virtualImg.style = 'width:'+w+'px; height:'+h+'px;';
            return;
        }
        this.virtualImg.style = 'width:'+w+'px; height:'+h+'px; top:'+this.zoomValue+'px; left:'+this.zoomValue+'px;';
    }
    
    setCreateValue(className){
            this.inputHidden = document.createElement("input");
            this.inputHidden.setAttribute("class", className);
            this.inputHidden.setAttribute("type", "hidden");
            //wrapper.appendChild(this.inputHidden);
    }
}

class HPflexgrid{
    margin = 1;
    column = 4;
    transDuration = .5;
    constructor(container, col, margin = 1){
        this.container = document.getElementById(container);
        this.container.style.position = "relative";
        this.margin = margin;
        this.column = col;
        var slides = this.container.children;
        
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.position = "absolute";
        }
        
        this.arrange(this.container);
    }
    
    setResizeListener(){
        window.addEventListener("resize", ()=>{
            this.setGridSize(this.columnArray, this.gridWidth, this.useWindowWidth);
        });
    }
    
    setResize(){
        
            this.setGridSize(this.columnArray, this.gridWidth, this.useWindowWidth);
       
    }
    arrange(container){
        var slides = container.children;
        this.setPosition(slides[0], 0, 0);
        var n = this.column;
        for (var i = 1; i < slides.length; i++) {         

                if(i % n === 0){
                    
                    var x = 0;
                    var y = slides[i-n].offsetHeight + slides[i-n].offsetTop;
                    this.setPosition(slides[i], x, y);

                }else if(i > n){
                    var x = slides[i-1].offsetWidth + slides[i-1].offsetLeft;
                    var y = slides[i-n].offsetHeight + slides[i-n].offsetTop;
                    this.setPosition(slides[i], x, y);
                }else{
                    
                    var x = slides[i-1].offsetWidth + slides[i-1].offsetLeft;
                    var y = 0;
                    this.setPosition(slides[i], x, y);
                }
            }
            this.setContainerHeight();
    }
    
    setContainerHeight(){
        var base = 0, j = 0, conHeight = 0;
        var baseSlide;
        var slide = this.container.children;
        var bchmrk2 = slide.length-1;
        for (var i = bchmrk2; i % this.column !== 0; i--) {
              j = i;
            if(base > slide[i].offsetHeight){
                continue;
            }else{
                base = slide[i].offsetHeight;
                baseSlide = slide[i];
            }
        }
        
        if(j !== 0){
            if(base > slide[j-1].offsetHeight){
                conHeight = baseSlide.offsetTop + base; 
            }else{
                conHeight = slide[j-1].offsetHeight + slide[j-1].offsetTop;
            }
        }else{
            conHeight = slide[slide.length-1].offsetHeight + slide[slide.length-1].offsetTop;
        }
        this.container.style.height = conHeight + this.margin+"px";
    }
    
    setPosition(e, x, y){
        
        e.style.left = x + this.margin+"px";
        e.style.top = y + this.margin+"px";
    };
    
    setColumns(column){
        this.column = column;
        this.arrange(this.container);
        
    }
    
    setGridWidth(container_window_width){
        
        var slides = this.container.children;      
        var slideWidth = (container_window_width - (this.margin * (this.column + 1))) / this.column;
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.width = slideWidth + "px";
        }
    }
    
    setGridSize(columnArray = [4, 3, 2, 2, 1], setGridWidth = false, useWindowWidth = true){
        
        if(columnArray.length !== 5)throw "Length incomplete";
        
        this.columnArray = columnArray;
        this.gridWidth = setGridWidth;
        this.useWindowWidth = useWindowWidth;
        
        var w = useWindowWidth === true?window.innerWidth:this.container.offsetWidth;
        var col = 0;
        if(w >= 1200){
            col = columnArray[0];
        }else if(w >= 992 && w < 1200){
            col = columnArray[1];
        }else if(w >= 768 && w < 992){
            col = columnArray[2];
        }else if(w >= 576 && w < 768){
            col = columnArray[3];
        }else{
            col = columnArray[4];
        }
        
        if(setGridWidth)this.setGridWidth(w);
        this.setColumns(col);
        
        
    }
    
    resizeGrid(grid, x, y, w, h, unit = "px", storeVal = true){
        if(storeVal){
            this.resizedGrid = grid;
            this.resizedProp = [grid.offsetLeft, grid.offsetTop, grid.offsetWidth, grid.offsetHeight];
            this.setAnimation(grid, this.transDuration);
        }
        grid.style = `width:${w+unit}; height:${h+unit}; left:${x+unit}; top:${y+unit}`;
        
    }
    
    resetGrid(){
        this.resizeGrid(this.resizedGrid, this.resizedProp[0], this.resizedProp[1], this.resizedProp[2], this.resizedProp[3], this.resizedProp[4], false);
        this.setAnimation(this.resizedGrid, 0);
    }
    
    setAnimation(grid, n){
      grid.style.transition = `${n}s`;  
    }
    
    setTransition(n){
        this.transDuration = n;
    }
}

class HPscroll{
    
    wait = false;
    onScrolltrigger;
    constructor(tiles){
        this.tiles = document.getElementsByClassName(tiles);
        this.tilesName = tiles;
        if(this.tiles.length < 1)throw "Error: scroll constructor parameter does not exist.";
    };
    
    start(){
        this.setMonitor(this.tiles[this.tiles.length -1]);
    }
    
    continue(){
        this.tiles = document.getElementsByClassName(this.tilesName);
        this.start();
    }
    
    setMonitor(tile){
        this.monitor = tile;
        this.setScrollListener();
        
    };
    
    setScrollListener(){
        //dont wait
            window.addEventListener("scroll", ()=>this.scrolling());
        
    };
    
    
    scrolling(){
        if(this.wait === false){
            var window_top = window.pageYOffset;
            var window_height = window.innerHeight;
            var targetTop = this.getMonitorTop();
            var scrolled = window_height + window_top;
            if(scrolled >= targetTop){
                this.setWait(true);
                this.onScrolltrigger(this.monitor);
            }
        }
    };
    
    setWait(bool){
        this.wait = bool;
    };
    
    getMonitorTop(){
        return this.monitor.offsetTop;
    };
    
    getMonitor(){
        return this.monitor;
    }
    
    getTilesLength(){
        return this.tiles.length;
    }
}

var Hanspet = {
      
    Data:{
        check:function(inputs, useRequired = false){
        if(!!inputs){
            var elements = __(inputs);
            for (var i = 0; i < elements.length; i++) {
                
                var curInput = elements[i];
                if(!!useRequired){
                    if(!!curInput.required){
                        if(!curInput.value.trim())return curInput;
                    }
                }else{
                    if(!curInput.value.trim())return curInput;
                }                
            }
            return true;
        }
            return false;
    },
        clearInputValue:function(className, clearRadio = false, clearHidden = false){
            var elmts = __(className);
                for (var i = 0; i < elmts.length; i++) {
                if(elmts[i].nodeName == "INPUT" || elmts[i].nodeName == "TEXTAREA" || elmts[i].nodeName == "SELECT"){
                    if(elmts[i].nodeName == "INPUT" && elmts[i].type == "radio"){
                        if(!clearRadio)continue;
                    }
                    if(elmts[i].nodeName == "INPUT" && elmts[i].type == "checkbox"){
                        if(!clearHidden)continue;
                    }
                    if(elmts[i].nodeName == "INPUT" && elmts[i].type == "hidden"){
                        if(!clearHidden)continue;
                    }
                    if(elmts[i].nodeName == "TEXTAREA"){
                        elmts[i].value = "";
                    }else{
                        elmts[i].value = "";
                    }
                }
        }
        }
    },
    
    Dialogue:{
        hide:function(){
                var dialogueOutButtons = __("dialogue-out");
                if(dialogueOutButtons.length > 0){
                    for (var i = 0; i < dialogueOutButtons.length; i++) {       
                         dialogueOutButtons[i].addEventListener("click", (e)=>{                           
                            var diag = e.target.parentNode;
                            var dialogue = diag.parentNode;
                                diag.style.marginTop = "30px";
                                setTimeout(function(){
                                    diag.style.opacity = 0;           
                                    setTimeout(function(){               
                                        dialogue.style.display = "none";
                                        diag.style.marginTop = "0px";
                                        diag.style.opacity = 1; 
                                    },500);
                                },400);

                         });

                    }
                }
            },
        hide2:function(dialogueID){
            var dialogue = _(dialogueID);
            var diag = dialogue.firstElementChild;
                diag.style.marginTop = "30px";
                setTimeout(function(){
                    diag.style.opacity = 0;           
                    setTimeout(function(){               
                        dialogue.style.display = "none";
                        diag.style.marginTop = "0px";
                        diag.style.opacity = 1; 
                    },500);

                },400);
        },
        show:function(dialogueID){
             var dialog = _(dialogueID);
             dialog.style.display = "flex"; 
        }
    },
    
    UI:{
        boxAnchor:function(){
        var ele = __("box-anchor");
        if(ele.length <= 0)return;
        for (var i = 0; i < ele.length; i++) {
             var root = ele[i].parentNode;
             var box = ele[i].nextElementSibling;
              let list = ele[i].classList;
                root.style.position = "relative";
                //ele[i].style.zIndex = 1;
                box.style ='position:relative; z-index:2; background-color:'+list[2]+'; color:'+list[3]+'';
                
                let bw = box.offsetWidth/2;
                let bh = box.offsetHeight;
                let bl = box.offsetLeft;
                
                
               
                n = parseInt(list[4]);
                let w = bw+n;
                let h = bh + (n * 2);
                
                var tpos = box.offsetTop - n;
                if(list[5] === "1"){
                   var lpos =  bl+bw;
                    
                }else{
                    var lpos = bl-n;
                }
                ele[i].style = 'height:'+h+'px; width:'+w+'px; \n\
    left:'+lpos+'px; top:'+tpos+'px; border:solid 1px '+list[1]+'';
                
                
        }
    },
        crop:function(){      
            window.customElements.define("hp-image-crop", HPImageCrop); 
           },
    /**
     * element must have class="ellipsis" and data-size="int"
     * @returns {undefined}
     */
        ellipsis:function(){
           var ele = __('ellipsis');
            for (var i = 0; i < ele.length; i++) {
                const size = parseInt(ele[i].dataset.size);
                const content = ele[i].textContent.toString().trim();
//                console.log(content, content.length);
                if(size < content.length){
                   ele[i].innerHTML = content.substr(0, size)+"...";
                }
            }
        },
        
        /**
         * takes class img-btn and src attribute
         * @returns {undefined}
         */
        imageButton:function(){
            var btn = __('img-btn');
            for (var i = 0; i < btn.length; i++) {
                var text = btn[i].innerHTML;
                btn[i].innerHTML=`
                    <img src="${btn[i].getAttribute("src")}" />
                    <span>${text}</span>
                `;
            }
        },
        textRule:function(){
            var rules = __("text-rule");
            for (var i = 0; i < rules.length; i++) {
                var name = rules[i].dataset.name;
                var name = (name == undefined)?rules[i].innerHTML:name;
                rules[i].innerHTML = `<i></i>
                                        <i>${name}</i>
                                        <i></i>`;
                
            }
            var rules = __("text-rule-v");
            for (var i = 0; i < rules.length; i++) {
                var name = rules[i].dataset.name;
                var name = (name == undefined)?rules[i].innerHTML:name;
                rules[i].innerHTML = `<i></i>
                                        <i>${name}</i>
                                        <i></i>`;
                
            }
        },
        radio:function(){
            var rads = __("form-radio2");
                for (var i = 0; i < rads.length; i++) {
                    
                    rads[i].innerHTML=`
                                    <label>${(rads[i].hasAttribute("data-label")?rads[i].dataset.label:"")}</label>
                                    <div class="HPradio">
                                        <div></div>
                                        <input type="hidden" value="N"/>
                                    </div>`;
                }
        },
        setContainerHeight:function(container, column, margin){
        var base = 0, j = 0, conHeight = 0;
        var baseSlide;
        var slide = container.children;
        var bchmrk2 = slide.length-1;
        for (var i = bchmrk2; i % column !== 0; i--) {
              j = i;
            if(base > slide[i].offsetHeight){
                continue;
            }else{
                base = slide[i].offsetHeight;
                baseSlide = slide[i];
            }
        }
        
        if(j !== 0){
            if(base > slide[j-1].offsetHeight){
                conHeight = baseSlide.offsetTop + base; 
            }else{
                conHeight = slide[j-1].offsetHeight + slide[j-1].offsetTop;
            }
        }else{
            conHeight = slide[slide.length-1].offsetHeight + slide[slide.length-1].offsetTop;
        }
        this.container.style.height = conHeight + margin+"px";
        }
    },
    
    Files:{
        
       size:function(fileObj){
        return parseInt(fileObj.size)/1000;
       },
       
       isImage:function(fileObj){
            var mime = fileObj.type;
                if(mime.startsWith("image"))return true;
                return false;
        }
    },
    
    Forms:{
            
        overlay:function(){

            var form_search_overlay = __("form-search-overlay");
            for (var i = 0; i < form_search_overlay.length; i++) {
                var form_search = form_search_overlay[i].previousElementSibling;
                    form_search_overlay[i].style.width = form_search.clientWidth + "px";
                    form_search_overlay[i].style.height = "5px";
                    form_search_overlay[i].style.top = form_search.clientHeight + form_search.clientTop + "px";
            }
        },
        search:function(){
              var form_search = __("form-search");
                for (var i = 0; i < form_search.length; i++) {
                    
                    if(form_search[i].dataset.wrapper === null)throw "Data-id not found on form-search";
                    form_search[i].innerHTML += `<span class="form-search-clear">&times;</span>
                                                <div class="form-search-list">
                                                    <div class="loading-bar" id="${form_search[i].dataset.loader}"></div>
                                                    <ul id="${form_search[i].dataset.wrapper}"></ul>
                                                </div>`;
                    
                }
                var form_search_clear = __("form-search-clear");
                    for (var i = 0; i < form_search_clear.length; i++) {
                        form_search_clear[i].onclick = (e)=>{
                            
                            e.target.previousElementSibling.value = null;
                            e.target.nextElementSibling.lastElementChild.innerHTML = null;
                        };
            }
                
        },     
        password:function(){
            var form_password = __("form-password");
                for (var i = 0; i < form_password.length; i++) {
                    form_password[i].innerHTML+='<span class="form-toggle-password">&CircleTimes;</span>';
                }
            var togglePasses = __("form-toggle-password");

            for (var i = 0; i < togglePasses.length; i++) {

                 togglePasses[i].onclick = function(){
                    var input = this.previousElementSibling;
                   if(input.type === "password"){
                       input.type = "text";
                       this.style.color = "#000";
                   }else{
                       input.type = "password";
                       this.style.color = "#bbb";
                   }
               };
                     
            }
        },
        data:function(className, form = null, useRequired = false, formKey = null){
            var check = Hanspet.Data.check(className, useRequired);
            if(check !== true) return check;
            var formdata = (form === null)?new FormData():form;
            var elemts = __(className);
            if(formKey === null){
                for (var i = 0; i < elemts.length; i++) {
                    formdata.append(elemts[i].name, elemts[i].value);
                }
                return formdata;
            }else{
                if(formKey.length === elemts.length){
                    for (var i = 0; i < elemts.length; i++) {
                     formdata.append(formKey[i], elemts[i].value);
                    }
                      return formdata;
                }else{
                    return false;
                }
            }
        },
        chooser:function(){
            var name, img, accept;
           var forms = __("form-choose");
           //data.id ="galleryInput&image/*&Choose File"
            for (var i = 0; i < forms.length; i++) {
                var cont = forms[i];
                var data = cont.dataset.id;
                if (data !== undefined) {
                    var info = data.split("&");
                  if(info.length < 1)throw "At least input ID should be set";
                    switch (info.length) {
                        case 1:
                             name = "Choose File";
                             img = '';
                             accept = "";
                            break;
                        case 2:
                             accept = info[1];
                             name = info[2];
                             img = '';
                            break;
                        case 3:
                             accept = info[1];
                             name = info[2];
                             img = '<img src="'+info[3]+'">';
                            break;
                        case 4:
                            accept = info[1];
                            name = info[2];
                             img = '<img src="'+info[3]+'">';
                            break;
                        default:
                            throw "More than 4 paramters discovered!";
                            break;
                    }
                    
                    cont.innerHTML ='<button class="img-btn">'+img+
                                                '<span>'+name+'</span>'+
                                                '<span class="rondo">0</span>'+
                                            '</button>'+
                                        '<input type="file" id="'+info[0]+'" accept="'+accept+'" multiple="multiple" class="form-choose-input">';
               cont.addEventListener("click", (e)=>{
                   Hanspet.getElementByNode(e.target, "DIV", 4).lastElementChild.click();
                    });
                }else{
                    throw "Dataset.ID not found";
                    
                }
                
                
            }
            
            this.chooserListener();
        },
        chooser2:function(uniqueID, mimeType = "", name = "", imgUrl = ""){
           var forms = __("form-choose");
           var img = (imgUrl.trim().length > 4)?'<img src="'+imgUrl+'">':"";
           var name = (name.trim().length > 2)?'name':"Choose File";
            for (var i = 0; i < forms.length; i++) {
                var cont = forms[i];
                  if(!uniqueID)throw "At least input ID should be set";
                                      
                    cont.innerHTML ='<button class="img-btn">'+img+
                                                '<span>'+name+'</span>'+
                                                '<span class="rondo">0</span>'+
                                            '</button>'+
                                        '<input type="file" id="'+uniqueID+'" accept="'+mimeType+'" multiple="multiple" class="form-choose-input">';
                }
                
                cont.onclick = ()=>{
                    cont.lastElementChild.click();
                };
                this.chooserListener();
            },
        chooserListener:function(){
            var inputs = __("form-choose-input");
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener("change", (e)=>{
                    var fileLength = e.target.files.length;
                    e.target.previousElementSibling.lastElementChild.textContent = fileLength;
                });
            }
        }, 
        error:function(formReturn){
            return (formReturn.dataset.name)?formReturn.dataset.name+" undefined!":formReturn.placeholder+" undefined!";
        }
        
    },
    
    getElementByNode:function(target, node, loopNo = 4){
        
        var nodeName = target.nodeName;
        for (var i = 0; i < loopNo; i++) {
            if(nodeName !== node){
                target = target.parentNode;
                nodeName = target.nodeName;
                continue;
            }else{
                return target; 
            }

        }
        return target;

        },
    
    grid:function(container, column, margin){
            var hpGrid = new HPflexgrid(container, column, margin);
                return hpGrid;
    },
        
    Info:{
        add:function(message, type, holder = "info-box"){
                    //1 = success, 2 = warning, 3 = danger
        var element = "";
        switch (type) {     
            case 1:
                element = '<div class="info info-s"><span class="out"></span>'+message+'</div>';
                break;
            case 2:
                element = '<div class="info info-w"><span class="out"></span>'+message+'</div>';
                break;
            case 3:
                element = '<div class="info info-d"><span class="out"></span>'+message+'</div>';
                break;
            default:
                element = '<div class="info"><span class="out"></span>'+message+'</div>';
                break;
        }
        _(holder).innerHTML+=element;
        this.listener();
        },
        clear:function(holder = "info-box"){
            _(holder).textContent = "";
        },
        listener:function(){
            var boxOutButtons = __("out");

            for (var i = 0; i < boxOutButtons.length; i++) {

                 boxOutButtons[i].addEventListener("click", this.toggleInfoBoxDisplayByOut);
            }
        },
        toggleInfoBoxDisplayByOut:function(){  
            
            var box = this.parentNode;
            box.style.opacity = 0;
            setTimeout(function(){
                box.parentNode.removeChild(box);
            },300);
        }
    },
    
    Loader:{
        init:function(){       
            var loaders = document.getElementsByClassName("loading");

                for (var i = 0; i < loaders.length; i++) {
                    if(loaders[i].classList.contains("xs")){
                       loaders[i].innerHTML = '<div class="small"></div><p>Please wait...</p>'; 
                    }else{
                        loaders[i].innerHTML = '<div></div><p>Please wait...</p>';
                    }

            }
            var loaders2 = document.getElementsByClassName("loading2");

                for (var i = 0; i < loaders2.length; i++) {
                    if(loaders2[i].classList.contains("xs")){
                       loaders2[i].innerHTML = '<div class="small"></div>'; 
                    }else{
                        loaders2[i].innerHTML = '<div></div>';
                    }

            }
               loaders = document.getElementsByClassName("loading-bar");
               for (var i = 0; i < loaders.length; i++) {
                loaders[i].innerHTML = "<div></div>";
            }
        },
        toggle:function(loaderID, message = "please wait.."){
    
            var loader = _(loaderID);
           
                if(loader.style.display === "flex" ){
                   setTimeout(function(){
                       loader.style.display = "none";
                   },500);
                   loader.children[1].textContent = message;
               }else if(loader.style.display === "none" || loader.style.display === ""){
                   loader.style.display = "flex";
                   loader.children[1].textContent = message;
               }
            

        },
        setMessage:function(loaderID, message){
            var loader = _(loaderID);
            if(loader.style.display === "flex" ){
                loader.children[1].textContent = message;
            }
        }
        
    },
    
    lorem:function(){
       var lorem = __("lorem");
        for (var i = 0; i < lorem.length; i++) {
            __("lorem")[i].innerHTML += "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
        }
    },
    
    Store:{
        delimeter:"&|&",
        set:function(key, value, type=0){
                if(type === 0){
                    localStorage.setItem(key, value);
                }else{
                    sessionStorage.setItem(key, value);
                }
        },
        get:function(key, type=0){
                if(type === 0){
                   return localStorage.getItem(key);
                }else{
                    return sessionStorage.getItem(key);
                }
                
        },
        append:function(key, value, type = 0, delimiter = this.delimeter){
            if(this.get(key, type) === null){
                this.set(key, value, type);
            }else{         
                if(!this.has(key, value, type))this.set(key, this.get(key, type)+delimiter+value, type);
            }
        },
        has:function(key, value, type = 0){
            var res = this.get(key, type);          
            if(res === null){
                return false;
            }else{
                var values = res.split(this.delimeter);
                if(values.includes(value+"")){
                    return value;
                }else{
                    false;
                }
            }
        },
        getDelimiter:function(){
            return this.delimeter;
        },
        setDelimiter:function(delimiter){
            this.delimeter = delimiter;
        }
        
        
    },
    
    
    Toggle:{
         /**
          * It controls two elements. Element A shows or hides Element B.
          * A must carry a special class-naming definition e.g box-toggle while B, being the box 
          * whose display is changed is named "box".
          * 
          * @param {type} input - e.g box-toggle
          * @param {type} displayedBool- box visiblility
          * @param {type} displayProp - display properties for box
          * @returns {undefined}
          */
        link:function(input, displayedBool = false, displayProp = "block"){
            if(input instanceof Array){
                for (var item in input) {
                    this.setToggle(item, displayedBool, displayProp);
                }
            }else{
                this.setToggle(input, displayedBool, displayProp);
            }
        },
        setToggle:function(input, displayed, displayProp){
            var elmt = __(input);
                    for (var i = 0; i < elmt.length; i++) {
                        elmt[i].addEventListener("click", function(){
                            
                            var dspBlk = _(input.replace("-toggle", ""));
                                var dspRes = (dspBlk.style.display === "")?displayed:dspBlk.style.display;
                                if(!dspRes){
                                    dspBlk.style.display = displayProp;
                                }else{
                                    if(dspRes === "none"){
                                        dspBlk.style.display = displayProp;
                                    }else{
                                        dspBlk.style.display = "none";
                                    }
                                }
                            
                        });
                    }
        }
    },
    
    HPText:function(n){
       var hat = new HPadvText();
            hat.init(n);
            setTimeout(function(){
                hat.hideSendButton();
            },300);
    },

    HPduo:function(){
        var hp = new HPduoContent();
            hp.init("duo-col-contents");
            return hp;
    },
    
    HPws:function(listWrapperID){
        (new HPwhitespace(listWrapperID)).create();
    },
    
    HPgrid:function(container, column, margin){
        return new HPflexgrid(container, column, margin);
    },
    
    HPcount:function(){
        (new HPCountContent()).init();
    },
    
    HPac:function(){
        return new HPalrtConfm();
    },
    
    HPnote:function(){
        var note = new HPnotify();
            note.init();
            return note;
    },
     
    HPLS:function(time){
        var hpls = new HPLightSlider(time);
            hpls.start(hpls);
    },
    
    HPrad:function(){
       (new HPradio()).init();
    },
    
    init:function(){      
        
        this.Dialogue.hide();
        this.Forms.chooser();
        this.Forms.search();
        this.Forms.password();
        this.Loader.init();
        this.lorem();
               
        this.UI.boxAnchor();
        this.UI.imageButton();
        this.UI.ellipsis();
        this.UI.radio();
        this.UI.textRule();
        
        this.HPrad();
    }
};

