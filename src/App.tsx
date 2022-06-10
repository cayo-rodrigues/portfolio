import React from "react"
import Header from "./components/Header"
import AppRoutes from "./routes"
import { GlobalStyle } from "./styles/global"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </>
  )
}

export default App
