import React, { FC } from 'react'
import styles from './Nav.module.css'

const Nav: FC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Brian Ardito's Weather App
      </div>
    </div>
  )
}

export default Nav
