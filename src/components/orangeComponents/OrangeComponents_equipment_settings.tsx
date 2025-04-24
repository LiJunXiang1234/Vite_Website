import './OrangeComponents_equipment_settings.css'
import OrangeComponents_settings_button from './OrangeComponents_settings_button'

import Icon_Alert_On from '../orangeComponents/ICON/Alert_On.svg'
import Icon_Alert_Off from '../orangeComponents/ICON/Alert_Off.svg'
import Icon_Clock_On from '../orangeComponents/ICON/Clock_On.svg'
import Icon_Clock_Off from '../orangeComponents/ICON/Clock_Off.svg'
import Icon_Disconnect_On from '../orangeComponents/ICON/Disconnect_On.svg'
import Icon_Disconnect_Off from '../orangeComponents/ICON/Disconnect_Off.svg'
import Bell from '../orangeComponents/ICON/Bell.svg'

function OrangeComponents_equipment_settings() {
  return (
    <div className="orangeComponents_equipment_settings">
        <span className='orangeComponents_equipment_settings_text'>设备设置</span>
        <div className='orangeComponents_equipment_settings_group'>
            <OrangeComponents_settings_button
                icon_On={Icon_Alert_On}
                icon_Off={Icon_Alert_Off}
                text='开/关卤素灯'
                is_Active={true}
            />

            <OrangeComponents_settings_button
                icon_On={Icon_Clock_On}
                icon_Off={Icon_Clock_Off}
                text='执行器归零'
                is_Active={true}
            />

            <OrangeComponents_settings_button
                icon_On={Icon_Disconnect_On}
                icon_Off={Icon_Disconnect_Off}
                text='链接机组'
                is_Active={true}
            />

            <div className='OrangeComponents_equipment_settings_Bell'>
                <img src={Bell}></img>
                <span className='OrangeComponents_equipment_settings_Bell_text'>警报</span>
            </div>
        </div>
    </div>
  )
}

export default OrangeComponents_equipment_settings