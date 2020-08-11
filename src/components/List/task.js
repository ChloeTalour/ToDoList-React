/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = ({
  label, done, id, onChange,
}) =>
  // const checkOrNot = done ? 'main__list--task check' : 'main__list--task';
  // console.log(onChange);
  (
    <li className={classNames('main__list--task ', { check: done })}>
      <input type="checkbox" name={id} id={id} onChange={() => onChange(id)} checked={done} />
      <label htmlFor={id}> {label} </label>
    </li>
  );

Task.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Task;
