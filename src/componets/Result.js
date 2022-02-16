import React from 'react';

const Result = ({
    emi,
    totalPayable,
    interestPayable
}) => {

    return (
        <div className='result'>
            <h3>Loan EMI Details</h3>
            <div className='details'>
                <div className='detail' style={{ "backgroundColor": "palegreen" }}>
                    <p>Loan EMI</p>
                    <h4>&#8377;{emi}</h4>
                </div>
                <div className='detail' style={{ "backgroundColor": "palegoldenrod" }}>
                    <p>Total Intrest Payable</p>
                    <h4>&#8377;{interestPayable}</h4>
                </div>
                <div className='detail' style={{ "backgroundColor": "paleturquoise" }}>
                    <p>Total Payment (Principal + Intrest)</p>
                    <h4>&#8377;{totalPayable}</h4>
                </div>
            </div>
        </div>
    );
};

export default Result;
