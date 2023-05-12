import React from "react";
import '../css/Home.css'
import Imagehome1 from '../../src/assets/img/image/home1.png'
import Imagehome2 from '../../src/assets/img/image/home2.png'
import Imagehome3 from '../../src/assets/img/image/home3.png'
import Imagehome4 from '../../src/assets/img/image/home4.png'
import Imagehome5 from '../../src/assets/img/image/home5.png'
import Imagehome6 from '../../src/assets/img/image/home6.png'
import Imagehome7 from '../../src/assets/img/image/home7.png'
import Imagehome8 from '../../src/assets/img/image/home8.png'
import Imagehomebestsell1 from '../../src/assets/img/image/homebestsell1.png'
import Imagehomebestsell2 from '../../src/assets/img/image/homebestsell2.png'
import Imagehomebestsell3 from '../../src/assets/img/image/homebestsell3.png'
import Imagehomebestsell4 from '../../src/assets/img/image/homebestsell4.png'
import Imagehomenew1 from '../../src/assets/img/image/homenew1.png'
import Imagehomenew2 from '../../src/assets/img/image/homenew2.png'
import Imagehomenew3 from '../../src/assets/img/image/homenew3.png'
import Aos from "aos";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    Aos.init({duration:3000});
  })

    return (
      <div className="position">
        {/*================ Hero banner start =================*/}
        <section className="hero-banner" >
          <div className="container">
            <div className="row no-gutters align-items-center pt-60px">
              <div className="col-5 d-none d-sm-block">
                <div className="hero-banner__img"  >
                  <img
                    className="img-fluid"
                    src="img/home/hero-banner.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0" data-aos="zoom-out-up">
                <div className="hero-banner__content"  >
                  <h4>Shop is fun</h4>
                  <h1>Browse Our Premium Product</h1>
                  <p>
                    Us which over of signs divide dominion deep fill bring
                    they're meat beho upon own earth without morning over third.
                    Their male dry. They are great appear whose land fly grass.
                  </p>
                  <a className="button button-hero" href="#">
                    Browse Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ Hero banner start =================*/}
        {/*================ Hero Carousel start =================*/}
        {/* <section className="section-margin mt-0">
          <div className="owl-carousel owl-theme hero-carousel">
            <div className="hero-carousel__slide">
              <img
                src="img/home/hero-slide1.png"
                alt=""
                className="img-fluid"
              />
              <a href="#" className="hero-carousel__slideOverlay">
                <h3>Wireless Headphone</h3>
                <p>Accessories Item</p>
              </a>
            </div>
            <div className="hero-carousel__slide">
              <img
                src="img/home/hero-slide2.png"
                alt=""
                className="img-fluid"
              />
              <a href="#" className="hero-carousel__slideOverlay">
                <h3>Wireless Headphone</h3>
                <p>Accessories Item</p>
              </a>
            </div>
            <div className="hero-carousel__slide">
              <img
                src="img/home/hero-slide3.png"
                alt=""
                className="img-fluid"
              />
              <a href="#" className="hero-carousel__slideOverlay">
                <h3>Wireless Headphone</h3>
                <p>Accessories Item</p>
              </a>
            </div>
          </div>
        </section> */}
        {/*================ Hero Carousel end =================*/}
        {/* ================ trending product section start ================= */}
        <section className="section-margin calc-60px">
          <div className="container">
            <div className="section-intro pb-60px">
              <p data-aos="zoom-out-up">Popular Item in the market</p>
              <h2 data-aos="zoom-out-up">
                Trending <span className="section-intro__style">Product</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img" data-aos="zoom-out-up">
                    <img className="card-img" src={Imagehome1} alt="" />
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body" data-aos="zoom-out-up">
                    <p>Accessories</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Quartz Belt Watch</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3" data-aos="zoom-out-up">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src={Imagehome2} alt="" />
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Beauty</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Women Freshwash</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src={Imagehome3} alt="" />
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Decor</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Room Flash Light</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src={Imagehome4} alt="" />
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Decor</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Room Flash Light</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src={Imagehome5} alt="" />
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Man Office Bag</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src={Imagehome6} alt="" />
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Kids Toy</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Charging Car</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src={Imagehome7} alt="" />
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title">
                      <a href="single-product.html">Blutooth Speaker</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src={Imagehome8} alt="" />
                    <ul className="card-product__imgOverlay">
                      <li>
                        <button>
                          <i className="ti-search" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-shopping-cart" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="ti-heart" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Kids Toy</p>
                    <h4 className="card-product__title">
                      <a href="#">Charging Car</a>
                    </h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



       




        {/* ================ trending product section end ================= */}
        {/* ================ offer section start ================= */}
        <section
          className="offer"
          id="parallax-1"
          data-anchor-target="#parallax-1"
          data-300-top="background-position: 20px 30px"
          data-top-bottom="background-position: 0 20px"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="offer__content text-center">
                  <h3>Up To 50% Off</h3>
                  <h4>Winter Sale</h4>
                  <p>Him she'd let them sixth saw light</p>
                  <a className="button button--active mt-3 mt-xl-4" href="#">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================ offer section end ================= */}
        {/* ================ Best Selling item  carousel ================= */}
        <section className="section-margin calc-60px">
          <div className="container">
            <div className="section-intro pb-60px">
              <p>Popular Item in the market</p>
              <h2>
                Best <span className="section-intro__style">Sellers</span>
              </h2>
            </div>

            <section className="hero-sectioncard">
              <div className="card-container">
                <div className="cardBestSeller">
                  <div
                    className="card-background"
                    style={{
                      backgroundImage: "url(" + Imagehomebestsell4 + ")",
                      backgroundSize: "cover",
                    }}
                  />
                  <div className="contentBest">
                    <div className="card-category">CITY ESCAPE</div>
                    <h3 className="card-heading">No Plans For Today Tee</h3>
                  </div>
                </div>

                <div className="cardBestSeller">
                  <div
                    className="card-background"
                    style={{
                      backgroundImage: "url(" + Imagehomebestsell3 + ")",
                      backgroundSize: "cover",
                    }}
                  />
                  <div className="contentBest">
                    <div className="card-category">RUN IT</div>
                    <h3 className="card-heading">Boneless Hoodie</h3>
                  </div>
                </div>

                <div className="cardBestSeller">
                  <div
                    className="card-background"
                    style={{
                      backgroundImage: "url(" + Imagehomebestsell2 + ")",
                      backgroundSize: "cover",
                    }}
                  />
                  <div className="contentBest">
                    <div className="card-category">TWO-TONE STENCIL</div>
                    <h3 className="card-heading">Cream Polo Sweat</h3>
                  </div>
                </div>

                <div className="cardBestSeller">
                  <div
                    className="card-background"
                    style={{
                      backgroundImage: "url(" + Imagehomebestsell1 + ")",
                      backgroundSize: "cover",
                    }}
                  />
                  <div className="contentBest">
                    <div className="card-category">W C ESC DRESS</div>
                    <h3 className="card-heading">Cream Polo Sweat</h3>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* ================ Best Selling item  carousel end ================= */}
        {/* ================ Blog section start ================= */}
        <section className="blog">
          <div className="container">
            <div className="section-intro pb-60px">
              <p>Popular Item in the market</p>
              <h2>
                Latest <span className="section-intro__style">News</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="card card-blog">
                  <div className="card-blog__img">
                    <img
                      className="card-img rounded-0"
                      src={Imagehomenew1}
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <ul className="card-blog__info">
                      <li>
                        <a href="#">By Admin</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-comments-smiley" /> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h4 className="card-blog__title">
                      <a href="single-blog.html">
                        The Richland Center Shooping News and weekly shooper
                      </a>
                    </h4>
                    <p>
                      Let one fifth i bring fly to divided face for bearing
                      divide unto seed. Winged divided light Forth.
                    </p>
                    <a className="card-blog__link" href="#">
                      Read More <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="card card-blog">
                  <div className="card-blog__img">
                    <img
                      className="card-img rounded-0"
                      src={Imagehomenew2}
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <ul className="card-blog__info">
                      <li>
                        <a href="#">By Admin</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-comments-smiley" /> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h4 className="card-blog__title">
                      <a href="single-blog.html">
                        The Shopping News also offers top-quality printing
                        services
                      </a>
                    </h4>
                    <p>
                      Let one fifth i bring fly to divided face for bearing
                      divide unto seed. Winged divided light Forth.
                    </p>
                    <a className="card-blog__link" href="#">
                      Read More <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="card card-blog">
                  <div className="card-blog__img">
                    <img
                      className="card-img rounded-0"
                      src={Imagehomenew3}
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <ul className="card-blog__info">
                      <li>
                        <a href="#">By Admin</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-comments-smiley" /> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h4 className="card-blog__title">
                      <a href="single-blog.html">
                        Professional design staff and efficient equipment you’ll
                        find we offer
                      </a>
                    </h4>
                    <p>
                      Let one fifth i bring fly to divided face for bearing
                      divide unto seed. Winged divided light Forth.
                    </p>
                    <a className="card-blog__link" href="#">
                      Read More <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================ Blog section end ================= */}
        {/* ================ Subscribe section start ================= */}
        <section className="subscribe-position">
          <div className="container">
            <div className="subscribe text-center">
              <h3 className="subscribe__title">Get Update From Anywhere</h3>
              <p>
                Bearing Void gathering light light his eavening unto dont afraid
              </p>
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                  method="get"
                  className="subscribe-form form-inline mt-5 pt-1"
                >
                  <div className="form-group ml-sm-auto">
                    <input
                      className="form-control mb-1"
                      type="email"
                      name="EMAIL"
                      placeholder="Enter your email"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Your Email Address '"
                    />
                    <div className="info" />
                  </div>
                  <button
                    className="button button-subscribe mr-auto mb-1"
                    type="submit"
                  >
                    Subscribe Now
                  </button>
                  <div style={{ position: "absolute", left: "-5000px" }}>
                    <input
                      name="b_36c4fd991d266f23781ded980_aefe40901a"
                      tabIndex={-1}
                      defaultValue
                      type="text"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Home;