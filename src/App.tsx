import "./App.css"
import ColorTest from "./components/ColorTest"

// 配置路由结构
import { Routes, Route} from  'react-router-dom'

function App() {
  return (
    <div className="APPdiv">
      <Routes>
          <Route path="/" element={<ColorTest />} />
          <Route path="/page2" element={<ColorTest />} />
      </Routes>
    </div>
  )
}

export default App