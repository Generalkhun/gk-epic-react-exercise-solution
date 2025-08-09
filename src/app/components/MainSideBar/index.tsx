import React from 'react'
import Title from './Title'
import Exercises from './Exercises'


const MainSideBar = () => {
  return (
    //white dotted bordered with cirved edge
    <div className="flex flex-col w-[350px] h-[90vh] p-6 border border-dashed border-amber-50 rounded-lg shadow-lg gap-6">
        <Title/>
        <Exercises/>
    </div>
  )
}

export default MainSideBar