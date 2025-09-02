import Conversion from './components/Conversion'

function App() {
  return (
    <>
      <h1 className="text-4xl lg:text-6xl font-bold text-center py-10">Unit Conversion App <span className="text-xl block lg:inline">by Muhmmad Nawaz</span></h1>
      <div className="h-96 flex items-center justify-center py-2">
        <Conversion/>
      </div>
    </>
  )
}

export default App
