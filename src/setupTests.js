import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
window.scrollTo = jest.fn();
beforeEach(() => {
  window.matchMedia = jest.fn(() => ({ matches: false }));
});
