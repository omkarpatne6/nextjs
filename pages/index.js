import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export async function getStaticProps(context) {

  const response = await fetch("api/fetch");
  const data = await response.json();

  console.log(data);

  newState(data)

  return {
    props: {
      data
    }
  }
}

const Home = ({data}) => {

  return (
    <div className={styles.container}>

      <h1><Link href="/details"><a>Click me</a></Link></h1>

      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item.name}</li>
        })}
      </ul>


    </div>
  )
}

export default Home
