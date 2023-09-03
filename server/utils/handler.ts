import type { EventHandler } from 'h3'

export const defineWrappedResponseHandler = (handler: EventHandler) =>
	defineEventHandler(async event => {
		try {
			// do something before the route handler
			const response = await handler(event)
			// do something after the route handler
			return { response }
		} catch (err) {
			// Error handling
			return { err }
		}
	})
