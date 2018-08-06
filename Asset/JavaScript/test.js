// 创建 Canvas
var canvas = wx.createCanvas()

// 在 Canvas 上进行绘制
var context = canvas.getContext('2d')
context.fillStyle = 'red'
context.fillRect(0, 0, 100, 100)

// 显示图片
var image = wx.createImage()
image.src = './Image/WhiteAlbum.png'
image.onload = function () {
  console.log(image.width, image.height)
  context.drawImage(image, 0, 0)
}

// 触摸事件
wx.onTouchStart(function (e) {
  console.log(e.touches)
})

wx.onTouchMove(function (e) {
  console.log(e.touches)
})

wx.onTouchEnd(function (e) {
  console.log(e.touches)
})

wx.onTouchCancel(function (e) {
  console.log(e.touches)
})

// 播放音频
var audio = wx.createInnerAudioContext()
audio.src = "./Audio/test.mp3" // src 可以设置 http(s) 的路径，本地文件路径或者代码包文件路径
audio.play()