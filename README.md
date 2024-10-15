"# Function--Composition" 

What is function composition?

Function composition is a proccss of chaining the functions that returns a function in output. In function composition the output of one function is the input of the other function, im this way a specific task completed by completing its subtasks

Real time Example


let temcheck  = (tem)=>{
    return tem > 25 ? tem = true : tem = false;
} 

let ACTurning  = (tem) => {
    return tem !=true ? "AC is currently off" : tem = "AC is currently on";
};


let compose = (temperature, ACstatus) => {
    return function(result){
        return ACstatus(temperature(result));
    }
}


const composefunction = compose(temcheck, ACTurning );

let myResult = composefunction(10);
console.log(myResult);



Pseudo Code:

1. It will get the temperature.
2. If the Temperature is higher than 25 then it will be true.
3. if the temperature is in true then th AC status will be on
4. After all the tasks done , it will return the last result 