import photo from '../../images/image-jeremy.png'
import { Navbar } from '../Navbar'
import './styles.scss'

export const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile-info-photo">
          <img src={photo} alt="photo" />
        </div>

        <div className="profile-info-details">
          <p>Report for</p>
          <h2>Jeremy Robson</h2>
        </div>
      </div>

      <Navbar />
    </div>
  )
}
