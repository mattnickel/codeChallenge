
$('span').on('click', function(e){
  $(this).toggleClass('unchecked');
  $(this).toggleClass('checked');
  });
$('li').on('click', function(){
  $(this).toggleClass('linethrough')
});

