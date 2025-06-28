import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { store } from '@store/store';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import LoadingSpinner from '@components/common/LoadingSpinner';
import ErrorBoundary from '@components/common/ErrorBoundary';
import ChatWidget from '@components/chat/ChatWidget';

// Lazy load pages for better performance
const HomePage = lazy(() => import('@pages/HomePage'));
const SearchResultsPage = lazy(() => import('@pages/SearchResultsPage'));
const BookingPage = lazy(() => import('@pages/BookingPage'));
const ConfirmationPage = lazy(() => import('@pages/ConfirmationPage'));
const ProfilePage = lazy(() => import('@pages/ProfilePage'));
const SEORoutePage = lazy(() => import('@pages/SEORoutePage'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Router>
            <ErrorBoundary>
              <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-grow-1">
                  <Suspense fallback={<LoadingSpinner fullScreen />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/search" element={<SearchResultsPage />} />
                      <Route path="/booking/:flightId" element={<BookingPage />} />
                      <Route path="/confirmation/:bookingId" element={<ConfirmationPage />} />
                      <Route path="/profile" element={<ProfilePage />} />
                      <Route path="/flights/:origin-to-:destination" element={<SEORoutePage />} />
                      <Route path="*" element={<div>404 - Page not found</div>} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
                {process.env.REACT_APP_ENABLE_CHAT === 'true' && <ChatWidget />}
              </div>
            </ErrorBoundary>
          </Router>
        </HelmetProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;