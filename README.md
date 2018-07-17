forrestlyman.github.io
======================

Thanks for checking out my site! I built this on React using `create-react-app`, with custom WebPack configuration for 
sass module support.

Getting Started
---------------

If you would like to play around with the site or use this as a template for something of your own please start by [creating 
a fork](https://help.github.com/articles/fork-a-repo/).

Once you have cloned your fork you can run the site with NPM or Yarn:

    cd /path/to/app
    npm i
    npm run start

Once the testing server is running you can view the site at http://localhost:3000
    
Developing
----------

### Theme and Design

I use SASS modules for the site styles, with two core stylesheets which define common variables and a collection of mixins.

* /src/styles/variables.scss
* /src/styles/mixins.scss

Each component has a associated SASS file, while common theme attributes are managed with the Theme Context, which exposes
methods to get and set the theme. The actual theme styles are predefined sass classes.

```javascript
const ThemedComponent = () => {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <div className={theme.background.dark}>
                    <h2 className={theme.color.light}>Themed Component</h2>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
```

### Components

I like to keep the App component as lightweight as possible, so this case it just loads the `/src/components/ui/Ui` component.

The `Ui` component provides the theme context and sets the basic page layout.

Within this layout the application is organized into two sections:

* Main: the main content body with links to connect, the theme color selector, and a list of my core skill set.
* Resume: this is my current portfolio, which loads data from the `/src/components/ui/Resume/resumeData.js` file

Building and Deploying
----------------------

I'm hosting this site on GitHub pages which automatically uses the master branch as the public root for personal pages.
Unfortunately, this means that you can't use standard GitFlow and you need to commit the built files. Not ideal in my 
personal opinion, but thats the way it is for now.

I've included a build script that builds the production version of the site, then deploys the build directory to the 
master branch:

    npm run deploy
    
___I'm going to add a Travis file shortly that will automatically build the `develop` when you push it.___
    
License
----------

The work is licensed under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/). Feel free to use it as
a template for your next awesome project, just please give attribution.

