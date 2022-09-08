import { BrowserRouter, Route, Routes } from 'react-router-dom';

import OpportunitiesList from '../pages/OpportunitesList';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<OpportunitiesList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;