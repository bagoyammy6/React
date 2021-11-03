import { withRouter, Link } from 'react-router-dom'
import MultiLevelBreadCrumb from '../components/MultiLevelBreadCrumb'
import '../styles/ProductDetail.css'
import { useEffect, useState } from 'react'
// import { CONNECT3 } from '../road'
import { IMG_PATH } from '../road'

function ProductDetail(props) {
  // console.log(props)
  // const { auth } = props
  const [data, setData] = useState({})
  const [displayData, setDisplayData] = useState({})
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    ;(async () => {
      let query = '?page=' + parseInt(pageNumber)
      // console.log(query)
      let link =
        'http://localhost:3001/product/findsix/' + query
      // console.log(link)
      const r = await fetch(link)
      // console.log(link)
      const obj = await r.json()
      await setData(obj)
      await setDisplayData(obj)
    })()
  }, [pageNumber])
  // console.log(pageNumber)
  // console.log(data.totalPages)

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
              <div className="rocky-buy">1</div>
              <div className="rocky-UD">
                <i className="far fa-caret-square-up"></i>
                <i className="far fa-caret-square-down"></i>
              </div>
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
              <i className="far fa-heart"></i> 加入追蹤
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
                <Link
                  to={'/detail'}
                  // className="page-link"
                  onClick={() => {
                    {
                      pageNumber < 2
                        ? setPageNumber(data.totalPages)
                        : setPageNumber(pageNumber - 1)
                    }
                  }}
                >
                  <i className="fas fa-caret-square-left rocky-angle"></i>
                </Link>
              </div>
              <div className="container">
                <div className="row">
                  {displayData.rows
                    ? displayData.rows.map((v, i) => {
                        return (
                          <div
                            className="col-12 col-sm-6 col-md-4 col-lg-2"
                            key={i}
                          >
                            <div className="card card-color top-space">
                              <div data-aos="zoom-in">
                                <img
                                  src={
                                    IMG_PATH + '/' + v.image
                                  }
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body bottom-space rocky-last">
                                  <div className="card-text name-large rocky-last">
                                    {v.name}
                                  </div>
                                  <div className="card-text rocky-last">
                                    NT$ {v.price}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    : ''}
                </div>
              </div>
              <div className="arrow-center disabled">
                <Link
                  to={'/detail'}
                  // className="page-link"
                  onClick={() => {
                    {
                      pageNumber === data.totalPages
                        ? setPageNumber(1)
                        : setPageNumber(pageNumber + 1)
                    }
                  }}
                >
                  <i className="fas fa-caret-square-right rocky-angle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductDetail)
