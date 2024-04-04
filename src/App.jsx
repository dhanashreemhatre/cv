import './App.css'
import MainContent from './Components/MainContent'
import SideBar from './Components/SideBar'

function App() {
 

  return (
    <>
      <div className='dark:bg-black'>
        <div className='relative min-h-screen'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='sticky top-0 h-screen'>
              <SideBar />
            </div>
            <div>
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
