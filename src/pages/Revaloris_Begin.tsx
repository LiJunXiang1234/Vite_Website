import OrangeComponents_equipment_settings from '../components/orangeComponents/OrangeComponents_equipment_settings'
import OrangeComponents_normal_button from '../components/orangeComponents/OrangeComponents_normal_button'
import OrangeComponents_work_card from '../components/orangeComponents/OrangeComponents_work_card'
import './Revaloris_Begin.css'

function Revaloris_Begin() {
  return (
    <div className='revaloris_begin_div'>
        <div className='revaloris_begin_div_1'>
            <OrangeComponents_normal_button />
            <OrangeComponents_normal_button />
            <OrangeComponents_normal_button />
        </div>
        <div className='revaloris_begin_div_2'>
            <OrangeComponents_work_card
                set_height='auto'
                set_width='100%'
                bar_name='分类模型'
            />
            <OrangeComponents_equipment_settings />
        </div>
        <OrangeComponents_work_card 
            set_height='381px'
            set_width='auto'
            bar_name='指标设定'
        />
    </div>
  )
}

export default Revaloris_Begin