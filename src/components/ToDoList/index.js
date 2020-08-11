import React from 'react';
import data from 'src/data/tasks';
import Header from '../Header';
import './styles.scss';
import List from '../List';

// eslint-disable-next-line react/prefer-stateless-function
class ToDoList extends React.Component {
  state = {
    taskData: data,
  }

  setChecked = (id) => {
    const { taskData } = this.state;
    const newData = [...taskData];
    const clickedTask = newData.find((task) => task.id === id);
    clickedTask.done = !clickedTask.done;
    this.setState({ taskData: newData });
    // const modifiedTasks = tasks.map((task) => {
    //   if (task.id === taskId) {
    //     task.done = !task.done;
    //   }
  }

  addElement = (label, done) => {
    const { taskData } = this.state;
    const newData = [...taskData];
    const sortData = newData.sort((element, element2) => element2.id - element.id);
    const firstElement = sortData[0].id;
    const newElementForData = { id: firstElement + 1, label, done };
    newData.push(newElementForData);
    this.setState({ taskData: newData });

    // const ids = tasks.map((task) => task.id);
    // const maxId = Math.max(...ids);

    // const newTask = {
    //   id: maxId + 1,
    //   label: inputValue,
    //   done: false,
    // }

    // autre solution possible
    // const newTaskId = Date.now();

    // uuid => generer des id

    // const newTasks = [...tasks, newTasks];
    // this.setState({ tasks: newTasks });
    // ou this.setState({ tasks: [...tasks, newTask] })
  }

  getTaskNotFinish = () => {
    const { taskData } = this.state;
    let filteredData = taskData;
    filteredData = taskData.filter((element) => element.done === false);
    const numberOfElement = filteredData.length;
    return numberOfElement;
    //  return tasks.filter((task) => !task.done).length;
  }

  filteredData = (arrayData) => {
    const filterData = arrayData.sort((element, element2) => element.done - element2.done);
    return filterData;
  }

  render() {
    const { taskData } = this.state;
    // const sortedTasks = undoneTasks.concat(doneTasks);
    // const sortedTasks = [...undoneTasks, ...doneTasks];
    // const sortedTasks = this.sortArray();
    return (
      <div className="todo-list">
        <Header
          addElement={this.addElement}
        />
        <List
          data={this.filteredData(taskData)}
          numberTask={this.getTaskNotFinish()}
          checked={this.setChecked}
        />
      </div>
    );
  }
}

export default ToDoList;
