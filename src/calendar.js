import { compareAsc, format } from 'date-fns'
let myProjects = [];
let myTasks = [];


class Project {
    constructor(title) {
        this.title = title;
        this.tasks = []
    }
}

class Task {
    constructor(name, date, priority) {
        this.name = name;
        this.date = date;
        this.priority = priority;
    }
}

class ProjectTask {
    constructor(name, date, priority, project) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.project = project;
    }
}

//PLAN: 1.make the clickable projects have an "active" classlist.
//2. make the tasks only add if project contains "activate"
//2.5 filter all/day/week/project  MAYBE CAN FILTER PROJECTS? BY INPUTTING PROJECT IN TASK AND COMPARING
//3. every project displays their own "ALL Tasks" header and appends their own child.
//4. remember restaurant page. each their own page.





const makeProject = (() => {
    const formOne = document.querySelector(".form-one")
    const formTwo = document.querySelector(".form-two")
    const formOneInput = document.querySelector("#project-name")
    const modalOne = document.querySelector(".modal-one")
    const modalTwo = document.querySelector(".modal-two")




    
    



    const createProject = (newProject) => {  //creates the project display and controls
        const addedProjects = document.querySelector(".added-projects")
        
        const projectCard = document.createElement("div")
        projectCard.classList.add("project-button")
        addedProjects.appendChild(projectCard)

        const projectCardButton = document.createElement("button")
        projectCardButton.classList.add("select-project")
        
        const projectImg = document.createElement("img")
        projectImg.setAttribute("src", "./icons/tasks.svg")
        const projectText = document.createElement("p")

        const projectCardDelete = document.createElement("button")
        projectCardDelete.classList.add("delete-project")
        const projectDeleteIcon = document.createElement("p")
        projectDeleteIcon.textContent = "X"
        
        projectCardDelete.appendChild(projectDeleteIcon)
        projectCardButton.appendChild(projectImg)
        projectCardButton.appendChild(projectText)
        projectCard.appendChild(projectCardButton)
        projectCard.appendChild(projectCardDelete)
        addedProjects.appendChild(projectCard)




        modalOne.close()
        projectText.innerHTML = newProject.title;

     

        projectCardDelete.addEventListener("click", () => {
            projectCard.remove();
            
            let index = 0;
            myProjects.forEach(project => {
                if (project.title === newProject.title)
                myProjects.splice(index, 1);
                index++;
            })

        })

        //make select-project button display myProject Tasks HEEEERE

        projectCardButton.addEventListener("click", () => {
            calendarControl.renderProject(newProject.title)


        })


    }




    const addProjectToArray = (project) => { //adds project to array
        myProjects.push(project);

    }


    const addProjectToDisplay = () => { //adds project inputs to display
    formOne.addEventListener("submit", (e) => {
        e.preventDefault();
        let newProject = new Project(formOneInput.value);
        addProjectToArray(newProject)
        createProject(newProject);
        console.log(myProjects)

        })
    }


    //TASKs UGHHHHHH
    const addTaskToArray = (task) => {  //adds task to array
        
        myTasks.push(task);

    }

    const addTaskToDisplay = () => {  //adds task input values to display
        const taskNameInput = document.querySelector("#task-name")
        const dateInput = document.querySelector("#date")
        const priorityInput = document.querySelector(".task-priority")

        formTwo.addEventListener("submit", e => {
            e.preventDefault();
            let newTask = new Task(taskNameInput.value, dateInput.value, priorityInput.value)
            addTaskToArray(newTask)
            createTask(newTask);
            console.log(myTasks)
        })
    }

    const createTask = (newTask) => {  //task controls and card creation
        const todoContainer = document.querySelector(".todo")


        const todoCard = document.createElement("div")
        todoCard.classList.add("todo-card")

        const todoCardText = document.createElement("p")
        todoCardText.classList.add("todo-card-text")


        const todoCardDeleteBtn = document.createElement("button")
        todoCardDeleteBtn.classList.add("todo-card-delete")
        const todoCardDeleteIcon = document.createElement("p")
        todoCardDeleteIcon.textContent = "X"


        todoCardDeleteBtn.appendChild(todoCardDeleteIcon)
        todoCard.appendChild(todoCardText)
        todoCard.appendChild(todoCardDeleteBtn)
        todoContainer.appendChild(todoCard)

        //close modal two
        modalTwo.close()




        //make card priority color
        const priorityColor = (value) => {
            if (value === "low") {
                todoCard.classList.add("color-add-low")

            }

            if (value === "medium") {
                todoCard.classList.add("color-add-medium")
            }

            if (value === "high") {
                todoCard.classList.add("color-add-high")
            }

        }
        

        const spanOne = document.createElement("span")
        const spanTwo = document.createElement("span")
        const spanThree = document.createElement("span")
  
        spanOne.textContent = newTask.name
        spanTwo.textContent = format(new Date(newTask.date), "yyyy-MM-dd") 
        spanThree.textContent = priorityColor(newTask.priority)

        todoCardText.appendChild(spanOne)
        todoCardText.appendChild(spanTwo)
        todoCardText.appendChild(spanThree)




        //delete task card
        todoCardDeleteBtn.addEventListener("click", () => {
            todoCard.remove(); //delete in display
            
            let index = 0; //delete in array
            myTasks.forEach(task => {
                if (task.name === newTask.name)
                myTasks.splice(index, 1);
                index++;
            })
        })

        


        //PUSH TASK INTO THE RIGHT PROJECT

    }





return {addProjectToDisplay, addTaskToDisplay}
})();





const calendarControl = (() => {
    const todoContainer = document.querySelector(".todo-container")
    const modalTwo = document.querySelector(".modal-two")
    const addProjectBtn = document.querySelector(".add-project")
    const modalOne = document.querySelector(".modal-one")
    const allBtn = document.querySelector("#all-button")
    const dayBtn = document.querySelector("#day-button")
    const weekBtn = document.querySelector("#week-button")
    const closeModalBtnOne = document.querySelectorAll(".closee")
    const closeModalBtnTwo = document.querySelectorAll(".closeee")



    const todoTitle = document.createElement("div")
    todoTitle.classList.add("todo-title")
    const titleText = document.createElement("h1")

    const todo = document.createElement("div")
    todo.classList.add("todo")
    const todoText = document.createElement("p")

    const addTaskButton = document.createElement("button")
    addTaskButton.classList.add("add-task")

    const addIcon = document.createElement("img")
    addIcon.classList.add("icon-img")
    addIcon.setAttribute("src", "./icons/add.svg")
    addIcon.setAttribute("alt", "add")
    const addText = document.createElement("p")
    addText.textContent = "Add Task"

    todoTitle.appendChild(titleText)
    todoTitle.appendChild(todo)
    addTaskButton.appendChild(addIcon)
    addTaskButton.appendChild(addText)
    todo.appendChild(todoText)
    todoContainer.appendChild(todoTitle)
    todoContainer.appendChild(addTaskButton)
    todoContainer.appendChild(todo)
  


    const projectCard = document.querySelectorAll(".project-button")
    const todoCard = document.querySelectorAll(".todo-card") //HERE put all cards filtered
    
    const renderAll = () => {
        allBtn.addEventListener("click", () => {
            titleText.textContent = "All Tasks";
            todoText.textContent = "TEST BLA";

        })
        titleText.textContent = "All Tasks";
        todoText.textContent = "No tasks!";

    }



    const renderDay = () => {
        dayBtn.addEventListener("click", () => {
            titleText.textContent = "Today's Tasks";
            todoText.textContent = "TEST BLABLA";

        })




    }


    const renderWeek = () => {
        weekBtn.addEventListener("click", () => {
            titleText.textContent = "Week Tasks";
            todoText.textContent = "TEST BLABLAaaaaaaaa";

        })

    }


    const renderProject = (project) => {
        
        titleText.textContent = `${project}`
        todoText.textContent = "TESTTTTT"
    }





    const addTask = () => {
        const taskNameInput = document.getElementById("task-name")
        const dateInput = document.getElementById("date")
        const priorityInput = document.querySelector(".task-priority")

        addTaskButton.addEventListener("click", () => { 
            taskNameInput.value = "";
            dateInput.value = "";
            priorityInput.value = ""
            modalTwo.showModal()
        })
    }

    const addProject = () => {
        const projectNameInput = document.getElementById("project-name")

        addProjectBtn.addEventListener("click", () => { 
            projectNameInput.value = "";
            modalOne.showModal();
        })
    }


    const closeModalOne = () => {  
        closeModalBtnOne.forEach(button => {
            button.addEventListener("click", () => {
                modalOne.close()
            })
        })
    }

    const closeModalTwo = () => {
        closeModalBtnTwo.forEach(button => {
            button.addEventListener("click", () => {
                modalTwo.close()
            })
        })

        
    }








return {renderAll, renderDay, renderWeek, renderProject, addTask, addProject, closeModalOne, closeModalTwo}
})();



const initiateControls = () => {
    calendarControl.renderAll()
    calendarControl.renderDay()
    calendarControl.renderWeek()
    calendarControl.addTask()
    calendarControl.addProject()
    calendarControl.closeModalOne()
    calendarControl.closeModalTwo()
    makeProject.addProjectToDisplay()

    makeProject.addTaskToDisplay()
}


export default initiateControls