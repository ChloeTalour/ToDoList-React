import React from 'react';
import './styles.scss';

const Header = ({ addElement }) => {
  const keyEvent = (event) => {
    if (event.key === 'Enter') {
      const valueWanted = event.target.value;
      addElement(valueWanted, false);
    }
  }
  return (
    <header className="header">
      <input
        type="text"
        className="header__input"
        placeholder="Ajouter une tâche"
        onKeyDown={keyEvent}
      />
    </header>
  )
}

export default Header;
