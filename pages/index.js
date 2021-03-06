import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Home = () => {

  const [state, newState] = useState([]);

  useEffect(() => {
    const fetched = async () => {
      const response = await fetch("/api/fetch");
      const data = await response.json();

      console.log(data);

      newState(data)

    }

    fetched()
  }, [])

  return (
    <div className={styles.container}>

      <h1><Link href="/details"><a>Omkar ketan patne</a></Link></h1>

      <ul>
        {state.map((item, index) => {
          return <li key={index}>{item.name}</li>
        })}
      </ul>


    </div>
  )
}

export default Home
