import { useState, createContext } from 'react'

import mockedData from '../data.json'
import './App.scss'
import { NAVIGATION_TABS } from './components/Navbar'
import { ProfileCard } from './components/ProfileCard'
import { TimeCard } from './components/TimeCard'
import { Data } from './dto'

type ContextProvider = {
  tabSelected: NAVIGATION_TABS
  setTabSelected: (value: NAVIGATION_TABS) => void
}

export const CurrentTabContext = createContext<ContextProvider | null>(null)

const App = () => {
  const [tabSelected, setTabSelected] = useState<NAVIGATION_TABS>(NAVIGATION_TABS.DAILY)

  const data: Data[] = structuredClone(mockedData)

  return (
    <CurrentTabContext.Provider value={{ tabSelected, setTabSelected }}>
      <div className="app">
        <div className="app-background">
          <div className="app-container">
            <ProfileCard />

            {data.map((time, index) => (
              <TimeCard data={time} currentTab={tabSelected} key={index} />
            ))}
          </div>
        </div>
      </div>
    </CurrentTabContext.Provider>
  )
}

export default App
