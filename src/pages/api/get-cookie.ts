// src/pages/api/get-cookie.ts
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'cookie';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method === 'GET') {
    const cookies = parse(req.headers.cookie || '');
    const myCookie = cookies.myCookie;

    res.statusCode = 200;
    res.json({ myCookie });
  } else {
    res.statusCode = 405;
    res.end();
  }
}
