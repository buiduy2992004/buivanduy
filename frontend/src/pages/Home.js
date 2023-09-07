import React from 'react'
import { Header } from '../componerts/Header'
import { Footer } from '../componerts/Footer'
import { Banner } from '../componerts/Banner'

export const Home = () => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        <Header/>
        
        <Banner/>

        <Footer/>
    </div>
  )
}
