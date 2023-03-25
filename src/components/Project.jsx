import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'


const Project = (props) => {
  return (
    <div className=''>
        <div className=""></div>
        <div className=" flex flex-col justify-center items-end">
            <h2>Project1</h2>
            <p className="">A minimal, dark blue theme for VS Code, Sublime 
            Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, 
            Package Control, Atom Package Manager, and npm.</p>
            <span>VS Code Sublime Text Atom iTerm</span>
            <div className="">
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faMugSaucer} />
            <FontAwesomeIcon icon={faMugSaucer} />
            
            </div>
        </div>      
    </div>
  )
}

export default Project
