// Dependencies
import serialize from 'serialize-javascript'

// Config
import { publicPath } from '~/config'

type HTMLMetaData = {
  title: string
  initialState?: any
}

const html = (options: HTMLMetaData) => {
  const { title, initialState = {} } = options

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <script defer="" src="${publicPath}vendor.js"></script>
        <script defer="" src="${publicPath}main.js"></script>
      </head>
      <body>
        <div id="root"></div>

        <script>
          window.initialState = ${serialize(initialState)};
        </script>
      </body>
    </html>
  `
}

export default html
