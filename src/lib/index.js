import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './timeline.css';

class Timeline extends Component {

    static propTypes = {
        children: PropTypes.any,
        objects: PropTypes.array,
        component: PropTypes.any,
        itemClass: PropTypes.string,
        itemAttributes: PropTypes.object,
        backgroundColor: PropTypes.string,
        itemBackgroundColor: PropTypes.string,
        pointerColor: PropTypes.string,
        dividerColor: PropTypes.string,
        pointColor: PropTypes.string,
        noBorder: PropTypes.bool
    };

    static defaultProps = {
        itemClass: "",
        itemAttributes: {},
        backgroundColor: "white",
        noBorder: false
    };

    constructor(props) {
        super(props);
        this.setDivider = this.setDivider.bind(this);
        if(this.props.children){
            this.children = {objs:[...this.props.children], hasChildren: true};
        } else if (this.props.objects && this.props.component) {
            this.children = {objs:[...this.props.objects], hasChildren: false};
        } else {
            this.children = {objs:[]};
        }
    }

    componentDidMount() {
        this.setDivider()
        window.addEventListener('resize', this.setDivider);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setDivider);
    }

    setDivider() {
        var h = document.getElementById("tl-main").offsetHeight;
        this.refs.divider.style.height = h + "px";
    }

    render() {
        return (
            <div className="tl-container">
                <div className={`tl-body${this.children.objs.length === 1 ? " tl-single" : ""}`}>
                    <div ref="divider" className="tl-divider" id="tl-divider" style={{backgroundColor: this.props.dividerColor }}></div>
                    <div className="tl-row tl-main" id="tl-main">
                        <div className="tl-col tl-col-1">
                            {
                                this.children.objs.map((e, k) => {
                                    if (k % 2 === 0 && k < this.children.objs.length / 2) {
                                        return (<TlItem pos={0} key={k} { ...this.props } dis="tl-show-on-all" content={e} />);
                                    } else if (k % 2 === 0) {
                                        return (<TlItem pos={0} key={k} { ...this.props } dis="tl-show-on-large" content={e} />);
                                    } else if (k < this.children.objs.length / 2) {
                                        return (<TlItem pos={0} key={k} { ...this.props } dis="tl-show-on-small" content={e} />);
                                    } else {
                                        return null;
                                    }
                                })
                            }
                        </div>
                        {this.children.objs.length > 1 ? <div className="tl-col tl-col-2">
                            <div className="tl-padding tl-show-on-large"></div>
                            {
                                this.children.objs.map((e, k) => {
                                    if (k % 2 === 1 && k >= this.children.objs.length / 2) {
                                        return (<TlItem pos={1} key={k} { ...this.props } dis="tl-show-on-all" content={e} />);
                                    } else if (k % 2 === 1) {
                                        return (<TlItem pos={1} key={k} { ...this.props } dis="tl-show-on-large" content={e} />);
                                    } else if (k >= this.children.objs.length / 2) {
                                        return (<TlItem pos={1} key={k} { ...this.props } dis="tl-show-on-small" content={e} />);
                                    } else {
                                        return null;
                                    }
                                })
                            }
                        </div> : null}
                    </div>
                </div>
            </div>
        );
    }
}

const TlItem = (props) => {
    const Comp = props.component;
    const pointer = {border: props.noBorder? "none" : null, backgroundColor: props.pointerColor || props.backgroundColor || props.itemBackgroundColor};

    return (
        <div className={`tl-wrapper ${props.dis} ${props.itemClass}`} {...props.itemAttributes}>
            <div className="tl-item">
                <div className="tl-point" style={{ backgroundColor: props.pointColor }} />
                <div className="tl"  style={{border: props.noBorder? "none" : null}}>
                    <div className="tl-pointer">
                        <div className="tl-arrow-r" style={pointer}/>
                        {props.pos === 1 ? <div className="tl-arrow-l" style={pointer} /> : null}
                    </div>
                    <div className="tl-content" style={{backgroundColor: props.itemBackgroundColor || props.backgroundColor || props.pointerColor}}>
                        {Comp ? <Comp {...props.content} /> : props.content}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;