
import { IncomingMessage, ServerResponse } from 'http';
import { serialize } from 'cookie';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
    if (req.method === 'GET') {
        const cookie = serialize('myCookie', 'cookieValue', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });

        res.setHeader('Set-Cookie', cookie);
        res.statusCode = 200;
        res.end('Cookie has been set');
    } else {
        res.statusCode = 405;
        res.end();
    }
}
