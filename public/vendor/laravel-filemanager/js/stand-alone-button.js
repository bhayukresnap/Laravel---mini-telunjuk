(function( $ ){

  $.fn.filemanager = function(type, options) {
    type = type || 'file';

    this.on('click', function(e) {
      var route_prefix = (options && options.prefix) ? options.prefix : '/laravel-filemanager';
      var target_input = $('#' + $(this).data('input'));
      var target_preview = $('#' + $(this).data('preview'));
      window.open(route_prefix + '?type=' + type, 'FileManager', "width="+screen.availWidth+",height="+screen.availHeight);
      window.SetUrl = function (items) {
        var file_path = items.map(function (item) {
          // set the value of the desired input to image url
        target_input.val('').val(item.url).trigger('change');   
        }).join(',');
        // clear previous preview
        target_preview.html('');
        console.log(items)
        // set or change the preview image src
        items.forEach(function (item) {
          $(target_preview).attr('src', item.url).attr('class','img-fluid mb-3')
        });

        // trigger change event
        target_preview.trigger('change');
      };
      return false;
    });
  }

})(jQuery);
