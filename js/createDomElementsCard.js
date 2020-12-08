let user = {
    id: 1,
    name: 'Aleksey',
    title: 'Title task',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repudiandae voluptates totam ipsum deserunt perferendis facilis, obcaecati itaque libero accusantium saepe earum! Praesentium deserunt quibusdam voluptas fugiat dicta nemo placeat. Eveniet non harum repellendus nostrum. Dicta officia iste non consequuntur!', 
    date: '20.20.2020',
    comment: 'сам ты',
    list: 'user list',
}


function getDateNow() {
    let Data = new Date(),
        Year = Data.getFullYear(), 
        Month = Data.getMonth() + 1,
        Day = Data.getDate(),
        DayF = Day >= 10 ? Day : '0' + Day,
        result = `${DayF}.${Month}.${Year}`;
    return result;
}


export function createForm(kyda) {
    kyda.insertAdjacentHTML('beforeEnd', 
    `<div class="colum__item card">
        <form class="card__form" action="">
            <div class="card__header">
                ${user.list}
            </div>
            <div class="card__body">
                <label class="card__label" for="cf-message">Task</label>
                <textarea class="card__textarea" id="cf-message" type="text"></textarea>
            </div>
            <div class="card__footer">
                <button id="add-card" class="card__btn btn-primary">Create</button>
                <button class="card__btn btn-primary">Delete</button>
            </div>
        </form>
    </div>`
    );
}

export function createCard(kyda) {
    kyda.insertAdjacentHTML('beforeEnd', 
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


// export function createCard(kyda) {
	
// 	// create card element
//     let card = document.createElement('div');
// 	card.setAttribute('class', 'card');
	
//         // create card header
//         let cardHeader = document.createElement('div');
//         cardHeader.setAttribute('class', 'card__header');
        
//             // create card header h4.card__user-name
//             let cardUserName = document.createElement('h4');
//             cardUserName.setAttribute('class', 'card__user-name');
//             let cardUserNameContent = document.createTextNode('First Last Name'); 
//             cardUserName.appendChild(cardUserNameContent);
            
//             cardHeader.appendChild(cardUserName);

//             // create card header span.card__create-date
//             let cardCreateDate = document.createElement('span');
//             cardCreateDate.setAttribute('class', 'card__create-date');

//             let cardCreateDateContent = document.createTextNode(getDateNow()); 
            
//             cardCreateDate.appendChild(cardCreateDateContent);
            
//             cardHeader.appendChild(cardCreateDate);
//             //
//         //
//         card.appendChild(cardHeader)


//         // create card body
//         let cardBody = document.createElement('div');
//         cardBody.setAttribute('class', 'card__body');
         
//              // create card body h4.card__title
//             let cardTitle = document.createElement('h4');
//             cardTitle.setAttribute('class', 'card__title');
//             let  cardTitleContent = document.createTextNode('Title task'); 
//             cardTitle.appendChild( cardTitleContent);
             
//             cardBody.appendChild(cardTitle);
 
//             // create card body p.card__text
//             let cardText = document.createElement('p');
//             cardText.setAttribute('class', 'card__text');
//             let cardTextContent = document.createTextNode('text text text text text text text text text text text text'); 
//             cardText.appendChild(cardTextContent);
             
//             cardBody.appendChild(cardText);
//             //
//         //
//         card.appendChild(cardBody)


//         // create card footer
//         let cardFooter = document.createElement('div');
//         cardFooter.setAttribute('class', 'card__footer');
         
//              // create card footer h4.card__title
//             let cardBtnDelete = document.createElement('button');
//             let cardBtnComment = document.createElement('button');
//             let cardBtnInProgress = document.createElement('button');

//             cardBtnDelete.setAttribute('class', 'card__btn btn-primary');
//             cardBtnComment.setAttribute('class', 'card__btn btn-primary');
//             cardBtnInProgress.setAttribute('class', 'card__btn btn-primary');

//             let cardBtnContentDelete = document.createTextNode('Delete'); 
//             let cardBtnContentComment = document.createTextNode('Comment'); 
//             let cardBtnContentInProgress = document.createTextNode('In progress'); 

//             cardBtnDelete.appendChild(cardBtnContentDelete);
//             cardBtnComment.appendChild(cardBtnContentComment);
//             cardBtnInProgress.appendChild(cardBtnContentInProgress);

//             cardFooter.appendChild(cardBtnDelete);
//             cardFooter.appendChild(cardBtnComment);
//             cardFooter.appendChild(cardBtnInProgress);
//         //
//         card.appendChild(cardFooter)

//     kyda.appendChild(card);
// }


// class Card {
//     constructor(options) {
//         this.id = options.id
//         this.name = options.name
//         this.title = options.title
//         this.text = options.text
//         this.date = options.date
//         this.comment = options.comment
//     }


// }

// id: 1,
// user: 'Aleksey',
// title: 'Title task',
// text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quo? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repudiandae voluptates totam ipsum deserunt perferendis facilis, obcaecati itaque libero accusantium saepe earum! Praesentium deserunt quibusdam voluptas fugiat dicta nemo placeat. Eveniet non harum repellendus nostrum. Dicta officia iste non consequuntur!', 
// date: '20.20.2020',
// comment: 'сам ты'