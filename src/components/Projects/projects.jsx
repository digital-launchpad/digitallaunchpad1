import React from 'react';
import './project.css'; 
import { MdCurrencyRupee } from "react-icons/md";
import { FaLaptopCode, FaArrowUpRightFromSquare } from "react-icons/fa6";

// images
import proj1Img from '../../assets/projectImg1.jpg';

function Projects() {
  const projectList = [
    {
      id: 1,
      title: "Sundown Studio UI",
      desc: "An immersive, award-winning agency website clone featuring high-end custom scrolling experiences, kinetic typography animation loops, and sleek vector graphics tracking.",
      tags: ["HTML5", "CSS3 / Modern Layouts", "Vanilla JS", "GSAP / Locomotive"],
      image: proj1Img, 
      link: "https://shyam-lakhani.github.io/Sundown-Website-Clone/"
    }
  ];

  return (
    <div id="projects">
        <div className="projects-section">
            <h2 className="projectHeading">Our Work Block</h2>
                <h1 id="projectSubHeading">
                <FaLaptopCode /> Recent Deliveries
                </h1>
      
            <div className="projects-grid">
                {projectList.map((project) => (
                <div key={project.id} className="project-card">
                    <div className="project-img-holder">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="project-thumbnail" 
                        />
                    </div>

                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>  
                        <div className="project-tags">
                        {project.tags.map((tag, index) => (
                        <span key={index} className="tag-chip">{tag}</span>
                        ))}
                    </div>

                    <a 
                        href={project.link} 
                        className="project-link-btn" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                    Live Preview <FaArrowUpRightFromSquare size={14} />
                    </a>
                </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;