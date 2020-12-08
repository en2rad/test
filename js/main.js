// import { createForm } from './createDomElementsCard.js';
// import { createCard } from './createDomElementsCard.js';

const boardCanvas = document.querySelector('.board-canvas')
const colTodo = document.querySelector('.colum--todo') // калонка todo
const btnCreateCard = document.getElementById('create-card') // ФОРМА ДОБАВЛЕНИЕ НОВОГО ТАСКА кнопка (create)


const taskForm = document.querySelector("[task-form]");
	const taskUserName = taskForm.querySelector("[task-user-name]");
	const taskTitle = taskForm.querySelector("[task-title]");
	const taskText = taskForm.querySelector("[task-text]");


// const addBtn = document.getElementById("add");

// const notes = JSON.parse(localStorage.getItem("notes"));

// console.log (notes)
// if (notes) {
//     notes.forEach((note) => {
//         addNewNote(note);
//     });

// }



boardCanvas.addEventListener('click', (event) => {
    event.preventDefault()
	if(event.target.id === 'createCard') {	
		if(!taskUserName.value || !taskTitle.value || !taskText.value) {
			alert('Пустые поля')
		} else {
			let user = createNewUser()
			addToLocalStorage(user)
			createCard(user)
		}
	} 
	if(event.target.id === 'createForm') {	
		createForm()
	} 
})


class Task {
    constructor(options) {
        this.name = options.name
        this.title = options.title
        this.text = options.text
        this.date = options.date
        this.comment = options.comment
    }
}



function getDateNow() {

	// let  result = new Date().toLocaleTimeString() // "00:28:12"
	// let  result = new Date().toLocaleString() // 20.20.2020

   	let  result = new Date().toLocaleDateString() // 07.12.2020, 00:27:24
    return result;
}

function createNewUser() {
	const taskForm = document.querySelector("[task-form]");
	const taskUserName = taskForm.querySelector("[task-user-name]");
	const taskTitle = taskForm.querySelector("[task-title]");
	const taskText = taskForm.querySelector("[task-text]");
	const taskUserNameValue = taskUserName.value
	const taskTitleValue = taskTitle.value
	const taskTextValue = taskText.value

	let task = new Task({
		name: taskUserNameValue,
		title: taskTitleValue,	
		text: taskTextValue,
		date: getDateNow(),
	})

	console.log(task)
	return task
}


function addToLocalStorage(task) {
	const all = getTaskFromLocalStorage()
	all.push(task)
	localStorage.setItem('task', JSON.stringify(all))
}

function getTaskFromLocalStorage() {
	return JSON.parse(localStorage.getItem('task') || '[]')
}



function createCard(user) {
    colTodo.insertAdjacentHTML('beforeEnd', 
    `<div class="colum__item card">	
        <div class="card__header">
            <h4 class="card__user-name">${user.name}</h4>
            <span class="card__create-date">${getDateNow()}</span>
        </div>
        <div class="card__body">
            <h4 class="card__title">${user.title}</h4>
            <p class="card__text">
              ${user.text}
            </p>
        </div>
        <div class="card__footer">
            <button  class="card__btn btn-primary">Delete</button>
            <button class="card__btn btn-primary">Comment</button>
            <button class="card__btn btn-primary">In progress</button>
        </div>
    </div>`
    );
}


function createForm() {
    colTodo.insertAdjacentHTML('beforeEnd', 
		`<div class="colum__item card">
			<form task-form id="create-card" class="card__form" action="">
				<div class="card__header">
					<input task-user-name class="card__input" type="text">
				</div>
				<div class="card__body">
					<label class="card__label">Task title</label>
					<input task-title class="card__input" type="text">

					<label class="card__label">Task</label>
					<textarea task-text class="card__textarea" id="cf-message" type="text"></textarea>
				</div>
				<div class="card__footer">
					<button id="createCard" class="card__btn btn-primary">Create</button>
					<button class="card__btn btn-primary">Delete</button>
				</div>
			</form>
		</div>`
	);
}

const counterTaskToDo =  document.querySelector('.colum__counter')

function counterTask(kyda) {
	let a = getTaskFromLocalStorage().length

	kyda.innerHTML = a
}

counterTask(counterTaskToDo)




