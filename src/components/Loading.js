import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class Loading extends PureComponent {

    componentDidMount() {
        fadeIn(this.$loading)
    }
    componentWillUnmount() {
    }
    render() {
        return (<div className="loader" ref={el => this.$loading = el} >{this.props.message}</div>);
    }
}

Loading.propTypes = {
    message: PropTypes.string.isRequired,
};

function fadeIn(el) {
    el.style.opacity = 0;

    var last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}

export default Loading;
