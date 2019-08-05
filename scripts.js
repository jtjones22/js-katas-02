function add(n1, n2) {
    let result = n1 + n2
    return result
}

console.log(add(2, 4))

function multiply(a, b){
let product = 0
if (b > 0) {                                //if b is greater than 0 then run the command below
    for (let i = 0; i < b; i++) {
        product = add(product, a)
    }
    return product
}
else if(b < 0) {                            //if b is less than 0 AND a is greater than 0 run the command below
    if(a > 0) {
        for (let i = 0; i > b; i--) {
            product = add(product, -a)
        }
        return product
    }
}
if (b < 0) {                            //if BOTH b AND a are less than 0 run the command below
    if (a < 0) {
        for (let i = 0; i > b; i--) {
            product = add(product, -a)
        }
        return product
    }
}
}

console.log(multiply(9,9))

function power(x, n) {
let ex = x
    for (let i = 1; i < n; i++) {
       ex = multiply(ex, x)
    }
    return ex
}

console.log(power(2, 8))

function factorial(n) {
    if (n > 0 && n <=1) {
        return 1;
    }
    else {
        return multiply(n, factorial(n-1))
    }
}

console.log(factorial(4))

function fibonacci(n) {
    let num1 = 0
    let num2 = 1
    let result
    for (i = 2; i < n; i++) {
        result = add(num1, num2)
        num1=num2
        num2=result
    }
    return result
}

console.log(fibonacci(9))