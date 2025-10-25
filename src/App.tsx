import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'

import Login from './screens/auth/login'
import HotelOwner from './screens/hetelOwner/hotelOwner'
import HotelOwnerFormBasic from './components/hotelOwner/HotelOwnerFormBasic'
import HotelOwnerFormPremium from './components/hotelOwner/HotelOwnerFormPremium'
import HotelOwnerFormGrand from './components/hotelOwner/HotelOwnerFormGrand';
import HotelOwnerFormExclusive from './components/hotelOwner/HotelOwnerFormExclusive'
import { useTranslation } from "react-i18next";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/hotelowner' element={<HotelOwner/>}>
          <Route index element={<Navigate to="basic" replace />} />
          <Route path='basic' element={<HotelOwnerFormBasic/>}/>
          <Route path='premium' element={<HotelOwnerFormPremium/>}/>
          <Route path='grand' element={<HotelOwnerFormGrand/>}/>
          <Route path='exclusive' element={<HotelOwnerFormExclusive/>}/>
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}
function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Not Found</p>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
        >
          {t("navigation.goToHome")}
        </Link>
      </div>
    </div>
  );
}
export default App
