import React from 'react'

const OffsetArea = () => {
  return (
    <>
    <div className="offset-area">
        <div className="offset-close"><i className="ti-close"></i></div>
        <ul className="nav offset-menu-tab">
            <li><a className="active" data-toggle="tab" href="#activity">Activity</a></li>
            <li><a data-toggle="tab" href="#settings">Settings</a></li>
        </ul>
        <div className="offset-content tab-content">
            <div id="activity" className="tab-pane fade in show active">
                <div className="recent-activity">
                    <div className="timeline-task">
                        <div className="icon bg1">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className="tm-title">
                            <h4>Rashed sent you an email</h4>
                            <span className="time"><i className="ti-time"></i>09:35</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                        </p>
                    </div>
                    <div className="timeline-task">
                        <div className="icon bg2">
                            <i className="fa fa-check"></i>
                        </div>
                        <div className="tm-title">
                            <h4>Added</h4>
                            <span className="time"><i className="ti-time"></i>7 Minutes Ago</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                    <div className="timeline-task">
                        <div className="icon bg2">
                            <i className="fa fa-exclamation-triangle"></i>
                        </div>
                        <div className="tm-title">
                            <h4>You missed you Password!</h4>
                            <span className="time"><i className="ti-time"></i>09:20 Am</span>
                        </div>
                    </div>
                    <div className="timeline-task">
                        <div className="icon bg3">
                            <i className="fa fa-bomb"></i>
                        </div>
                        <div className="tm-title">
                            <h4>Member waiting for you Attention</h4>
                            <span className="time"><i className="ti-time"></i>09:35</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                        </p>
                    </div>
                    <div className="timeline-task">
                        <div className="icon bg3">
                            <i className="ti-signal"></i>
                        </div>
                        <div className="tm-title">
                            <h4>You Added Kaji Patha few minutes ago</h4>
                            <span className="time"><i className="ti-time"></i>01 minutes ago</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                        </p>
                    </div>
                    <div className="timeline-task">
                        <div className="icon bg1">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className="tm-title">
                            <h4>Ratul Hamba sent you an email</h4>
                            <span className="time"><i className="ti-time"></i>09:35</span>
                        </div>
                        <p>Hello sir , where are you, i am egerly waiting for you.
                        </p>
                    </div>
                    <div className="timeline-task">
                        <div className="icon bg2">
                            <i className="fa fa-exclamation-triangle"></i>
                        </div>
                        <div className="tm-title">
                            <h4>Rashed sent you an email</h4>
                            <span className="time"><i className="ti-time"></i>09:35</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                        </p>
                    </div>
                    <div className="timeline-task">
                        <div className="icon bg2">
                            <i className="fa fa-exclamation-triangle"></i>
                        </div>
                        <div className="tm-title">
                            <h4>Rashed sent you an email</h4>
                            <span className="time"><i className="ti-time"></i>09:35</span>
                        </div>
                    </div>
                    <div className="timeline-task">
                        <div className="icon bg3">
                            <i className="fa fa-bomb"></i>
                        </div>
                        <div className="tm-title">
                            <h4>Rashed sent you an email</h4>
                            <span className="time"><i className="ti-time"></i>09:35</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                        </p>
                    </div>
                    <div className="timeline-task">
                        <div className="icon bg3">
                            <i className="ti-signal"></i>
                        </div>
                        <div className="tm-title">
                            <h4>Rashed sent you an email</h4>
                            <span className="time"><i className="ti-time"></i>09:35</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                        </p>
                    </div>
                </div>
            </div>
            <div id="settings" className="tab-pane fade">
                <div className="offset-settings">
                    <h4>General Settings</h4>
                    <div className="settings-list">
                        <div className="s-settings">
                            <div className="s-sw-title">
                                <h5>Notifications</h5>
                                <div className="s-swtich">
                                    <input type="checkbox" id="switch1" />
                                    <label for="switch1">Toggle</label>
                                </div>
                            </div>
                            <p>Keep it 'On' When you want to get all the notification.</p>
                        </div>
                        <div className="s-settings">
                            <div className="s-sw-title">
                                <h5>Show recent activity</h5>
                                <div className="s-swtich">
                                    <input type="checkbox" id="switch2" />
                                    <label for="switch2">Toggle</label>
                                </div>
                            </div>
                            <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                        </div>
                        <div className="s-settings">
                            <div className="s-sw-title">
                                <h5>Show your emails</h5>
                                <div className="s-swtich">
                                    <input type="checkbox" id="switch3" />
                                    <label for="switch3">Toggle</label>
                                </div>
                            </div>
                            <p>Show email so that easily find you.</p>
                        </div>
                        <div className="s-settings">
                            <div className="s-sw-title">
                                <h5>Show Task statistics</h5>
                                <div className="s-swtich">
                                    <input type="checkbox" id="switch4" />
                                    <label for="switch4">Toggle</label>
                                </div>
                            </div>
                            <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                        </div>
                        <div className="s-settings">
                            <div className="s-sw-title">
                                <h5>Notifications</h5>
                                <div className="s-swtich">
                                    <input type="checkbox" id="switch5" />
                                    <label for="switch5">Toggle</label>
                                </div>
                            </div>
                            <p>Use checkboxes when looking for yes or no answers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OffsetArea
