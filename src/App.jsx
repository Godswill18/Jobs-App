import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import EditJobPage from './pages/EditJobPage';





const App = () => {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
  
        <Route index element={<HomePage/>} />
        <Route path='/jobs' element={<JobsPage/>} />
        <Route path='/add-job' element={<AddJobPage />} />
        <Route path='/edit-job/:id' element={<EditJobPage/>} loader={jobLoader} />
        <Route path='/job/:id' element={<JobPage/>} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
  )
  )

  
  return <RouterProvider router={router}/>;
}

export default App
