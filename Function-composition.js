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