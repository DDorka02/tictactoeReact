import React, { useContext } from 'react'
import "./Cella.css"
import { KattContext} from '../context/KattContext'

export default function Cella(props) {
  const {katt}=useContext(KattContext)
    function kattintas() {
        //console.log("cella: ", props.index)
        katt(props.index)
    }
  return (
    <div className="cella" onClick={()=>kattintas()}>
      {props.jel}
    </div>
  )
}
