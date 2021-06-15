// Config
import { publicPath } from '~/config'

type HTMLMetaData = {
  title: string
}

const html = (options: HTMLMetaData) => {
  const { title } = options

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
      </body>
    </html>
  `
}

export default html
