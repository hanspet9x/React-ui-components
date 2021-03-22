class Lore{
    constructor(pap){
        this.pap = pap;
    }

    def(){
        alert();
    }
}

var HP = {
    lorem:function(){
        document.getElementsByClassName("lorem")[0].innerHTML = "fuck u";
    },

    lore:function(){
        return new Lore();
    },

    init:function(){
        this.lorem();
    }

};

export default HP;

