/**
 * Created by forrestlyman on 7/12/18
 */

import PropTypes from 'prop-types';
import React from 'react';
import styles from './ResumeItem.scss';
import {ThemeContext} from "components/context/Theme/Theme";

const ResumeItem = ({active, item, onClick}) => {

    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <React.Fragment>
                    <div className={styles.resumeItem} onClick={() => onClick(item)}>
                        <div className={styles.header}>
                            <h2 className={theme.color.light}>{item.title}<small>{item.client}</small></h2>

                        </div>
                        <p>{item.tech.join(', ')}</p>
                    </div>
                </React.Fragment>
            )}
        </ThemeContext.Consumer>
    )
}

ResumeItem.propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func
}

export default ResumeItem;