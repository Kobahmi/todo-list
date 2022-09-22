import { isSameWeek, format, parseISO } from "date-fns";

const myTasks = JSON.parse(localStorage.getItem("task.lists")) || [];

class Task {
  constructor(name, date, priority) {
    this.name = name;
    this.date = date;
    this.priority = priority;
  }
}

const save = () => {
  localStorage.setItem("task.lists", JSON.stringify(myTasks));
};

const makeProject = (() => {
  const formTwo = document.querySelector(".form-two");
  const modalTwo = document.querySelector(".modal-two");

  const addTaskToArray = (task) => {
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
        index += 1;
        save();
      });
    });
  };

  return { addTaskToDisplay };
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

      myTasks.forEach((task) => {
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

        spanOne.textContent = task.name;
        spanTwo.textContent = task.date;
        spanThree.textContent = priorityColor(task.priority);

        todoCardDeleteBtn.addEventListener("click", () => {
          todoCard.remove(); // delete in display
          myTasks.splice(myTasks.indexOf(task), 1);
          save();
        });
      });
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

      myTasks.forEach((task) => {
        if (format(new Date(), "yyyy-MM-dd") === task.date) {
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

          spanOne.textContent = task.name;
          spanTwo.textContent = task.date;
          spanThree.textContent = priorityColor(task.priority);

          todoCardDeleteBtn.addEventListener("click", () => {
            todoCard.remove(); // delete in display
            myTasks.splice(myTasks.indexOf(task), 1);
            save();
          });
        }
        setActivate(dayBtn);
      });
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

      myTasks.forEach((task) => {
        if (
          isSameWeek(
            parseISO(format(new Date(), "yyyy-MM-dd")),
            parseISO(task.date)
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

          spanOne.textContent = task.name;
          spanTwo.textContent = task.date;
          spanThree.textContent = priorityColor(task.priority);

          todoCardDeleteBtn.addEventListener("click", () => {
            todoCard.remove(); // delete in display
            myTasks.splice(myTasks.indexOf(task), 1);
            save();
          });
        }
      });
    });
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
  calendarControl.closeModalOne();
  calendarControl.closeModalTwo();
  makeProject.addTaskToDisplay();
};

export default initiateControls;
