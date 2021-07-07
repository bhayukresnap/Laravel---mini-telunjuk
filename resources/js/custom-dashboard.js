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
    
    $('input[name="start_end_promotion"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    }, function(start, end){
        $('input[name="started_at"]').val(start.format('YYYY/MM/DD HH:mm:ss'));
        $('input[name="ended_at"]').val(end.format('YYYY/MM/DD HH:mm:ss'));
    }).on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    }).on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
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
         ['style', ['style']],
         ['font', ['bold', 'underline', 'clear']],
         ['fontname', ['fontname']],
         ['color', ['color']],
         ['para', ['ul', 'ol', 'paragraph']],
         ['table', ['table']],
         ['popovers', ['lfm']],
         ['view', ['fullscreen', 'codeview', 'help']],         
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