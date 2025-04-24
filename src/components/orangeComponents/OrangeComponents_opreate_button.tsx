import './orangeComponents_opreate_button.css'

type Props = {
  imgUrl: string,
  buttonText: string,
  active: boolean
}

function OrangeComponents_opreate_button({ imgUrl, buttonText, active}: Props) {
  return (
    <button className = {`orangeComponents_opreate_button ${active ? 'is-active' : ''}`}>
      <img src={imgUrl} alt='button icon' className='orangeComponents_icon_img'></img>
      <p className='orangeComponents_text_p'>{buttonText}</p>
    </button>
  )
}

export default OrangeComponents_opreate_button