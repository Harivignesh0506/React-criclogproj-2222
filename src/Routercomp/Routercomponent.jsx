import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Homesect } from '../Homesection/Homesect'
import { Jobs } from '../Jobs page/Jobs'
import { Layout } from '../Layout'
import { Login } from '../Authentication/Login'
import { Matchlocation } from '../match/Matchlocation'


export const Routercomponent = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Homesect/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/live-match" element={<Matchlocation/>}/>
       
      </Route>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
      
    </>
  )
}
