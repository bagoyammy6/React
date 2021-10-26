import { withRouter } from 'react-router-dom'
import MultiLevelBreadCrumb from '../components/MultiLevelBreadCrumb'
import '../styles/ProductDetail.css'
import {
  AiOutlineLine,
  AiOutlinePlus,
} from 'react-icons/ai'

function ProductDetail(props) {
  // console.log(props)

  const { auth } = props

  return (
    <>
      {/* 麵包屑 */}
      <div className="container">
        <div className="row">
          <MultiLevelBreadCrumb />
        </div>
      </div>
      <div className="rocky-center">
        {/* <!-- 商品圖 --> */}
        <div className="wrap-img">
          <img
            src="./image/LA MARIEE DU CIEL.jpeg"
            alt=""
            width="100%"
          />
        </div>
        {/* <!-- 右側資訊欄 --> */}
        <div className="big-wrap">
          <div className="product-name">
            <div className="name rocky-color">
              LA MARIEE DU CIEL
            </div>
            <div className="designer rocky-color">
              YOEL BENHARROUCHE
            </div>
          </div>
          <div className="product-size">
            <div className="rocky-category rocky-color">
              分類：紙雕
            </div>
            <div className="rocky-size rocky-color">
              尺寸：50 X 43cm
            </div>
            <div className="rocky-price rocky-color">
              單價：2000元
            </div>
          </div>
          <div className="product-num">
            <div className="rocky-num rocky-color">
              數量：
              <a href="#/">
                <AiOutlineLine />
              </a>
              <a href="#/" className="order-number">
                1
              </a>
              <a href="#/">
                <AiOutlinePlus />
              </a>
            </div>
            <div className="total-price rocky-color">
              總價：2000元
            </div>
          </div>
          <div className="shopping-btn">
            <button
              type="button"
              className="btn btn-dark btn-lg rocky-in"
            >
              加入購物車
            </button>
          </div>
          <div className="shopping-btn2">
            <button
              type="button"
              className="btn btn-light btn-lg rocky-debt rocky-color"
            >
              <i class="far fa-heart"></i> 加入追蹤
            </button>
          </div>
          <div className="product-note">
            <div className="shipping-day rocky-color">
              ※基本工作日：D+10日，視商品體裁及尺寸增減工作日
            </div>
            <div className="shipping-area rocky-color">
              配送地區：臺灣與離島
            </div>
          </div>
        </div>
      </div>
      {/* 下方推薦欄 */}
      <div className="container">
        <div className="row">
          <div className="mini-pic">
            <div className="recommand rocky-color">
              為您推薦 <a href="/#">點我看更多</a>
            </div>
            <div className="rocky-wrap">
              <div className="arrow-center rocky-left">
                <i className="fas fa-angle-double-left rocky-angle"></i>
              </div>
              <div className="recommand">
                <img
                  src="./image/SHIT.jpeg"
                  alt=""
                  width="200px"
                />
              </div>
              <div className="recommand">
                <img
                  src="./image/COMIC - POW.jpeg"
                  alt=""
                  width="200px"
                />
              </div>
              <div className="recommand">
                <img
                  src="./image/INDIANA LION.jpeg"
                  alt=""
                  width="200px"
                />
              </div>
              <div className="recommand">
                <img
                  src="./image/LES ANGES DE JERUSALEM.jpeg"
                  alt=""
                  width="200px"
                />
              </div>
              <div className="recommand">
                <img
                  src="./image/MOULIN ROUGE.jpeg"
                  alt=""
                  width="200px"
                />
              </div>
              <div className="arrow-center">
                <i className="fas fa-angle-double-right rocky-angle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductDetail)
