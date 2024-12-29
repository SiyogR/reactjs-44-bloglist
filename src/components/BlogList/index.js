// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="unorder-list">
      {blogsList.map(eachItem => (
        <BlogItem  key={eachItem.id}  blogDetails = {eachItem}/>
      ))}
    </ul>
  )
}

export default BlogList
