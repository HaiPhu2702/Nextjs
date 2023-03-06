import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import ImageGift from "../../../assets/Gift.jpg"


function DetailUser() {
   const  router=useRouter()
  const {id}=router.query
  function backLogin(){
    router.push('/login')
  }

  return (
    <>
    <Head>
       <title> User detail </title>
       {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Rubik:wght@500&display=swap" rel="stylesheet"/>     */}
       {/* <link href='/css/global.css' rel='stylesheet'/> */}
    </Head>
    <main>
      <Image src={ImageGift} alt='helo'/>
       <h1>
      user detail {id}
      </h1>

      <button onClick={backLogin}>
        go to login  with useRouter 
      </button>

      <Link href='/login'>
        Go to login with Link
      </Link>
    </main>
    

      
      <a href="/login">go to login the 'a'</a>
    </>
   
  )
}

export default DetailUser