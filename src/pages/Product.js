import React from 'react'
import { withRouter } from 'react-router-dom'
import '../styles/Product.css'
import {
  Carousel,
  DropdownButton,
  Dropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'

function Product(props) {
  // 利用match.params來取得url params (記得App元件中的Route要先定義)
  // console.log('props.match.params', props.match.params)
  return (
    <>
      {/* 輪播牆 */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/p1.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3></h3>
            <p></p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/p2.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3></h3>
            <p></p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/p3.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3></h3>
            <p></p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <!-- 推薦商品字串列 --> */}
      <div className="container">
        <div className="row  ">
          <div className="col sorting">
            <div className="sorting-op">推薦商品</div>
            <DropdownButton
              id="dropdown-basic-button"
              title="排序"
            >
              <Dropdown.Item
                href="#/action-1"
                id="rocky-order"
              >
                最新上架
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                id="rocky-order"
              >
                價格由低到高
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                id="rocky-order"
              >
                價格由高到低
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
      {/* 搜尋欄 */}
      <div className="container">
        <div className="row">
          <div className="rocky-form">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button
                variant="outline-dark"
                className="rocky-button"
              >
                <div className="rocky-search">Search</div>
              </Button>
            </Form>
          </div>
        </div>
      </div>
      {/* <!-- 推薦商品 --> */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <div data-aos="zoom-in">
                <img
                  src="./image/JUNGLE LOVE XXL.jpeg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body bottom-space">
                  <div className="card-text name-large">
                    JUNGLE LOVE XXL
                  </div>
                  <div className="card-text">PLUM</div>
                  <div className="card-text">NT$ 3800</div>
                  <i className="fas fa-shopping-cart cart-color"></i>
                  <span className="rocky-love">123</span>
                  <i className="fas fa-heart cart-color"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/LA VILLE DU CIEL.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  LA VILLE DU CIEL
                </div>
                <div className="card-text">
                  YOEL BENHARROUCHE
                </div>
                <div className="card-text">NT$ 8800</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/ICON BETTY.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  ICON BETTY
                </div>
                <div className="card-text">TOMMY</div>
                <div className="card-text">NT$ 3400</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/SHE SAID YES.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  SHE SAID YES
                </div>
                <div className="card-text">
                  KUNST MET EEN R
                </div>
                <div className="card-text">NT$ 5000</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/SELL!.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  SELL!
                </div>
                <div className="card-text">
                  DAVID KRACOV
                </div>
                <div className="card-text">NT$ 1100</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/GANGSTA BARDOT.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  GANGSTA BARDOT
                </div>
                <div className="card-text">CLEM$</div>
                <div className="card-text">NT$ 7500</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/INSPIRATION ARTISTIQUE.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  INSPIRATION ARTISTIQUE
                </div>
                <div className="card-text">
                  YOEL BENHARROUCHE
                </div>
                <div className="card-text">NT$ 6600</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/OSTRICHES MEETING.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  OSTRICHES MEETING
                </div>
                <div className="card-text">作者</div>
                <div className="card-text">NT$ 5800</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/VEIL OF LUXURY BUTTERFLIES.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  VEIL OF LUXURY BUTTERFLIES
                </div>
                <div className="card-text">
                  JONAS LERICHE
                </div>
                <div className="card-text">NT$ 4000</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          {/* <!-- 分頁按鈕 --> */}
          <nav aria-label="Page navigation example">
            <ul className="pagination rocky-page">
              <li className="page-item">
                <a
                  className="page-link"
                  href="/#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="/#"
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <!-- 商品分類字串列 --> */}
      <div className="container">
        <div className="row  ">
          <div className="col sorting">
            <div className="sorting-op">商品分類</div>
            <div className="sorting-op"></div>
          </div>
        </div>
      </div>
      {/* <!-- 商品分類 --> */}
      <div className="container">
        <div className="row">
          {/* <!-- 紙雕 --> */}
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/category.jpeg"
                className="card-img-top category"
                alt="..."
              />
              <div className="card-body bottom-space category-word">
                <div className="card-text name-large category-bigtext">
                  紙雕
                </div>
                <div className="card-text category-smalltext">
                  PAPERCUTS
                </div>
                <button
                  type="button"
                  className="btn btn-dark btn-color"
                >
                  點我看更多
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/LA MARIEE DU CIEL.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  LA MARIEE DU CIEL
                </div>
                <div className="card-text">
                  YOEL BENHARROUCHE
                </div>
                <div className="card-text">NT$ 2000</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/MAKING LOVE- BLACK.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  MAKING LOVE- BLACK
                </div>
                <div className="card-text">
                  DAVID KRACOV
                </div>
                <div className="card-text">NT$ 1750</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          {/* <!-- 繪畫 --> */}
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/category.jpeg"
                className="card-img-top category"
                alt="..."
              />
              <div className="card-body bottom-space category-word">
                <div className="card-text name-large category-bigtext">
                  繪畫
                </div>
                <div className="card-text category-smalltext">
                  PAINTING
                </div>
                <button
                  type="button"
                  className="btn btn-dark btn-color"
                >
                  點我看更多
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/BLACK NOTES.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  BLACK NOTES
                </div>
                <div className="card-text">
                  CALMAN SHEMI
                </div>
                <div className="card-text">NT$ 6400</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/INDIAN BOWIE.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  INDIAN BOWIE
                </div>
                <div className="card-text">CLEM$</div>
                <div className="card-text">NT$ 12500</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          {/* <!-- 攝影作品 --> */}
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/category.jpeg"
                className="card-img-top category"
                alt="..."
              />
              <div className="card-body bottom-space category-word">
                <div className="card-text name-large category-bigtext">
                  攝影
                </div>
                <div className="card-text category-smalltext">
                  PHOTOGRAPHY
                </div>
                <button
                  type="button"
                  className="btn btn-dark btn-color"
                >
                  點我看更多
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/RAINBOW DUST DELIRIUM.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  RAINBOW DUST DELIRIUM
                </div>
                <div className="card-text">
                  JONAS LERICHE
                </div>
                <div className="card-text">NT$ 4000</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/CIRCLE OF LIFE.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  CIRCLE OF LIFE
                </div>
                <div className="card-text">
                  JONAS LERICHE
                </div>
                <div className="card-text">NT$ 5400</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          {/* <!-- 卡片 --> */}
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/category.jpeg"
                className="card-img-top category"
                alt="..."
              />
              <div className="card-body bottom-space category-word">
                <div className="card-text name-large category-bigtext">
                  漆畫
                </div>
                <div className="card-text category-smalltext">
                  LACQUERS ON METAL
                </div>
                <button
                  type="button"
                  className="btn btn-dark btn-color"
                >
                  點我看更多
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/FLOWER FIELD - SILVER.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  FLOWER FIELD - SILVER
                </div>
                <div className="card-text">
                  CALMAN SHEMI
                </div>
                <div className="card-text">NT$ 7400</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/PARTAGE.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  PARTAGE
                </div>
                <div className="card-text">
                  YOEL BENHARROUCHE
                </div>
                <div className="card-text">NT$ 8600</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          {/* <!-- 擺飾 --> */}
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/category.jpeg"
                className="card-img-top category"
                alt="..."
              />
              <div className="card-body bottom-space category-word">
                <div className="card-text name-large category-bigtext">
                  擺飾
                </div>
                <div className="card-text category-smalltext">
                  DECORATIONS
                </div>
                <button
                  type="button"
                  className="btn btn-dark btn-color"
                >
                  點我看更多
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/GOLDEN EGG TEAM.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  GOLDEN EGG TEAM
                </div>
                <div className="card-text">
                  KUNST MET EEN R
                </div>
                <div className="card-text">NT$ 4100</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/MUSICAL LEGO.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  MUSICAL LEGO
                </div>
                <div className="card-text">
                  HAREL JOSEFSON
                </div>
                <div className="card-text">NT$ 1800</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          {/* <!-- 其它 --> */}
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space">
              <img
                src="./image/category.jpeg"
                className="card-img-top category"
                alt="..."
              />
              <div className="card-body bottom-space category-word">
                <div className="card-text name-large category-bigtext">
                  其它
                </div>
                <div className="card-text category-smalltext">
                  OTHERS
                </div>
                <button
                  type="button"
                  className="btn btn-dark btn-color"
                >
                  點我看更多
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/THINKING OUTSIDE THE BOX - COMICS.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  THINKING OUTSIDE THE BOX - COMICS
                </div>
                <div className="card-text">
                  DAVID KRACOV
                </div>
                <div className="card-text">NT$ 4900</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <div className="card card-color top-space cart-bottom">
              <img
                src="./image/TRANSFORMERS CANS.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bottom-space">
                <div className="card-text name-large">
                  TRANSFORMERS CANS
                </div>
                <div className="card-text">GUMM</div>
                <div className="card-text">NT$ 7500</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Product)
