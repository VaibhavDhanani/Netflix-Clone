import React from 'react'
import Header from '../components/header/Header'
import MainView from '../components/main-section/MainView'
import SubSection from '../components/sub-section/SubSection'
import Bigfooter from '../components/footer/Bigfooter'


const HomePage = () => {
  return (
    <div>
      <Header />
      <MainView />
      <SubSection />
      <Bigfooter />
    </div>
  )
}

export default HomePage
