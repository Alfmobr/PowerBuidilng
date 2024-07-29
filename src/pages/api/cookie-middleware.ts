// src/middleware/cookie-middleware.ts
import { parse, serialize } from 'cookie';
import { IncomingMessage, ServerResponse } from 'http';

export function cookieMiddleware(req: IncomingMessage, res: ServerResponse, next: () => void) {
  const cookies = parse(req.headers.cookie || '');
  console.log('Cookies:', cookies);

  const cookie = serialize('myMiddlewareCookie', 'middlewareValue', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);

  next();
}
