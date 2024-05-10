import React from 'react'
import Card from './Card'
import {useState} from 'react'

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  let [likedCourses,setLikedCourses] = useState([])
  //Return you a list of all courses received from an api response
  function getCourses(){
    if(category==="All"){
      let allCourses = [];
      Object.values(courses).forEach(array=> {
        array.forEach(courseData=>{
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }
    else{
      return courses[category];
    }
  }
  return (
    <div className="cards_main">

    {getCourses().map((courses)=>{
      return <Card key = {courses.id} courses = {courses} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses}/>
    })}
      
    </div>
  )
}

export default Cards
