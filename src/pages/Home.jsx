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

  const handleOnClick = async (id) => {
    setElementID(id)
    setIsCreate(false)
  }

  const dragStartSide = () => {

    let selectOption = document.createElement('form')
    selectOption.id = `select${formID}`
    selectOption.onclick = () => handleOnClick(selectOption.id)
    selectOption.draggable = true
    selectOption.ondragstart = (e) => dragStart(e)
    selectOption.classList = "d-flex justify-content-between position-absolute fw-bold p-1"
    selectOption.style.width = '400%'
    selectOption.style.zIndex = 99
    selectOption.style.backgroundColor = '#F5F5F5'
    selectOption.style.cursor = 'move'

    let htmlString = '<label htmlFor="select" style="cursor: move">Label</label> <select style="width: 60%" name="" id="select"> <option value="">Option 1</option> <option value="">Option 2</option> <option value="">Option 3</option></select>'

    selectOption.innerHTML = htmlString.trim();

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
    <div className='row gap-2 ps-4 pe-1'>
      <Canvas dragStart={dragStart} dragOver={dragOver} drop={drop} />
      <SideBar dragStart={dragStartSide} dragEnd={dragEndSide} elementID={elementID} isCreate={isCreate} />
    </div>
  )

}

export default Home