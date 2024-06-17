import React from "react";
import '../../assets/css/style.scss';
import './index.scss';
import product1 from "../../assets/images/productImg-1.jpg";
import myntraImg from "../../assets/images/myntra-icon.svg";
import arrowDownIcon from "../../assets/images/down-icon-arrow.svg";

import Header from "../../component/Header/Header";


function ModelList(props) {

  return (
    <>
      <Header />
      <div className="full-section-body">
        <div className="section-rowcard">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-border-area">
                  <div className="card-body">
                    Card body
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-rowcard">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-9">
                <div className="card card-border-area">
                  <div className="card-body">
                    Card body
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card card-border-area">
                  <div className="card-body">
                    Card body
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mx-auto">

          {/* Grid with 4 columns */}
          <div className="row grid">
            <div className="col-3 p-0">
              <div className="card-newwgtmt card-border-area p-4">
                <h3 className="card-title-h3">Newly Added</h3>
                <div className="item-pgt--mgtr">
                  <div className="multi-listmtr-wom">
                    <div className="leftImg-newly">
                      <img src={product1} />
                    </div>
                    <div className="product-rigtwap">
                      <h3 className="heading-txt-wgt">Nike SB Zoom Stefandvdvd...</h3>
                      <div className="prc-txtcart">
                        <span className="price-mr-vtm actual-price-vm">$26.27</span>
                        <span className="price-wgt-area cross-price-vm">$48.38</span>
                      </div>
                    </div>
                  </div>
                  <div className="multi-listmtr-wom">
                    <div className="leftImg-newly">
                      <img src={product1} />
                    </div>
                    <div className="product-rigtwap">
                      <h3 className="heading-txt-wgt">Nike SB Zoom Stefandvdvd...</h3>
                      <div className="prc-txtcart">
                        <span className="price-mr-vtm actual-price-vm">$26.27</span>
                        <span className="price-wgt-area cross-price-vm">$48.38</span>
                      </div>
                    </div>
                  </div>
                  <div className="multi-listmtr-wom">
                    <div className="leftImg-newly">
                      <img src={product1} />
                    </div>
                    <div className="product-rigtwap">
                      <h3 className="heading-txt-wgt">Nike SB Zoom Stefandvdvd...</h3>
                      <div className="prc-txtcart">
                        <span className="price-mr-vtm actual-price-vm">$26.27</span>
                        <span className="price-wgt-area cross-price-vm">$48.38</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="dropdown-area-wgt">
                <div className="lefttxt-wgt">
                  <span>Source:</span>
                </div>
                <div className="dropdown-wgt-waprs">
                  <div className="select-dropdown--source">
                    <span className="drop-area-itemms"><img src={myntraImg} />Myntra</span>
                    <span className="arrow-dn-iconwg"><img src={arrowDownIcon} /></span>
                  </div>
                  <div className="drop-menuitem--list">
                    <ul className="multi-lst-mgt">
                      <li className="more-items--wpt"><img className="imglist--ytm-nvr" src={myntraImg} /><span>H&m</span></li>
                      <li className="more-items--wpt"><img className="imglist--ytm-nvr" src={myntraImg} /><span>H&m</span></li>
                      <li className="more-items--wpt"><img className="imglist--ytm-nvr" src={myntraImg} /><span>H&m</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mx-auto">

          {/* Grid with 4 columns */}
          <div className="row grid">
            <div className="col-3 p-0">
              <div className="product-boxcard">
                <div className="img-productarea-web">
                  <img src={product1} />
                </div>
                <div className="product-wgt-infotxt">
                  <h3 className="heading-txt-wgt">Dream Weaverz</h3>
                  <p className="disc-prdt-wtr">Bed Side Runner</p>
                  <div className="price-productlist">
                    <span className="price-wgt-area actual-price">$299</span>
                    <span className="price-wgt-area cross-price-txt">$599</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="product-boxcard">
                <div className="img-productarea-web">
                  <img src={product1} />
                </div>
                <div className="product-wgt-infotxt">
                  <h3 className="heading-txt-wgt">Dream Weaverz</h3>
                  <p className="disc-prdt-wtr">Bed Side Runner</p>
                  <div className="price-productlist">
                    <span className="price-wgt-area actual-price">$299</span>
                    <span className="price-wgt-area cross-price-txt">$599</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="product-boxcard">
                <div className="img-productarea-web">
                  <img src={product1} />
                </div>
                <div className="product-wgt-infotxt">
                  <h3 className="heading-txt-wgt">Dream Weaverz</h3>
                  <p className="disc-prdt-wtr">Bed Side Runner</p>
                  <div className="price-productlist">
                    <span className="price-wgt-area actual-price">$299</span>
                    <span className="price-wgt-area cross-price-txt">$599</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="product-boxcard">
                <div className="img-productarea-web">
                  <img src={product1} />
                </div>
                <div className="product-wgt-infotxt">
                  <h3 className="heading-txt-wgt">Dream Weaverz</h3>
                  <p className="disc-prdt-wtr">Bed Side Runner</p>
                  <div className="price-productlist">
                    <span className="price-wgt-area actual-price">$299</span>
                    <span className="price-wgt-area cross-price-txt">$599</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>

  );
}

export default ModelList;