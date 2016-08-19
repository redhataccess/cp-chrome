# cp-chrome

Experimental Customer Portal chrome via Web Components.

## HACKING

If you don't have bower installed already:

    npm install -g bower

If you have a static file server already, feel free to use it, but I recommend
`http-server`.  So easy!

    npm install -g http-server

Onward:

    git clone git@github.com:redhataccess/cp-chrome.git
    cd cp-chrome
    bower install

Then make a symlink to your copy of avalon-docs:

    ln -s $YOUR_AVALON_PATH src/assets

And launch the server:

    http-server -g

You should now be able to visit the localhost URL that's printed in your
console.  Check out the examples.
