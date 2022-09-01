import React, { useState } from 'react'
import selectIcon from './../assets/select.svg'

function SideBar(props) {

  const isCreate = props.isCreate

  return (
    <div className='col-3 bg-success p-0'>
      <div className='d-flex justify-content-center align-items-center bg-primary p-2'>
        <p className='text-end fw-bold me-1 my-0'>Inspect</p>
        <p className='ms-1 my-0'>Create</p>
      </div>
      {isCreate ?
        (<div>
          <div className='bg-light px-2'>
            <p className='fw-bold'>Components</p>
          </div>
          <div draggable onDragStart={() => props.dragStart()} onDragEnd={() => props.dragEnd()} >
            <img src={selectIcon} draggable={false} alt='Select Icon' />
          </div>
        </div>
        )
        :
        (<div>
          <p>{props.elementID}</p>
          <p>Manual</p>
        </div>)
      }
    </div>
  )
}

export default SideBar