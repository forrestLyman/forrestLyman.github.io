import React from 'react';
import styles from './Theme.scss';

export const ThemeContext = React.createContext();

const themeKey = 'theme';

export class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            themes: ['bluejeans','mint','sunflower','grapefruit'],
            current: 'bluejeans',
            theme: false,
            setTheme: this.setTheme,
            getTheme: this.getTheme
        };
    }

    componentWillMount() {
        this.setTheme(sessionStorage.getItem(themeKey));
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

    themedClassName = (className, theme) => {
        if(! theme) theme = this.state.current;
        return `${className}-${theme}`;
    }

    setTheme = (theme) => {
        // default theme
        if(theme === null ) theme = this.state.current;

        // validate theme
        if(this.state.themes.indexOf(theme) === -1) {
            console.error('Invalid theme: ' + theme);
            return;
        }
        sessionStorage.setItem(themeKey, theme);

        this.setState({current: theme, theme: this.getTheme(theme)});
    }

    getTheme = (theme) => {
        return {
            background: {
                dark: styles['background-dark-' + theme],
                light: styles['background-light-' + theme],
            },
            color: {
                dark: styles['color-dark-' + theme],
                light: styles['color-light-' + theme],
                active: styles['color-active-' + theme],
                white: styles['color-white']
            }
        };
    }
}
