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
function deleteData(target){
    $(target).on('click',function(){
        const data = $(this).data('list');
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
}

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
function formatRupiah(angka, prefix) {
	var number_string = angka.replace(/[^,\d]/g, "").toString(),
	split = number_string.split(","),
	sisa = split[0].length % 3,
	rupiah = split[0].substr(0, sisa),
	ribuan = split[0].substr(sisa).match(/\d{3}/gi);
	if (ribuan) {
		separator = sisa ? "." : "";
		rupiah += separator + ribuan.join(".");
	}
	rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
	return prefix == undefined ? rupiah : rupiah ? "Rp " + rupiah : "";
}
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
    $.ajaxSetup({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
    }); 

    //form.js // global function for delete
    deleteData('.btn-delete');


    $('#selectTag').multiselect({
            columns  : 1,
            search   : true,
            selectAll: true,
            texts    : {
                placeholder: '--Select--',
            }
        });
    
    $('input[name="published_at"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        timePicker: true,
        timePicker24Hour:true,
        locale: {
            format: 'YYYY/MM/DD HH:mm:ss'
          },
    });
    
    $('.currency-dashboard').on('focusout',function(){
        $(this).val(formatRupiah($(this).val(), 'Rp '));
        $(this).siblings('input.final').val($(this).val().replace(/\D/g,''));
    });
    $( ".currency-dashboard" ).on( "copy cut paste drop", function() {
        return false;
    });

    // Define function to open filemanager window
    var lfm = function(options, cb) {
      var route_prefix = (options && options.prefix) ? options.prefix : '/laravel-filemanager';
      window.open(route_prefix + '?type=' + options.type || 'image', 'FileManager', 'width=900,height=600');
      window.SetUrl = cb;
    };

    // Define LFM summernote button
    var LFMButton = function(context) {
      var ui = $.summernote.ui;
      var button = ui.button({
        contents: '<i class="note-icon-picture"></i> ',
        tooltip: 'Insert image with filemanager',
        click: function() {

          lfm({type: 'image', prefix: '/dashboard-panel/laravel-filemanager'}, function(lfmItems, path) {
            lfmItems.forEach(function (lfmItem) {
              context.invoke('insertImage', lfmItem.url);
            });
          });

        }
      });
      return button.render();
    };

    $('.summernote').summernote({
        height:'400px',
        callbacks: {
            onKeyup: function(e) {
              $('input[name="body_html"]').val($(this).summernote('code'));
            }
          },
         toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough', 'superscript', 'subscript']],
    ['fontsize', ['fontsize']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']],
            ['popovers', ['lfm']],
          ],
          buttons: {
            lfm: LFMButton
          }
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
        $( "input#path_url" ).on( "keyup", function(event) {
            $(this).val(convertToSlug($(this).val()))
        });
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