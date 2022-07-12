import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Home = () => {

<<<<<<< HEAD
  const [state, newState] = useState([]);
=======
  const response = await fetch("https://nextjs-cwe154gqm-omkarpatne6.vercel.app/api/fetch");
  const data = await response.json();
>>>>>>> af7016059e85e4b584bab298263af6ff972c6600

  useEffect(() => {
    const fetched = async () => {
      const response = await fetch("api/fetch");
      const data = await response.json();

      console.log(data);

      newState(data)

    }

    fetched()
  }, [])

  return (
    <div className={styles.container}>

      <h1><Link href="/details"><a>Click me</a></Link></h1>

      <ul>
        {state.map((item, index) => {
          return <li key={index}>{item.name}</li>
        })}
      </ul>


    </div>
  )
}

export default Home
