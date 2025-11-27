import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

function Header1({homePageHandler}) {
const navigate = useNavigate()

const handelClick = ()=>{
  navigate('/')
}

  return (
    <>
    <header>
        <div class="logo"  onClick={handelClick}><img className='header-logo' src='https://cdn-icons-png.flaticon.com/128/4440/4440953.png'></img>PAVAN KUMAR </div>

        <nav>
            <ul>
                <li><Link  onClick={homePageHandler}  to='/home'> <img className='header-nav-link-logo' src="https://cdn-icons-png.flaticon.com/128/619/619153.png" alt="home logo" />Home</Link></li>
                <li><Link  onClick={homePageHandler} to='/about'> <img className='header-nav-link-logo' src="https://cdn-icons-png.flaticon.com/128/15899/15899478.png" alt="" />About</Link></li>
                <li><Link  onClick={homePageHandler} to='/projects'><img className='header-nav-link-logo' src="https://cdn-icons-png.flaticon.com/128/4844/4844342.png" alt="" />Projects</Link></li>
                <li><Link  onClick={homePageHandler} to='/skills'><img className='header-nav-link-logo' src="https://cdn-icons-png.flaticon.com/128/10262/10262344.png" alt="" />Skills</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header1

