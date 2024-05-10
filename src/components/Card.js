import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify'

const Card = (props) => {
  let courses = props.courses
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler(){
    if(likedCourses.includes(courses.id)){
      setLikedCourses((prev)=>prev.filter((cid)=>(cid!==courses.id)));
      toast.warning("Liked removed");

    }
    else{
      if(likedCourses.length === 0){
        setLikedCourses([courses.id]);
      }
      else{
        setLikedCourses((prev) => [...prev, courses.id]);
      }
      toast.success("Liked successfully");
    }
  }
  return (
    <div className="card_main">
      <div className="img">
      <img width="300px" src={courses.image.url} alt="course-img"></img>
      <div className="btn">
        <button className='btn-in' onClick={clickHandler}>
          {
            likedCourses.includes(courses.id)? (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
          }
        
        </button>
      </div>
      </div>
      <div className='p-4'>
        <p className="p-4-1">{courses.title}</p>
        <p className="p-4-2">
          { (courses.description.length>150)?(courses.description.substr(0,150)+"...."):(courses.description)
          }
          </p> 
      </div> 
    </div>
  )
}

export default Card


