import React from 'react'

function Canvas({ dragOver, dragStart, drop }) {
  const divID = []

  for (let i = 0; i < 240; i++) {
    divID.push(`div${i}`);
  }

  return (

    <div className='row col-9'>

      <div
        id='divUtama'
        className='canvas col-1 bg-info p-0 position-relative'
        style={{
          height: 10,
        }}
        onDragOver={(e) => dragOver(e)}
        onDrop={drop}
      >
        <form
          id='select1'
          className='d-flex justify-content-between position-absolute fw-bold p-1'
          onDragStart={(e) => dragStart(e)}
          draggable
          style={{ width: '400%', backgroundColor: '#F5F5F5', zIndex: 99, cursor: 'move' }}
        >
          <label htmlFor="select" style={{ cursor: 'move' }}>Label</label>
          <select style={{ width: '60%' }} name="" id="select">
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
            className='canvas col-1 bg-info p-0 position-relative'
            style={{ height: '10px' }}
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