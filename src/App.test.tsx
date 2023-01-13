import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import env from './setupEnv';
import location from 'location'

const server = setupServer(
  rest.post(env.baseURL + '/crawl', (req, res, ctx) => {
    return res(ctx.json({id: '#id'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('add new query to the list', async () => {
  render(<App />);

  const input = screen.getByPlaceholderText(location.searchPlaceholder);

  fireEvent.change(input, { target: { value: 'test'}});
  fireEvent.click(screen.getByText(location.search));

  await screen.findByText('#id');

  expect(screen.getByText('#id')).toBeInTheDocument();
});