var button = document.getElementById("advbt");
var i = 0;
button.addEventListener("mousedown",async function(){
    i++;
    try {
    var b = document.getElementById('b');
    b.style.fontSize = "10px;"
    var resp = await fetch('https://api.adviceslip.com/advice');
    var data = await resp.json();
    console.log(data.slip.advice);
    b.innerText = data.slip.advice;
    }
    catch(error){
        console.log(error)
    }
})