import { isSameDay, isSameWeek, format, parseISO } from "date-fns";

const myProjects = [];
const myTasks = JSON.parse(localStorage.getItem("task.lists")) || [];

class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}

class Task {
  constructor(name, date, priority) {
    this.name = name;
    this.date = date;
    this.priority = priority;
  }
}

// WHEN YOU COME BACK:
// 1 Remove Task btn from day and week ?
// 2 Add localStorage
// 3 render projects and connect them to tasks by filtering inputs and making it choose ALL or a project

const save = () => {
  localStorage.setItem("task.lists", JSON.stringify(myTasks));
};

const makeProject = (() => {
  const formOne = document.querySelector(".form-one");
  const formTwo = document.querySelector(".form-two");
  const formOneInput = document.querySelector("#project-name");
  const modalOne = document.querySelector(".modal-one");
  const modalTwo = document.querySelector(".modal-two");

  /* const createProject = (newProject) => {
    // creates the project display and controls
    const addedProjects = document.querySelector(".added-projects");

    const projectCard = document.createElement("div");
    projectCard.classList.add("project-button");
    addedProjects.appendChild(projectCard);

    const projectCardButton = document.createElement("button");
    projectCardButton.classList.add("select-project");
    projectCardButton.classList.add("time");

    const projectImg = document.createElement("img");
    projectImg.setAttribute("src", "./icons/tasks.svg");
    const projectText = document.createElement("p");

    const projectCardDelete = document.createElement("button");
    projectCardDelete.classList.add("delete-project");
    const projectDeleteIcon = document.createElement("p");
    projectDeleteIcon.textContent = "X";

    projectCardDelete.appendChild(projectDeleteIcon);
    projectCardButton.appendChild(projectImg);
    projectCardButton.appendChild(projectText);
    projectCard.appendChild(projectCardButton);
    projectCard.appendChild(projectCardDelete);
    addedProjects.appendChild(projectCard);

    modalOne.close();
    projectText.innerHTML = newProject.title; // project name display

    projectCardDelete.addEventListener("click", () => {
      // deletes both array and display
      projectCard.remove();

      let index = 0;
      myProjects.forEach((project) => {
        if (project.title === newProject.title) myProjects.splice(index, 1);
        index++;
      });
    });

    // make select-project button display myProject Tasks HEEEERE

    projectCardButton.addEventListener("click", () => {
      calendarControl.renderProject(newProject.title); // puts project name in header
      calendarControl.setActivate(projectCardButton);
    });
  };

  const addProjectToArray = (project) => {
    // adds project to array
    myProjects.push(project);
  };

  const addProjectToDisplay = () => {
    // adds project inputs to display
    formOne.addEventListener("submit", (e) => {
      e.preventDefault();
      const newProject = new Project(formOneInput.value);
      addProjectToArray(newProject); // puts in array
      createProject(newProject); // create display
      save();
      console.log(myProjects);
    });
  };
*/
  // TASKs UGHHHHHH
  const addTaskToArray = (task) => {
    // adds task to array
    myTasks.push(task);
  };

  const addTaskToDisplay = () => {
    // adds task input values to display
    const taskNameInput = document.querySelector("#task-name");
    const dateInput = document.querySelector("#date");
    const priorityInput = document.querySelector(".task-priority");

    formTwo.addEventListener("submit", (e) => {
      e.preventDefault();
      const newTask = new Task(
        taskNameInput.value,
        dateInput.value,
        priorityInput.value
      );
      addTaskToArray(newTask);
      createTask(newTask);
      save();

      // make if statement for project
      console.log(myTasks);
    });
  };

  const createTask = (newTask) => {
    // task controls and card creation
    const todoContainer = document.querySelector(".todo");

    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");

    const todoCardText = document.createElement("p");
    todoCardText.classList.add("todo-card-text");

    const todoCardDeleteBtn = document.createElement("button");
    todoCardDeleteBtn.classList.add("todo-card-delete");
    const todoCardDeleteIcon = document.createElement("p");
    todoCardDeleteIcon.textContent = "X";

    todoCardDeleteBtn.appendChild(todoCardDeleteIcon);
    todoCard.appendChild(todoCardText);
    todoCard.appendChild(todoCardDeleteBtn);
    todoContainer.appendChild(todoCard);

    // close modal two
    modalTwo.close();

    // make card priority color
    const priorityColor = (value) => {
      if (value === "low") {
        todoCard.classList.add("color-add-low");
      }

      if (value === "medium") {
        todoCard.classList.add("color-add-medium");
      }

      if (value === "high") {
        todoCard.classList.add("color-add-high");
      }
    };

    const spanOne = document.createElement("span");
    const spanTwo = document.createElement("span");
    const spanThree = document.createElement("span");

    spanOne.textContent = newTask.name;
    spanTwo.textContent = newTask.date;
    spanThree.textContent = priorityColor(newTask.priority);

    todoCardText.appendChild(spanOne);
    todoCardText.appendChild(spanTwo);
    todoCardText.appendChild(spanThree);

    // delete task card
    todoCardDeleteBtn.addEventListener("click", () => {
      todoCard.remove(); // delete in display

      let index = 0; // delete in array
      myTasks.forEach((task) => {
        if (task.name === newTask.name) myTasks.splice(index, 1);
        index++;
        save();
      });
    });

    // PUSH TASK INTO THE RIGHT PROJECT
  };

  return { /* addProjectToDisplay, */ addTaskToDisplay };
})();

const calendarControl = (() => {
  const todoContainer = document.querySelector(".todo-container");
  const modalTwo = document.querySelector(".modal-two");
  const addProjectBtn = document.querySelector(".add-project");
  const modalOne = document.querySelector(".modal-one");
  const allBtn = document.querySelector("#all-button");
  const dayBtn = document.querySelector("#day-button");
  const weekBtn = document.querySelector("#week-button");
  const closeModalBtnOne = document.querySelectorAll(".closee");
  const closeModalBtnTwo = document.querySelectorAll(".closeee");

  const todoTitle = document.createElement("div");
  todoTitle.classList.add("todo-title");
  const titleText = document.createElement("h1");

  const todo = document.createElement("div");
  todo.classList.add("todo");

  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add("add-task");

  const addIcon = document.createElement("img");
  addIcon.classList.add("icon-img");
  addIcon.setAttribute("src", "./icons/add.svg");
  addIcon.setAttribute("alt", "add");
  const addText = document.createElement("p");
  addText.textContent = "Add Task";

  // fix here

  todoTitle.appendChild(titleText);
  todoTitle.appendChild(todo);
  addTaskButton.appendChild(addIcon);
  addTaskButton.appendChild(addText);

  todoContainer.appendChild(todoTitle);

  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  const renderAll = () => {
    allBtn.addEventListener("click", () => {
      todoContainer.appendChild(addTaskButton);
      todoContainer.appendChild(todo);
      titleText.textContent = "All Tasks";
      if (allBtn.classList.contains("activate")) return;
      clearElement(todo);
      setActivate(allBtn);

      for (let i = 0; i < myTasks.length; i++) {
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");
        const todoCardText = document.createElement("p");
        todoCardText.classList.add("todo-card-text");
        const todoCardDeleteBtn = document.createElement("button");
        todoCardDeleteBtn.classList.add("todo-card-delete");
        const todoCardDeleteBtnText = document.createElement("p");
        todoCardDeleteBtnText.textContent = "X";
        const spanOne = document.createElement("span");
        const spanTwo = document.createElement("span");
        const spanThree = document.createElement("span");

        todoCardDeleteBtn.appendChild(todoCardDeleteBtnText);
        todoCardText.appendChild(spanOne);
        todoCardText.appendChild(spanTwo);
        todoCardText.appendChild(spanThree);
        todoCard.appendChild(todoCardText);
        todoCard.appendChild(todoCardDeleteBtn);
        todo.appendChild(todoCard);

        modalTwo.close();

        const priorityColor = (value) => {
          if (value === "low") {
            todoCard.classList.add("color-add-low");
          }

          if (value === "medium") {
            todoCard.classList.add("color-add-medium");
          }

          if (value === "high") {
            todoCard.classList.add("color-add-high");
          }
        };

        spanOne.textContent = myTasks[i].name;
        spanTwo.textContent = myTasks[i].date;
        spanThree.textContent = priorityColor(myTasks[i].priority);

        todoCardDeleteBtn.addEventListener("click", () => {
          todoCard.remove(); // delete in display
          // IDK MAN TRY DOC SELECT ALL OR
          let index = 0; // delete in array
          myTasks.forEach((task) => {
            if (task.name === myTasks[i].name && task.date === myTasks[i].date)
              myTasks.splice(index, 1);
            index++;
            save();
          });
        });
      }
      setActivate(allBtn);
    });
    titleText.textContent = "Welcome";
  };

  const renderDay = () => {
    dayBtn.addEventListener("click", () => {
      todoContainer.appendChild(addTaskButton);
      todoContainer.removeChild(addTaskButton);
      todoContainer.appendChild(todo);
      titleText.textContent = "Today's Tasks";
      if (dayBtn.classList.contains("activate")) return;
      clearElement(todo);
      setActivate(dayBtn);

      for (let i = 0; i < myTasks.length; i++) {
        if (format(new Date(), "yyyy-MM-dd") === myTasks[i].date) {
          const todoCard = document.createElement("div");
          todoCard.classList.add("todo-card");
          const todoCardText = document.createElement("p");
          todoCardText.classList.add("todo-card-text");
          const todoCardDeleteBtn = document.createElement("button");
          todoCardDeleteBtn.classList.add("todo-card-delete");
          const todoCardDeleteBtnText = document.createElement("p");
          todoCardDeleteBtnText.textContent = "X";
          const spanOne = document.createElement("span");
          const spanTwo = document.createElement("span");
          const spanThree = document.createElement("span");

          todoCardDeleteBtn.appendChild(todoCardDeleteBtnText);
          todoCardText.appendChild(spanOne);
          todoCardText.appendChild(spanTwo);
          todoCardText.appendChild(spanThree);
          todoCard.appendChild(todoCardText);
          todoCard.appendChild(todoCardDeleteBtn);
          todo.appendChild(todoCard);

          modalTwo.close();

          const priorityColor = (value) => {
            if (value === "low") {
              todoCard.classList.add("color-add-low");
            }

            if (value === "medium") {
              todoCard.classList.add("color-add-medium");
            }

            if (value === "high") {
              todoCard.classList.add("color-add-high");
            }
          };

          spanOne.textContent = myTasks[i].name;
          spanTwo.textContent = myTasks[i].date;
          spanThree.textContent = priorityColor(myTasks[i].priority);

          todoCardDeleteBtn.addEventListener("click", () => {
            todoCard.remove(); // delete in display

            let index = 0; // delete in array
            myTasks.forEach((task) => {
              if (
                task.name === myTasks[i].name &&
                task.date === myTasks[i].date
              )
                myTasks.splice(index, 1);
              index++;
              save();
            });
          });
        }
        setActivate(dayBtn);
      }
    });
  };

  const renderWeek = () => {
    weekBtn.addEventListener("click", () => {
      titleText.textContent = "Week's Tasks";
      todoContainer.appendChild(addTaskButton);
      todoContainer.removeChild(addTaskButton);
      todoContainer.appendChild(todo);
      if (weekBtn.classList.contains("activate")) return;
      clearElement(todo);
      setActivate(weekBtn);

      for (let i = 0; i < myTasks.length; i++) {
        if (
          isSameWeek(
            parseISO(format(new Date(), "yyyy-MM-dd")),
            parseISO(myTasks[i].date)
          ) === true
        ) {
          const todoCard = document.createElement("div");
          todoCard.classList.add("todo-card");
          const todoCardText = document.createElement("p");
          todoCardText.classList.add("todo-card-text");
          const todoCardDeleteBtn = document.createElement("button");
          todoCardDeleteBtn.classList.add("todo-card-delete");
          const todoCardDeleteBtnText = document.createElement("p");
          todoCardDeleteBtnText.textContent = "X";
          const spanOne = document.createElement("span");
          const spanTwo = document.createElement("span");
          const spanThree = document.createElement("span");

          todoCardDeleteBtn.appendChild(todoCardDeleteBtnText);
          todoCardText.appendChild(spanOne);
          todoCardText.appendChild(spanTwo);
          todoCardText.appendChild(spanThree);
          todoCard.appendChild(todoCardText);
          todoCard.appendChild(todoCardDeleteBtn);
          todo.appendChild(todoCard);

          modalTwo.close();

          const priorityColor = (value) => {
            if (value === "low") {
              todoCard.classList.add("color-add-low");
            }

            if (value === "medium") {
              todoCard.classList.add("color-add-medium");
            }

            if (value === "high") {
              todoCard.classList.add("color-add-high");
            }
          };

          spanOne.textContent = myTasks[i].name;
          spanTwo.textContent = myTasks[i].date;
          spanThree.textContent = priorityColor(myTasks[i].priority);

          todoCardDeleteBtn.addEventListener("click", () => {
            todoCard.remove(); // delete in display

            let index = 0; // delete in array
            myTasks.forEach((task) => {
              if (task.name === myTasks[i].name) myTasks.splice(index, 1);
              index++;
              save();
            });
          });
        }
      }
    });
  };

  const renderProject = (project) => {
    const projectBtn = document.querySelectorAll(".project-button");

    titleText.textContent = `${project}`;
  };

  const setActivate = (button) => {
    const navBtn = document.querySelectorAll(".time");

    navBtn.forEach((button) => {
      button.classList.remove("activate");
    });
    button.classList.add("activate");
  };

  const addTask = () => {
    const taskNameInput = document.getElementById("task-name");
    const dateInput = document.getElementById("date");
    const priorityInput = document.querySelector(".task-priority");

    addTaskButton.addEventListener("click", () => {
      taskNameInput.value = "";
      dateInput.value = "";
      priorityInput.value = "";
      calendarControl.renderAll();
      modalTwo.showModal();
    });
  };

  const addProject = () => {
    const projectNameInput = document.getElementById("project-name");

    addProjectBtn.addEventListener("click", () => {
      projectNameInput.value = "";
      modalOne.showModal();
    });
  };

  const closeModalOne = () => {
    closeModalBtnOne.forEach((button) => {
      button.addEventListener("click", () => {
        modalOne.close();
      });
    });
  };

  const closeModalTwo = () => {
    closeModalBtnTwo.forEach((button) => {
      button.addEventListener("click", () => {
        modalTwo.close();
      });
    });
  };

  return {
    renderAll,
    renderDay,
    renderWeek,
    renderProject,
    addTask,
    addProject,
    closeModalOne,
    closeModalTwo,
    setActivate,
  };
})();

const initiateControls = () => {
  calendarControl.renderAll();
  calendarControl.renderDay();
  calendarControl.renderWeek();
  calendarControl.addTask();
  /* calendarControl.addProject(); */
  calendarControl.closeModalOne();
  calendarControl.closeModalTwo();
  /* makeProject.addProjectToDisplay(); */

  makeProject.addTaskToDisplay();
};

export default initiateControls;
