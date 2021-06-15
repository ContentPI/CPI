// Server App
import app from './server'

const PORT = process.env.PORT || 3000

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
