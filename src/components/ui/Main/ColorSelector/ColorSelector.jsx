/**
 * Created by forrestlyman on 7/12/18
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ColorSelector.scss';
import {ThemeContext} from "components/context/Theme/Theme";

export default class ColorSelector extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        const {open} = this.state;
        return (
            <ThemeContext.Consumer>
                {({themes, setTheme, theme, getTheme}) => (
                    <div className={styles.colorSelector}>
                        <button onClick={this.toggle} className={styles.colorLabel}>{<FontAwesomeIcon icon={faPalette} />}</button>

                        <div className={open ? styles.colorList : styles.colorListHidden}>
                            {themes.map((themeKey, key) => {
                                const colorTheme = getTheme(themeKey);
                                return (
                                    <button
                                        className={styles.colorButton}
                                        key={key}
                                        onClick={() => setTheme(themeKey)}
                                    >
                                        <strong className={colorTheme.background.dark}></strong>
                                        <em className={colorTheme.background.light}></em>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }

    toggle = () => {
        this.setState({open: ! this.state.open});
    }
}