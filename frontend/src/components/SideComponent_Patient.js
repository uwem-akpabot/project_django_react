import React from 'react'

const SideComponent_Patient = () => {
  return (
    <>
      <div className="col-12 col-md-4 mt-5">
        <div className="row">
            <div className="col-12 mb-3">
                <div className="card">
                    <div className="seo-fact sbg4">
                        <div className="p-4 d-flex justify-content-between align-items-center">
                            <div className="seofct-icon"><i className="ti-thumb-up"></i> Likes</div>
                            <h2>2,315</h2>
                        </div>
                        <canvas id="seolinechart2" height="50"></canvas>
                    </div>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className="card">
                    <div className="seo-fact sbg2">
                        <div className="p-4 d-flex justify-content-between align-items-center">
                            <div className="seofct-icon"><i className="ti-share"></i> Share</div>
                            <h2>3,984</h2>
                        </div>
                        <canvas id="seolinechart2" height="50"></canvas>
                    </div>
                </div>
            </div><div className="col-12 mb-3">
                <div className="card">
                    <div className="seo-fact sbg3">
                        <div className="p-4 d-flex justify-content-between align-items-center">
                            <div className="seofct-icon"><i className="ti-thumb-up"></i> Likes</div>
                            <h2>2,315</h2>
                        </div>
                        <canvas id="seolinechart1" height="50"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SideComponent_Patient
