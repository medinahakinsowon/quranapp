

import ReactPlayer from "react-player";

const PlayerScreen = ({ reciterDetails, chapterDetails }) => {
  
  const audioLink = (reciter, number) =>{
    return reciter + '/' + ('00' + number).slice(-3)+'.mp3'
  }
  return (
    <div className="min-vh-100 bg-red p-4 shadow-lg">
    <h1 className="fs-5 fw-bold text-center">Player</h1> <hr />
    { reciterDetails !== null && chapterDetails !== null ? (
          <ul className="list-group text-end">
          <div>
            <li className="list-group-item bg-transparent border-0 text-light py-0 fs-6 ps-0 d-flex justify-content-between">
              <span>Reciter:</span>
              <span className='fs-6'>{reciterDetails.name}</span>
            </li>
            <hr />
            <li className="list-group-item bg-transparent border-0 text-light py-0 fs-6 ps-0 d-flex justify-content-between">
              <span>Chapters in Arabic:</span>
              <span className='fs-6'>{chapterDetails.name_arabic}</span>
            </li>
            <hr />
            <li className="list-group-item bg-transparent border-0 text-light py-0 fs-6 ps-0 d-flex justify-content-between">
              <span>Chapters in English:</span>
              <span className='fs-6'>{chapterDetails.name_complex}</span>
            </li>
            <hr />
            <li className="list-group-item bg-transparent border-0 text-light py-0 fs-6 ps-0 d-flex justify-content-between">
              <span>Revelation Place:</span>
              <span className='fs-6'>{chapterDetails.revelation_place}</span>
            </li>
            <hr />
            <li className="list-group-item bg-transparent border-0 text-light py-0 fs-6 ps-0 d-flex justify-content-between">
              <span>Translated Name:</span>
              <span className='fs-6'>{chapterDetails.translated_name.name}</span>
            </li>
            <hr />
            <div>
              <ReactPlayer
                url={audioLink(reciterDetails.Server, chapterDetails.id)}
                controls={true}
                playing={true}
                width='100%'
                height='60px'
              />
            </div>
          </div>
        </ul>
    ):(
      <div className="text-center">
        <span className="spinner-border"></span>
      </div>
    )}

  </div>
  )
}

export default PlayerScreen;
