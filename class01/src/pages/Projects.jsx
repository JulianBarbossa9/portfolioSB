import React, { Fragment, useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';




const ProjectsStyle = styled.div`
    padding: 10rem 0;
    .projects__allItems{
        display: grid;
        grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
        justify-content:center;
        align-items: center;
    }
    .sectionTitleee{
        text-align:center;
    }
    .projects__searchbar{
        position:relative;
        width: 300px;
        margin-top: 2rem;
        caret-color:var(--gray-1);
    }
    .projects__searchbar input{
        width: 100%;
        font-size: 0.8rem;
        padding: 0.3rem;
        color:var(--black);
        border-radius: 9px;
        outline:none;
        border: none;
    }
    .projects__searchbar .searchIcon{
        position:absolute;
        width: 1rem;
        right: 0.3rem;
    }
    .projects__searchbar .searchIcon path {
        color:var(--deep-dark)
    }
    @media only screen and (max-width:768px){
        .projects__searchbar,
        .projects__searchbar form,
        .projects__searchbar input{
            width: 100%;
        }
    }
`;




const Projects = () => {
  
  const [ data, saveData ] = useState(ProjectInfo); 
  const [ infoInput , saveInfoInput ] = useState('');

  useEffect(()=>{
      if(infoInput === '') return; 
      saveData(() => 
          ProjectInfo.filter((item) => (
              item.name.toLowerCase().match(infoInput.toLowerCase())
          ))
      );
  },[infoInput]);

  function handleChange(e) {
      e.preventDefault();
      saveInfoInput(e.target.value);
      if(!e.target.value.lenght > 0){
          saveData(ProjectInfo);
      }
  }

  
  
  return (
    <>
      <ProjectsStyle>
                <div className='container'>
                    <SectionTitle 
                        subHeading="Some of my recent works" 
                        title="Projects"
                    />

                    <div className='projects__searchbar'>
                        <form>
                            <input 
                                type="text" 
                                value={infoInput}
                                onChange={handleChange}
                                placeholder='Project Name'
                            
                            />
                                <MdSearch className='searchIcon'></MdSearch>
                        </form>
                    </div>
                    <div className='projects__allItems'>
                        {data.map((item) =>(
                            <ProjectItem 
                                key={item.id}
                                title={item.name}
                                descrip={item.desc}
                                img={item.img}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            </ProjectsStyle>
            <Footer />
    </>
  )
}

export default Projects