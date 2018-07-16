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
            detail: 'node'
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
                        {this.reactSkill(theme)}
                        {this.angularSkill(theme)}
                        {this.nodeSkill(theme)}
                        {this.teamSkill(theme)}


                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }

    reactSkill = (theme) => {
        return (
            <div className={styles.skill}>
                <button className={theme.color.light} onClick={() => this.setView('react')}>
                    <FontAwesomeIcon icon={faReact} />
                </button>
                <div className={this.state.detail === 'react' ? styles.detailOpen : styles.detail}>
                    <div className={styles.detailBody}>
                        <h2 className={theme.color.dark}>React</h2>
                        <p>I'm currently using React for most of my work. Its unopinionated approach gives you a lot
                            more options than a more comprehensive framework like Angular, making it a perfect
                            choice for more creative applications and websites.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    angularSkill = (theme) => {
        return (
            <div className={styles.skill}>
                <button className={theme.color.light} onClick={() => this.setView('angular')}>
                    <FontAwesomeIcon icon={faAngular} />
                </button>
                <div className={this.state.detail === 'angular' ? styles.detailOpen : styles.detail}>
                    <div className={styles.detailBody}>
                        <h2 className={theme.color.dark}>Angular</h2>
                        <p>I focused exclusively on Angular and TypeScript development for a number of years, working on a daily basis
                            with Angular 1-5. Its an amazing platform for building enterprise browser applications.</p>
                    </div>
                </div>
            </div>
        )
    }

    nodeSkill = (theme) => {
        return (
            <div className={styles.skill}>
                <button className={theme.color.light} onClick={() => this.setView('node')}>
                    <FontAwesomeIcon icon={faNode} />
                </button>
                <div className={this.state.detail === 'node' ? styles.detailOpen : styles.detail}>
                    <div className={styles.detailBody}>
                        <h2 className={theme.color.dark}>Node / Express</h2>
                        <p>JavaScript is my language of choice for custom API development, cloud functions, and server side rendering.
                        I develop in the browser, then move more expensive operations back to the API. Using one language for both
                            makes this exponentially easier.
                        </p>
                    </div>
                </div>

            </div>
        )
    }

    teamSkill = (theme) => {
        return (
            <div className={styles.skill}>
                <button className={theme.color.light} onClick={() => this.setView('team')}>
                    <FontAwesomeIcon icon={faSitemap} />
                </button>
                <div className={this.state.detail === 'team' ? styles.detailOpen : styles.detail}>
                    <div className={styles.detailBody}>
                        <h2 className={theme.color.dark}>React</h2>
                        <p>I'm currently using React for most of my work. Its unopinionated approach gives you a lot
                            more options than a more comprehensive framework like Angular, making it a perfect
                            choice for creative applications.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    setView = (view) => {
        const detail = view === this.state.detail ? false : view;
        this.setState({detail});
    }

}
