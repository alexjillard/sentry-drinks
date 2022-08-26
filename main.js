
const buttons = document.querySelectorAll('button.expand');
console.log(buttons);

function directions_click(event) {
    let placeholder = this.nextElementSibling;
    let directions;

    while(placeholder){
      if(placeholder.classList.contains('directions')){
        directions = placeholder;
        break;
      }
    }

    if (directions){
      directions.classList.toggle('collapsed');
      this.classList.toggle('collapsed');
    }

  }

buttons.forEach(button => button.addEventListener('click', directions_click));
