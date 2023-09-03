import type { EventHandler, EventHandlerRequest } from 'h3'

export const defineWrappedImprovedResponseHandler = <
	T extends EventHandlerRequest,
	D
>(
	handler: EventHandler<T, D>
) =>
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
