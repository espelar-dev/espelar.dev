import * as React from 'react'
import Content from '../components/organisms/Content'
import NavBar from '../components/organisms/NavBar'

const pageName = "about";

const AboutPage = () => {
  return (
    <main className={pageName}>
      <NavBar />
      <Content pageName={pageName} />
    </main>
  )
}
export const Head = () => <title>About</title>

export default AboutPage