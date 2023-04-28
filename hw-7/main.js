const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')


const createTodo = () =>{
    if (!input.value.trim()){
        input.value =''
        return false
    }else{
        const div = document.createElement('div')
        const text = document.createElement('h3')

        div.setAttribute("class", "block_text")
        text.innerHTML = input.value

        div.append(text)
        todoList.prepend(div)
        input.value =''
    }
    return input.value = ''
}

createButton.onclick = () => createTodo()
window.addEventListener('keydown', (event) =>{
    if(event.keyCode === 13){
        createTodo()
        console.log('ok')
    }
})

///task.1


function createTodoElement(text) {
    const todoElement = document.createElement('div');
    todoElement.textContent = text;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';


    deleteButton.addEventListener('click', () => {
        todoList.removeChild(todoElement);
    });


    todoElement.appendChild(deleteButton);

    return todoElement;
}


createButton.addEventListener('click', () => {
    const text = input.value.trim();
    if (text) {
        const todoElement = createTodoElement(text);
        todoList.appendChild(todoElement);
        input.value = '';
    }
});


///task.2
// const input = document.getElementById('input');
// const createButton = document.getElementById('create_button');
// const todoBlock = document.getElementById('todo_list');


function createDeleteButton(todo) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
        todo.remove();
    });
    return deleteButton;
}


function createEditButton(todo) {
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => {
        const newValue = prompt('Enter new value:', todo.innerText);
        if (newValue !== null) {
            todo.innerText = newValue;
        }
    });
    return editButton;
}
createButton.addEventListener('click', () => {

    const newTodo = document.createElement('div');
    newTodo.classList.add('todo_item');
    newTodo.innerText = input.value;


    const deleteButton = createDeleteButton(newTodo);
    const editButton = createEditButton(newTodo);
    newTodo.appendChild(deleteButton);
    newTodo.appendChild(editButton);


    newTodo.addEventListener('click', () => {
        const newValue = prompt('Enter new value:', newTodo.innerText);
        if (newValue !== null) {
            newTodo.innerText = newValue;
        }
    });

    ///todoBlock.appendChild(newTodo);
    input.value = '';
});


///task 1-2 hw-6

function reverseInput() {
    var input = document.getElementById("input").value;
    var arr = input.split("");
    var output = "";
    arr.forEach(function(char) {
      output = char + output;
    });
    document.getElementById("output").innerHTML = output;
  }



// const arr = ['hello','javascript','react','html']
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//           console.log(arr[i][j]);
//         }
//       }
  

//task 1 hw-7
      class Cars {
        constructor(model, color, wheels) {
          this.model = model;
          this.color = color;
          this.wheels = wheels;
        }
        
        start() {
          console.log('Машина заведена');
        }
      }
      
      class SportsCar extends Cars {
        constructor(model, color, wheels, topSpeed) {
          super(model, color, wheels);
          this.topSpeed = topSpeed;
        }
      }
      
      class SUV extends Cars {
        constructor(model, color, wheels, offRoadAbility) {
          super(model, color, wheels);
          this.offRoadAbility = offRoadAbility;
        }
      }
      
      class ElectricCar extends Cars {
        constructor(model, color, wheels, rangePerCharge) {
          super(model, color, wheels);
          this.rangePerCharge = rangePerCharge;
        }
      }
      
      const ferrari = new SportsCar('Ferrari', 'Red', 4, '200 mph');
      const camry = new SUV('Camry 70', 'Black', 4, 'Excellent');
      const tesla = new ElectricCar('Tesla Model S', 'White', 4, '300 miles');
      
      console.log(ferrari);
      console.log(camry);
      console.log(tesla);


//task 2 hw-7


class TrafficLight {
    constructor() {
      this.redLight = document.querySelector('.red-light');
      this.yellowLight = document.querySelector('.yellow-light');
      this.greenLight = document.querySelector('.green-light');
    }
    
    red() {
      this.redLight.style.backgroundColor = 'red';
      this.yellowLight.style.backgroundColor = 'gray';
      this.greenLight.style.backgroundColor = 'gray';
      alert('STOP');
    }
    
    green() {
      this.redLight.style.backgroundColor = 'gray';
      this.yellowLight.style.backgroundColor = 'gray';
      this.greenLight.style.backgroundColor = 'green';
      alert('GO');
    }
  }
  
  const trafficLight = new TrafficLight();
  
  const color = prompt('Введите цвет светофора (Красный/Зеленый)');
  
  if (color.toLowerCase() === 'красный') {
    trafficLight.red();
  } else if (color.toLowerCase() === 'зеленый') {
    trafficLight.green();
  } else {
    alert('Неверный цвет');
  }

    
      
      
























  





