import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faUser, faBars} from '@fortawesome/free-solid-svg-icons'; 

 import './Navbar.css';

export default function Sidebar() {

    const navigate = useNavigate();
    const [menu, setMenu]= useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [activeItem, setActiveItem] = useState(null);

    
    

    const togglebtn =()=>{
        setMenu(prev=> !prev);
        setOpenMenu(null);
        setOpenSubmenu(null); 
        

    }

    
    const toggleMenu = (menuId) => {
        setOpenMenu(openMenu === menuId ? null : menuId);
        setOpenSubmenu(null); 
        
    };

    
    const toggleSubmenu = (subId, e) => {
        e.stopPropagation()
        setOpenSubmenu(openSubmenu === subId ? null : subId);
        
    };

   

    const handleIt=(val)=>


    {   setOpenMenu(null);
        setOpenSubmenu(null); 
        
        setActiveItem(val);

        switch (val) {
            case 'eventlog':
                navigate('/eventlog');
                break;
            case 'contact':
                navigate('/contact');
                break;
            case 'home':
                navigate('/homepage');
                break;
            default:
                break;
        }
            

      

    }

    return (
    
        <div className="sidebar">
            <button className='menu-btn' onClick={()=> togglebtn()}><FontAwesomeIcon icon={faBars}/></button> 
            
            {menu && (
            <ul>
                <li
                 className={activeItem === 'home' ? 'active' : ''} 
                 onClick={() => handleIt('home')}>
                <FontAwesomeIcon icon={faHouse} />Home
                    
                </li>

                <li 
                className={activeItem === 'eventlog' ? 'active' : ''} 
                onClick={() => toggleMenu('menu2')}>
                    <FontAwesomeIcon icon={faEnvelope}/> Administration
                    {openMenu === 'menu2' && (  
                        <div className="submenu">
                            <ul>
                                <li  className="submenu-item"
                                 onClick={(e) => toggleSubmenu('submenu1',e)}>
                                 Team 
                                    {openSubmenu === 'submenu1' && (
                                        <div className="subsubmenu">
                                            <ul>
                                                <li 
                                            
                                                onClick={() => handleIt('eventlog')}>
                                                    Event log
                                                    {/* {openSubsubmenu === 'subsubmenu1' && (
                                                        <div className="content">
                                                            <ul>
                                                                <li>Content1</li>
                                                                <li>Content2</li>
                                                            </ul>
                                                        </div>
                                                    )} */}
                                                </li>
                                                <li>Audit log</li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li>Log</li>
                            </ul>
                        </div>
                    )}
                </li>

                <li onClick={() => toggleMenu('menu3')}>
                <FontAwesomeIcon icon={faEnvelope}/>Surveys
                    {openMenu === 'menu3' && (
                        <div className="submenu">
                            <ul>
                                <li>Submenu1</li>
                                <li>Submenu2</li>
                            </ul>
                        </div>
                    )}
                </li>
                <li onClick={() => toggleMenu('menu4')}>
                <FontAwesomeIcon icon={faEnvelope}/>Leads
                    {openMenu === 'menu4' && (
                        <div className="submenu">
                            <ul>
                                <li>Submenu1</li>
                                <li>Submenu2</li>
                            </ul>
                        </div>
                    )}
                </li>
                <li onClick={() => toggleMenu('menu5')}>
                <FontAwesomeIcon icon={faEnvelope}/> Admissions
                    {openMenu === 'menu5' && (
                        <div className="submenu">
                            <ul>
                                <li>Submenu1</li>
                                <li>Submenu2</li>
                            </ul>
                        </div>
                    )}
                </li>
                <li
                className={activeItem === 'contact' ? 'active' : ''} 
                onClick={() => handleIt('contact')}>
                   <FontAwesomeIcon icon={faEnvelope}/>  Contact
                </li>
            </ul>
)}
        </div>
    );
}

