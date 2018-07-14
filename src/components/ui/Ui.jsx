/**
 * Created by forrestlyman on 7/13/18
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Ui.scss';
import Main from './Main/Main';
import Resume from "./Resume/Resume";
import {ThemeProvider, ThemeContext} from "components/context/Theme/Theme";

export default class Ui extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        // setup on the server
    }

    componentDidMount() {
        // setup on the client
    }

    render() {
        const {className} = this.props;
        const style = cx(className, styles.default);
        return (
            <ThemeProvider>
                <div className={style}>
                    <ThemeContext.Consumer>
                        {({theme}) => (
                            <div className={styles.contentBody}>
                                <div className={cx(styles.main, theme.background.light)}>
                                    <div className={styles.spacer}></div>
                                    <div className={styles.col}>
                                        <Main />
                                    </div>
                                </div>
                                <div className={styles.aside}>
                                    <div className={styles.col}>
                                        <Resume/>
                                    </div>
                                    <div className={styles.spacer}></div>
                                </div>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                </div>
            </ThemeProvider>
        )
    }
}
