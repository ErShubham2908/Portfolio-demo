import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faAward, faFile, faHouse, faHouseChimney, faIdBadge, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import Home from '../Component/Home';
import About from '../Component/About';
import Education from '../Component/Education';
import Resume from '../Component/Resume';
import Project from '../Component/Project';
import '../Style/Style.css'

function RouteComponent() {

  return (
    <>
      <BrowserRouter >
        <div className='Navbar_Parent'>
          <div className='Navbar-First-Child'>
              <span className='Navbar-name-first'>Shubham</span> <span className='Navbar-name-last'>Kumar</span>
          </div>
          <div className='Navbar-Second-Child'>
            <div>
              <NavLink to='/' className='Navbar-Home Navbar' ><FontAwesomeIcon icon={faHouse} />Home</NavLink>
            </div>
            <div>
              <NavLink to='/about' className='Navbar-About Navbar'><FontAwesomeIcon icon={faAddressCard} />About</NavLink>
            </div>
            <div>
              <NavLink to='/education' className='Navbar-Education Navbar' ><FontAwesomeIcon icon={faAward} /> Education</NavLink>
            </div>
            <div>
              <NavLink to='/experience' className='Navbar-Experience Navbar' ><FontAwesomeIcon icon={faNewspaper} /> Project</NavLink>
            </div>
            <div>
              <NavLink to='/resume' className='Navbar-Resume Navbar' ><FontAwesomeIcon icon={faFile} /> Resume</NavLink>
            </div>
          </div>
        </div>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/experience' element={<Project />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteComponent;
