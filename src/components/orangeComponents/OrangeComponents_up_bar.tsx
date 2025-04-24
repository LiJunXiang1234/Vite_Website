import OrangeComponents_connect_state from './OrangeComponents_connect_state'
import './OrangeComponents_up_bar.css'

function OrangeComponents_up_bar() {
  return (
    <div className="orangeComponents_up_bar">
        <button className='orangeComponents_up_bar_button'>更多帮助</button>
        <button className='orangeComponents_up_bar_button'>联系人员</button>
        <OrangeComponents_connect_state />
    </div>
  )
}

export default OrangeComponents_up_bar