import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        signout:function(){
            this.transitionToRoute('page1')
        }
    }
        });
