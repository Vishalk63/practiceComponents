
import './App.css'
import CarouselComponent from './PracticeComponents/CarouselComponent'
import DialogComponent from './PracticeComponents/DialogComponent'
import DrawerComponent from './PracticeComponents/DrawerComponent'
import Login from './PracticeComponents/Login'
import MyCustomPopup from './PracticeComponents/MyCustomPopup'
import RoundedCard from './PracticeComponents/RoundedCard'
import SheetComponent from './PracticeComponents/SheetComponent'

function App() {

  return (
    // <div className='bg-[url(https://png.pngtree.com/background/20230412/original/pngtree-nature-forest-sun-ecology-picture-image_2394782.jpg)] w-full min-h-screen'>
    <div>
      <h1 className="text-3xl font-bold underline ">
        Hello world!
      </h1>

      {/* <DrawerComponent/> */}
      {/* <DialogComponent/> */}
      {/* <SheetComponent/> */}
      {/* <CarouselComponent /> */}
      {/* <RoundedCard/> */}
      {/* <Login/> */}
      <MyCustomPopup/>
    </div>
  )
}

export default App
