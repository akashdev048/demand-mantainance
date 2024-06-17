import React from "react";
import '../../assets/css/style.scss';
import Header from "../../component/Header/Header";
import LocatioMap from "../../component/LocationMap";
import HealthLocationMap from "../../component/HealthLocationMap"
import SentimentChart from "../../component/SentimentChart"
import DemandChart from "../../component/DemandChart";



function Demandmange() {

    return (
        <>
            <Header />
            <div className="demand-conatent-body py-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 col-gridmange1">
                            <div className="chart-box-layout">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h3 className="title-chart-wht mb-0">Notifications</h3>
                                    <div className="mt-elemnt-action">
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-angle-down"></i></button></span>
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-redo-alt"></i></button></span>
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-times"></i></button></span>
                                    </div>
                                </div>
                                <div className="content-notif-ytm">
                                    <div className="txtdisc-yt-wigit">
                                        <h3 className="heading-mn-wt">The internet's icon library and toolkit used by millions of designers, developers, and content creators.</h3>
                                        <p className="disc-wetmt">Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meanin</p>
                                        <span className="wg-now-txtprst"><em>Just Now</em></span>
                                    </div>
                                    <div className="txtdisc-yt-wigit">
                                        <h3 className="heading-mn-wt">The internet's icon library and toolkit used by millions of designers, developers, and content creators.</h3>
                                        <p className="disc-wetmt">Generate Lorem Ipsum placeholder text for use</p>
                                        <span className="wg-now-txtprst"><em>Just Now</em></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 col-gridmange2">
                            <div className="chart-box-layout">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h3 className="title-chart-wht mb-0">Air Quality</h3>
                                    <div className="mt-elemnt-action">
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-angle-down"></i></button></span>
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-redo-alt"></i></button></span>
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-times"></i></button></span>
                                    </div>
                                </div>
                                <div className="grap-wapwigit">

                                    <LocatioMap></LocatioMap>
                                    <div className="chart-label-area">
                                        <span className="chartlist-label">
                                            <label className="lbl-chart-mt">Good:</label>
                                            <span className="boxfill-charcolor color-type-chart1"></span>
                                        </span>
                                        <span className="chartlist-label">
                                            <label className="lbl-chart-mt">Moderate:</label>
                                            <span className="boxfill-charcolor color-type-chart2"></span>
                                        </span>
                                        <span className="chartlist-label">
                                            <label className="lbl-chart-mt">Unhealthy:</label>
                                            <span className="boxfill-charcolor color-type-chart3"></span>
                                        </span>
                                        <span className="chartlist-label">
                                            <label className="lbl-chart-mt">VeryUnhealthy:</label>
                                            <span className="boxfill-charcolor color-type-chart2"></span>
                                        </span>
                                        <span className="chartlist-label">
                                            <label className="lbl-chart-mt">Hazardous:</label>
                                            <span className="boxfill-charcolor color-type-chart3"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-gridmange3">
                            <div className="chart-box-layout">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h3 className="title-chart-wht mb-0">Health Events</h3>
                                    <div className="mt-elemnt-action">
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-angle-down"></i></button></span>
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-redo-alt"></i></button></span>
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-times"></i></button></span>
                                    </div>

                                </div>
                                <div className="grap-wapwigit">

                                    <div className="chartarea-map"><HealthLocationMap></HealthLocationMap></div>
                                    <div className="chart-label-area">
                                        <span className="chartlist-label">
                                            <label className="lbl-chart-mt">Low:</label>
                                            <span className="boxfill-charcolor color-type-chart1"></span>
                                        </span>
                                        <span className="chartlist-label">
                                            <label className="lbl-chart-mt">Minimal:</label>
                                            <span className="boxfill-charcolor color-type-chart4"></span>
                                        </span>
                                        <span className="chartlist-label">
                                            <label className="lbl-chart-mt">Moderate:</label>
                                            <span className="boxfill-charcolor color-type-chart2"></span>
                                        </span>
                                        <span className="chartlist-label">
                                            <label className="lbl-chart-mt">High:</label>
                                            <span className="boxfill-charcolor color-type-chart3"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="chart-box-layout">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h3 className="title-chart-wht mb-0"><i className="fab fa-twitter" style={{ color: "#24b7ec" }}></i> Twitter Sentiment Analysis</h3>
                                    <div className="mt-elemnt-action">
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-angle-down"></i></button></span>
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-redo-alt"></i></button></span>
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-times"></i></button></span>
                                    </div>
                                    {/* <SentiMentChart></SentiMentChart> */}
                                </div>
                                <div className="grap-wapwigit">
                                {/* <HealthLocationMap></HealthLocationMap> */}
                               
                                    <div className="chart-label-area">
                                        <span className="chartlist-label">
                                            <span className="boxfill-charcolor other-wth-box color-type-chart5"></span>
                                            <label className="lbl-chart-mt">Sadness</label>
                                        </span>
                                        <span className="chartlist-label">
                                            <span className="boxfill-charcolor other-wth-box color-type-chart6"></span>
                                            <label className="lbl-chart-mt">Fear</label>
                                        </span>
                                        <span className="chartlist-label">
                                            <span className="boxfill-charcolor other-wth-box color-type-chart7"></span>
                                            <label className="lbl-chart-mt">Disgust</label>
                                        </span>
                                    </div>
                                    <SentimentChart />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="chart-box-layout">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h3 className="title-chart-wht mb-0">Demand Supply Projections</h3>
                                    <div className="mt-elemnt-action">
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-angle-down"></i></button></span>
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-redo-alt"></i></button></span>
                                        <span className="elemnt-btn-list"><button type="button" className="btn btn-action-wgt p-0"><i className="far fa-times"></i></button></span>
                                    </div>
                                </div>
                                <div className="grap-wapwigit">
                                    <DemandChart />
                                    {/* <div className="chart-label-area">
                                        <span className="chartlist-label">
                                            <span className="boxfill-charcolor other-wth-box color-type-chart7"></span>
                                            <label className="lbl-chart-mt">Net Imbalance</label>
                                        </span>
                                        <span className="chartlist-label">
                                            <span className="boxfill-charcolor other-wth-box color-type-chart8"></span>
                                            <label className="lbl-chart-mt">Corrected Demand</label>
                                        </span>
                                        <span className="chartlist-label">
                                            <span className="boxfill-charcolor other-wth-box color-type-chart9"></span>
                                            <label className="lbl-chart-mt">Supply</label>
                                        </span>
                                        <span className="chartlist-label">
                                            <span className="boxfill-charcolor other-wth-box color-type-chart10"></span>
                                            <label className="lbl-chart-mt">Forecasted Demand</label>
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demandmange;