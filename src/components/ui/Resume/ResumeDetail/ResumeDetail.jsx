/**
 * Created by forrestlyman on 7/12/18
 */
import cx from 'classnames';
import { faChevronRight, faCheck, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ResumeDetail.scss';
import {ThemeContext} from "components/context/Theme/Theme";

class ResumeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: false
        }
    }

    render (){
        const {item, onClose, open} = this.props;
        const {detail} = this.state;
        const className = open ? styles.detailWrapperOpen : styles.detailWrapper;
        const iconClass = open ? styles.close : styles.open;
        return (
            <ThemeContext.Consumer>
                {({theme}) => (
                    <div className={className}>
                        <div className={styles.detail}>
                            <button className={cx(iconClass, theme.color.light)} onClick={onClose}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>

                            <div className={styles.header}>
                                <h1 className={styles.title}>
                                    {item.title}
                                </h1>
                                <h2 className={styles.subtitle}>
                                    {item.client} <small>{item.location}</small>
                                </h2>
                                <p className={styles.dates}>{item.from} to {item.to}</p>
                            </div>

                            <div className={styles.screenshot}>
                                {item.confidential &&
                                    <div className={styles.confidential}>
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                        <p>Sorry, this project is currently confidential.</p>

                                        <a className={styles.learnMore} href="mailto: forrestswork@gmail.com">
                                            Learn More
                                        </a>
                                    </div>
                                }

                                {item.screenshot &&
                                    <div className={styles.screenshotScreen}>
                                        <img src={item.screenshot} alt={item.title} />
                                    </div>
                                }
                            </div>

                            <div className={styles[detail ? 'descriptionExpanded' : 'description']}>
                                <div className={styles.detailInner}>
                                    <blockquote>{item.description}</blockquote>
                                    <ul className={styles.skills}>
                                        {item.highlights.map((highlight, key) => (
                                            <li key={key}>
                                                <div className={styles.icon}>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </div>
                                                <div className={styles.skill}>
                                                    {highlight}
                                                </div>
                                            </li>
                                        ))}

                                    </ul>
                                    <p className={styles.tech}>{item.tech.join(', ')}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

ResumeDetail.propTypes = {
    item: PropTypes.object,
    onClose: PropTypes.func,
    open: PropTypes.bool
}

export default ResumeDetail;