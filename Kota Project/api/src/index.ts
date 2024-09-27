import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import userRoutes from './routes/user.routes'
import { addItemRoutes } from './routes/addItem.routes'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

//user routes
app.route('/user', userRoutes)
// app.route('addItem', addItemRoutes )

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
