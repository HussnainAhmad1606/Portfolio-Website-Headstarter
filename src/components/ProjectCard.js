"use client"
import React from 'react'
import "@/css/singleProject.css"
function ProjectCard({name, cover, description, demo, techStack, githubLink, id}) {

    const openModel = ()=>{
        document.getElementById(`my_modal_${id}`).showModal()
    };
  return (
<>
    <div className="mx-20 my-10 card w-96 bg-base-100 shadow-xl">
  <figure><img src={cover} alt={name + " cover img"} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className='flex flex-wrap'>

    {
        techStack.map((tech)=>{
            return <span className="m-2 badge badge-accent">{tech}</span>
        })
    }
    </div>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>{
        openModel();
      }}>Open</button>
    </div>
  </div>
</div>

<dialog id={`my_modal_${id}`} className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
    <a href={demo} className='mx-2 btn btn-primary' target='_blank'>Open Demo</a>
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</>
  )
}

export default ProjectCard