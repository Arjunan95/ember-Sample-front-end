import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
central:function(){
    this.transitionToRoute('centralpage')  
},
State:function(){
    this.transitionToRoute('statepage')  
},
Rationshop:function(){
    this.transitionToRoute('rationshoppage')  

}

    }
    
    
});
