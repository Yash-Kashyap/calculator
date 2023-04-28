// let outputScreen = document.getElementById("output-screen");
// function display(num)
// {
//     outputScreen.value += num;

// }

// function Calculate(){
//     try{
//         outputScreen.value = eval(outputScreen.value);
//     }
//     catch(err){
//         alert("Invalid");
//     }
// }

// function Clear(){
//     outputScreen.value = "";
// }

// function del(){
//     outputScreen.value = outputScreen.value.slice(0,-1);
// }


let outputScreen = document.getElementById("output-screen");
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons)
{
    item.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;
        console.log('buttonText is ',buttonText);
        if(buttonText=='*')
        {
            screenValue += buttonText;
            outputScreen.value = screenValue;
        }
        else if(buttonText=='=')
        {
            outputScreen.value = eval(screenValue);
        }
        else if(buttonText=='C')
        {
            screenValue = "";
            outputScreen.value = screenValue;
        }
        // else if(buttonText=='DEL')
        // {
        //     outputScreen.value = outputScreen.value.slice(0,-1);
        // }
        else
        {
            screenValue += buttonText;
            outputScreen.value = screenValue;
        }
    })
}