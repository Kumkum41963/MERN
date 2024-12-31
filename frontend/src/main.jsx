import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from '@/components/ui/provider';  // Import ChakraProvider
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>  {/* Wrap with ChakraProvider */}
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);



