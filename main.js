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
  },1000)
}

$('.window').on('mouseenter',function(){
  window.clearInterval(timerId)
})
$('.window').on('mouseleave',function(){
  autoPlay()
})
