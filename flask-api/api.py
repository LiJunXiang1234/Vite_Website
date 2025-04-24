from flask import Flask, request, jsonify
import cv2
import numpy as np
import base64
import re
from flask_cors import CORS
import colorsys


app = Flask(__name__)
CORS(app)  # 启用 CORS 支持

color_dict = {
    "红色": [(0, 100, 100), (10, 255, 255)],
    "橙色": [(11, 100, 100), (25, 255, 255)],
    "黄色": [(26, 100, 100), (35, 255, 255)],
    "绿色": [(36, 100, 100), (85, 255, 255)],
    "蓝色": [(86, 100, 100), (125, 255, 255)],
    "紫色": [(126, 100, 100), (150, 255, 255)],
    "黑色": [(0, 0, 0), (180, 255, 50)],
    "白色": [(0, 0, 200), (180, 50, 255)],
    "灰色": [(0, 0, 51), (180, 50, 199)]
}


def process_image(img_array):
    # 图像识别逻辑：示例为灰度图平均值作为“结果”
    gray = cv2.cvtColor(img_array, cv2.COLOR_BGR2GRAY)
    mean_val = np.mean(gray)
    return mean_val


from sklearn.cluster import KMeans
# 提取主色（用 KMeans 聚类）
def extract_dominant_color(img, k=3):
    img_small = cv2.resize(img, (100, 100))  # 降采样加快速度
    img_rgb = cv2.cvtColor(img_small, cv2.COLOR_BGR2RGB)
    img_flat = img_rgb.reshape((-1, 3))

    kmeans = KMeans(n_clusters=k, random_state=0).fit(img_flat)
    dominant_color = kmeans.cluster_centers_[0].astype(int)
    return tuple(dominant_color)  # (R, G, B)

def rgb_to_hsv(rgb):
    r, g, b = rgb
    r, g, b = r/255, g/255, b/255
    h, s, v = colorsys.rgb_to_hsv(r, g, b)
    return (int(h*180), int(s*255), int(v*255))  # OpenCV风格的HSV

def match_color(hsv, color_dict):
    for name, (lower, upper) in color_dict.items():
        if all(lower[i] <= hsv[i] <= upper[i] for i in range(3)):
            return name
    return "未知颜色"





@app.route('/process', methods=['POST'])
def process():
    data = request.json['image']
    # 去掉 data:image/jpeg;base64, 的前缀
    img_data = re.sub('^data:image/.+;base64,', '', data)
    img_bytes = base64.b64decode(img_data)
    np_arr = np.frombuffer(img_bytes, np.uint8)
    img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    result = process_image(img)
    color = (result,result,result)
    color_str = f"rgb({color[0]},{color[1]},{color[2]})"
    return jsonify({'result': result, 'color': color_str})

@app.route('/get_main_color', methods=['POST'])
def get_main_color():
    data = request.json['image']
    # 去掉 data:image/jpeg;base64, 的前缀
    img_data = re.sub('^data:image/.+;base64,', '', data)
    img_bytes = base64.b64decode(img_data)
    np_arr = np.frombuffer(img_bytes, np.uint8)
    img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
    
    rgb = extract_dominant_color(img)
    hsv = rgb_to_hsv(rgb)
    color_name = match_color(hsv, color_dict)

    return jsonify({
        'rgb': f"rgb({rgb[0]},{rgb[1]},{rgb[2]})",
        'color_name': color_name})
     


@app.route('/log')
def log():
    print("路由成功打印") 
    return "路由成功返回"

if __name__ == '__main__':
    app.run(debug=True)
