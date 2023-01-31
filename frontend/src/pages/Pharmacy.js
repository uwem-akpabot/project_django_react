import React from 'react'

const Pharmacy = () => {
  return (
    <>
    <h1 className="h3 mb-3"><strong>Pharmacy </strong>Dashboard</h1>   
    <div className="row">
        <div className="col-12">
            <div className="card flex-fill w-100">
                <div className="card-header">

                    <h5 className="card-title mb-0">Recent Cases</h5>
                </div>
                <div className="card-body py-3">
                    <div className="chart chart-sm">
                        <canvas id="chartjs-dashboard-line"></canvas>
                    </div>
                </div>
            </div>
        </div>
      </div>

      
    
    </>
  )
}

export default Pharmacy
