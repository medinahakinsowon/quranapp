
import { useState } from "react";

const ChaptersScreen = ({ chapters, chapterHandler }) => {
  const [ activeId, setActiveId] = useState('')
  return (
    <div className="min-vh-100 bg-red p-4 shadow-lg">
      <h1 className="fs-5 fw-bold text-center">Chapters</h1> <hr />
      <ul className="list-group text-end">
        {chapters && chapters.length > 0 ? (
          chapters.map((chapter)=>{
            return(
              <div key={chapter.id}>
              <li onClick={()=> {
                chapterHandler(chapter)
                setActiveId(chapter.id)}} className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between curser fs-6 ${activeId === chapter.id && 'active'}`}>
                <span>{chapter.id}</span>
                <span>{chapter.name_arabic}</span>
              </li>
              <hr />
            </div>
            )
          })
        ):(
          <div className="text-center">
            <span className="spinner-border"></span>
          </div>
        )}
      </ul>
    </div>
  )
}

export default ChaptersScreen;
