import './OrangeComponents_sider.css'
import OrangeComponents_opreate_button from './OrangeComponents_opreate_button'

import Icon_Block from './ICON/Block.svg'
import Icon_ClockCircle from './ICON/ClockCircle.svg'
import Icon_CloudUpload from './ICON/CloudUpload.svg'
import Icon_Desktop from './ICON/Desktop.svg'
import Icon_FolderOpen from './ICON/FolderOpen.svg'
import Icon_Proweroff from './ICON/Poweroff.svg'
import Icon_Setting from './ICON/Setting.svg'

function OrangeComponents_sider() {
  return (
    <div className='orangeComponents_sider'>
        <OrangeComponents_opreate_button
          imgUrl = {Icon_Proweroff}
          buttonText='开始分选'
          active = {true}
        > 
        </OrangeComponents_opreate_button>

        <OrangeComponents_opreate_button
          imgUrl = {Icon_Desktop}
          buttonText='监控画面'
          active = {false}
        > 
        </OrangeComponents_opreate_button>

        <OrangeComponents_opreate_button
          imgUrl = {Icon_ClockCircle}
          buttonText='历史数据'
          active = {false}
        > 
        </OrangeComponents_opreate_button>

        <OrangeComponents_opreate_button
          imgUrl = {Icon_Block}
          buttonText='校正光谱'
          active = {false}
        > 
        </OrangeComponents_opreate_button>

        <OrangeComponents_opreate_button
          imgUrl = {Icon_FolderOpen}
          buttonText='文件管理'
          active = {false}
        > 
        </OrangeComponents_opreate_button>

        <OrangeComponents_opreate_button
          imgUrl = {Icon_CloudUpload}
          buttonText='数据采集'
          active = {false}
        > 
        </OrangeComponents_opreate_button>

        <OrangeComponents_opreate_button
          imgUrl = {Icon_Setting}
          buttonText='基础设置'
          active = {false}
        > 
        </OrangeComponents_opreate_button>
    </div>
  )
}

export default OrangeComponents_sider