import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        Sumbit:function(){
            this.transitionToRoute('statepage')  
            
        }
        }});
