import React from 'react'

const PayrollTableHeader = () => {
    return (
        <div className='row'>
            <div className='col l-9'>
                <div className='row'>
                    <div className="col l-2">
                        Status
                    </div>

                    <div className="col l-2">
                        Date
                    </div>

                    <div className="col l-2">
                        Client
                    </div>

                    <div className="col l-2">
                        Currentcy
                    </div>

                    <div className="col l-2">
                        Total
                    </div>

                    <div className="col l-2">
                        Invoice #
                    </div>
                </div>
            </div>
            <div className='col l-3'></div>
        </div>
    )
}

export default PayrollTableHeader