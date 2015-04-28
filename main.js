//ingredients checklist line out
$('span').on('click', function(e){
  $(this).toggleClass('unchecked');
  $(this).toggleClass('checked');
  });//$(e.target.textcontent).toggleClass('.linethrough')
$('li').on('click', function(){
  $(this).toggleClass('linethrough')
});

