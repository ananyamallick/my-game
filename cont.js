class Cont {

    constructor(){
        this.button1 = createButton('CONTINUE');
        this.button1.position(672,530);
        this.button1.style('background', 'lightgrey');    
    }

    display(){
        this.button1.mousePressed(() => {
                this.button1.hide();
                gamestate ++ ;
            }
        );  
    }
}
