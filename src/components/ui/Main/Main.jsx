/**
 * Created by forrestlyman on 7/12/18
 */

import ColorSelector from 'components/ui/ColorSelector/ColorSelector';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faNpm, faAngular, faReact, faNode} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import {ThemeContext} from "components/context/Theme/Theme";

import styles from './Main.scss';
import {faPalette} from "@fortawesome/free-solid-svg-icons/index";
import Skills from "../Skills/Skills";


const Main = () => {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <main className={cx(styles.main, theme.background.dark)}>
                    <div className={styles.connect}>
                        <a href="https://github.com/forrestLyman" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/forrestlyman/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="mailto: forrestswork@gmail.com" target="_blank"> <FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="https://docs.google.com/document/d/1ToCkb-CMW_79QBJY2h8opyYt-QEjStrSDbnYTl3CLvo/edit?usp=sharing" target="_blank"> <FontAwesomeIcon icon={faCloudDownloadAlt} /></a>
                    </div>
                    <div className={styles.avatar} />
                    <h1 className={styles.title}>
                        hi, i'm forrest!
                        <small>creative fullstack developer</small>
                    </h1>

                    <p className={styles.lead}>I write expressive code that progressively grows your ideas into engaging digital experiences.</p>

                    <Skills />
                    <footer className={styles.footer}>
                        <ColorSelector/>
                    </footer>
                </main>
            )}
        </ThemeContext.Consumer>
    )
}

Main.propTypes = {
}

export default Main;