import "./ColorTest.css"
import '../fonts.css'
import { useEffect, useRef, useState } from "react"
import { Button } from "antd";

function ColorTest() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 定义信号颜色3
  const redSign = "#F89191";
  const greenSign = "#78E676";
  // 设置状态
  const [connnectStatus, setConnnectStatus] = useState("未连接");
  const [connnectStatusColor, setConnnectStatusColor] = useState(redSign)
  const [recognitionStatus, setRecognitionStatus] = useState("未识别");
  const [recognitionStatusColor, setRecognitionStatusColor] = useState(redSign)

  const [returnColor, setReturnColor] = useState("rgb(0,0,0)")


    
  // 创建一个引用对象，用来绑定对应标签，标签有ref属性，相同的名称来对应

  useEffect(() => {
    // 副作用逻辑
    const video = videoRef.current!;
    const canvas = canvasRef.current!;
    //为什么要加！->表明这个绝对不是空值，请不要报错

    // 切换颜色的统一函数
    const setStatus = (
      setFunction: React.Dispatch<React.SetStateAction<string>>,
      myStatus: string
    ) => {
      setFunction(myStatus);
    }


    // 调用浏览器摄像头，并将视频流播放在<video>元素中
    // 这里的video必须是已经挂载在页面上的<video>元素
    navigator.mediaDevices.getUserMedia({ video: true})
      .then(stream => {
        video.srcObject = stream;
        // 如果成功连接，则改变连接状态
        setStatus(setConnnectStatus, "已连接")
        setStatus(setConnnectStatusColor, greenSign)
      });

    const interval = setInterval(() => {
      if(!video.videoWidth || !video.videoHeight) return;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(video, 0, 0);
      // ctx?. 是 可选链（optional chaining），如果 ctx 是 null，就不会报错

      const imageData = canvas.toDataURL('image/jpeg');
      // 返回值：它会返回一个以 data:image/jpeg;base64, 开头的字符串，代表了画布中的图像数据（经过 Base64 编码）。


      // method: 'POST'：指定 HTTP 请求方法是 POST，表示要向服务器发送数据。
      // headers: { 'Content-Type': 'application/json' }：设置请求的内容类型为 JSON，这意味着请求体中的数据是 JSON 格式。
      // body: JSON.stringify({ image: imageData })：这里是请求的内容部分，将 JavaScript 对象 { image: imageData } 转换为 JSON 字符串。imageData 是你从 <canvas> 元素获取的图像数据（一个 Base64 编码的字符串）。这个数据将会被发送到后端。
      fetch('http://127.0.0.1:5000/get_main_color', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageData }),
      })
        .then(res => res.json())
        .then(data => {
          // 更新识别状态
          setStatus(setRecognitionStatus, "已识别");
          setStatus(setRecognitionStatusColor, greenSign);
         
          console.log(data.rgb);  // 看看它是不是字符串
          setStatus(setReturnColor,data.rgb);
          
        });
    }, 1000);

    // 清理逻辑
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="color-test-card">
      <div className='color-test-header' style={{backgroundColor: returnColor}}></div>

      <video ref={videoRef} autoPlay className="video-stream" />
      <canvas ref={canvasRef} style={{display: 'none'}} />

      <div className='color-test-title-context'>
        <text className="color-test-title">颜色识别试验卡片</text>
        <div className="connection-status">
          <text className="connect-status-text" style={{backgroundColor: connnectStatusColor}}>
            {connnectStatus}
          </text>

          <text className="recognition-status-text" style={{backgroundColor: recognitionStatusColor}}>
            {recognitionStatus}
          </text>
          <Button className="mybtn">Antd Button </Button>
        </div>
      </div>

      <p className="description-text">
      调用摄像头获取图像信息，通过Flask访问后端，识别图像主要颜色，并反馈到顶部。
      </p>
    </div>
  )
}

export default ColorTest