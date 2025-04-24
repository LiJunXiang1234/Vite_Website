import './OrangeClassification.css'
import '../fonts.css'
import { useNavigate } from 'react-router-dom';


function OrangeClassification() {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/page2');  // 替换为目标路由
  };

  return (
    <div className="container">
      <img src="src\assets\svg-image\Orange.svg" className="corner-image" />
      <div className='context'>
        <div className='titleContext'>
            <p className='titleText'><span className='ORANGE'>ORANGE</span> CLASSIFICATION</p>
            <p className='storyText'>写一段橘子内部品质分选的故事（一颗橘子的命运？）</p>
        </div>
        <div className='storyContext'>
            <p className='describeText'>选择一颗代表不同品质的橘子卡片,<br />放在分选设备的红外摄像头下，<br />
看看它最终会被送去哪里？</p>
            <button className='startButton' onClick={ handleStart }>START</button>
        </div>
      </div>
    </div>
  )
}

export default OrangeClassification