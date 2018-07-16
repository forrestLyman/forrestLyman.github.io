/**
 * Created by forrestlyman on 7/12/18
 */

import React from 'react';
import ResumeData from './resumeData';
import ResumeDetail from "./ResumeDetail/ResumeDetail";
import ResumeItem from './ResumeItem/ResumeItem';
import styles from './Resume.scss';

export default class Resume extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: ResumeData[3]
        }
    }

    render() {
        const {current} = this.state;
        return (
            <div className={styles.list}>
                {ResumeData.map((item, key) => (
                    <React.Fragment key={key}>
                        <ResumeItem active={current === item} item={item}  onClick={this.setItem}/>
                        <ResumeDetail item={item} open={current === item} onClose={this.setItem}/>
                    </React.Fragment>
                ))}
            </div>
        )
    }

    setItem = (item) => {
        const current = item === this.state.current ? false : item;
        this.setState({current});
    }
}