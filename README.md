# web-playground

> Quickly prototype your scripts, styles, etc. without worrying about setup

Yet another React, webpack, PostCSS starter repository you can use to play and plan.  Just make a couple components and test your ideas.

## Usage

Start the development server:

```
npm start
```

**Project structure:**

  * markup goes in `templates/`
  * scripts and styles go in `src/`
  * import whatever you want (vanilla JS, React, styles, images, whatever) to render into `src/index.js`

Hipster ES2017 stuff is supported:

```js
getWeather()
  .then(weather => console.log(weather))
  .catch(err => console.error(err))

/**
 * gets weather blah blah
 * async/await is amazing
 */
async function getWeather() {
  const response = await fetch('http://forecast.weather.gov/MapClick.php?textField1=36.14&textField2=-86.62&FcstType=json', { mode: 'cors' })
  return await response.json()
}
```

Like what you made and want to share it?  There's a script to minify/optimize everything and place it in `dist/`:

```
npm run build
```

## Install

Either [clone this repo](https://help.github.com/articles/cloning-a-repository/) or [download the zip file](https://github.com/blakek/web-playground/archive/master.zip)

## See Also

This repo is more of a playground/scratchpad than a production-ready starter.  If you need something for production usage, check out these awesome React starters:

  - [`zeit/next.js`](https://github.com/zeit/next.js)
  - [`facebookincubator/create-react-app`](https://github.com/facebookincubator/create-react-app)
  - [`eanplatter/enclave`](https://github.com/eanplatter/enclave)

## License

MIT
