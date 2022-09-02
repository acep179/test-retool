import React, { useRef, useState } from 'react'

import { Canvas, SideBar } from './../component'

function Home() {

  const [divID, setDivID] = useState(['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9', 'div10', 'div11', 'div12', 'div13', 'div14', 'div15', 'div16', 'div17', 'div18', 'div19', 'div20', 'div21', 'div22', 'div23', 'div24', 'div25', 'div26', 'div27', 'div28', 'div29', 'div30', 'div31', 'div32', 'div33', 'div34', 'div35', 'div36', 'div37', 'div38', 'div39', 'div40', 'div41', 'div42', 'div43', 'div44', 'div45', 'div46', 'div47', 'div48', 'div49', 'div50', 'div51', 'div52', 'div53', 'div54', 'div55', 'div56', 'div57', 'div58', 'div59', 'div60', 'div61', 'div62', 'div63', 'div64', 'div65', 'div66', 'div67', 'div68', 'div69', 'div70', 'div71', 'div72', 'div73', 'div74', 'div75', 'div76', 'div77', 'div78', 'div79', 'div80', 'div81', 'div82', 'div83', 'div84', 'div85', 'div86', 'div87', 'div88', 'div89', 'div90', 'div91', 'div92', 'div93', 'div94', 'div95', 'div96', 'div97', 'div98', 'div99', "div100", "div101", "div102", "div103", "div104", "div105", "div106", "div107", "div108", "div109", "div110", "div111", "div112", "div113", "div114", "div115", "div116", "div117", "div118", "div119", "div120"])

  const dragItem = useRef();
  let formID = 0
  const [elementID, setElementID] = useState()
  const [isCreate, setIsCreate] = useState(true)

  const dragStart = (e) => {
    dragItem.current = { id: e.target.id }
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
    dragItem.current = `select${formID}`
  };

  const dragEndSide = () => {
    formID++
  }

  const drop = (e, index) => {
    e.preventDefault()
    console.log(dragItem.current)
    console.log(index)

    if (typeof (dragItem.current) === "string") {
      divID[index] = {
        id: e.target.id,
        selectsData: {
          id: dragItem.current,
          option: ['option 1', 'option 2', 'option 3']
        }
      }
      setDivID([
        ...divID
      ])
    } else {

    }

  };

  const dragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div className='grid grid-cols-12 gap-2 pl-4 pr-3'>
      <Canvas
        dragStart={dragStart}
        dragOver={dragOver}
        drop={drop}
        onClickForm={handleOnClick}
        divID={divID}
      />
      <SideBar
        dragStart={dragStartSide}
        dragEnd={dragEndSide}
        elementID={elementID}
        isCreate={isCreate}
        clickCreate={handleClickCreate}
        clickInspect={handleClickInspect}
      />
    </div>
  )

}

export default Home