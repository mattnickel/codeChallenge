$('li').on('click', function(){
  $(this).toggleClass('linethrough')
  $(this.children).toggleClass('unchecked');
  $(this.children).toggleClass('checked');
});

