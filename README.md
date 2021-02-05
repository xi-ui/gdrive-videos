# gdirve-video

## CORS Issues
In development accessing google drive was
a pain you can read about it
[here]([here](https://github.com/webpack/webpack-dev-server/issues/533)).

Looks there is no easy way to setup current
webpack webserver to configure CORS so you have
the two options of either switching to a whole
new server or a browser plugin.

For me I wanted to keep it simple and went with
the browser plugin option.

### Browser plugins
Configure StreamShow.js to use native html5
vidoe:
```html
        <video
          style={{ width: '100%'}}
          controls
        >
          <source src={url} type={'video/mp4'} />
        </video>
```

Need to work around CORS issues for development.
```bash
npm install --save-dev webpack-browser-plugin
```
Then configure the plugin in webpack.config.js:                     

```javascript
// WebPacker Browser Plugin for development to get around CORS issues
const WebpackBrowserPlugin = require('webpack-browser-plugin');
// FIXME -- Not sure if I need this hardcode value of my data directory
const chromeUserDataDir = '/Users/seizadi/Documents';


module.exports = {
...
...

    plugins: [
      new WebpackBrowserPlugin({
        openOptions: {
          app: [
            '/usr/bin/open',
            '/Applications/Google\\ Chrome.app',
            //'--incognito',
            '--disable-web-security', // to enable CORS
            '--user-data-dir=' + path.resolve(chromeUserDataDir) // to let Chrome create and store here developers plugins, settings, etc.
          ]
        }
      })
    ],

....
}

I could not get the broswer plugin to work:
``bash
❯ yarn start
yarn run v1.21.1
$ react-scripts start
Cannot read property 'watch-run' of undefined
error Command failed with exit code 1.

````

Gave up and used an iframe instead for now :(

```html
    <iframe title={'Video Player'} src={url} />
```
