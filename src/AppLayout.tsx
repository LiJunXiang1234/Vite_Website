import "./App.css"
import ColorTest from "./components/ColorTest"
import AntdLayout from "./layouts/AntdLayout"

// 配置路由结构
import { Routes, Route} from  'react-router-dom'

function AppLayout() {
  return (
    <div className="APPdiv">
      <Routes>
          <Route path="/" element={<AntdLayout />} />
          <Route path="/t" element={<ColorTest />} />
      </Routes>
    </div>
  )
}

export default AppLayout