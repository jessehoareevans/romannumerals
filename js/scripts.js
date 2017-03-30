$(document).ready(function(){

  function digitCheck(string){
    var isDigit = new RegExp(/[0-9,]/)
    var check = true;

    for(i=0;i<string.length;i++){
      if(isDigit.test(string[i])===false){
        check = false;
        break;
      }
    }
    if(check===false){
      return false;
    }
    else{
      return true;
    }
  }

  function convertNumber(number){
    var answer = [];
    var value = [1000,500,100,50,10,5,1];
    var numeral = ['M','D','C','L','X','V','I'];
    var total = number;
    for(i=total;total>0;){
      for(j=0;j<value.length;j++){
        if(total-value[j]>=0){
          answer.push(numeral[j]);
          total-=value[j];
          break
        }
      }
    }
    //
    // for(i=number;i>0;){
    //   if(i-1000>=0){
    //     answer.push('M');
    //     i-=1000;
    //   }
    //   else if(i-500>=0){
    //     answer.push('D');
    //     i-=500;
    //   }
    //   else if(i-100>=0){
    //     answer.push('C');
    //     i-=100;
    //   }
    //   else if(i-50>=0){
    //     answer.push('L');
    //     i-=50;
    //   }
    //   else if(i-10>=0){
    //     answer.push('X');
    //     i-=10;
    //   }
    //   else if(i-5>=0){
    //     answer.push('V');
    //     i-=5;
    //   }
    //   else if(i-1>=0){
    //     answer.push('I');
    //     i-=1;
    //   }
    // }
    //
    var test = answer.slice();
    var numeralCount = new RegExp(/[M]{4,}|[D]{4,}|[C]{4,}|[L]{4,}|[X]{4,}|[V]{4,}|[I]{4,}/)


    while(numeralCount.exec(test.join(""))){
      var results = numeralCount.exec(test.join(""));

      //if(4)
      // answer.splice(results['index']+1,3,numeral[(numeral.indexOf(results[0][0]))-1]);

      //else(9)
      test.splice(results['index']-1,5,results[0][0],numeral[(numeral.indexOf(results[0][0]))-2])
      console.log(results,answer,test);
    //
    }


  }//convertNumber function
  convertNumber(999);









  $('form').submit(function(event){
    var numberInput = $('#numberInput').val();
    if(digitCheck(numberInput)===false){
      $('#answer').text('you suck enter a number');
    }
    else{



    }
    event.preventDefault();
  });
});
