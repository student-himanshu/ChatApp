import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Markdown from 'react-markdown'
import Loading from './Loading'
function App() {
  // const [count, setCount] = useState(0)
  let [question, setquestion] = useState("")
  let [loadingstauts, setloadingstauts] = useState(false)

  let [data, setData] = useState("")

  let handleSubmit = (e) => {
    e.preventDefault()
    setloadingstauts(true)
    axios.post('http://localhost:8120/ask', { question })
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes);
        if (finalRes._status) {
          setData(finalRes.finalData)
          setloadingstauts(false)
        }

      })
    console.log(question);
  }

  return (
    <>
      <h1 className='text-center font-bold  text-4xl mb-4'>Gemini Ai chatbot</h1>
      <div className='max-w-[13320px] border-1 mx-auto grid grid-cols-[30%_auto] gap-5'>
        <form onSubmit={handleSubmit} action="" className='shadow-lg p-3'>
          <textarea value={question} onChange={(e) => setquestion(e.target.value)} className='w-[100%] h-[200px] border-1'></textarea>
          <button className='bg-[#111115] text-white w-[100%] py-2'>Create content</button>
        </form>
        <div className='border-l border-[#ccc]' >
          <div className='h-[300px] overflow-y-scroll p-3'>

            {loadingstauts ? <Loading /> : <Markdown>{data}</Markdown>}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
