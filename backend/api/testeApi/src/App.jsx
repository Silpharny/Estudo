import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const URL = 'https://sheets.googleapis.com/v4/spreadsheets/1owGcfKZRHZq8wR7Iw6PVh6-ueR0weIVQMjxWW_0M6a8/values/Sheet1!A1:N10?key=AIzaSyDErRezqW2klWRYKwQkzuOIMGJ5AeD5GSY'

  useEffect(() => {

    async function getData() {
      try{
        const response = await axios.get(URL, {
          headers: {

          }
        })
        console.log(response.data.values)
        setData(response.data.values)
      } catch(error) {
        console.log(error)
      }
    }

    getData()

  },[])
  
  return (
    <>
      {data.map((data,index) => 
        <div className='iconic' key={index}>
          <div>
            <p>{data['Company-ID']}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default App
