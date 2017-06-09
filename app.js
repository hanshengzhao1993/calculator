(function equalClick(){
  document.addEventListener("click", function (event) {
    // console.log(event)
    console.log(event.srcElement.value)
    var equalsButton = document.getElementById('equal');
    var input = document.getElementById('inputs');
    var doMath = function(string){
      var operations = {
        'x': 'x',
        '/': '/',
        '+': '+',
        '-': '-'
      };
      
      var operationsToDo = {
        'x': function (x, y) {
          return x * y;
        },
        '/': function (x,y) {
          return x / y;
        },
        '+': function (x,y) {
          return x + y;
        },
        '-': function () {
          return x - y;
        }
      }
      var stack = [];
      var tempNum = ''
      
      for(var i =0 ; i< string.length; i++){
        console.log(i)
        if(operations[string[i]] === undefined){
          tempNum = tempNum + string[i]
          if(string.length - 1 === i){
            stack.push(tempNum)
          }
        } else {
          stack.push(tempNum);
          stack.push(operations[string[i]])
          tempNum = '';
        }
      }
      
      for(var i = 0; i< stack.length; i++){
        console.log(i)
        if( stack[i] === 'x' || stack[i] === '/' ){
          if( typeof stack[i - 1] !== "number"){
            stack[i - 1] = parseInt(stack[i - 1])
          }
          if( typeof stack[i + 1] !== "number"){
            stack[i + 1] = parseInt(stack[i + 1])
          }
          var newNumber = operationsToDo[stack[i]](stack[i - 1], stack[i + 1])
          stack.splice(i-1,i+2, newNumber)
          i--;
        }
        
      }
      for(var i = 0; i< stack.length; i++){
        console.log(i)
        if( stack[i] === '-' || stack[i] === '+' ){
          if( typeof stack[i - 1] !== "number"){
            stack[i - 1] = parseInt(stack[i - 1])
          }
          if( typeof stack[i + 1] !== "number"){
            stack[i + 1] = parseInt(stack[i + 1])
          }
          var newNumber = operationsToDo[stack[i]](stack[i - 1], stack[i + 1])
          stack.splice(i-1,i+2, newNumber)
          i--;
        }
        
      }

      return stack[0]
    }

    if(event.srcElement.value === "="){
      console.log(typeof input.value);
      console.log('now to do the math')
      input.value = doMath(input.value)
    }
    if(event.srcElement.value !== undefined && event.srcElement.value !== "="){
      input.value = input.value + event.srcElement.value;
    }
    
  })


})()
