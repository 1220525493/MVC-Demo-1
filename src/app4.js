const $circle = $('#app4 .circle')

$circle.on('click',()=>{
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})