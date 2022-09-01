import React from 'react'

function Canvas({ dragOver, dragStart, drop }) {
  const divID = []

  for (let i = 0; i < 251; i++) {
    divID.push(`div${i}`);
  }

  return (

    <div className='grid grid-cols-12 col-span-9'>

      <div
        id='divUtama'
        className='col-span-1 bg-slate-400 p-0 relative h-2.5'
        onDragOver={(e) => dragOver(e)}
        onDrop={drop}
      >
        <form
          id='select1'
          className='flex justify-between absolute z-50 bg-neutral-100 p-1 w-[400%] cursor-move'
          onDragStart={(e) => dragStart(e)}
          draggable
        >
          <label className='cursor-move font-bold' htmlFor="select">Label</label>
          <select className='w-3/5' name="" id="select">
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
        </form>
      </div>

      {divID?.map((item) => {
        return (
          <div
            key={item}
            id='div2'
            className='canvas col-span-1 bg-slate-400 p-0 relative h-2.5'
            onDragOver={(e) => dragOver(e)}
            onDrop={drop}
          >
          </div>
        )
      })}

    </div>
  )
}

export default Canvas