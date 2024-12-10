// import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/slidebar/sidebar';
// import Websolexadmin from './pages/websolexadmin';
// import Header from './components/header/header';
// function App() {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <Header/>
//         <Routes>
//           <Route path="/dashboard/ecommerce/mainadmin" element={<Websolexadmin />} />
//           {/* <Route path="/dashboard/ecommerce/data" element={<Data />} /> */}
//           {/* Add other routes here */}
//         </Routes>
//      </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/slidebar/sidebar';
import Websolexadmin from './pages/websolexadmin';
import Header from './components/header/header';
import Crm from './pages/crmadmin';
import Markating from './pages/markatingadmin';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#f1f5f9] ">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <Header />

          {/* Routes */}
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/mainadmin" element={<Websolexadmin />} />
              <Route path='/crm' element={<Crm />} />
              <Route path='/marketing' element={<Markating />} />
              
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
