import React from 'react';
// SidebarItem component which takes each character and places them in an <li>
// onClick event runs onCharacterSelect and updates state
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