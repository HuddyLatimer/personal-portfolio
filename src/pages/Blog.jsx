import { Link } from 'react-router-dom'
import { Tweet } from 'react-tweet'

function Blog() {
  return (
    <div className="container blog-container">
      <Link to="/" className="back-link">← Back to home</Link>

      <h1 className="name">Blog</h1>

      <div className="blog-posts">
        <article className="blog-post">
          <Tweet id="2005314418629083530" />
        </article>

        <article className="blog-post">
          <Tweet id="2005702405128900636" />
        </article>

        <article className="blog-post">
          <Tweet id="2006195715727401131" />
        </article>

        <article className="blog-post">
          <Tweet id="2006752799326089476" />
        </article>
      </div>
    </div>
  )
}

export default Blog
