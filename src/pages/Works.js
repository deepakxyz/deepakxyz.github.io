import React from 'react';
import Footer from "../components/Footer";
import adya from '../media/images/adya.png';
import yazhi from '../media/images/yazhi.png';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";


const FlimographyData = [
  {name: "Sonic 3", year: '2024', role: "RSP - ADELAIDE | Creature TD", link:""},
  {name: "The Knuckles", year: '2024', role: "RSP - ADELAIDE | Creature TD", link:""},
  {name: "Monarch: Legacy of Monsters", year: '2023', role: "RSP - ADELAIDE | Creature TD", link:""},
  {name: "The Marvels", year: '2023', role: "RSP - ADELAIDE | Creature TD", link:""},
  {name: "antman and the wasp quantumania", year: '2022', role: "RSP - ADELAIDE | Creature TD", link:""},
  {name: "Harold and the Purple Crayon", year: '2022', role: "RSP - ADELAIDE | Creature TD", link:""},
  {name: "The Flash", year: '2022', role: "DNEG - BANGALORE | Creature TD", link:""},
  {name: "Cumpa", year: '2021', role: "MPC - BANGALORE | Creature TD", link:""},
  {name: "La Brea", year: '2021', role: "MPC - BANGALORE | Creature EFECTS", link:""},
]


const WorkPage = () => {
  return (
    <div className='content'>
      <div className='work-sub-heading-wrapper'>
        <div className='work-sub-heading'>
          Works
        </div>
        <div className='sub-heading-side'>
          <Link to="">Short Films</Link>
          <Link to="">Development</Link>
          <Link to="">Flimography</Link>
        </div>
      </div>
      <WorkItem image={adya} link="/works/adya/" />
      <WorkItem image={yazhi}/>
      <WorkItem image={adya}/>
      <WorkItem image={yazhi}/>

      <div className='flimography-wrapper'>
        <div className='filmography'>
          <div className='film-item-wrapper'>
            <div className='movie-item no-underline'>
              <div className='heading2'>Flimography</div>
            </div>
            <div className='movie-item no-underline'>
              <div>Project</div><div>Stuido | Role</div><div>Production year</div>
            </div>
              {FlimographyData.map((item, index) => (
                <Film name={item.name} role={item.role} year={item.year} link={item.link}/>
              ))}
          </div>
        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default WorkPage;


const Film = ({name, role, year, link}) => {
  return( 
  <>
  <div className='movie-item'>
    <div className='movie-name'>
      {name}
    </div>
    <div className='movie-name'>
      {role}
    </div>
    <div className='movie-year'>
      {year}
    </div>
    <div className='movie-name'>
      <GoArrowUpRight />
    </div>
  </div>
  </>
  )
}


const WorkItem =({image, link}) => {
  return (
    <>
    <div className='work-item-wrapper'>
        <img src={image} className='image-banner'/>
        <div className='text-title'>
          <Link to={link} className='project-heading'>
          Adya Short Film
          </Link>
          <div className='project-year'>
            Year 2000
          </div>
          <div className='project-types'>
            <div>Development</div>
            <div>ART</div>
          </div>
          <div className='project-desc'>
           <p>This project is temp, and we will continue when it get to a better place
          EL GRITO is El Confidencial's magazine dedicated to art, design, and architecture. Our goal was to create a visually stunning product while remaining true to the core philosophy of El Confidencial.
           </p>
           <div className='project-link'>
              <Link to = {link}>
              VIEW PROJECT
            <GoArrowUpRight />
              </Link>
           </div>
          </div>
      </div>
      <div className='project-sub-data'>
        <div className='front'>
        {/* Hello world */}
        </div>
        <div className='back'>
          {/* +++ */}
        </div>
      </div>
    </div>
    </>
  )
}
