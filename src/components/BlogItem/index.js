// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list-item">
      <div className="blog-item">
        <h1 className="blog-title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="paragraph">{description}</p>
    </li>
  )
}
export default BlogItem
