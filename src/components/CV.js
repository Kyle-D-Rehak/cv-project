import React from 'react';

const CV = (props) => {
        const state = {...props.globalState};
    return (
        <div className='cvWrapper'>
            <div className='cvHeader'>
                <h2>{`${state.info.firstName} ${state.info.lastName}`}</h2>
                <h3>{state.info.title}</h3>
            </div>
            <div className='cvMain'>
                <div className='cvSidebar'>
                    <img src={state.info.image} alt=''/>
                    <h3>Personal Details</h3>
                    <hr></hr>
                    <h5>Address</h5>
                    <p>{state.info.address}</p>
                    <hr></hr>
                    <h5>Phone</h5>
                    <p>{state.info.phone}</p>
                    <hr></hr>
                    <h5>Email</h5>
                    <p>{state.info.email}</p>
                </div>
                <div className='cvBody'>
                    <div className='discWrapper'>
                        <h3>Description</h3>
                        <hr></hr>
                        <div>
                            <p>{state.info.disc}</p>
                        </div>
                    </div>
                    <div>
                        <h3>Experience</h3>
                        <hr></hr>
                        {state.exp.map((item) => {
                            return (
                                <div className='expWrapper'>
                                    <div>
                                        <p>{`${item.from} - ${item.to}`}</p>
                                    </div>
                                    <div>
                                        <h4>{item.position}</h4>
                                        <p>{`${item.company}, ${item.city}`}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h3>Education</h3>
                        <hr></hr>
                        {state.edu.map((item) => {
                            return (
                                <div className='eduWrapper'>
                                    <div>
                                        <p>{`${item.from} - ${item.to}`}</p>
                                    </div>
                                    <div>
                                        <h4>{item.university}</h4>
                                        <p>{item.degree}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CV