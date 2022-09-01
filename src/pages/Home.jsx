import React, { useRef, useState } from 'react'

import { Canvas, SideBar } from './../component'

function Home() {

  const dragItem = useRef();
  let formID = 1
  const [elementID, setElementID] = useState()
  const [isCreate, setIsCreate] = useState(true)

  const dragStart = (e) => {
    dragItem.current = e.target
  };

  const handleOnClick = (id) => {
    setElementID(id)
    setIsCreate(false)
  }

  const handleClickCreate = () => {
    setIsCreate(true)
  }
  const handleClickInspect = () => {
    setIsCreate(false)
  }

  const dragStartSide = () => {

    let selectOption = document.createElement('form')
    selectOption.id = `formSelect${formID}`
    selectOption.onclick = () => handleOnClick(selectOption.id)
    selectOption.draggable = true
    selectOption.ondragstart = (e) => dragStart(e)
    selectOption.classList = "flex justify-between absolute z-50 bg-neutral-100 p-1 w-[400%] cursor-move"

    let htmlString = `<label class="cursor-pointer font-bold" htmlFor="select${formID}">Label</label> <select class="w-3/5" name="" id="select${formID}"> <option value="">Option 1</option> <option value="">Option 2</option> <option value="">Option 3</option></select>`

    selectOption.innerHTML = htmlString.trim();
    console.log(selectOption)

    dragItem.current = selectOption
  };

  const dragEndSide = () => {
    formID++
  }

  const dragOver = (e) => {
    e.preventDefault()
  }

  const drop = (e) => {
    e.preventDefault()
    e.target.appendChild(dragItem.current)
  };

  return (
    <div className='grid grid-cols-12 gap-2 pl-4 pr-3'>
      <Canvas dragStart={dragStart} dragOver={dragOver} drop={drop} />
      <SideBar dragStart={dragStartSide} dragEnd={dragEndSide} elementID={elementID} isCreate={isCreate} clickCreate={handleClickCreate} clickInspect={handleClickInspect} />
    </div>
  )

}

export default Home