import REVALORIS_Logo_Wihte from '../orangeComponents/ICON/REVALORIS_Logo_Wihte.svg'
import OrangeComponents_sider from './OrangeComponents_sider'

import './OrangeComponents_sider_ICON.css'

function OrangeComponents_sider_ICON() {
  return (
    <div className='orangeComponents_sider_with_ICON'>
        <img src={REVALORIS_Logo_Wihte} alt='OrangeComponents_sider_ICON' className='orangeComponents_Logo'></img>
        <OrangeComponents_sider />
    </div>
  )
}

export default OrangeComponents_sider_ICON