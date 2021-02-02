var $buttons = $('button')
var index = 0
var size = $buttons.length
var timerId
playIndex()
autoPlay()
for(let i=0;i<$buttons.length;i++){
 $($buttons[i]).on('click',function(e){
   index = $buttons.index(this)%size
   playIndex()
 })
}

function playIndex(){
  $(images).css({'margin-left':-300*(index)+'px'})
   $buttons.eq(index).addClass('red')
     .siblings('.red').removeClass('red')
}

function autoPlay(){
  timerId = setInterval(function(){
    index =(index+1)%size
    playIndex()
  },2000)
}

$('.window').on('mouseenter',function(){
  window.clearInterval(timerId)
})
$('.window').on('mouseleave',function(){
  autoPlay()
})





//轮播二（无缝轮播）

var $images2 = $('.images2>img')
var n = 1
var size2 = $images2.length
//初始化
$images2.eq(0).addClass('current').siblings().addClass('right')
//自动播放
setInterval(function(){
  if(n===size2+1){n=1}
  $(`.images2>img:nth-child(${n})`).removeClass('current').addClass('left')
    .one('transitionend',function(e){
    $(e.currentTarget).removeClass('left').addClass('right')
  })

  $(`.images2>img:nth-child(${n+1-size2 > 0 ? 1 : n+1})`).removeClass('right').addClass('current')
  n +=1
},2000)