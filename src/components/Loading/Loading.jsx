import React from 'react'
import { Spinner } from 'reactstrap'
import 'boostrap/dist/css/boostrap.min.css'
import '/loading.css'

export const Loading = () => {
  return (
    <div className='divPadre'>
        <div className="divHijo">
        <Spinner color='dark'/>
        </div>
    </div>
  )
}

