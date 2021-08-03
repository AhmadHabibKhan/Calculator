const buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen')

for(let button of buttons){
    button.addEventListener('click', (e)=>{
        // console.log(e.target);

        const buttonText = e.target.innerText;
        console.log(buttonText);


        if(buttonText == 'X'){
            screen.value+='*';
        }

        else if(buttonText == 'C'){
            screen.value = "";
        }

        else if(buttonText == '='){
            try{
                screen.value = eval(screen.value);
            }
            catch(e){
                console.log(e.message);
                // screen.value = e.message;
                screen.value = "Invalid Operation"
            }
        }

        else{
            screen.value += buttonText;
        }
    })
}