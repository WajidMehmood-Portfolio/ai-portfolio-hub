/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './app/layout';
import HomePage from './app/page';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Shells for dynamic routes requested by user */}
          <Route path="/projects/:slug" element={<HomePage />} />
          <Route path="/ml-case-studies/:slug" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
