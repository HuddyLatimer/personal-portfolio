import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <div className="profile-section">
        <div className="avatar">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQEA9McbcaPkuA/profile-displayphoto-shrink_200_200/B56ZkwYgyvI4AY-/0/1757453358308?e=1767830400&v=beta&t=DWkQELohL7lNtLyq8g5RKd5D46oJcu2R-TaD7swvW8Y"
            alt="Hudson Latimer"
            className="avatar-img"
          />
        </div>

        <h1 className="name">Hudson Latimer</h1>

        <section className="profile">
          <h2>Profile</h2>
          <p>I build apps that solve problems.</p>
          <p>I've built <a href="https://polyfolio.xyz" target="_blank" rel="noopener noreferrer">PolyFolio</a>, and more.</p>
          <p>I focus on creating tools that are intuitive and actually work.</p>
          <p>My goal is to make software that people enjoy using.</p>
        </section>

        <section className="links">
          <h2>Links</h2>
          <ul>
            <li><a href="https://x.com/HuddyDev" target="_blank" rel="noopener noreferrer">𝕏</a></li>
            <li><a href="https://github.com/HuddyLatimer" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/2026">2026 Goals</Link></li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Home
