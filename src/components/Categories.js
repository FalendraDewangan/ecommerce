import '../css/Categories.css'
import Category from './Category'

const Categories = () => {
  return (
    <div className="categories">
        <Category item={{title:"Title",imgUrl:"/static/4.jpg"}}/>
        <Category item={{title:"Title",imgUrl:"/static/5.jpg"}}/>
        <Category item={{title:"Title",imgUrl:"/static/6.jpg"}}/>
    </div>
  )
}

export default Categories
