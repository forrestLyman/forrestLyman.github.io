/**
 * Created by forrestlyman on 7/12/18
 */

import cx from 'classnames';
import React from 'react';
import {ThemeContext} from "components/context/Theme/Theme";

import styles from './Main.scss';
import Skills from "./Skills/Skills";
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
                </main>
            )}
        </ThemeContext.Consumer>
    )
}

Main.propTypes = {
}

export default Main;