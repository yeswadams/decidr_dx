import { createServer } from 'node:http';

const host = process.env.RUNNER_HOST || '127.0.0.1';
const rawPort = process.env.RUNNER_PORT || '4100';
const port = Number(rawPort);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('RUNNER_PORT must be an integer between 1 and 65535');
}

const server = createServer((request, response) => {
  response.setHeader('content-type', 'application/json; charset=utf-8');

  if (request.method === 'GET' && request.url === '/health') {
    response.writeHead(200).end(JSON.stringify({ status: 'ok', service: 'decidr-runner' }));
    return;
  }

  response.writeHead(501).end(
    JSON.stringify({
      status: 'not_configured',
      message: 'Execution is not implemented in this runner foundation.',
    }),
  );
});

server.listen(port, host, () => {
  console.info(`Decidr runner bootstrap listening on http://${host}:${port}`);
});
