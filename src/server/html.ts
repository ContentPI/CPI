// Utils
import { isProduction } from './utils'

export default function html({ title = 'ContentPI' }) {
  const path = isProduction ? '' : 'http://localhost:3001/'

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
      </head>
      <body>
        <div id="root"></div>
        <script defer="" src="${path}vendor.js"></script>
        <script defer="" src="${path}main.js"></script>
      </body>
    </html>
  `
}
