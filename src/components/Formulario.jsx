import React, { useState } from 'react'
import {db} from '../firebase'
import { collection, doc, addDoc } from 'firebase/firestore'

export const Formulario = () => {
    const [fruta,setFruta] = useState('')
    const [descripcion,setDescripcion] = useState('')
    const [listaFrutas,setListaFrutas] = useState([])

    const guardarFrutas = async (e) =>{
        e.preventDefault()
        try {
            const data = await addDoc(collection(db,"frutas"),{
                nombreFruta:fruta,
                nombreDescripcion:descripcion
            })
        } catch (error) {
            console.log(error)
        }
    }
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
                <form onSubmit={guardarFrutas}>
                    <input type="text" className='form-control mb-2' value={fruta} onChange={(e)=>setFruta(e.target.value)} placeholder='Ingrese fruta' />
                    <input type="text" className='form-control mb-2' value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} placeholder='Ingrese descripcion' />
                    <button className='btn btn-primary btn-block' on='submit'>Agregar</button>
                    <button className='btn btn-dark btn-block mx-2'>Cancelar</button>
                </form>
            </div>
        </div>
    </div>
)
}
