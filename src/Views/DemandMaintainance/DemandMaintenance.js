import React from 'react'
import '../../assets/css/style.scss';
import HeaderTwo from "../../component/HeaderTwo/index";
import DonutGraph from '../../component/Graphs/DonutGraph';
import LineGraph from '../../component/Graphs/LineGraph';
import cancel from '../../assets/---images/cancel.svg'
import dropdown from '../../assets/---images/dropdown.svg'
import refresh from '../../assets/---images/refresh.svg'

function DemandMaintenance() {
    return (
        <>
            <HeaderTwo />
            <div className="dashboard-order-section py-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-7">
                            <div className="">
                                <div className=""><h4 className="title-chart-wht mb-0">  Therapeutic Area > Influenza > Flu Drugs</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-7">
                        <div className="chart-box-layout p-3" >

                            <div className="row">
                                <div className="col-12">
                                    <div className="heading-section mb-3 d-flex align-items-center justify-content-between">
                                        <h3 className="title-chart-wht mb-0">
                                            Forecost Accuracy
                                        </h3>
                                        <div className="rightitems-action-emt">
                                            <ul className="multilist-btnaction mb-0">
                                                <li className="listmt-iconwgt">
                                                    <button className="btn btn-action-icon">
                                                        <img src={dropdown} alt="Plus Icon" />
                                                    </button>
                                                </li>
                                                <li className="listmt-iconwgt">
                                                    <button className="btn btn-action-icon">
                                                        <img src={refresh} alt="Edit Icon" />
                                                    </button>
                                                </li>
                                                <li className="listmt-iconwgt">
                                                    <button className="btn btn-action-icon">
                                                        <img src={cancel} alt="Down Icon" />
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <div className="card" style={{ width: 'fit-content', borderColor: '#5ED793' }}>
                                    <div className="card-header d-flex justify-content-center" style={{ backgroundColor: '#5ED793', color: 'white' }}>
                                        Analgesic
                                    </div>
                                    <div className="card-body">
                                        <DonutGraph />
                                    </div>
                                </div>
                                <div className="card" style={{ width: 'fit-content', borderColor: '#799BBD' }}>
                                    <div className="card-header d-flex justify-content-center" style={{ backgroundColor: '#799BBD', color: 'white' }}>
                                        Anti-flu OTC
                                    </div>
                                    <div className="card-body">
                                        <DonutGraph />
                                    </div>
                                </div>
                                <div className="card" style={{ width: 'fit-content', borderColor: '#C4CACD' }}>
                                    <div className="card-header d-flex justify-content-center" style={{ backgroundColor: '#C4CACD', color: 'white' }}>
                                        Anti-flu RX
                                    </div>
                                    <div className="card-body">
                                        <DonutGraph />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-5 col-lg-5">
                        <div className="chart-box-layout p-3">
                            <div className="perform-matrixmt-area px-2">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="heading-section mb-3 d-flex align-items-center justify-content-between">
                                            <h3 className=" title-chart-wht mb-0">
                                                Service Level
                                            </h3>
                                            <div className="rightitems-action-emt">
                                                <ul className="multilist-btnaction mb-0">
                                                    <li className="listmt-iconwgt">
                                                        <button className="btn btn-action-icon">
                                                            <img src={dropdown} alt="Plus Icon" />
                                                        </button>
                                                    </li>
                                                    <li className="listmt-iconwgt">
                                                        <button className="btn btn-action-icon">
                                                            <img src={refresh} alt="Edit Icon" />
                                                        </button>
                                                    </li>
                                                    <li className="listmt-iconwgt">
                                                        <button className="btn btn-action-icon">
                                                            <img src={cancel} alt="Down Icon" />
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="chart-label-area pb-3">
                                    <span className="chartlist-label-1">
                                        <span className="boxfill-charcolor-1 color-type-chart7"></span>

                                        <label className="lbl-chart-mt sub-text">Service Levels</label>
                                    </span>
                                    <span className="chartlist-label-1">
                                        <span className="boxfill-charcolor-1 color-type-chart6"></span>

                                        <label className="lbl-chart-mt sub-text">stock outs</label>
                                    </span>
                                </div>


                                <div className="" style={{ display: 'flex', justifyContent: 'space-around' }} >
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="box-cardmetric">
                                            <h4 className="mtr-title-wgts">Service Levels</h4>
                                            <span className="mtr-title-wgts">85%</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="box-cardmetric-stocks">
                                            <h4 className="mtr-title-wgts">Stock Outs</h4>
                                            <span className="mtr-title-wgts">15%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="chart-box-layout p-3">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading-section mb-3 d-flex align-items-center justify-content-between">
                                        <h3 className="title-chart-wht mb-0 ">
                                            Inventory Days On Hand
                                        </h3>
                                        <div className="rightitems-action-emt">
                                            <ul className="multilist-btnaction mb-0">
                                                <li className="listmt-iconwgt">
                                                    <button className="btn btn-action-icon">
                                                        <img src={dropdown} alt="Plus Icon" />
                                                    </button>
                                                </li>
                                                <li className="listmt-iconwgt">
                                                    <button className="btn btn-action-icon">
                                                        <img src={refresh} alt="Edit Icon" />
                                                    </button>
                                                </li>
                                                <li className="listmt-iconwgt">
                                                    <button className="btn btn-action-icon">
                                                        <img src={cancel} alt="Down Icon" />
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              <div className='row'>
                              <h3 className="title-chart-wht mb-0 px-4 ">
                                Current Inventory Days <span className='custom-div' style={{color:'white'}}>65</span>
                                        </h3> 
                              </div>
                              <div className='row'>
                              <div className="chart-label-area" style={{flexDirection:'row-reverse'}}>
                                    <span className="chartlist-label-1">
                                        <span className="boxfill-charcolor-1 color-type-chart8"></span>

                                        <label className="lbl-chart-mt-1 sub-text-1"> > 60 </label>
                                    </span>
                                    <span className="chartlist-label-1">
                                        <span className="boxfill-charcolor-1 color-type-chart9"></span>

                                        <label className="lbl-chart-mt-1 sub-text-1">> 60 > 90</label>
                                    </span>
                                    <span className="chartlist-label-1">
                                        <span className="boxfill-charcolor-1 color-type-chart10"></span>

                                        <label className="lbl-chart-mt-1 sub-text-1">> 90</label>
                                    </span>
                                </div>

                              </div>
                            <LineGraph />
                        </div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="chart-box-layout p-3" >
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading-section mb-3 d-flex align-items-center justify-content-between">
                                        <h3 className="title-chart-wht mb-0 ">
                                            Inventory Turns
                                        </h3>
                                        <div className="rightitems-action-emt">
                                            <ul className="multilist-btnaction mb-0">
                                                <li className="listmt-iconwgt">
                                                    <button className="btn btn-action-icon">
                                                        <img src={dropdown} alt="Plus Icon" />
                                                    </button>
                                                </li>
                                                <li className="listmt-iconwgt">
                                                    <button className="btn btn-action-icon">
                                                        <img src={refresh} alt="Edit Icon" />
                                                    </button>
                                                </li>
                                                <li className="listmt-iconwgt">
                                                    <button className="btn btn-action-icon">
                                                        <img src={cancel} alt="Down Icon" />
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                              <h3 className="title-chart-wht mb-0 px-4 ">
                                Current Inventory Turns <span className='custom-div' style={{color:'white'}}>9</span>
                                        </h3> 

                              </div>
                              <div className='row'>
                              <div className="chart-label-area" style={{flexDirection:'row-reverse'}}>
                                    <span className="chartlist-label-1">
                                        <span className="boxfill-charcolor-1 color-type-chart8"></span>

                                        <label className="lbl-chart-mt-1 sub-text-1"> > 11 </label>
                                    </span>
                                    <span className="chartlist-label-1">
                                        <span className="boxfill-charcolor-1 color-type-chart9"></span>

                                        <label className="lbl-chart-mt-1 sub-text-1">> 9 > 11</label>
                                    </span>
                                    <span className="chartlist-label-1">
                                        <span className="boxfill-charcolor-1 color-type-chart10"></span>

                                        <label className="lbl-chart-mt-1 sub-text-1">> 9</label>
                                    </span>
                                </div>

                              </div>
                            <LineGraph />
                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}

export default DemandMaintenance