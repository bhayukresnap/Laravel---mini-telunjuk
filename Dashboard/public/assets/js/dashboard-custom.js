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

function ajaxError(code, statusText, error){
    Swal.fire({
        title: '<span style="text-transform:capitalize;">'+statusText+'!</span>',
        text: 'Please try again later :)',
        type: 'error',
        confirmButtonClass: 'btn btn-primary btn-lg',
        buttonsStyling: false
    });
    console.log(code.responseText)
}

function ajaxSuccess(success){
    let type, text = [], str = '',statusCode;
    $.each(success,function(status, responseStatus){
        $.each(this,function(key,value){
            type = status;
            text.push(value);
        });
        if(responseStatus == 200){
            statusCode = responseStatus;
        }
    });
    $.map(text, function( n ) {
        return str += '<div>'+n+'</div>';
    }),
    Swal.fire({
        title: '<span style="text-transform:capitalize;">'+type+'!</span>',
        html: str,
        type: type,
        confirmButtonClass: 'btn btn-space btn-lg btn-primary hover',
        confirmButtonText: 'Ok',
        buttonsStyling: false,
        onClose: ()=>{
            if(statusCode == 200){
                refreshPage();
            }
        }
    }); 
}


//Create
$('form#add').submit(function(e){
    e.preventDefault();
    Swal.fire({
        title: 'Please wait!',
        onOpen: ()=>{
            Swal.showLoading();
            $.ajax({
                async:true,
                url: $(this).attr('action'),
                type: 'post',
                data:new FormData(this),
                dataType:'JSON',
                contentType: false,
                cache: false,
                processData: false,
                error: function(code, statusText, error){
                    ajaxError(code, statusText, error);
                },
                success: function(success){
                    ajaxSuccess(success);
                },
            })
        }
    });

    return false;
});

//Delete
$('.btn-delete').on('click',function(){
    const data = $(this).data('list');
    data.url = data.url.replace(":id",data.id);
    console.log(data)
    Swal.fire({
        title: 'Are you sure',
        text: 'Do you want to delete '+data.name+'?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Delete',
        confirmButtonClass: 'btn btn-space btn-lg btn-success hover',
        cancelButtonClass: 'btn btn-space btn-lg btn-danger hover',
        buttonsStyling: false,
        allowOutsideClick: false,
        preConfirm: function() {
            return new Promise(function(resolve) {
                Swal.fire({
                    title: 'Please wait!',
                    onOpen: ()=>{
                        Swal.showLoading();
                        $.ajax({
                            url: data.url,
                            type: 'delete',
                            error: function(code, statusText, error){
                                ajaxError(code, statusText, error);
                            },
                            success: function(success){
                                ajaxSuccess(success);
                            },
                        })
                    }
                })
            });
        },        
    }); 
});

//Update
$('form#update').submit(function(e){
    e.preventDefault();
    Swal.fire({
        title: 'Please wait!',
        onOpen: ()=>{
            Swal.showLoading();
            $.ajax({
                async:true,
                url: $(this).attr('action'),
                type: 'put',
                data: $(this).serialize(),
                error: function(code, statusText, error){
                    ajaxError(code, statusText, error);
                },
                success: function(success){
                    ajaxSuccess(success);
                },
            })
        }
    });

    return false;
});
(function($) {
    "use strict";
    
    //Left nav scroll
    $(".nano").nanoScroller();

    // Left menu collapse
    $('.left-nav-toggle a').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("nav-toggle");
    });
    
    // Left menu collapse
    $('.left-nav-collapsed a').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("nav-collapsed");
    });
    
    // Left menu collapse
    $('.right-sidebar-toggle').on('click', function (event) {
        event.preventDefault();
        $("#right-sidebar-toggle").toggleClass("right-sidebar-toggle");
    });
    
    //metis menu
   $('#menu').metisMenu();
    
    //ace menuu
    $("#respMenu").aceResponsiveMenu({
        resizeWidth: '768', 
        animationSpeed: 'fast',
        accoridonExpAll: false
   });
   
    //slim scroll
    $('.scrollDiv').slimScroll({
        color: '#eee',
        size: '5px',
        height: '293px',
        alwaysVisible: false
    });
    
    //tooltip popover
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    


    //Filemanager
    $('.thumbnail_image').filemanager('image');

    //Create meta modul
    createMeta('#createMeta');
    $('input').attr('autocomplete','off');
    $('textarea').attr('autocomplete','off');
    $( "input#path_url" ).on( "keyup", function(event) {
        $(this).val(convertToSlug($(this).val()))
    });
    $.ajaxSetup({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
    }); 

})(jQuery);

function createMeta(x){
        let str = '';
        str +=  '<div class="card">'
        str +=      '<div class="card-header card-default">'
        str +=          'Create Meta'
        str +=      '</div>'
        str +=      '<div class="card-body">'
        str +=          '<div class="form-group">'
        str +=              '<label>Slug</label>'
        str +=              '<input id="path_url" required name="path_url" class="form-control slug" ></input>'
        str +=          '</div>'
        str +=          '<div class="form-group">'
        str +=              '<label>Meta Title</label>'
        str +=              '<input type="text" id="alt" name="meta_title" class="form-control" >'
        str +=          '</div>'
        str +=          '<div class="form-group">'
        str +=              '<label>Meta Description</label>'
        str +=              '<input type="text" id="alt" name="meta_description" class="form-control" >'
        str +=          '</div>'
        str +=          '<div class="form-group">'
        str +=              '<label>Meta Keyword</label>'
        str +=              '<input type="text" id="alt" name="meta_keyword" class="form-control" >'
        str +=          '</div>'
        str +=          '<div class="form-group">'
        str +=              '<label>JSON LD</label>'
        str +=              '<textarea id="alt" name="json_ld" class="form-control" ></textarea>'
        str +=          '</div>'
        str +=          '<div class="form-group">'
        str +=              '<label>Canonical</label>'
        str +=              '<input type="text" id="alt" name="canonical" class="form-control" >'
        str +=          '</div>'
        str +=          '<div class="input-group">'
        str +=              '<label>No Index: </label>'
        str +=              '<div class="radio radio-primary">'
        str +=                  '<input id="noindex1" type="radio" name="noindex" value="true" data-parsley-multiple="noindex">'
        str +=                  '<label for="noindex1">True</label>'
        str +=              '</div>'
        str +=              '<div class="radio radio-primary">'
        str +=                  '<input id="noindex2" type="radio" name="noindex" value="false" data-parsley-multiple="noindex" checked="">'
        str +=                  '<label for="noindex2">False</label>'
        str +=              '</div>'
        str +=          '</div>'
        str +=      '</div>'
        str +=  '</div>'
        $(x).html(str);
    }

    function updateMeta(target,path_url,meta_title,meta_description,meta_keyword,canonical,json_ld,noindex){
        createMeta(target);
        $('input[name="path_url"]').val(path_url);
        $('input[name="meta_title"]').val(meta_title);
        $('input[name="meta_description"]').val(meta_description);
        $('input[name="meta_keyword"]').val(meta_keyword);
        $('input[name="canonical"]').val(canonical);
        $('textarea[name="json_ld"]').val(json_ld);
        $('input[name="noindex"][value="'+noindex+'"]').prop('checked','true');
    }

    function convertToSlug(Text){
        return Text.toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,'');
    }

    function refreshPage(){
        location.reload();
    }