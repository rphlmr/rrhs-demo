import type { MiddlewareHandler } from "hono";
import { createMiddleware } from "hono/factory";
import { AsyncLocalStorage } from "node:async_hooks";

interface Context {
	url: string | undefined;
	path: string | undefined;
	method: string | undefined;
}

const asyncLocalStorage = new AsyncLocalStorage<Context>();

export function contextStorageMiddleware(): MiddlewareHandler {
	return createMiddleware(async (ctx, next) => {
		await asyncLocalStorage.run(
			{
				url: ctx.req.url,
				path: ctx.req.path,
				method: ctx.req.method,
			},
			next
		);
	});
}

export function getContext(): Context | undefined {
	return asyncLocalStorage.getStore();
}
