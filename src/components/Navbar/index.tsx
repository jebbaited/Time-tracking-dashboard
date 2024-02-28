import { useContext } from 'react'
import classNames from 'classnames'

import './styles.scss'
import { CurrentTabContext } from '../../App'

export enum NAVIGATION_TABS {
  DAILY = 'Daily',
  WEEKLY = 'Weekly',
  MONTHLY = 'Monthly',
}

export const Navbar = () => {
  const currentTabValues = useContext(CurrentTabContext)

  return (
    <nav className="navigation">
      {Object.keys(NAVIGATION_TABS).map((tab, index) => (
        <button
          key={index}
          onClick={() =>
            currentTabValues?.setTabSelected(NAVIGATION_TABS[tab as keyof typeof NAVIGATION_TABS])
          }
          className={classNames({
            active:
              currentTabValues?.tabSelected ===
              NAVIGATION_TABS[tab as keyof typeof NAVIGATION_TABS],
          })}
        >
          {NAVIGATION_TABS[tab as keyof typeof NAVIGATION_TABS]}
        </button>
      ))}
    </nav>
  )
}
