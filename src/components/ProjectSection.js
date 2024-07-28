"use client"
import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const getProjects = async() => {
    setIsLoading(true);
    const request = await fetch("/api/getProjects");
    const data = await request.json();
    setProjects(data.projects)
    setIsLoading(false);
  }

  useEffect(() => {
    getProjects();
  }, [])
  
  return (
    <div>
        <h1 className='my-10 text-3xl text-center font-bold'>My Projects</h1>
    <div className='flex justify-center items-center'>
      {
        isLoading?(
          <span className="loading loading-infinity loading-lg"></span>
        ):null
      }

    <div className='grid grid-cols-1 sm:grid-cols-2'>
      {
        projects.map((project, index)=> {
        return <ProjectCard key={"project"+project.id} demo={project.demo} cover={project.cover} id={project.id} name={project.name} description={project.description} techStack={project.technologies}/>

        })
      }
        </div>
    </div>
    </div>
  )
}

export default ProjectSection