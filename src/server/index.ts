// Server App
import app from './server'

// Config
import { PORT } from '../config'

const server = app.listen(PORT, () => {
  if (module.hot) {
    console.log('🚀🚀🚀 Server hot reloading enabled 🚀🚀🚀')
  }

  console.log(`🍺🍺🍺 Listening on port ${PORT} 🍺🍺🍺`)
})

if (module.hot) {
  module.hot.accept()

  module.hot.dispose(() => server.close())
}
