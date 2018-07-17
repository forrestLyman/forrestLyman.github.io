/**
 * Created by forrestlyman on 7/12/18
 */

import cx from 'classnames';
import {faCreativeCommons} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Skills from "./Skills/Skills";
import styles from './Main.scss';
import {ThemeContext} from "components/context/Theme/Theme";
import Toolbar from "./Toolbar/Toolbar";


const Main = () => {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <main className={cx(styles.main, theme.background.dark)}>
                    <Toolbar/>
                    <div className={styles.mainContent}>
                        <div className={styles.avatar} />
                        <h1 className={styles.title}>
                            hi, i'm forrest!
                            <small>creative fullstack developer</small>
                        </h1>

                        <p className={styles.lead}>I write expressive code that progressively grows your ideas into engaging digital experiences.</p>

                        <Skills />
                    </div>
                    <a className={styles.license} rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                        <FontAwesomeIcon icon={faCreativeCommons} />
                        <span>Like this site? Feel free to fork it and create something of your own!</span>
                    </a>
                </main>
            )}
        </ThemeContext.Consumer>
    )
}

Main.propTypes = {
}

export default Main;