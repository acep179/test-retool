import React from 'react'
import selectIcon from './../assets/select.svg'

function SideBar(props) {

  const isCreate = props.isCreate

  return (
    <div className='col-span-3 bg-gray-300 p-0'>
      <div className='flex justify-center align-center bg-gray-200 p-2'>
        <p className='text-end font-bold mr-1 my-0 cursor-pointer' onClick={props.clickInspect}>Inspect</p>
        <p className='ml-1 my-0 cursor-pointer' onClick={props.clickCreate}>Create</p>
      </div>
      {isCreate ?
        (<div>
          <div className='bg-zinc-300 px-2'>
            <p className='font-bold'>Components</p>
          </div>
          <div className='w-max' draggable onDragStart={() => props.dragStart()} onDragEnd={() => props.dragEnd()} >
            <img src={selectIcon} draggable={false} alt='Select Icon' />
          </div>
        </div>
        )
        :
        (<div>
          <p>{props.elementID ? props.elementID : 'Silakan pilih component di Container'}</p>
          <p>Manual</p>
          <form>
            <input type="text" />
          </form>
        </div>)
      }
    </div>
  )
}

export default SideBar