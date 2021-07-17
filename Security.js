class Security {

    constructor(){

        this.access1 = createInput("Answer pls")
        this.access1.position(530,430);
        this.access1.style('background', 'white');  

        this.button1 = createButton('SUBMIT');
        this.button1.position(585,470);
        this.button1.style('background', 'lightgrey');    

        //this.access2 = createInput("Answer pls")
        //this.access2.position(530,430);
        //this.access2.style('background', 'white');  

        //this.button2 = createButton('SUBMIT');
        //this.button2.position(585,470);
        //this.button2.style('background', 'lightgrey');    
    }

    
    display(){
        this.button1.mousePressed(() => {
            if(systm.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                gamestate++;
            }
        });

        //this.button2.mousePressed(() => {
          //  if(systm.authenticate(accessCode2,this.access2.value())){
            //    this.button2.hide();
              //  this.access2.hide();
                //gamestate++;
            //}
       // });
    }
}