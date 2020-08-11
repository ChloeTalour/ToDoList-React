import React from 'react';
import PropTypes from 'prop-types';
import Task from './task';
import './styles.scss';

const List = ({ data, checked, numberTask }) => {
  const mappedTasks = data.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      label={task.label}
      done={task.done}
      onChange={checked}
    />
  ));

  return (
    <main className="main">
      <h1 className="main__title">{numberTask} Tâches en cours</h1>
      <ul className="main__list">
        {mappedTasks}
      </ul>
    </main>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  checked: PropTypes.func.isRequired,
  numberTask: PropTypes.number.isRequired,
};
export default List;
