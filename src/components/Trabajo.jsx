import React from 'react';
import WorkItem from './WorkItem'

const data = [
    {
        año: 2021,
        titulo: 'Facebook',
        duración: '2 años',
        detalles: 
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam veritatis, repudiandae repellat perferendis debitis quasi sapiente modi totam molestiae? Expedita voluptatem soluta sint quaerat debitis corporis placeat natus modi aperiam.'
    },
    {
        año: 2018,
        titulo: 'google',
        duración: '4 años',
        detalles: 
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam veritatis, repudiandae repellat perferendis debitis quasi sapiente modi totam molestiae? Expedita voluptatem soluta sint quaerat debitis corporis placeat natus modi aperiam.'
    },
    {
        año: 2016,
        titulo: 'Freelance',
        duración: '3 años',
        detalles: 
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam veritatis, repudiandae repellat perferendis debitis quasi sapiente modi totam molestiae? Expedita voluptatem soluta sint quaerat debitis corporis placeat natus modi aperiam.'
    },
]
const Trabajo = () => {
    return(
        <div id='trabajo' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-mono font-bold text-center text-emerald-950'>Experiencia</h1>
            {
                data.map((item, idx) => (
                    <WorkItem 
                        key={idx} 
                        year={item.año} 
                        title={item.titulo} 
                        duration={item.duración} 
                        details={item.detalles} 
                    />
                ))}
        </div>
    )
}

export default Trabajo