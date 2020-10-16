import React from "react"
import Navigation from "../components/Navigation/Navigation"
// import Image from "../components/image"
import GlobalStyles from "../assets/styles/globalStyles"

const MainLayout = ({children}) => (
  <>
    <GlobalStyles />
    <Navigation />
    {children}
  </>
)
export default MainLayout;
