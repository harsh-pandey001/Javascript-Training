import React, { useContext } from 'react'
import ThemeButton from './ThemeButton'
import ThemeContext from './ThemeContext'


const Bodycomp = () => {
    const themeContext = useContext(ThemeContext)
    const { theme  } = themeContext
  return (

    <div>
       <div style={{ textAlign: "center", marginTop: "50px",width:"100%",height:"100vh", background : theme}}>
          <h1>Context API with TypeScript</h1>
          <ThemeButton />
        </div>
    </div>
  )
}

export default Bodycomp

