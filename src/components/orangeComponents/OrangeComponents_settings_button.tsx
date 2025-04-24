import { Switch } from 'antd'
import { useState } from 'react'
import './OrangeComponents_settings_button.css'

interface Props{
    icon_On: string,
    icon_Off: string,
    text: string,
    is_Active: boolean
}

function OrangeComponents_settings_button({
    icon_On, 
    icon_Off,
    text,
    is_Active = false
}:Props) {
    const [active, setActive] = useState(is_Active)

    const handelSwitchChange = (cheched: boolean) => {
        setActive(cheched)
    }

    return (
        <div className={active ? 'orangeComponents_settings_button_on' : 'orangeComponents_settings_button_off'}>
            <img className='orangeComponents_settings_icon' src={ active ? icon_On : icon_Off } alt='icon'></img>
            <span className='orangeComponents_settings_text'>{text}</span>
            <Switch defaultChecked = {active} onChange={handelSwitchChange}></Switch>
        </div>
    )
}

export default OrangeComponents_settings_button