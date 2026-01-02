import { Link } from 'react-router-dom'

function Goals2026() {
  const goals = [
    { text: "Best physical Shape of my life", progress: null },
    { text: "$2k MRR from apps", progress: "$0/2000" },
    { text: "Ship 10 apps", progress: "0/10" },
    { text: "Graduate College", progress: null },
    { text: "5+ income Streams", progress: "0/5" },
    { text: "Start faceless instagram and youtube", progress: null }
  ]

  return (
    <div className="container">
      <div className="profile-section">
        <Link to="/" className="back-link">← Back to home</Link>

        <h1 className="name">2026 Goals</h1>

        <section className="goals">
          <h2>My Goals for 2026</h2>
          <ul className="goals-list">
            {goals.map((goal, index) => (
              <li key={index}>
                <input type="checkbox" className="goal-checkbox" disabled />
                <span className="goal-text">
                  {goal.text}
                  {goal.progress && <span className="goal-progress"> ({goal.progress})</span>}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Goals2026
