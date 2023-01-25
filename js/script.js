
function pow(x, n){
    return x ** n
}
let result = pow(x, n)
console.log(result)

function sqrt(n){
    return n ** (1/2)
}
let result1 = sqrt(n)
console.log(result1)

function abs(n){
    if(n < 0 ){
        return n *= -1
    }else{
        return n
    }
}
let result2 = abs(n)
console.log(result2)

function floor(n){
    if(n > 0){
        if(n % 1 > 0 && n % 1 < 1){
            return n - (n % 1)
        }else{
            return n
        } 
    }else if(n == 0){
        return 0
    }else{
        if(n % 1 < 0 && n % 1 > -1){
            return n - (n % 1) - 1  
        }else{
            return n
        }
    }
}
let result3 = floor(n)
console.log(result3)


function ceil(n){
    if(n > 0){
        if(n % 1 > 0 && n % 1 < 1){
            return ((n - (n % 1)) + 1)  
        }else{
            return n
        } 
    }else if(n == 0){
        return 0
    }else{
        if(n % 1 < 0 && n % 1 > -1){
            return n - (n % 1)  
        }else{
            return n 
        }
    }   
}
let result4 = ceil(n)
console.log(result4)


function round(n){
    if(n > 0){
        if (n % 1 >= 0.5 ){
            return ((n - (n % 1)) + 1) 
        }else{
            return n - (n % 1)
        }
    }else if(n == 0){
        return 0
    }else{
        if (n % 1 <= -0.5){
            return n - (n % 1) 
        }else{
            return ((n - (n % 1)) - 1)
        }
    }
    
}
let result5 = round(n)
console.log(result5)

function trunc(n){
    return n - (n % 1)
}
let result6 = trunc(n)
console.log(result6)
