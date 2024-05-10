import React from 'react'

const Filter = ({filterData,category,setCategory}) => {
  function filterHandler(title){
    setCategory(title)

  }
  return (
    <div className="filter">
      {filterData.map((Data)=>{
        return <button className="button" key={Data.id} onClick={ ()=> filterHandler(Data.title)}>{Data.title}</button>
      })}
    </div>
  )
}

export default Filter;
