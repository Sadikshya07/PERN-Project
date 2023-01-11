import Head from 'next/head'
import Image from 'next/image' 
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import NavbarOverlay from '../components/NavbarOverlay'


export default function Home() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <NavbarOverlay />
    </>
  )
}
