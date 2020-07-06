const HexValues = [ 0, 1, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorBoxes = document.querySelectorAll('.colors');
const colorCard = document.querySelectorAll('.color-box');

const generateColorBtn = document.querySelector('.btn');
generateColorBtn.addEventListener('click', generateColors);



function createColorCode() {
    let hex = "#";
    for(let i = 0; i <= 5; i++){
      let randomNumber = getRandomNumber();
      hex += HexValues[randomNumber];
    }
    
    return hex;
}

function getRandomNumber() {
    return Math.floor(Math.random() * HexValues.length);
}

function generateColors() {
    let num = 1;
    colorBoxes.forEach( box => {
        if(box.classList.contains(`color-${num}`)){
           document.querySelector(`.color-${num}`).style.background = createColorCode();
           addColorName(createColorCode(), num);
        }
        num++;
    })
}

function addColorName(colorCode, num) {
   document.querySelector(`.name-${num}`).textContent = colorCode;
}


function copyColorCode() {
    colorCard.forEach( card => {
      card.addEventListener( 'click', () => {
        const para = card.children[1];  
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(para);
        selection.removeAllRanges();
        selection.addRange(range);


        try{
            document.execCommand('copy');
            selection.removeAllRanges();
            document.querySelector('#color-code').textContent = para.textContent;
            document.querySelector('.alert-msg').classList.remove('hide');

            setTimeout(() => {
              document.querySelector('.alert-msg').classList.add('hide');
            },1400)
        }
        catch(e){
            console.log(e);
        }
      })
           
    })
}

generateColors();
copyColorCode();



