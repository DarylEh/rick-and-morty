import React from 'react';
import ReactDOM from 'react-dom';
import SidebarItem from './SidebarItem';

const Sidebar = (props) => {
    const SidebarItems = props.characters.map((character)=> {
        return <SidebarItem  
            onCharacterSelect={props.onCharacterSelect}
            key={character.id} 
            character={character}/>
    });
        return (
            <div>
                <ul className="sidebar">
                    {SidebarItems}
                </ul>
            </div>
        )
};
export default Sidebar;