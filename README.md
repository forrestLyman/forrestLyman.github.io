Forrest Lyman
=============

Thanks for checking out my site! I built this on React using `create-react-app`, with custom WebPack configuration for 
sass support.

Getting Started
---------------

If you would like to play around with the site or use this as a template for something of your own please start by [creating 
a fork](https://help.github.com/articles/fork-a-repo/).

Once you have cloned your fork you can run the site with NPM or Yarn:

    cd /path/to/app
    npm i
    npm run start

Once the testing server is running you can view the site at http://localhost:3000

Building and Deploying
----------------------

I'm hosting this site on GitHub pages which automatically uses the master branch as the public root for personal pages.
Unfortunately, this means that you can't use standard GitFlow and you need to commit the built files. Not ideal in my 
personal opinion, but thats the way it is for now.

I've included a build script that builds the production version of the site, then deploys the build directory to the 
master branch:

    npm run deploy
    
Developing
----------

The site is organized in two sections; the main body content and my resume...

