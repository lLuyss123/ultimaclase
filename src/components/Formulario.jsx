import React, { useState, useEffect } from 'react'
import {db} from '../firebase'
import { collection, doc, addDoc, onSnapshot, query } from 'firebase/firestore'
import { async } from '@firebase/util'

export const Formulario = () => {
    const [fruta,setFruta] = useState('')
    const [descripcion,setDescripcion] = useState('')
    const [listaFrutas,setListaFrutas] = useState([])

    useEffect(()=>{
        const obtenerDatos = async () =>{
            try {
                await onSnapshot(collection(db,"frutas"),(query)=>{
                    setListaFrutas(query.docs.map((doc) =>({...doc.data(),id:doc.id})))
                })
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()
    },[])


    const guardarFrutas = async (e) =>{
        e.preventDefault()
        try {
            const data = await addDoc(collection(db,"frutas"),{
                nombreFruta:fruta,
                nombreDescripcion:descripcion
            })

            setListaFrutas(
                [...listaFrutas,{
                    nombreFruta:fruta,
                    nombreDescripcion:descripcion,
                    id:data.id
                }]
            )

            setFruta("")
            setDescripcion("")
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
                {
                    listaFrutas.map(item =>(
                        <li className='list-group-item' key={item.id}>
                            <span className="lead">{item.nombreFruta} - {item.nombreDescripcion}</span>
                            <button className='btn btn-danger btn-sm fload-end mx-2'>Eliminar</button>
                            <button className='btn btn-warning btn-sm fload-end'>Editar</button>

                        
                        
                        </li>
                    ))
                }
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
