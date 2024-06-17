import React from "react";
import '../../assets/css/style.scss';
import './index.scss';
import Header from "../../component/Header/Header";
import iconWgt1 from "../../assets/images/chart-icon.svg"
import iconWgt2 from "../../assets/images/drops-icon.svg"
import iconWgt3 from "../../assets/images/group-icon.svg"
import iconWgt4 from "../../assets/images/handle-icon.svg"

import LocatioMap from "../../component/LocationMap";
import UtilizationChart from "../../component/UtilizationChart";
import IncidentChart from "../../component/IncidentChart";
import ScatterGraph from "../../component/Graphs/ScatterGraph";
import upDownArrow from '../../assets/---images/upDownArrow.svg'
import Table from 'react-bootstrap/Table';


function ModelList(props) {

  return (
    <>
      <Header />
      <div className="dashboard-order-section py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="boxmt-column-mt color-border1">
                <div className="mt-webnt-flex">
                  <span className="d-block icon-wtmgt color-txt1"><img src={iconWgt1} alt="" /></span>
                  <h4 className="txtsmall-emnt color-txt1">Utilization</h4>
                </div>
                <div className="numbar-txtwgt">
                  <span className="txtcount-num color-txt1">88%</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="boxmt-column-mt color-border2">
                <div className="mt-webnt-flex">
                  <span className="d-block icon-wtmgt color-txt2"><img src={iconWgt2} alt="" /></span>
                  <h4 className="txtsmall-emnt color-txt2">Daily Production</h4>
                </div>
                <div className="numbar-txtwgt">
                  <span className="txtcount-num color-txt2">700BL</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="boxmt-column-mt color-border3">
                <div className="mt-webnt-flex">
                  <span className="d-block icon-wtmgt color-txt3"><img src={iconWgt3} alt="" /></span>
                  <h4 className="txtsmall-emnt color-txt3">Labour Head Count</h4>
                </div>
                <div className="numbar-txtwgt">
                  <span className="txtcount-num color-txt3">100</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="boxmt-column-mt color-border4">
                <div className="mt-webnt-flex">
                  <span className="d-block icon-wtmgt color-txt4"><img src={iconWgt4} alt="" /></span>
                  <h4 className="txtsmall-emnt color-txt4">Downtime</h4>
                </div>
                <div className="numbar-txtwgt">
                  <span className="txtcount-num color-txt4">1979 Hr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-12">
              <div className="chart-box-layout">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="title-chart-wht">Plant Utilization by Month</h3>
                  <div className="right-dropdown-elemnt">
                    <div className="select-dropdown--source">
                      <span className="btn-item-nv px-">Action <i class="far fa-angle-down"></i></span>
                      <div className="dropdown-menu-sub drop-menuitem--list">
                        <ul className="multi-lst-mgt">
                          <li className="item-dropmt more-items--wpt"><span className="listtxt-link">Dropdown 1</span></li>
                          <li className="item-dropmt more-items--wpt"><span className="listtxt-link">Dropdown 2</span></li>
                          <li className="item-dropmt more-items--wpt"><span className="listtxt-link">Dropdown 3</span></li>
                          <li className="item-dropmt more-items--wpt"><span className="listtxt-link">Dropdown 4</span></li>
                          <li className="item-dropmt more-items--wpt"><span className="listtxt-link">Dropdown 5</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-8">                    
                    <div className="mt-5 position-relative">
                      <span className="label-leftline-chart">Utilization</span>
                      <UtilizationChart></UtilizationChart>
                      <div className="text-center">
                        <span className="txt-label-bottom">Month</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="discrip-chart-area">
                      <h2 className="title-head-disc mb-3">Discription</h2>
                      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="chart-box-layout">
                <h3 className="title-chart-wht">Plant Utilization by Location</h3>
                <div className="chartbody-wrapper">
                  <div className="chart-label-area">
                    <span className="chartlist-label">
                      <label className="lbl-chart-mt">Above Target</label>
                      <span className="boxfill-charcolor color-type-chart1"></span>
                    </span>
                    <span className="chartlist-label">
                      <label className="lbl-chart-mt">New Target</label>
                      <span className="boxfill-charcolor color-type-chart2"></span>
                    </span>
                    <span className="chartlist-label">
                      <label className="lbl-chart-mt">Below Target</label>
                      <span className="boxfill-charcolor color-type-chart3"></span>
                    </span>
                  </div>
                  <div className="mapchat-warapper"><LocatioMap></LocatioMap></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">

              <div className="chart-box-layout">
                <h3 className="title-chart-wht">Risk Identification chart</h3>
                <div className="mt-3 position-relative">
                  <span className="label-leftline-chart">Cost ($)</span>
                  <ScatterGraph></ScatterGraph>
                  <div className="text-center">
                    <span className="txt-label-bottom">Remaining Useful Life (Days)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-12">
              <div className="chart-box-layout">
                <h3 className="title-chart-wht">Operations Conditions Details</h3>
                <div className=" position-relative">
                  <div className="search-bar-table mb-2">
                    <div className="form-group search-tbl-mt d-flex align-items-center ms-auto">
                      <label htmlFor="inputState" className="control-label me-2">Search:</label>
                      <select id="inputState" className="form-control control-input-tbl">
                        {/* <option selected>Choose...</option>
                        <option>...</option> */}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-12">
                    <Table striped responsive className="table-wapper-wgt">
                      <thead>
                        <tr>
                          <th >Pump No <img src={upDownArrow} style={{ float: 'right', paddingTop: '2px' }}></img> </th>
                          <th  >Name <img src={upDownArrow} style={{ float: 'right', paddingTop: '2px' }}></img></th>
                          <th >Rul <img src={upDownArrow} style={{ float: 'right', paddingTop: '2px' }}></img></th>
                          <th >Pressure <img src={upDownArrow} style={{ float: 'right', paddingTop: '2px' }}></img></th>
                          <th >Flowrate <img src={upDownArrow} style={{ float: 'right', paddingTop: '2px' }}></img></th>
                          <th >Speed RPM <img src={upDownArrow} style={{ float: 'right', paddingTop: '2px' }}></img></th>
                        </tr>
                      </thead>
                      <tbody className="wgt-tbody-content">
                        <tr>
                          <td >5</td>
                          <td>Pump, Etanorm 200-1000 GG-m</td>
                          <td>4.26</td>
                          <td>0.0033</td>
                          <td>-0.0002</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td className="highlighted-column">5</td>
                          <td>Pump, Etanorm 200-1000 GG-m</td>
                          <td>4.26</td>
                          <td>0.0033</td>
                          <td>-0.0002</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Pump, Etanorm 200-1000 GG-m</td>
                          <td>4.26</td>
                          <td>0.0033</td>
                          <td>-0.0002</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td className="highlighted-column">5</td>
                          <td>Pump, Etanorm 200-1000 GG-m</td>
                          <td>4.26</td>
                          <td>0.0033</td>
                          <td>-0.0002</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Pump, Etanorm 200-1000 GG-m</td>
                          <td>4.26</td>
                          <td>0.0033</td>
                          <td>-0.0002</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td className="highlighted-column">5</td>
                          <td>Pump, Etanorm 200-1000 GG-m</td>
                          <td>4.26</td>
                          <td>0.0033</td>
                          <td>-0.0002</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Pump, Etanorm 200-1000 GG-m</td>
                          <td>4.26</td>
                          <td>0.0033</td>
                          <td>-0.0002</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td className="highlighted-column">5</td>
                          <td>Pump, Etanorm 200-1000 GG-m</td>
                          <td>4.26</td>
                          <td>0.0033</td>
                          <td>-0.0002</td>
                          <td>100</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="chart-box-layout">
                <h3 className="title-chart-wht">Incidents</h3>
                <div className="circle-chartlayout">
                  <IncidentChart></IncidentChart>
                  <div className="lable-cicle-chart">
                    <div className="multi-chatcirle-list">
                      <span className="square-box-chart sq-chart1"></span><span class="lbl-cht-txtweb">FATALITIES</span>
                    </div>
                    <div className="multi-chatcirle-list">
                      <span className="square-box-chart sq-chart2"></span><span class="lbl-cht-txtweb">LOST TIME INJURIES</span>
                    </div>
                    <div className="multi-chatcirle-list">
                      <span className="square-box-chart sq-chart2"></span><span class="lbl-cht-txtweb">RECORDABLE INJURIES</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="chart-box-layout">
                <h3 className="title-chart-wht">Events & Notifications</h3>
                <ul className="event-waplist">
                  <li className="event-txtlist">
                    <h4 className="title-event-mt">Weekly Project Status Meeting</h4>
                    <p className="event-disc-time">Fri May 12th 9:00am - 10:00am</p>
                  </li>
                  <li className="event-txtlist">
                    <h4 className="title-event-mt">Safety briefing</h4>
                    <p className="event-disc-time">Mon May 15th 3:00pm - 3:30pm</p>
                  </li>
                  <li className="event-txtlist">
                    <h4 className="title-event-mt">Weekly Project Status Meeting</h4>
                    <p className="event-disc-time">Fri May 12th 9:00am - 10:00am</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div className="chart-box-layout">
                <h3 className="title-chart-wht">News</h3>
                <ul className="content-listemnt">
                  <li className="list-discmt"><span>Northern Oil and Gas: Enhanced Completions Generate 13 MBOEPD</span> (May 8, 2017 21:55) <i>Northern anticipates more production growth in 2H 2017 Northern Oil and Gas, Inc. (tick...</i></li>
                  <li className="list-discmt"><span>Northern Oil and Gas: Enhanced Completions Generate 13 MBOEPD</span> (May 8, 2017 21:55) <i>Northern anticipates more production growth in 2H 2017 Northern Oil and Gas, Inc. (tick...</i></li>
                  <li className="list-discmt"><span>Northern Oil and Gas: Enhanced Completions Generate 13 MBOEPD</span> (May 8, 2017 21:55) <i>Northern anticipates more production growth in 2H 2017 Northern Oil and Gas, Inc. (tick...</i></li>
                  <li className="list-discmt"><span>Northern Oil and Gas: Enhanced Completions Generate 13 MBOEPD</span> (May 8, 2017 21:55) <i>Northern anticipates more production growth in 2H 2017 Northern Oil and Gas, Inc. (tick...</i></li>
                  <li className="list-discmt"><span>Northern Oil and Gas: Enhanced Completions Generate 13 MBOEPD</span> (May 8, 2017 21:55) <i>Northern anticipates more production growth in 2H 2017 Northern Oil and Gas, Inc. (tick...</i></li>
                  <li className="list-discmt"><span>Northern Oil and Gas: Enhanced Completions Generate 13 MBOEPD</span> (May 8, 2017 21:55) <i>Northern anticipates more production growth in 2H 2017 Northern Oil and Gas, Inc. (tick...</i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default ModelList;