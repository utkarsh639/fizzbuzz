let result = document.getElementById("demo");
let btn = document.getElementById("btn")
btn.addEventListener("click", fb);
function fb(){
    let input = document.getElementById("text").value;
    for(let i = 1; i<=input; i++){
        if(i%3==0 && i%5==0){
            result.innerHTML += "<br/>FizzBuzz"
        }
        else if(i%3 == 0){
            result.innerHTML += "<br/> Fizz"
        }
        else if(i%5 == 0){
            result.innerHTML += "<br/> Buzz"
        }
        else {
            result.innerHTML += "<br/>" + i
        }
    }
}