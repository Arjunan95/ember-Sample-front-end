import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
    Submit:function(){
        
        var email = this.get('inputEmail');
        console.log(email);
        var password = this.get('inputPassword');
        console.log(password);
        var login = {
            "email":email,
            "password":password,
         }
        //  console.log("arjun",email)
         console.log(JSON.stringify(login));
         console.log('arjun',email);
        var mycontroller = this;
        return $.ajax({
        url:'http://localhost:8082/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(login),
        success: function(response) {
        console.log(JSON.stringify(response));
        console.log("res123...>>>",response);
        alert(''+response.message+'');
        var user = response.usertype;
        console.log("user123..",user);
        
    if(email == 'central@gmail.com'){
        mycontroller.transitionToRoute('central');
        console.log('email sucessfully');
    }
    else if(email == 'state@gmail.com')
    {
        console.log('email sucessfully')
       mycontroller.transitionToRoute('state');
    } 
    else if(email == 'ration@gmail.com')
    {
     mycontroller.transitionToRoute('ration');

    } 
    
} 
        
})       

    }
}
});