import React from "react";
import ProjetItem from "./ProjectItem";
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';



const Project = () => {
    return(
        <div id="proyectos" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
            <h1 className="text-4xl font-bold text-center text-emerald-950 font-mono">Proyectos</h1>
            <p className="text-center py-8 font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam ut amet odio ab. Quas impedit nemo tempora, commodi, consequuntur dolores earum provident aperiam eius dolorum ab non molestiae rerum.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjetItem img={project1} title='Projecto 1'/>
                <ProjetItem img={project2} title='Projecto 2'/>
                <ProjetItem img={project3} title='Projecto 3'/>
                <ProjetItem img={project4} title='Projecto 4'/>

            </div>
        </div>
    )
}

export default Project