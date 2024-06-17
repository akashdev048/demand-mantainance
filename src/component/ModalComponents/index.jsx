import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import addIcon from '../../assets/images/add-icon.svg';
import code1 from '../../assets/images/type-img-1.png';
import code2 from '../../assets/images/type-img-2.png';
import expandIcon from "../../assets/images/expand-icon.svg";
import CopyIcon from "../../assets/images/copy-white-icon.svg";
import iconPlugin from "../../assets/images/logo-plugin.png"
import settingIcon from "../../assets/images/settings-icon.png"
import "./index.scss";

function ModalComponent() {
    //Modal 1

    const [show, setShow] = useState(false);
    const rightSideNewClose = () => setShow(false);
    const rightSideNewShow = () => setShow(true);

    //Modal 2

    const [showNew, setShowNew] = useState(false);
    const rightSideNotebookClose = () => setShowNew(false);
    const rightSideNotebookShow = () => setShowNew(true);

    //Modal  3

    const [showDeploye, setShowDeploye] = useState(false);
    const rightSideDeployeClose = () => setShowDeploye(false);
    const rightSideDeployeShow = () => setShowDeploye(true);

    //Modal 4

    const [showDeploye1, setShowDeploye1] = useState(false);
    const rightSideDeploye1Close = () => setShowDeploye1(false);
    const rightSideDeploye1Show = () => setShowDeploye1(true);

    //Modal 5

    const [showPredictor, setShowPredictor] = useState(false);
    const rightSidePredictorClose = () => setShowPredictor(false);
    const rightSidePredictorShow = () => setShowPredictor(true);



    //Modal 6

    const [showScaling, setShowScaling] = useState(false);
    const rightSideScalingClose = () => setShowScaling(false);
    const rightSideScalingShow = () => setShowScaling(true);

    //Modal 7

    const [showComment, setShowComment] = useState(false);
    const rightSideCommentClose = () => setShowComment(false);
    const rightSideCommentShow = () => setShowComment(true);


    //Modal 8

    const [showSummary, setShowSummary] = useState(false);
    const rightSideSummaryClose = () => setShowSummary(false);
    const rightSideSummaryShow = () => setShowSummary(true);

    //Modal 8

    const [showPlugin, setShowPlugin] = useState(false);
    const rightSidePluginClose = () => setShowPlugin(false);
    const rightSidePluginShow = () => setShowPlugin(true);




    return (
        <>
            <div className="moda1">
                <button type="button" onClick={rightSideNewShow} className="btn btn-create-btn">Open Modal 1</button>
                <Offcanvas className="rightSidebar-wgt" placement="end" show={show} onHide={rightSideNewClose}>
                    <Offcanvas.Header closeButton className="header-topsidebar-right">
                        <Offcanvas.Title className="title-sidebar"><h5>New Project</h5></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="project-md-wap">
                            <div className="short-line0infotxt">
                                <p>Please enter the project title and description to onboard new use-case to the production and create end-end pipelines</p>
                            </div>
                            <div className="new-project-creatwgt">
                                <div className="form-group mb-3">
                                    <div className="d-flex align-items-center">
                                        <label className="labl-name-txt">Project Name:</label>
                                        <div className="fild-inpt"><input type="text" className="form-control inpt-cont-wgt" placeholder="Fraud Detection" /></div>
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <textarea className="form-control txt-areaFill-items" placeholder="Creating a production pipeline for Fraud Detection in Azure Infrastructure"></textarea>
                                </div>
                                <div className="form-group text-end">
                                    <button type="button" className="btn btn-next-side">Create</button>
                                </div>

                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div className="modal-2">
                <button type="button" onClick={rightSideNotebookShow} className="btn btn-create-btn">Open Modal 2</button>
                <Offcanvas className="sidebar-right-studio" placement="end" show={showNew} onHide={rightSideNotebookClose}>
                    <Offcanvas.Header closeButton className="header-topsidebar-right pb-0">
                        <Offcanvas.Title className="title-sidebar">
                            <h5>New Notebook</h5>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="short-line0infotxt">
                            <p>Please enter the project title and description to onboard new use-case to the production and create end-end pipelines</p>
                        </div>
                        <div className="warapper-form-aside">
                            <div className="form-group mb-4">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <label className="labl-name-txt">Name</label>
                                            <div className="fild-inpt"><input type="text" className="form-control inpt-cont-wgt" placeholder="Fraud Detection" /></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <label className="labl-name-txt">Namespace</label>
                                            <div className="fild-inpt"><input type="text" className="form-control inpt-cont-wgt" placeholder="kubeflow-user-com" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h3 class="heading-opt-wigt">Docker Image</h3>
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-4">
                                        <Form.Check className="checkItem--control subhHeading-opt-wigt"
                                            inline
                                            label="Custom Image"
                                            name="group1"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-4">
                                        <Form.Check className="checkItem--control subhHeading-opt-wigt"
                                            inline
                                            label="JupyterHub"
                                            name="group1"
                                        />
                                        <img src={code2} alt="" />
                                    </div>
                                    <div className="col-12 col-md-6 mb-4">
                                        <Form.Check className="checkItem--control subhHeading-opt-wigt"
                                            inline
                                            label="VS Code"
                                            name="group1"
                                        />
                                        <img src={code1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <div className="column-wigt">
                                    <select className="form-control option-cont-wgt">
                                        <option>j1r0g6/notebooks/notebook-servers/jupyter-scipy:v1.5.0</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <h3 class="heading-opt-wigt">Advanced Options</h3>
                                <h4 className="subhHeading-opt-wigt">CPU/RAM</h4>
                                <div className="row justify-content-between">
                                    <div className="col-12 col-lg-5">
                                        <div className="column-wigt mb-4">
                                            <label className="txt-lbl-wt">Requested CPU</label>
                                            <input type="text" className="form-control option-cont-wgt" placeholder="0.6" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5">
                                        <div className="column-wigt mb-4">
                                            <label className="txt-lbl-wt">Requested Memory in Gi</label>
                                            <input type="text" className="form-control option-cont-wgt" placeholder="2Gi" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h3 class="heading-opt-wigt">Advanced Options</h3>
                                <h4 className="subhHeading-opt-wigt">GPUs</h4>
                                <div className="row justify-content-between">
                                    <div className="col-12 col-lg-5">
                                        <div className="column-wigt mb-4">
                                            <label className="txt-lbl-wt">Number of GPUs</label>
                                            <input type="text" className="form-control option-cont-wgt" placeholder="None" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5">
                                        <div className="column-wigt mb-4">
                                            <label className="txt-lbl-wt"></label>
                                            <input type="text" className="form-control option-cont-wgt" placeholder="GPU Vendor" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h4 className="subhHeading-opt-wigt">Workspace Volume</h4>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="column-wigt mb-3">
                                            <label className="txt-lbl-wt">Volume that will be mounted in your home directory </label>
                                            <select className="form-control option-cont-wgt">
                                                <option>None</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h4 className="subhHeading-opt-wigt">Data Volume</h4>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="column-wigt mb-2">
                                            <label className="txt-lbl-wt">Additional volumes that will be mounted in notebook </label>
                                            <div className="add-buttonweb mt-2">
                                                <button type="button" className="btn btn-create-btn">
                                                    <img src={addIcon} alt="icon" />Add New volume
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-end mt-5">
                                <button type="button" className="btn btn-next-side ms-3">Create</button>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div className="modal-3">
                <button type="button" onClick={rightSideDeployeShow} className="btn btn-create-btn">Open Modal 3</button>
                <Offcanvas className="sidebar-right-studio" placement="end" show={showDeploye} onHide={rightSideDeployeClose}>
                    <Offcanvas.Header closeButton className="header-topsidebar-right pb-0">
                        <Offcanvas.Title className="title-sidebar">
                            <h5>New Deployment</h5>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="short-line0infotxt">
                            <p>Please enter the project title and description to onboard new use-case to the production and create end-end pipelines</p>
                        </div>
                        <div className="warapper-form-aside">
                            <div className="form-group mb-4">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <label className="labl-name-txt">Name</label>
                                            <div className="fild-inpt"><input type="text" className="form-control inpt-cont-wgt" placeholder="Fraud Detection" /></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <label className="labl-name-txt">Namespace</label>
                                            <div className="fild-inpt"><input type="text" className="form-control inpt-cont-wgt" placeholder="kubeflow-user-com" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h3 class="heading-opt-wigt">Docker Image</h3>
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-4">
                                        <Form.Check className="checkItem--control subhHeading-opt-wigt"
                                            inline
                                            label="Custom Image"
                                            name="group1"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-4">
                                        <Form.Check className="checkItem--control subhHeading-opt-wigt"
                                            inline
                                            label="LLMs"
                                            name="group1"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-4">
                                        <Form.Check className="checkItem--control subhHeading-opt-wigt"
                                            inline
                                            label="Pytorch"
                                            name="group1"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-4">
                                        <Form.Check className="checkItem--control subhHeading-opt-wigt"
                                            inline
                                            label="Tensorflow"
                                            name="group1"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-4">
                                        <Form.Check className="checkItem--control subhHeading-opt-wigt"
                                            inline
                                            label="Huggingface"
                                            name="group1"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-4">
                                        <Form.Check className="checkItem--control subhHeading-opt-wigt"
                                            inline
                                            label="XGboost"
                                            name="group1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <div className="column-wigt">
                                    <select className="form-control option-cont-wgt">
                                        <option>j1r0g6/notebooks/notebook-servers/jupyter-scipy:v1.5.0</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <h3 class="heading-opt-wigt">Advanced Options</h3>
                                <h4 className="subhHeading-opt-wigt">CPU/RAM</h4>
                                <div className="row justify-content-between">
                                    <div className="col-12 col-lg-5">
                                        <div className="column-wigt mb-4">
                                            <label className="txt-lbl-wt">Requested CPU</label>
                                            <input type="text" className="form-control option-cont-wgt" placeholder="0.6" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5">
                                        <div className="column-wigt mb-4">
                                            <label className="txt-lbl-wt">Requested Memory in Gi</label>
                                            <input type="text" className="form-control option-cont-wgt" placeholder="2Gi" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h3 class="heading-opt-wigt">Advanced Options</h3>
                                <h4 className="subhHeading-opt-wigt">GPUs</h4>
                                <div className="row justify-content-between">
                                    <div className="col-12 col-lg-5">
                                        <div className="column-wigt mb-4">
                                            <label className="txt-lbl-wt">Number of GPUs</label>
                                            <input type="text" className="form-control option-cont-wgt" placeholder="None" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5">
                                        <div className="column-wigt mb-4">
                                            <label className="txt-lbl-wt"></label>
                                            <input type="text" className="form-control option-cont-wgt" placeholder="GPU Vendor" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h4 className="subhHeading-opt-wigt">Workspace Volume</h4>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="column-wigt mb-3">
                                            <label className="txt-lbl-wt">Volume that will be mounted in your home directory </label>
                                            <select className="form-control option-cont-wgt">
                                                <option>None</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h4 className="subhHeading-opt-wigt">Data Volume</h4>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="column-wigt mb-2">
                                            <label className="txt-lbl-wt">Additional volumes that will be mounted in notebook </label>
                                            <div className="add-buttonweb mt-2">
                                                <button type="button" className="btn btn-create-btn">
                                                    <img src={addIcon} alt="icon" />Add New volume
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-end mt-5">
                                <button type="button" className="btn btn-next-side ms-3">Create</button>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div className="modal-4">
                <button type="button" onClick={rightSideDeploye1Show} className="btn btn-create-btn">Open Modal 4</button>
                <Offcanvas className="sidebar-right-studio" placement="end" show={showDeploye1} onHide={rightSideDeploye1Close}>
                    <Offcanvas.Header closeButton className="header-topsidebar-right pb-0">
                        <Offcanvas.Title className="title-sidebar">
                            <h5>New Deployment</h5>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="short-line0infotxt">
                            <p>Please enter the project title and description to onboard new use-case to the production and create end-end pipelines </p>
                        </div>
                        <div className="warapper-form-aside extra-columnwap--yt">
                            <div className="elemnt-flex-mtr">
                                <div className="column-wg-formside">
                                    <div className="form-group mb-3">
                                        <div className="d-flex align-items-center">
                                            <label className="labl-name-txt">Deployment Name:</label>
                                            <div className="fild-inpt"><input type="text" className="form-control inpt-cont-wgt" placeholder="Fraud Detection" /></div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <textarea className="form-control txt-areaFill-items" placeholder="Creating a production deployment for Fraud Detection in Azure Infrastructure"></textarea>
                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="column-wigt">
                                            <label className="labl-name-txt">Namespace</label>
                                            <select className="form-control option-cont-wgt">
                                                <option>default or Kubeflow</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="column-wigt">
                                            <label className="labl-name-txt">Type</label>
                                            <select className="form-control option-cont-wgt">
                                                <option>Seldon Deployment or KFserving Deployment</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="text-end mt-5">
                                        <button type="button" className="btn btn-back-side">Back</button>
                                        <button type="button" className="btn btn-next-side ms-3">Next</button>
                                    </div>
                                </div>
                                <div className="footer-wgt--mt mt-5">
                                    <p className="txt-dc-wt">Please visit our Documentations <img src={expandIcon} alt="expand" /></p>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div className="modal-5">
                <button type="button" onClick={rightSidePredictorShow} className="btn btn-create-btn">Open Modal 5</button>
                <Offcanvas className="sidebar-right-studio" placement="end" show={showPredictor} onHide={rightSidePredictorClose}>
                    <Offcanvas.Header closeButton className="header-topsidebar-right pb-0">
                        <Offcanvas.Title className="title-sidebar">
                            <h5>Default Predictor</h5>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="short-line0infotxt">
                            <p>Please enter the project title and description to onboard new use-case to the production and create end-end pipelines</p>
                        </div>
                        <div className="warapper-form-aside extra-columnwap--yt">
                            <div className="elemnt-flex-mtr">
                                <div className="column-wg-formside">
                                    <div className="form-group mb-4">
                                        <div className="column-wigt">
                                            <label className="labl-name-txt">Runtime</label>
                                            <select className="form-control option-cont-wgt">
                                                <option>Tensorflow</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="column-wigt">
                                            <label className="labl-name-txt">Model URI</label>
                                            <input type="text" placeholder="gs://seldon-models/sklearn/income/model-0.23.2" className="form-control option-cont-wgt" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-12 col-md-6 mb-4">
                                                <div className="d-flex align-items-center">
                                                    <label className="labl-name-txt me-3">gRPC</label>
                                                    <Form.Check type="radio" className="radioCheck-wgt" aria-label="radio 1" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 mb-4">
                                                <div className="d-flex align-items-center">
                                                    <label className="labl-name-txt me-3">REST</label>
                                                    <Form.Check type="radio" className="radioCheck-wgt" aria-label="radio 1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end mt-5">
                                        <button type="button" className="btn btn-back-side">Back</button>
                                        <button type="button" className="btn btn-next-side ms-3">Next</button>
                                    </div>
                                </div>
                                <div className="footer-wgt--mt mt-5">
                                    <p className="txt-dc-wt">Please visit our Documentations <img src={expandIcon} alt="expand" /></p>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div className="modal-6">
                <button type="button" onClick={rightSideScalingShow} className="btn btn-create-btn">Open Modal 6</button>
                <Offcanvas className="sidebar-right-studio" placement="end" show={showScaling} onHide={rightSideScalingClose}>
                    <Offcanvas.Header closeButton className="header-topsidebar-right pb-0">
                        <Offcanvas.Title className="title-sidebar">
                            <h5>Auto-Scaling</h5>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="warapper-form-aside extra-columnwap--yt">
                            <div className="elemnt-flex-mtr">
                                <div className="column-wg-formside">
                                    <div className="form-group">
                                        <div className="row justify-content-between">
                                            <div className="col-12 col-lg-6">
                                                <h3 class="heading-opt-wigt">Default Predictor Auto-Scaling</h3>
                                                <h4 className="subhHeading-opt-wigt">Pod Replicas</h4>
                                                <div className="column-wigt mb-4">
                                                    <label className="txt-lbl-wt">Minimum</label>
                                                    <input type="text" className="form-control option-cont-wgt" placeholder="1" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <h3 class="heading-opt-wigt">
                                                    <Form.Check // prettier-ignore
                                                        type="switch"
                                                        id="custom-switch"
                                                        label="Enable Auto-Scaling"
                                                    /></h3>
                                                <h4 className="subhHeading-opt-wigt">Scaling Metrics</h4>
                                                <div className="column-wigt mb-4">
                                                    <label className="txt-lbl-wt">Resource</label>
                                                    <input type="text" className="form-control option-cont-wgt" placeholder="CPU" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row justify-content-between">
                                            <div className="col-12 col-lg-6">
                                                <div className="column-wigt mb-4">
                                                    <label className="txt-lbl-wt">Maximum</label>
                                                    <input type="text" className="form-control option-cont-wgt" placeholder="1" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="column-wigt mb-4">
                                                    <label className="txt-lbl-wt">Target Avg Utilisation %</label>
                                                    <input type="text" className="form-control option-cont-wgt" placeholder="10" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end mt-5">
                                        <button type="button" className="btn btn-back-side">Back</button>
                                        <button type="button" className="btn btn-next-side ms-3">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-wgt--mt mt-5">
                                <p className="txt-dc-wt">Please visit our Documentations <img src={expandIcon} alt="expand" /></p>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div className="modal-7">
                <button type="button" onClick={rightSideCommentShow} className="btn btn-create-btn">Open Modal 7</button>
                <Offcanvas className="sidebar-right-studio" placement="end" show={showComment} onHide={rightSideCommentClose}>
                    <Offcanvas.Header closeButton className="header-topsidebar-right pb-0">
                        <Offcanvas.Title className="title-sidebar">
                            <h5>Version Comment</h5>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="warapper-form-aside extra-columnwap--yt">
                            <div className="elemnt-flex-mtr">
                                <div className="column-wg-formside">
                                    <div className="form-group">
                                        <h4 className="subhHeading-opt-wigt mb-4">Developer GitOps</h4>
                                        <div class="d-flex align-items-center">
                                            <label className="txt-lbl-wt">Repository URL</label>
                                            <div className="fild-inpt ms-5">
                                                <input type="text" className="form-control option-cont-wgt" placeholder="http://gitea-server.gitea.svc:3000.." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end mt-5">
                                        <button type="button" className="btn btn-back-side">Back</button>
                                        <button type="button" className="btn btn-next-side ms-3">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-wgt--mt mt-5">
                                <p className="txt-dc-wt">Please visit our Documentations <img src={expandIcon} alt="expand" /></p>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div className="modal-8">
                <button type="button" onClick={rightSideSummaryShow} className="btn btn-create-btn">Open Modal 8</button>
                <Offcanvas className="sidebar-right-studio" placement="end" show={showSummary} onHide={rightSideSummaryClose}>
                    <Offcanvas.Header closeButton className="header-topsidebar-right pb-0">
                        <Offcanvas.Title className="title-sidebar">
                            <h5>Launch Deployment</h5>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="warapper-form-aside extra-columnwap--yt">
                            <div className="elemnt-flex-mtr">
                                <div className="column-wg-formside">
                                    <div className="form-group">
                                        <div class="d-flex align-items-center">
                                            <label className="subhHeading-opt-wigt">Deployment Summary</label>
                                            <div className="fild-inpt ms-5 text-end">
                                                <img src={CopyIcon} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="summry-content--area mt-2">
                                        <div className="webcontent--summrytxt">
                                            <p>apiVersion: k3d.io/v1alpha4<br />
                                                    kind: Simple<br />
                                                    metadata:  <br />
                                                    name: seldon-core<br />
                                                    servers: 1<br />
                                                    agents: 2<br />
                                                    image: rancher/k3s:v1.24.10-k3s1<br />
                                                    ports:<br />
                                                    - port: 30000-30100:30000-30100  <br />
                                                    nodeFilters:  <br />
                                                    - server:*<br />
                                                    registries:  <br />
                                                    create:    <br />
                                                        name: seldon-core    <br />
                                                        host: 0.0.0.0    <br />
                                                        hostPort: "5000"<br />
                                                    options:  <br />
                                                    k3s:    <br />
                                                        extraArgs:<br />    
                                                        - arg: --disable=traefik      <br />
                                                        nodeFilters:      <br />
                                                        - server:*<br />
                                                    </p>
                                        </div>
                                    </div>
                                    <div className="text-end mt-5">
                                        <button type="button" className="btn btn-back-side">Back</button>
                                        <button type="button" className="btn btn-next-side ms-3">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-wgt--mt mt-5">
                                <p className="txt-dc-wt">Please visit our Documentations <img src={expandIcon} alt="expand" /></p>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div className="modal-9">
                <button type="button" onClick={rightSidePluginShow} className="btn btn-create-btn">Open Modal 9</button>
                <Offcanvas className="sidebar-right-studio" placement="end" show={showPlugin} onHide={rightSidePluginClose}>
                    <Offcanvas.Header closeButton className="header-topsidebar-right pb-0">
                        <Offcanvas.Title className="title-sidebar">
                            <h5>Monitor Dashboard - Plugins</h5>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>                        
                        <div className="short-line0infotxt">
                            <p>Please enter the project title and description to onboard new use-case to the production and create end-end pipelines.</p>
                        </div>
                        <div className="warapper-form-aside extra-columnwap--yt">
                            <div className="elemnt-flex-mtr">
                                <div className="column-wg-formside">
                                    <div className="form-group">
                                        <div class="d-flex align-items-center">
                                            <label className="subhHeading-opt-wigt">Deployment Summary</label>
                                            <div className="fild-inpt ms-5 text-end">
                                                <span className="txt-circle-num">12</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="summry-content--area mt-2">
                                        <div className="webcontent--summrytxt">
                                            <ul className="multi-list-plug">
                                                <li className="listweb--row active">
                                                    <div className="colPlug--list">
                                                        <div className="icon-plugin"><span><img src={iconPlugin} alt="icon" /></span></div>
                                                        <div className="info-plug-wt">
                                                            <h4>ALibi</h4>
                                                            <span className="txt-explnt">Model Explainability</span>
                                                        </div>
                                                        <div className="rigt-setting">
                                                            <img src={settingIcon} alt="icon"  />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="listweb--row">
                                                    <div className="colPlug--list">
                                                        <div className="icon-plugin"><span><img src={iconPlugin} alt="icon" /></span></div>
                                                        <div className="info-plug-wt">
                                                            <h4>ALibi</h4>
                                                            <span className="txt-explnt">Model Explainability</span>
                                                        </div>
                                                        <div className="rigt-setting">
                                                            <img src={settingIcon} alt="icon"  />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="listweb--row">
                                                    <div className="colPlug--list">
                                                        <div className="icon-plugin"><span><img src={iconPlugin} alt="icon" /></span></div>
                                                        <div className="info-plug-wt">
                                                            <h4>ALibi</h4>
                                                            <span className="txt-explnt">Model Explainability</span>
                                                        </div>
                                                        <div className="rigt-setting">
                                                            <img src={settingIcon} alt="icon"  />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-end mt-5">
                                        <button type="button" className="btn btn-back-side">Back</button>
                                        <button type="button" className="btn btn-next-side ms-3">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-wgt--mt mt-5">
                                <p className="txt-dc-wt">Please visit our Documentations <img src={expandIcon} alt="expand" /></p>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
}
export default ModalComponent;