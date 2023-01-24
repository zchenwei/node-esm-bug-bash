import { createRoot } from 'react-dom/client';
import App from './app_mjs';
// import App from './app_cjs';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
