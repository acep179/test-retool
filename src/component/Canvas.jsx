import React, { useEffect } from 'react'

function Canvas({ dragOver, dragStart, dragLeave, drop, onClickForm, divID }) {

  useEffect(() => {
    if (divID) {
      console.log('data telah di-update')
    }
  }, [divID])

  return (

    <div className='grid grid-cols-12 col-span-9'>

      {divID?.map((item, index) => {
        return (
          <div
            key={index}
            id={item.id}
            className='canvas col-span-1 bg-slate-400 p-0 relative h-2.5'
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => drop(e, index)}
          >
            {item.selectsData ? (
              <form
                key={index}
                id={item.selectsData.id}
                className='flex justify-between absolute z-50 bg-neutral-100 p-1 w-[400%] cursor-move'
                onDragStart={(e) => dragStart(e)}
                draggable
                onClick={onClickForm}
              >
                <label className='cursor-move font-bold' htmlFor="select">Label</label>
                <select className='w-3/5' name="" id="select">
                  {item?.selectsData.option?.map((item, index) => {
                    return (<option key={index} value="">{item}</option>)
                  })}
                </select>
              </form>
            ) : (<div></div>)
            }
          </div>
        )
      })}

    </div>
  )
}

export default Canvas