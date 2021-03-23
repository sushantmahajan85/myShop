import "./index.css";
import { Helmet } from "react-helmet";
import keyboard from "./img/pricing/keyboard.jpg";
import mouse from "./img/pricing/mouse.png";
import webcam from "./img/pricing/webcam.jpg";
import mousepad from "./img/pricing/mousepad.jpg";
import antivirus from "./img/pricing/antivirus.jpg";
import pendrive from "./img/pricing/pendrive.jpg";
import headphone from "./img/pricing/headphone.jpg";
import speaker from "./img/pricing/speaker.jpg";

const Pricing = () => {
  return (
    <div className="Pricing">
      <div class="container">
        <div className="row">
          <div className="col-12">
            <div
              className="section-heading text-center mb-100 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="line"></div>
              <p>Take look at our</p>
              <h2>Our services</h2>
            </div>
          </div>
        </div>

        {/* <div class="title">
              <span>Featured Products</span>
            </div> */}
        <div className="row-main">
          <div class="col-sm-4 col-md-3 box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src={keyboard} />
                </a>
                {/* <div class="tags">
                      <span class="label-tags">
                        <span class="label label-danger">Sale</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-info">Featured</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-warning">Polo</span>
                      </span>
                    </div> */}
              </div>
              <h6>
                <a href="detail.html">IncultGeo Print Polo T-Shirt</a>
              </h6>
              <div class="price">
                <div>
                  $16.59<span class="price-down">-10%</span>
                </div>
                <span class="price-old">$15.00</span>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-3 box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src={mouse} />
                </a>
                {/* <div class="tags">
                      <span class="label-tags">
                        <span class="label label-danger">Sale</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-info">Featured</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-warning">Polo</span>
                      </span>
                    </div> */}
              </div>
              <h6>
                <a href="detail.html">IncultGeo Print Polo T-Shirt</a>
              </h6>
              <div class="price">
                <div>
                  $16.59<span class="price-down">-10%</span>
                </div>
                <span class="price-old">$15.00</span>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-3 box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src={webcam} />
                </a>
                {/* <div class="tags">
                      <span class="label-tags">
                        <span class="label label-danger">Sale</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-info">Featured</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-warning">Polo</span>
                      </span>
                    </div> */}
              </div>
              <h6>
                <a href="detail.html">IncultGeo Print Polo T-Shirt</a>
              </h6>
              <div class="price">
                <div>
                  $16.59<span class="price-down">-10%</span>
                </div>
                <span class="price-old">$15.00</span>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-3 hidden-sm hidden-xs box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src={mousepad} />
                </a>
                {/* <div class="tags">
                      <span class="label-tags">
                        <span class="label label-danger">Sale</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-info">Featured</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-warning">Polo</span>
                      </span>
                    </div> */}
                <div class="option">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i class="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i class="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i class="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">NikeAs Matchup -Pq Grey Polo T-Shirt</a>
              </h6>
              <div class="price">
                <div>
                  $15.79<span class="price-down">-10%</span>
                </div>
                <span class="price-old">$15.00</span>
              </div>
              {/* <div class="rating">
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star-half-o"></i>
                  <a href="#">(5 reviews)</a>
                </div> */}
            </div>
          </div>
        </div>
        {/* <div class="clearfix"></div>
            <div class="title">
              <span>V-Neck Collection</span>
            </div> */}
        <div class="row-main">
          <div class="col-sm-4 col-md-3 box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src={pendrive} />
                </a>
                {/* <div class="tags">
                      <span class="label-tags">
                        <span class="label label-danger">Sale</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-success">Collection</span>
                      </span>
                    </div> */}
                <div class="option">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i class="ace-icon fa fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">
                  PhosphorusGrey Melange Printed V Neck T-Shirt
                </a>
              </h6>
              <div class="price">
                <div>
                  $5.25<span class="price-down">-10%</span>
                </div>
                <span class="price-old">$15.00</span>
              </div>
              {/* <div class="rating">
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star-half-o"></i>
                  <i class="ace-icon fa fa-star-o"></i>
                  <a href="#">(5 reviews)</a>
                </div> */}
            </div>
          </div>
          <div class="col-sm-4 col-md-3 hidden-xs box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src={antivirus} />
                </a>
                {/* <div class="tags">
                      <span class="label-tags">
                        <span class="label label-danger">Sale</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-success">Collection</span>
                      </span>
                    </div> */}
                <div class="option">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i class="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i class="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i class="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">
                  United Colors of BenettonNavy Blue Solid V Neck T Shirt
                </a>
              </h6>
              <div class="price">
                <div>
                  $13.57<span class="price-down">-10%</span>
                </div>
                <span class="price-old">$15.00</span>
              </div>
              {/* <div class="rating">
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star-half-o"></i>
                  <i class="ace-icon fa fa-star-o"></i>
                  <a href="#">(5 reviews)</a>
                </div> */}
            </div>
          </div>
          <div class="col-sm-4 col-md-3 hidden-xs box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src={headphone} />
                </a>
                {/* <div class="tags">
                      <span class="label-tags">
                        <span class="label label-danger">Sale</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-success">Collection</span>
                      </span>
                    </div> */}
                <div class="option">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i class="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i class="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i class="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">WranglerBlack V Neck T Shirt</a>
              </h6>
              <div class="price">
                <div>
                  $12.00<span class="price-down">-10%</span>
                </div>
                <span class="price-old">$15.00</span>
              </div>
              {/* <div class="rating">
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star-half-o"></i>
                  <i class="ace-icon fa fa-star-o"></i>
                  <a href="#">(5 reviews)</a>
                </div> */}
            </div>
          </div>
          <div class="col-sm-4 col-md-3 hidden-sm hidden-xs box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src={speaker} />
                </a>
                {/* <div class="tags">
                      <span class="label-tags">
                        <span class="label label-danger">Sale</span>
                      </span>
                      <span class="label-tags">
                        <span class="label label-success">Collection</span>
                      </span>
                    </div> */}
                <div class="option">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i class="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i class="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i class="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">
                  Tagd New YorkGrey Printed V Neck T-Shirts
                </a>
              </h6>
              <div class="price">
                <div>
                  $8.09<span class="price-down">-10%</span>
                </div>
                <span class="price-old">$15.00</span>
              </div>
              {/* <div class="rating">
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star"></i>
                  <i class="ace-icon fa fa-star-half-o"></i>
                  <i class="ace-icon fa fa-star-o"></i>
                  <a href="#">(5 reviews)</a>
                </div> */}
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Helmet>
    </div>
  );
};

export default Pricing;
