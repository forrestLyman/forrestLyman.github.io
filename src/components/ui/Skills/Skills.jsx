/**
 * Created by forrestlyman on 7/14/18
 */

// these are some common components that we use in almost every component
// import Button from "components/ui/common/Button/Button";
// import CbClient from 'services/CbClient';
// import Container from 'components/ui/common/Container/Container';
// import Overlay from 'components/ui/common/Overlay/Overlay';
// import FaFacebook from 'react-icons/lib/fa/facebook';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngular, faNode, faReact, faHtml5, faSass} from "@fortawesome/free-brands-svg-icons/index";
import {faSitemap} from "@fortawesome/free-solid-svg-icons/index";
import {ThemeContext} from "components/context/Theme/Theme";

export default class Skills extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            detail: false
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside = (event) => {
        console.log('click');
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setView(false);
        }
    }

    render() {
        const {className} = this.props;
        const {detail} = this.state;
        const style = cx(className, styles.default);
        return (
            <ThemeContext.Consumer>
                {({theme}) => (
                    <div className={styles.skills} ref={this.setWrapperRef}>
                        <div className={styles.skill}>
                            <button className={theme.color.light} onClick={() => this.setView('react')}>
                                <FontAwesomeIcon icon={faReact} />
                            </button>
                            <div className={detail === 'react' ? styles.detailOpen : styles.detail}>
                                <div className={styles.detailBody}>
                                    <h2 className={theme.color.dark}>React</h2>
                                    <p>I'm currently using React for most of my work. I was a strong Angular developer when
                                    I started working with React, and at first it seemed very limited. It is, when compared to a full
                                    framework, but this very limitation is also its greatest strength!</p>
                                    <p>
                                        React <strike>forces</strike> encourages you to think on very different terms, and ultimately provides an incredibly
                                        concise path to developing decoupled code. There is no magic here, its just simple performant JavaScript, and I love it!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.skill}>
                            <button className={theme.color.light} onClick={() => this.setView('angular')}>
                                <FontAwesomeIcon icon={faAngular} />
                            </button>
                            <div className={detail === 'angular' ? styles.detailOpen : styles.detail}>
                                <h2 className={theme.color.dark}>Angular</h2>
                                <p>this is the body content</p>
                            </div>
                        </div>
                        <div className={styles.skill}>
                            <button className={theme.color.light} onClick={() => this.setView('node')}>
                                <FontAwesomeIcon icon={faNode} />
                            </button>
                            <div className={detail === 'node' ? styles.detailOpen : styles.detail}>
                                <h2 className={theme.color.dark}>Node</h2>
                                <p>this is the body content</p>
                            </div>

                        </div>
                        <div className={styles.skill}>
                            <button className={theme.color.light} onClick={() => this.setView('node')}>
                                <FontAwesomeIcon icon={faSitemap} />
                            </button>
                            <div className={detail === 'node' ? styles.detailOpen : styles.detail}>
                                <h2 className={theme.color.dark}>Node</h2>
                                <p>this is the body content</p>
                            </div>

                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }

    setView = (view) => {
        const detail = view === this.state.detail ? false : view;
        this.setState({detail});
    }

}
