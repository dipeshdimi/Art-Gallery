const profiles = [
  { name: 'Thomas Edward', username: '@thewildwithyou', artistSrc: '/assets/artist1.png', bannerSrc: '/assets/banner1.png' },
  { name: 'Chris Doe', username: '@thewildwithyou', artistSrc: '/assets/artist2.png', bannerSrc: '/assets/banner2.png' },
  { name: 'Emilie Jones', username: '@thewildwithyou', artistSrc: './assets/artist3.png', bannerSrc: '/assets/banner3.png' },
  { name: 'Jessica Williams', username: '@thewildwithyou', artistSrc: '/assets/artist4.png', bannerSrc: '/assets/banner4.png' },
];

const bannerImageStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '20vh',
  borderRadius: '10px',
  color: 'white',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  filter: 'drop-shadow(3px 3px 5px gray)',
};


function ArtistsPhotographersTile() {
  return (
    <div className="tile profile-section">
      <h3>
        <span>Artists</span>
        <span style={{ 'marginLeft': '10%', 'color': 'gray' }}>Photographers</span>
      </h3>
      <div className="profile-list">
        {profiles.map((profile, index) => (
          <div
            className="profile-item"
            key={index}
            style={{
              ...bannerImageStyle,
              backgroundImage: `url(${profile.bannerSrc})`
            }}
          >
            <div className="artistDetails">
              <img className="profile-pic" src={profile.artistSrc} alt="Profile" />
              <div>
                <h4>{profile.name}</h4>
                <p className='artistUsername'>{profile.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistsPhotographersTile;
