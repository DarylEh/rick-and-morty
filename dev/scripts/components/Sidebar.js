import React from 'react';
import SidebarItem from './SidebarItem';
//Sidebar component that takes in props and maps thru the characters array from state
const Sidebar = (props) => {
    const SidebarItems = props.characters.map((character)=> {
        return <SidebarItem  
            onCharacterSelect={props.onCharacterSelect}
            key={character.id} 
            character={character}/>
    });
        return (
            <div className = "sidebar-main" >
                <ul className="sidebar">
                    {SidebarItems}
                </ul>
            </div>
        )
};
export default Sidebar;