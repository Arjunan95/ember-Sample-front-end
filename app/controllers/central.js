import Controller from '@ember/controller';

export default Controller.extend({
    

actions:{
    Submit:function(){
    
        var rice = this.get('rice');
        console.log(rice);
        var wheat = this.get('wheat');
        console.log(wheat);
        var kerosene = this.get('kerosene');
        console.log(kerosene);
        var transactionstring = {
            "rice":rice,
            "wheat":wheat,
            "kerosene":kerosene
         }
         console.log(JSON.stringify(transactionstring));
        var mycontroller = this;
        return $.ajax({
        url:'http://localhost:8082/central',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(transactionstring),
        success: function(response) {
        console.log(JSON.stringify(response));
        console.log("res123...>>>",response);
        alert(''+response.message+'');
        var user = response.usertype;
        console.log("user123..",user);
        
   
    
} 
        
})       

    }
}
});
