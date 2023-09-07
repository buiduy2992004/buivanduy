import React from 'react'
import { ContactFooter } from './footer/ContactFooter'
import { ListProperty } from './footer/ListProerty'
import { EndFooter } from './footer/EndFooter'

export const Footer = () => {
  return (
    <div style={{ display:'flex', flexDirection:'column', width:'100%', height:"800px" , backgroundColor:'#FFFFFF'}}>
        <ContactFooter/>
        <ListProperty/>
        <EndFooter/>

    </div>
  )
}
