import { serve } from '@hono/node-server'
import { Hono, } from 'hono'
import { cors } from 'hono/cors'

import userRoutes from './routes/user.routes'
import { addItemRoutes } from './routes/ingredient.routes'

const app = new Hono()

// CORS options
app.use(
  cors({
    origin: `*`
  })
);

//routes
app.route('/user', userRoutes)
app.route('/addItem', addItemRoutes )

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})