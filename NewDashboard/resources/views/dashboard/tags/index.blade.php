@extends('dashboard.layout.template')
@section('body')
<style type="text/css">
    ul#list-tags{
        padding: 0;
    }
    li.badge{
        display: inline-block;
        font-size: 14px;
        vertical-align: middle;
        padding: .75%;
        margin:5px;cursor: pointer;
    }
    .badge:hover{
        opacity: .8;
    }
</style>
<div class="block-header">
    <div class="row clearfix">
        <div class="col-md-6 col-sm-12">
            <h2>Oculux Tags</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('home')}}">Oculux</a></li>
                    <li class="breadcrumb-item"><a href="#">Tags</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Oculux Tags</li>
                </ol>
            </nav>
        </div>            
        <div class="col-md-6 col-sm-12 text-right hidden-xs">
            <a href="#" data-toggle="modal" data-target="#modaladdTag" class="btn btn-sm btn-primary btn-round" title=""><i class="fa fa-tags"></i> Add tags</a>
        </div>
    </div>
</div>
<div class="row clearfix">
    <div class="col-lg-12">
        <ul id="list-tags">

        </ul>
    </div>
</div>


<!-- Modal Add Tag-->
<div class="modal fade" id="modaladdTag" tabindex="-1" role="dialog" aria-labelledby="modaladdTagLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modaladdTagLabel">Add tag</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="addtag">
                    @csrf
                    <div class="form-group">
                        <label>Slug</label>
                        <input id="alt" name="path_url" class="form-control slug"  autocomplete="off" readonly="readonly"></input>
                    </div>
                    <div class="form-group">
                        <label>Tag Name</label>
                        <input type="text" id="alt" name="tagname" class="form-control tagname"  autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Meta Title</label>
                        <input type="text" id="alt" name="meta_title" class="form-control"  autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Meta Description</label>
                        <input type="text" id="alt" name="meta_description" class="form-control"  autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Canonical</label>
                        <input type="text" id="alt" name="canonical" class="form-control"  autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>JSON LD</label>
                        <textarea id="alt" name="json_ld" class="form-control"  autocomplete="off"></textarea>
                    </div>
                    <div class="form-group">
                        <label>No Index: </label>
                        <label class="fancy-radio">
                            <input type="radio" name="noindex" value="true" required="" data-parsley-multiple="noindex">
                            <span><i></i>True</span>
                        </label>
                        <label class="fancy-radio">
                            <input type="radio" name="noindex" value="false" data-parsley-multiple="noindex" checked>
                            <span><i></i>False</span>
                        </label>
                    </div>
                    <button type="submit" class="btn btn-round btn-primary">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Modal Update Tag-->
<div class="modal fade" id="modalupdateTag" tabindex="-1" role="dialog" aria-labelledby="modalupdateTagLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalupdateTagLabel">Update tag</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="updateTag">
                    @csrf
                    <div class="form-group">
                        <label>Slug</label>
                        <input type="hidden" id="id" readonly="readonly">
                        <input id="alt" name="path_url" class="form-control slug"  autocomplete="off" readonly="readonly"></input>
                    </div>
                    <div class="form-group">
                        <label>Tag Name</label>
                        <input type="text" id="alt" name="tagname" class="form-control tagname"  autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Meta Title</label>
                        <input type="text" id="alt" name="meta_title" class="form-control"  autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Meta Description</label>
                        <input type="text" id="alt" name="meta_description" class="form-control"  autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Canonical</label>
                        <input type="text" id="alt" name="canonical" class="form-control"  autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>JSON LD</label>
                        <textarea id="alt" name="json_ld" class="form-control"  autocomplete="off"></textarea>
                    </div>
                    <div class="form-group">
                        <label>No Index: </label>
                        <label class="fancy-radio">
                            <input type="radio" name="noindex" value="true" required="" data-parsley-multiple="noindex">
                            <span><i></i>True</span>
                        </label>
                        <label class="fancy-radio">
                            <input type="radio" name="noindex" value="false" data-parsley-multiple="noindex">
                            <span><i></i>False</span>
                        </label>
                    </div>
                    <button type="submit" class="btn btn-round btn-success">Update</button>
                </form>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function(){
        get_alltag();
        $( "input.tagname" ).on( "keyup", function(event) {
            $('input.slug').val(convertToSlug($(this).val()))
        });
    });

    function loadTags(tag){
        let str = '';
        $(tag).each(function(index,value){
            str +=  '<li class="badge badge-info" data-index="'+value.id+'">'
            str +=      '<span onclick="showUpdateTag('+value.id+')">'+value.tagname+'</span>'
            str +=      '<a href="#" class="remove" style="padding-left: 5px;" onclick="deleteTag('+value.id+')">'
            str +=          '<i class="fa fa-times-circle-o remove"></i>'
            str +=      '</a>'
            str +=  '</li>'
        });
        $('#list-tags').html(str);
    }

    function get_alltag(){
        loading();
        $.getJSON('{{route('alltags')}}', function(data){

        }).fail(function(code, statusText, error){
            notification("error", code.responseText +statusText+error);
        }).done(function(success){
            removeLoading();
            if(success.data > -1) return false;
            loadTags(success)
            
        });
    }

    function showModalUpdate(value){
        $('#modalupdateTag').modal('show');
        $('#modalupdateTag #id').val(value.id);
        $('#modalupdateTag input[name="path_url"]').val(value.meta.path_url);        
        $('#modalupdateTag input[name="tagname"]').val(value.tagname);
        $('#modalupdateTag input[name="meta_title"]').val(value.meta.meta_title);
        $('#modalupdateTag input[name="meta_description"]').val(value.meta.meta_description);
        $('#modalupdateTag input[name="canonical"]').val(value.meta.canonical);
        $('#modalupdateTag textarea[name="json_ld"]').val(value.meta.json_ld);
        $('#modalupdateTag input[name="noindex"][value="'+value.meta.noindex+'"]').prop('checked','true');
    }

    $('form#updateTag').submit(function(e){
        let url_update = "{{ route("updatetag", ":id") }}";
        url_update = url_update.replace(":id",$('#updateTag #id').val());
        loading();
        e.preventDefault();
        $.ajax({
            async:true,
            url: url_update,
            type: 'put',
            data: new FormData(this),
            dataType:'JSON',
            contentType: false,
            cache: false,
            processData: false,
            error: function (code, statusText, error) {
                notification("error", code.responseText +statusText+error);
                removeLoading();
            },
            success: function(success){
                removeLoading();
                $.each(success, function(status, responseStatus){
                    $.each(this, function(key,value){
                        notification(status, value)
                    });
                    if(responseStatus == 200){
                        $('#modalupdateTag').modal('hide');
                        get_alltag();
                    }
                });
            },
        });
    });


    function showUpdateTag(id){
        loading();
        let url = "{{ route("viewtag", ":id") }}";
        url = url.replace(":id",id);
        $.getJSON(url, function(data){

        }).fail(function(code, statusText, error){
            notification("error", code.responseText +statusText+error);
            removeLoading();
        }).done(function(success){
            console.log(success[0]);
            removeLoading();
            showModalUpdate(success[0])
        });
    }


    $('form#addtag').submit(function(e){
        loading();
        e.preventDefault();
        $.ajax({
            async:true,
            url: '{{route('addtag')}}',
            type: 'post',
            data:new FormData(this),
            dataType:'JSON',
            contentType: false,
            cache: false,
            processData: false,
            error: function (code, statusText, error) {
                notification("error", code.responseText +statusText+error);
                removeLoading();
            },
            success: function(success){
                removeLoading();
                $.each(success, function(status, responseStatus){
                    $.each(this, function(key,value){
                        notification(status, value)
                    });
                    if(responseStatus == 200){
                        get_alltag();
                        $('input#alt').val('');
                        $('#modaladdTag').modal('hide');
                    }
                });
            },
        });
    });

    function deleteTag(id,index){
        loading();
        let url = "{{ route("deletetag", ":id") }}";
        url = url.replace(":id",id);
        $.ajax({
            url: url,
            type: 'delete',
            success: function(success) {
                $.each(success, function(status, responseStatus){
                    $.each(this, function(key,value){
                        notification(status, value)
                    });
                    if(responseStatus == 200){
                        $('li[data-index="'+id+'"]').remove();
                    }
                });
                removeLoading();
            },
            error: function(code, statusText, error){
                notification("error", code.responseText +statusText+error);
                removeLoading();
            }
        });
    }
</script>


@endsection