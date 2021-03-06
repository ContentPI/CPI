// Server App
import app from './server'

// Config
import { PORT } from '~/config'

const server = app.listen(PORT, () => {
  if (module.hot) {
    console.log('πππ Server hot reloading enabled πππ')
  }

  console.log(`πΊπΊπΊ Listening on port ${PORT} πΊπΊπΊ`)
})

if (module.hot) {
  module.hot.accept()

  module.hot.dispose(() => server.close())
}
