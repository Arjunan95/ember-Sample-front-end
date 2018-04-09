import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        transactions:function(){
            this.transitionToRoute('homepage')
        }
    }
        });
