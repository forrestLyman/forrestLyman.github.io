/**
 * Created by forrestlyman on 7/14/18
 */

import {faAngular, faNode, faReact, faHtml5} from "@fortawesome/free-brands-svg-icons/index";
import {faSitemap} from "@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Skills.scss';
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
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {({theme}) => (
                    <div className={styles.skills} ref={this.setWrapperRef}>
                        {this.reactSkill(theme)}
                        {this.angularSkill(theme)}
                        {this.htmlSkill(theme)}
                        {this.nodeSkill(theme)}
                        {this.workflowSkill(theme)}

                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }

    reactSkill = (theme) => {
        const active = this.state.detail === 'react';
        return (
            <div className={active ? styles.skillActive : styles.skill}>
                <button className={theme.color.light} onClick={() => this.setView('react')}>
                    <FontAwesomeIcon icon={faReact} />
                </button>
                <div className={active ? styles.detailOpen : styles.detail}>
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
        const active = this.state.detail === 'angular';
        return (
            <div className={active ? styles.skillActive : styles.skill}>
                <button className={theme.color.light} onClick={() => this.setView('angular')}>
                    <FontAwesomeIcon icon={faAngular} />
                </button>
                <div className={active ? styles.detailOpen : styles.detail}>
                    <div className={styles.detailBody}>
                        <h2 className={theme.color.dark}>Angular</h2>
                        <p>I focused exclusively on Angular and TypeScript development for a number of years, working
                            with Angular 1-5 on a daily basis. Its an amazing platform for building enterprise browser applications.</p>
                    </div>
                </div>
            </div>
        )
    }

    htmlSkill = (theme) => {
        const active = this.state.detail === 'html';
        return (
            <div className={active ? styles.skillActive : styles.skill}>
                <button className={theme.color.light} onClick={() => this.setView('html')}>
                    <FontAwesomeIcon icon={faHtml5} />
                </button>
                <div className={active ? styles.detailOpen : styles.detail}>
                    <div className={styles.detailBody}>
                        <h2 className={theme.color.dark}>HTML5</h2>
                        <p>
                            I always try to utilize core HTML5 / JavaScript functionality whenever posssible since it
                            makes the code much lighter, more performant, and easier to integrate.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    nodeSkill = (theme) => {
        const active = this.state.detail === 'node';
        return (
            <div className={active ? styles.skillActive : styles.skill}>
                <button className={theme.color.light} onClick={() => this.setView('node')}>
                    <FontAwesomeIcon icon={faNode} />
                </button>
                <div className={active ? styles.detailOpen : styles.detail}>
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

    workflowSkill = (theme) => {
        const active = this.state.detail === 'workflow';
        return (
            <div className={active ? styles.skillActive : styles.skill}>
                <button className={theme.color.light} onClick={() => this.setView('workflow')}>
                    <FontAwesomeIcon icon={faSitemap} />
                </button>
                <div className={active ? styles.detailOpen : styles.detail}>
                    <div className={styles.tabArrow}></div>
                    <div className={styles.detailBody}>
                        <h2 className={theme.color.dark}>Workflow</h2>
                        <p>
                            I have years of experience integrating with client workflow. When its my choice I use a combination of Jira, Trello,
                            GitFlow, Scrum, Kanban, Travis &amp; Jenkins, choosing based on the size of the team and complexity of the project.
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
