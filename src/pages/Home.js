import '../styles/Home.css'
import { Carousel } from 'react-bootstrap'
import { BsFillCartPlusFill } from 'react-icons/bs'

function Home(props) {
  const { auth } = props

  return (
    <>
      {/* 輪播牆 */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgur.com/gPu95gv.jpg"
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
            src="https://imgur.com/rkT1Fuu.jpg"
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
            src="https://imgur.com/AilapBW.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3></h3>
            <p></p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <!-- 輪播牆下面字的區塊 --> */}
      <div className="word-block">
        <div className="top-part">發現您的下一件設計品</div>
        <div className="middle-part">
          <div className="top">
            <a href="/#" className="a-size">
              設計師
            </a>
          </div>
          <div className="middle">
            <a href="/#" className="a-size">
              作品集
            </a>
          </div>
          <div className="bottom">
            <a href="/#" className="a-size">
              想邀約
            </a>
          </div>
        </div>
        <div className="bottom-part">
          <div className="discover">
            探索我們的精選設計師
          </div>
        </div>
      </div>
      {/* <!-- 探索設計師欄位部分 --> */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/David Kracov.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">David Kracov</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/Angelo Accardi.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Angelo Accardi</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/Calman Shemi.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Calman Shemi </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/Plum.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Plum</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/YOEL BENHARROUCHE.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Yoel Benharrouche
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/Gumm.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Gumm</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/Randy Cooper.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Randy Cooper</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/Clem$.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Clem$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 設計師列表下面的字，CSS跟輪播牆下面字的區塊一樣 --> */}
      <div className="word-block">
        <div className="top-part">按這裡</div>
        <div className="middle-part">
          <div className="top"></div>
          <div className="middle">
            <a href="/#" className="a-size">
              看更多設計師
            </a>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="bottom-part">
          <div className="discover">精選作品</div>
        </div>
      </div>
      {/* <!-- 精選作品欄位 --> */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/BUY ! MINI.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  BUY ! MINI
                </div>
                <div className="card-text">
                  DAVID KRACOV
                </div>
                <div className="card-text">NT$ 4800</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/MARYLIN SHINES - PURPLE.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  MARYLIN SHINES - PURPLE
                </div>
                <div className="card-text">AMY GOLD</div>
                <div className="card-text">NT$ 5200</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/AMBER SPLASH COCO.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  AMBER SPLASH COCO
                </div>
                <div className="card-text">PLUM</div>
                <div className="card-text">NT$ 3800</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/ICONS WILL DISCUSS.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  ICONS WILL DISCUSS
                </div>
                <div className="card-text">
                  ANGELO ACCARDI
                </div>
                <div className="card-text">NT$ 7200</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/LES SENTEURS DU PARADIS.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  LES SENTEURS DU PARADIS
                </div>
                <div className="card-text">
                  YOEL BENHARROUCHE
                </div>
                <div className="card-text">NT$ 9800</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/AUDREY INDIANA.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  AUDREY INDIANA
                </div>
                <div className="card-text">CLEM$</div>
                <div className="card-text">NT$ 4600</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/AUTOMNE LANDSCAPE.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  AUTOMNE LANDSCAPE
                </div>
                <div className="card-text">
                  CALMAN SHEMI
                </div>
                <div className="card-text">NT$ 13000</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/KISS OF DELFT.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  KISS OF DELFT
                </div>
                <div className="card-text">
                  ONAS LERICHE
                </div>
                <div className="card-text">NT$ 6700</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/THE GOOD LIFE.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  THE GOOD LIFE
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
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/BOUQUET DU PARADIS.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  BOUQUET DU PARADIS
                </div>
                <div className="card-text">
                  YOEL BENHARROUCHE
                </div>
                <div className="card-text">NT$ 6300</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/COMIC-POP.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  COMIC-POP
                </div>
                <div className="card-text">AMY GOLD</div>
                <div className="card-text">NT$ 790</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/AT THE DRIVE IN.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  AT THE DRIVE IN
                </div>
                <div className="card-text">TOMMY</div>
                <div className="card-text">NT$ 8300</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/BUMBLEBEE CANS.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  BUMBLEBEE CANS
                </div>
                <div className="card-text">GUMM</div>
                <div className="card-text">NT$ 7500</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/APACHE MUSIC.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  APACHE MUSIC
                </div>
                <div className="card-text">CLEM$</div>
                <div className="card-text">NT$ 12500</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/HOMER'S FRIEND.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  HOMER'S FRIEND
                </div>
                <div className="card-text">
                  ANGELO ACCARDI
                </div>
                <div className="card-text">NT$ 8300</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/A L’ECOUTE DES VIBRATIONS PROFONDES.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  A L’ECOUTE DES VIBRATIONS PROFONDES
                </div>
                <div className="card-text">
                  YOEL BENHARROUCHE
                </div>
                <div className="card-text">NT$ 4900</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/ALIENATION.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  ALIENATION
                </div>
                <div className="card-text">
                  JONAS LERICHE
                </div>
                <div className="card-text">NT$ 5000</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/BEAUTIFUL BUTTERFLIES.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  BEAUTIFUL BUTTERFLIES
                </div>
                <div className="card-text">
                  CALMAN SHEMI
                </div>
                <div className="card-text">NT$ 8800</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/BATMAN DARK KNIGHT.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  BATMAN DARK KNIGHT
                </div>
                <div className="card-text">TOMMY</div>
                <div className="card-text">NT$ 2900</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/CAMPBELL II.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  CAMPBELL II
                </div>
                <div className="card-text">AMY GOLD</div>
                <div className="card-text">NT$ 890</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/DOUBLE PLEASURE - DIPTYCH.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  DOUBLE PLEASURE - DIPTYCH
                </div>
                <div className="card-text">TOMMY</div>
                <div className="card-text">NT$ 1900</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/COFFEE CHIQUE 2.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  COFFEE CHIQUE 2
                </div>
                <div className="card-text">
                  KUNST MET EEN R
                </div>
                <div className="card-text">NT$ 9700</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/FREEDOMNATION.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  FREEDOMNATION
                </div>
                <div className="card-text">
                  JONAS LERICHE
                </div>
                <div className="card-text">NT$ 4620</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/GO WITH THE FLOW - WHITE.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  GO WITH THE FLOW - WHITE
                </div>
                <div className="card-text">
                  CALMAN SHEMI
                </div>
                <div className="card-text">NT$ 1500</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/GOLD ARLEQUINO QUATUOR.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  GOLD ARLEQUINO QUATUOR
                </div>
                <div className="card-text">
                  CALMAN SHEMI
                </div>
                <div className="card-text">NT$ 13200</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/GONDOLES BLEU NUIT.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  GONDOLES BLEU NUIT
                </div>
                <div className="card-text">LIRONE</div>
                <div className="card-text">NT$ 9670</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/KHERPI.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  KHERPI
                </div>
                <div className="card-text">
                  JONAS LERICHE
                </div>
                <div className="card-text">NT$ 8400</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/THE LAST STAR.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  THE LAST STAR
                </div>
                <div className="card-text">TOMMY</div>
                <div className="card-text">NT$ 8200</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/TIME SQUARE.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  TIME SQUARE
                </div>
                <div className="card-text">LIRONE</div>
                <div className="card-text">NT$ 3900</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/WE LOVE ICE CREAM 3.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  WE LOVE ICE CREAM 3
                </div>
                <div className="card-text">
                  KUNST MET EEN R
                </div>
                <div className="card-text">NT$ 7500</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/MARIO PEZ - MEDIUM.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  MARIO PEZ - MEDIUM
                </div>
                <div className="card-text">
                  HAREL JOSEFSON
                </div>
                <div className="card-text">NT$ 900</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card p-1 card-color">
              <img
                src="./image/COMIC-BANG.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="card-text name-large">
                  COMIC-BANG
                </div>
                <div className="card-text">AMY GOLD</div>
                <div className="card-text">NT$ 7200</div>
                <i className="fas fa-shopping-cart cart-color"></i>
                <span className="rocky-love">123</span>
                <i className="fas fa-heart cart-color"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 作品欄位下面的字 --> */}
      <div className="word-block">
        <div className="top-part">按這裡</div>
        <div className="middle-part">
          <div className="top"></div>
          <div className="middle">
            <a href="/#" className="a-size">
              看更多作品
            </a>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="bottom-part">
          <div className="discover hide">
            要隱藏的字要隱藏的字要隱藏的字要隱藏的字
          </div>
        </div>
      </div>
      {/* <!-- 最下面的圖片 --> */}
      <div className="container set-center">
        <figure className="figure">
          <img
            src="./image/artist-painting.jpeg"
            className="figure-img img-fluid rounded"
            alt="..."
          />
          <figcaption className="figure-caption text-right">
            TRUNK For Designer And Artist
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default Home
