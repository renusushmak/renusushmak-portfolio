import React from "react"

function NavBar(props) {
    return (
        <ul id="nav-bar"> 
            <li onClick = {() => props.setCurrentPage(props.pages[0])}>About Me</li>
            <li onClick = {() => props.setCurrentPage(props.pages[1])}>Projects</li>
            <li onClick = {() => props.setCurrentPage(props.pages[2])}>Contact</li>
        </ul>
    )
}

export default NavBar;