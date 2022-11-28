import React, { useState } from 'react'

export const Formulario = () => {
    const [fruta,setFruta] = useState('')
    const [descripcion,setDescripcion] = useState('')
    const [listaFrutas,setListaFrutas] = useState([])
return (
    <div className='container mt-5'>
        <h1 className="tex-cent">CRUD CLASE GUEB 1</h1>
        <hr />
        <div className="row">
            <div className="col-8">
            <h4 className="text-center">Listado de Frutas
            </h4>
            <ul className="list-group">
            <li className='list-group-item'>Fruta1</li>
            <li className='list-group-item'>Fruta2</li>
            </ul>
            </div>
            <div className="col-4">
                <h4 className="text-center">Agergar frutas</h4>
                <form action="">
                    <input type="text" className='form-control mb-2' placeholder='Ingrese fruta' />
                    <input type="text" className='form-control mb-2' placeholder='Ingrese descripcion' />
                    <button className='btn btn-primary btn-block' on='submit'>Agregar</button>
                    <button className='btn btn-dark btn-block mx-2'>Cancelar</button>
                </form>
            </div>
        </div>
    </div>
)
}
