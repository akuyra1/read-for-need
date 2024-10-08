import React from 'react'
import HeaderStyles from '@/app/Styles/Header.module.css'
import Link from 'next/link'





export default function Header() {


  return (
    <div className={HeaderStyles.Headercontainer}>
        <div className={HeaderStyles.container}>
          <h1 className='m-5'>Read For Need</h1>
        </div>
        <div >
          <ul className={HeaderStyles.container}>
            <li><Link className={HeaderStyles.links} href='/'>Home</Link></li>
            <li><Link className={HeaderStyles.links} href='/'>Books</Link></li>
            <li><Link className={HeaderStyles.links} href='/'>Authors</Link></li>
            <li><Link className={HeaderStyles.links} href='/'>Series</Link></li>
          </ul>
        </div>
    </div>
  )
}
