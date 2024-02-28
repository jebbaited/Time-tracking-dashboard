import { FC } from 'react'

import { Data, Time } from '../../dto'
import { NAVIGATION_TABS } from '../Navbar'
import './styles.scss'

// Icons
import points from '../../images/icon-ellipsis.svg'
import iconExercise from '../../images/icon-exercise.svg'
import iconPlay from '../../images/icon-play.svg'
import iconSelfCare from '../../images/icon-self-care.svg'
import iconSocial from '../../images/icon-social.svg'
import iconStudy from '../../images/icon-study.svg'
import iconWork from '../../images/icon-work.svg'

type CardProps = {
  data: Data
  currentTab: NAVIGATION_TABS
}

export const TimeCard: FC<CardProps> = ({ data, currentTab }) => {
  const createCard = () => {
    switch (data.title) {
      case 'Work':
        return (
          <div className="time-card-container orange">
            <img src={iconWork} alt="work" className="icon" />
            {createCardInfo()}
          </div>
        )
      case 'Play':
        return (
          <div className="time-card-container soft-blue">
            <img src={iconPlay} alt="play" className="icon" />
            {createCardInfo()}
          </div>
        )
      case 'Study':
        return (
          <div className="time-card-container pink">
            <img src={iconStudy} alt="study" className="icon" />
            {createCardInfo()}
          </div>
        )
      case 'Exercise':
        return (
          <div className="time-card-container lime-green">
            <img src={iconExercise} alt="exercise" className="icon" />
            {createCardInfo()}
          </div>
        )
      case 'Social':
        return (
          <div className="time-card-container violet">
            <img src={iconSocial} alt="social" className="icon" />
            {createCardInfo()}
          </div>
        )
      case 'Self Care':
        return (
          <div className="time-card-container soft-orange">
            <img src={iconSelfCare} alt="selfCare" className="icon" />
            {createCardInfo()}
          </div>
        )

      default:
        break
    }
  }

  const getCurrentDate = (time: Time) => {
    return <p>{time.current > 1 ? `${time.current}hrs` : `${time.current}hr`}</p>
  }

  const getPreviousDate = (time: Time) => {
    return time.current > 1 ? `${time.current}hrs` : `${time.current}hr`
  }

  const createCardInfo = () => {
    switch (currentTab) {
      case NAVIGATION_TABS.DAILY:
        return (
          <div className="time-card-content">
            <div className="time-card-header">
              <h2>{data.title}</h2>

              <div className="time-card-text-menu">
                <img src={points} alt="points" />
              </div>
            </div>

            <div className="time-card-text">
              {getCurrentDate(data.timeframes.daily)}

              <p>Last Day - {getPreviousDate(data.timeframes.daily)}</p>
            </div>
          </div>
        )
      case NAVIGATION_TABS.WEEKLY:
        return (
          <div className="time-card-content">
            <div className="time-card-header">
              <h2>{data.title}</h2>
              <div className="time-card-text-menu">
                <img src={points} alt="points" />
              </div>
            </div>

            <div className="time-card-text">
              {getCurrentDate(data.timeframes.weekly)}

              <p>Last Week - {getPreviousDate(data.timeframes.weekly)}</p>
            </div>
          </div>
        )
      case NAVIGATION_TABS.MONTHLY:
        return (
          <div className="time-card-content">
            <div className="time-card-header">
              <h2>{data.title}</h2>
              <div className="time-card-text-menu">
                <img src={points} alt="points" />
              </div>
            </div>

            <div className="time-card-text">
              {getCurrentDate(data.timeframes.monthly)}

              <p>Last Month - {getPreviousDate(data.timeframes.monthly)}</p>
            </div>
          </div>
        )
      default:
        break
    }
  }

  return createCard()
}
