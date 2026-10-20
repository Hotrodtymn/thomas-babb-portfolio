import { fireEvent, render, screen, within, waitFor } from '@testing-library/react';
import App from './App';
import projects from './data/projects';

beforeEach(() => {
  window.history.replaceState({}, '', '/');
  document.head.innerHTML = '<link rel="canonical" href="https://www.thomasbabb.com/" />';
});

test('home, resume, navigation and route metadata work', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Hi, I'm Thomas Babb");
  expect(screen.getByRole('link', { name: 'Download Resume' })).toHaveAttribute('download', 'Thomas-Babb-Resume.pdf');
  fireEvent.click(within(screen.getByRole('navigation')).getByText('About'));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Building for the web');
  expect(document.title).toBe('About | Thomas Babb | Frontend Developer');
  fireEvent.click(within(screen.getByRole('navigation')).getByText('Projects'));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Projects');
  fireEvent.click(screen.getByText('SkinStatic', { selector: '.project-card__title' }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('SkinStatic');
  expect(screen.getByRole('link', { name: 'View on GitHub' })).toHaveAttribute('href', 'https://github.com/Hotrodtymn/Skinstatic-intern');
});

test.each(projects)('$title detail page renders with valid links and gallery focus', (project) => {
  window.history.replaceState({}, '', `/projects/${project.slug}`);
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(project.title);
  expect(screen.getByRole('link', { name: 'View Live Site' })).toHaveAttribute('href', project.live);
  const trigger = screen.getByRole('button', { name: `View ${project.title} screenshot 1` });
  trigger.focus(); fireEvent.click(trigger);
  const dialog = screen.getByRole('dialog');
  expect(dialog).toContainElement(document.activeElement);
  fireEvent.keyDown(window, { key: 'ArrowRight' });
  expect(within(dialog).getByRole('img')).toHaveAttribute('src', project.screenshots[1]);
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();
});

test('contact traps focus, submits the form and restores focus on Escape', async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: true });
  render(<App />);
  const trigger = screen.getByRole('button', { name: 'Contact Me' });
  trigger.focus(); fireEvent.click(trigger);
  const dialog = screen.getByRole('dialog');
  const close = within(dialog).getByRole('button', { name: 'Close contact form' });
  expect(close).toHaveFocus();
  fireEvent.keyDown(close, { key: 'Tab', shiftKey: true });
  expect(screen.getByRole('button', { name: 'Send Message' })).toHaveFocus();
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello' } });
  fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));
  await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Your message has been sent'));
  expect(fetch).toHaveBeenCalledTimes(1);
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();
});

test('mobile menu closes on Escape and unknown routes render a useful fallback', () => {
  window.history.replaceState({}, '', '/missing');
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Page Not Found');
  const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.keyDown(toggle, { key: 'Escape' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveFocus();
});
