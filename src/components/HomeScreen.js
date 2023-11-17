import { useState, useEffect } from 'react'
import axios from "axios";

import RecitersScreen from "./RecitersScreen";
import ChaptersScreen from "./ChaptersScreen";
import PlayerScreen from "./PlayerScreen";


const HomeScreen = () => {
  const [ reciters , setReciters ] = useState([]);
  const [ reciterDetails, setReciterDetails ] = useState(null);
  const [chapters, setChapters] = useState([])
  const [ chapterDetails, setChapterDetails ] = useState(null);

 //get all reciters with audio
  useEffect(() => {
    async function FetchData(){
      const {
        data: {reciters},
      } = await axios.get('https://mp3quran.net/api/_english.php')
      setReciters(reciters)
    }
    FetchData()
  }, [])


  //get all chapters
  useEffect(()=>{
   async function FetchData(){
    const {data: chapters} = await axios.get(
      'https://api.quran.com/api/v4/chapters'
      )
    setChapters(chapters)
   }
   reciters && reciters.length > 0 && FetchData()
  }, [reciters])

  console.log(chapters)
 
  const reciterHandler = (reciter) =>{
    setReciterDetails(reciter)
  }

  const chapterHandler = (chapter) =>{
    setChapterDetails(chapter)
  }

  return (
    <div className="row p-5 home-body vh-100">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll">
             <RecitersScreen 
             reciters={reciters} 
             reciterHandler={reciterHandler} 
             />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll">
             <ChaptersScreen 
             chapters={chapters && chapters.chapters} 
             chapterHandler={chapterHandler}/>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll">
             <PlayerScreen
              reciterDetails={reciterDetails}
              chapterDetails={chapterDetails}
             />
        </div>
    </div>
  )
}

export default HomeScreen;
