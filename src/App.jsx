import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import RandomUsers from './components/RandomUsers'

function App() {
  const url ='https://randomuser.me/api/'
  const [randomUser, SetRandomUser] = useState([])
  console.log(randomUser)
  const FetchRandomUsers = () => {
    axios
    .get(url)
    .then((res) => SetRandomUser(res.data.results))
    .catch((err) => console.log(err))
  }

  useEffect(()=>{
    FetchRandomUsers()
  }, [])

  return (
    <div className="App w-[100vw] h-[100vh]-x-hidden flex justify-center items-center">

    {randomUser.length === 0 ? (
      "Loading..."
    ): (
    <div>
          {randomUser.map((random) =>(
        <RandomUsers 
        key={random.key}
        title={random.name.title}
        firstName={random.name.first}
        lastName={random.name.last}
        email={random.email}
        img={random.picture.large}
        phone={random.phone}
        cell={random.cell}
        age={random.dob.age}
        gender={random.gender}
        dob={random.dob.date}  
        // location={random.location.street}    
       />
      )
      )}

      <button onClick={() => FetchRandomUsers()} className='w-[auto] h-[auto] rounded-full border px-[2rem] py-[1rem] text-white bg-[black] mt-[1rem]'>Generate new user</button>
    </div>
    )}
      
    </div>
  )
}

export default App