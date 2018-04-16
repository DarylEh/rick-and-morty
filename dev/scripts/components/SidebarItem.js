import React from 'react';
import ReactDOM from 'react-dom';

const SidebarItem = (props) => {
    const character = props.character;
    const onCharacterSelect = props.onCharacterSelect;
    return (
        <li onClick={()=>onCharacterSelect(character)} className="sidebar-item">
            <p>{character.name} </p>
        </li>
    )
};
export default SidebarItem;