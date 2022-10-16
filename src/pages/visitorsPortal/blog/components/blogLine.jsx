/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import Arrow from '../../../../assist/icons/arrow.svg'

export function BlogLine({ blog }) {
  return (
    <div className="blog_item">
      <img src={blog.image} alt="" />
      <div className="blog_item_data">
        <h1>ماهي القيمة المضافة باندماج الشركات ؟</h1>
        <span>ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة  ماهي القيمة المضافة باندماج الشركات الشكلي عندما قامت مطبعة </span>
        <Link to={`/blog/${blog.id}`}>
          <div className="more">
            <img src={Arrow} alt="" />
            <a>اقرأ المزيد</a>
          </div>
        </Link>
      </div>
    </div>
  )
}