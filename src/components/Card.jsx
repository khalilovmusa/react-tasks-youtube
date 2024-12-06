import profilePic from '../assets/itachi.jpg'

const Card = () => {
    return((
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title '>Musa Khalilov</h2>
            <p className='card-text'>I am a student at ASOIU</p>
        </div>
    ))
}

export default Card; 