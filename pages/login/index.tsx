import Link from 'next/link'
import React from 'react'
import DetailUser from './../admin/users/[id]';

function Login() {
  return (
    <div>
     <h1>Login</h1>
     <Link href={`/admin/users/5`} >go to detail users</Link>
      
      </div>
  )
}

export default Login