import styles from '../styles/Home.module.css'
import Link from 'next/link'

export async function getStaticProps(context) {

  const response = await fetch("https://nextjs-cwe154gqm-omkarpatne6.vercel.app/api/fetch");
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
