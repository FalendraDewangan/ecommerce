import '../css/Category.css'

const Category = (props) => {
  return (
    <div className="category">
        <img src={props.item.imgUrl} alt="" />
        <div className="info">
          <h1>{props.item.title}</h1>
          <button>Shop Now</button>
        </div>
    </div>
  )
}

export default Category
