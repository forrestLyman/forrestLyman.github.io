/**
 * Created by forrestlyman on 7/16/18
 */

import ColorSelector from 'components/ui/Main/ColorSelector/ColorSelector';
import { faEnvelope, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import styles from './Toolbar.scss';

const Toolbar = (props) => {
    return (
        <div className={styles.default}>
            <a href="https://github.com/forrestLyman" rel="noopener noreferrer" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/forrestlyman/" rel="noopener noreferrer" target="_blank"> <FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="mailto: forrestswork@gmail.com" rel="noopener noreferrer" target="_blank"> <FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://docs.google.com/document/d/1ToCkb-CMW_79QBJY2h8opyYt-QEjStrSDbnYTl3CLvo/edit?usp=sharing" rel="noopener noreferrer" target="_blank"> <FontAwesomeIcon icon={faCloudDownloadAlt} /></a>
            <div className={styles.spacer}></div>
            <ColorSelector/>
        </div>
    )
}

export default Toolbar;