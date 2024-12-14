import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/slidebar/sidebar';
import Websolexadmin from './pages/websolexadmin';
import Header from './components/header/header';
import Crm from './pages/crmadmin';
import Markating from './pages/markatingadmin';
import Valuedclientadd from './pages/websolex/valuedclientadd';
import Latestworkadd from './pages/websolex/latestworkadd';
import Notfound from './pages/notfound';
import { GridLoader } from 'react-spinners';
import Clienttest from './pages/websolex/clienttest';
import Login from './pages/user/login';
import Register from './pages/user/register';
import Profile from './pages/user/profile';


const Layout = ({ children }) => {
  const [isopensidebar, setisopensidebar] = useState(false);
  const [loading, setLoading] = useState(true);

  const toogleslidebar = () => {
    setisopensidebar(!isopensidebar);
  };

  const closeslidebar = () => {
    setisopensidebar(false);
  };

  // Simulate loading delay
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-screen sm:w-full h-full lg:h-screen bg-[#f1f5f9]">
      {loading ? (
        <div className="flex items-center justify-center w-screen h-screen ">
          <GridLoader color="#007bff" />
        </div>
      ) : (
        <>
          {/* Sidebar */}
          <Sidebar closeslidebar={closeslidebar} isopensidebar={isopensidebar} />

          {/* Main Content */}
          <div className="flex flex-col flex-1">
            {/* Header */}
            <Header toogleslidebar={toogleslidebar} />

            {/* Routes */}
            <div className="w-screen overflow-x-hidden sm:w-full">
                <main className="pl-0">{children}</main>
              </div>
            </div>
          </>
      )}
    </div>
  );
};

function App() {

  return (
    <div className="bg-[#f1f5f9] w-full ">
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Websolexadmin /></Layout>} />
          <Route path='/websolex/valuedclient' element={<Layout><Valuedclientadd /></Layout>} />
          <Route path='/websolex/latestworkadd' element={<Layout><Latestworkadd /></Layout>} />
          <Route path='/websolex/clientrate' element={<Layout><Clienttest /></Layout>} />

          <Route path='/crm' element={<Layout><Crm /></Layout>} />

          <Route path='/marketing' element={<Layout><Markating /></Layout>} />
          <Route path='*' element={<Notfound />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Layout><Profile /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
