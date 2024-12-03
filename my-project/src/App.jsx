
import './App.css'
import DialogComponent from './PracticeComponents/DialogComponent'
import DrawerComponent from './PracticeComponents/DrawerComponent'

function App() {

  return (
    <div className='bg-[url(https://png.pngtree.com/background/20230412/original/pngtree-nature-forest-sun-ecology-picture-image_2394782.jpg)] w-full min-h-screen'>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    {/* <DrawerComponent/> */}
    <DialogComponent/>
    </div>
  )
}

export default App
