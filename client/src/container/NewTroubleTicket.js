import React from 'react';
import { channelOption, priorityOption, calltypeOption, agentOption, serviceCategoryOption } from './../Constants';
const initalState = {
    channel: '',
    priority: '',
    callType: '',
    agent: '',
    serverCat: '',
    customerID: '',
    problem: ''
}
export default function TroubleTicket(props) {

    const [state, setState] = React.useState(initalState);

    const onHandleChange = (evt) => {
        const localState = { ...state };
        const elementID = evt.target.id;
        const value = evt.target.value;
        localState[elementID] = value;
        setState(localState)
    }

    const handleformSubmit = evt => {
        evt.preventDefault();
        console.log(state)
    }

    function renderDropDownOptions(action, list) {
        return list.map((el, index) => {
            return (
                <option key={`${action}-${index}`} value={el.value}>{el.label}</option>
            )
        })
    }


    return (
        <div className="trouble-ticket-form">

            <div className=" form-wrap">

                <form onSubmit={handleformSubmit} id="survey-form">
                    <div className="col-md-12 page-header" style={{ margin: '0', position: 'relative', top: '-30px' }}>
                        <h2 className="page-title">Troubles Logger</h2>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="form-group">
                                <label htmlFor="card" className="form-label">Channel</label>
                                <select required onChange={onHandleChange} value={state.channel} className="form-control" id="channel">
                                    <option disabled selected value="">--Select channel--</option>
                                    {renderDropDownOptions("ddlChnl", channelOption)}
                                </select>
                            </div>

                        </div>
                        <div className='col-md-4'>
                            <div className="form-group">
                                <label htmlFor="card" className="form-label">Priority</label>
                                <select required onChange={onHandleChange} value={state.priority} className="form-control" id="priority">
                                    <option disabled selected value="">--Select channel--</option>
                                    {renderDropDownOptions("priority", priorityOption)}

                                </select>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="form-group">
                                <label htmlFor="callType" className="form-label">Call Type</label>
                                <select required onChange={onHandleChange} value={state.callType} className="form-control" id="callType">
                                    <option disabled selected value="">--Select Calltype--</option>
                                    {renderDropDownOptions("calltype-select", calltypeOption)}
                                </select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group">
                                <label htmlFor="agent" className="form-label">Agent</label>
                                <select required onChange={onHandleChange} value={state.agent} className="form-control" id="agent">
                                    <option disabled selected value="">--Select Agent--</option>
                                    {renderDropDownOptions("agent-drop", agentOption)}
                                </select>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group">
                                <label htmlFor="serverCat" className="form-label">Service Category</label>
                                <select required onChange={onHandleChange} value={state.serverCat} className="form-control" id="serverCat">
                                    <option disabled selected value="">--Service Category--</option>
                                    {renderDropDownOptions("ServiceCategory", serviceCategoryOption)}
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label id="name-label" htmlFor="customerID">Customer Id</label>
                                <input onChange={onHandleChange} value={state.customerID} type="text" name="name" id="customerID" placeholder="Enter Customer Id" className="form-control" required />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="problem">Problem Description</label>
                                <textarea onChange={onHandleChange} value={state.problem} id="problem" className="form-control" name="comment" placeholder="Enter your comment here..."></textarea>
                            </div>
                        </div>
                    </div>


                    {/* <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Leave Message</label>
                                <textarea id="comments" className="form-control" name="comment" placeholder="Enter your comment here..."></textarea>
                            </div>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="col-md-4">
                            <button type="submit" id="submit" className="btn btn-primary btn-block">Submit Ticket</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    )
}

