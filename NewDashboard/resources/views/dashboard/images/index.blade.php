@extends('dashboard.layout.template')
@section('body')
<style type="text/css">
    .light-link{
        position: relative;
        transition: .35s;
        cursor: pointer;
    }
    .light-link p{
        transition: 0.15s ease-in-out 0s;
        opacity: 0;
        color: white;
        position: absolute;
    }
    .light-link p.alt{
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .light-link p.gallery_icon{
        top: 0%;
        right: 0%;
    }
    .light-link:hover img{
        opacity: .25;
    }
    .light-link:hover p.alt{
        top: 50%;
        left: 50%;
        opacity: 1;
    }
    .light-link:hover p.gallery_icon{
        top: 3%;
        right: 1%;
        opacity: 1;
    }
    .loading{
        transition: 0.15s ease-in-out 0s;
        opacity: 1;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        display: none;
        transform: translate(-50%, -50%);
    }
    .loading i{
        -webkit-animation: rotation 1s infinite linear;
    }
    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(359deg);
        }
    }
    .loading-parent{
        opacity: .25;
    }
    .loading-parent .loading{
        display: block;
    }
</style>
<div class="container-fluid">
    <div class="block-header">
        <div class="row clearfix">
            <div class="col-md-6 col-sm-12">
                <h2>Oculux Gallery</h2>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{route('home')}}">Oculux</a></li>
                        <li class="breadcrumb-item"><a href="#">Images</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Oculux Gallery</li>
                    </ol>
                </nav>
            </div>            
            <div class="col-md-6 col-sm-12 text-right hidden-xs">
                <a href="{{route('createimage')}}" class="btn btn-sm btn-primary btn-round" title=""><i class="fa fa-cloud-upload"></i> Upload images</a>
            </div>
        </div>
    </div>
    <div id="lightgallery" class="card-columns clearfix"></div>
</div>
</div>
<script type="text/javascript">
    $.get( "{{route('allimages')}}", function(data) {
        const images = data.data;
        let str = '';
        $(images).each(function( index, value){
            let url_update = '{{ route("editimage", ":slug") }}';
            url_update = url_update.replace(':slug', value.id);
            str += '<div class="card light-link" data-id-image="'+value.id+'">'
            str +=      '<img width="100%" class="rounded" src="'+value.path+'" alt="'+value.alt+'">'
            str +=      '<p class="alt">'+value.alt+'</p>'
            str +=      '<p class="gallery_icon row">'
            str +=          '<a class="col-4 update" href="'+url_update+'">'
            str +=              '<i class="fa fa-edit fa-2x"></i>'
            str +=          '</a>'
            str +=          '<a class="col-4 remove" href="#" onclick="deleteImage(this)">'
            str +=              '<i class="fa fa-times-circle-o fa-2x"></i>'
            str +=          '</a>'
            str +=      '</p>'
            str +=      '<div class="text-center loading">'
            str +=          '<i class="fa fa-circle-o-notch fa-2x"></i><br>Loading'
            str +=      '</div>'
            str +='</div>'
        });
        $("#lightgallery").append(str);
    });
    function deleteImage(elem){
        $(elem).parents('div[data-id-image]').removeClass('light-link').addClass('loading-parent');
        $(elem).parents().siblings('p.alt').hide();
        $(elem).parents('p.gallery_icon').hide();
        let url_delete = '{{ route("deleteimage", ":id") }}';
        url_delete = url_delete.replace(':id', $(elem).parents('div[data-id-image]').data('id-image'));
        $.ajax({
            url: url_delete,
            type: 'delete',
            success: function(success) {
                $.each(success, function(status, responseStatus){
                    $.each(this, function(key,value){
                        notification(status, value)
                    });
                    if(responseStatus == 200){
                        $(elem).parents('div[data-id-image]').remove();
                    }else{
                        $(elem).parents('div[data-id-image]').removeClass('loading-parent');
                        $(elem).parents().siblings('p.alt').show();
                        $(elem).parents('p.gallery_icon').show();
                    }
                });
            },
            error: function(code, statusText, error){
                notification("error", code.responseText +statusText+error);
                $(elem).parents('div[data-id-image]').removeClass('loading-parent');
                $(elem).parents().siblings('p.alt').show();
                $(elem).parents('p.gallery_icon').show();
            }
        });


    }
</script>
@endsection