const storage = (() => {
  const save = () => {
    localStorage.setItem("task", JSON.stringify(myTasks.name));
  };

  return { save };
})();

export default storage;
