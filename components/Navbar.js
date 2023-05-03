import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
        <ul>
          <Link href='/'> <li>HOME</li></Link>
          <Link href='/about'><li>ABOUT</li></Link>
          <Link href='/blog'><li>BLOG</li></Link>
          <Link href='/contact'><li>CONTACT</li></Link>
        </ul>
      </nav>
  )
}

export default Navbar
