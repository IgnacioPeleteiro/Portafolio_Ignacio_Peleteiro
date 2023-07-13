import React from "react";


const Contacto = () =>{
    return(
        <div id="contacto" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-mono font-bold text-center text-emerald-950">Contacto</h1>
            <form action="https://getform.io/f/680365fa-a45e-42d9-a5f3-57bf99893ea4" method="POST" encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Nombre</label>
                        <input className="border-2 rounded-lg pb-3 border-gray-400 " type="text" name="nombre" />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Celular</label>
                        <input className="border-2 rounded-lg pb-3 border-gray-400" type="text" name="celular" />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Mail</label>
                        <input className="border-2 rounded-lg pb-3 border-gray-400 " type="text" name="mail" />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Asunto</label>
                        <input className="border-2 rounded-lg pb-3 flex border-gray-400 " type="text" name="asunto" />
                    </div>
                    <div className="flex flex-col py-2 md:col-span-2">
                        <label className="uppercase text-sm py-2">Mensaje</label>
                        <textarea className="border-2 rounded-lg pb-3 border-gray-400 " rows='10' type="text" name="mensaje"></textarea>
                    </div>
                </div>
                <button className="bg-emerald-500 text-gray-100 mt-4 w-full p-4 rounded-lg">
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Contacto