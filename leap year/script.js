 document.querySelector('#check').addEventListener('click', function(){
 	

        var number = document.querySelector('#number').value;
        var lastTwoDigit = number.match(/\d{2}$/);

        //alert (lastTwoDigit)
        var integ = parseInt(number);
        var length = number.length;
              
              if ( length == 4){
                
                 if (lastTwoDigit == "00"){
                    
                     var count = number%400;
                     if (!count == 0 ){
	       	  		   alert ("it's not leap year");
	       	  	     }
	       	  	     else{
	       	  	       alert ("it's  leap year");
	       	  	     }
                 }
                 else{
                     
                     if(number%4 == 0){
                       
                        alert('leap year');
                        document.getElementById('lengthError').innerHTML = "";

                     }
                     else{
                        document.getElementById('lengthError').innerHTML = "";
                        alert('its not leap year');
                     }

                 }

              }

              else{
              	document.getElementById('lengthError').innerHTML = "insert at least 4 number";
              }


 })