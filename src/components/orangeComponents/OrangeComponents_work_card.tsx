import OrangeComponents_normal_button from './OrangeComponents_normal_button'
import './OrangeComponents_work_card.css'

interface Props{
  set_width: string,
  set_height: string,
  bar_name: string
}

function OrangeComponents_work_card({ set_width, set_height, bar_name}: Props) {
  return (
    <div 
      className='orangeComponents_work_card' 
      style={{
        width: set_width,
        height: set_height
      }}
    >
        <div className='orangeComponents_work_card_bar'>
            <span className='orangeComponents_work_card_bar_name'>{bar_name}</span>
            <OrangeComponents_normal_button />
        </div>
        <div className='orangeComponents_work_card_empty'>
            <span className='orangeComponents_work_card_empty_tips'>——请选择模型模板——</span>
        </div>
    </div>
  )
}

export default OrangeComponents_work_card