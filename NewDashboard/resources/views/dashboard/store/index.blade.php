@extends('dashboard.layout.template')
@section('body')
<style type="text/css">
    i{
        cursor: pointer;
    }
</style>
<div class="block-header">
    <div class="row clearfix">
        <div class="col-md-6 col-sm-12">
            <h2>Oculux Store</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('home')}}">Oculux</a></li>
                    <li class="breadcrumb-item"><a href="#">Store</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Oculux Store</li>
                </ol>
            </nav>
        </div>            
        <div class="col-md-6 col-sm-12 text-right hidden-xs">
            <a href="#" data-toggle="modal" data-target="#createBrand" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add store</a>
        </div>
    </div>
</div>
<div class="row" id="loadBrands">
</div>

<!-- Modal Add Brand-->
<div class="modal fade" id="createBrand" tabindex="-1" role="dialog" aria-labelledby="modalCreateBrand" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalCreateBrand">Create Store</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="addStore">
                    @csrf
                    <div class="form-group">
                        <label>Slug</label>
                        <input id="path_url" name="path_url" class="form-control slug"  autocomplete="off"></input>
                    </div>
                    <div class="form-group">
                        <label>Store Name</label>
                        <input type="text" id="title" name="store_name" class="form-control title"  autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Store Logo</label>
                        <div class="input-group">
                            <span class="input-group-btn">
                                <a id="lfm_add" data-input="thumbnail" data-preview="previewFeaturedImage" class="btn btn-primary form-control">
                                    <i class="fa fa-picture-o"></i> Choose
                                </a>
                            </span>
                            <input autocomplete="off" id="thumbnail" class="form-control thumbnail_path" type="text" name="store_logo" readonly="readonly">
                        </div>
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
                        <label>Meta Keyword</label>
                        <input type="text" id="alt" name="meta_keyword" class="form-control"  autocomplete="off">
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
                    <button type="submit" class="btn btn-round btn-success">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Modal Update Brand-->
<div class="modal fade" id="modalupdateStore" tabindex="-1" role="dialog" aria-labelledby="titleupdt" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="titleupdt"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="updateStore">
                    @csrf
                    <div class="form-group">
                        <label>Slug</label>
                        <input type="hidden" id="id" readonly="readonly">
                        <input id="path_url" name="path_url" class="form-control slug"  autocomplete="off"></input>
                    </div>
                    <div class="form-group">
                        <label>Store Name</label>
                        <input type="text" id="title" name="store_name" class="form-control title"  autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Store Logo</label>
                        <div class="input-group">
                            <span class="input-group-btn">
                                <a id="lfm_update" data-input="logo_update" data-preview="previewLogo" class="btn btn-primary form-control">
                                    <i class="fa fa-picture-o"></i> Choose
                                </a>
                            </span>
                            <input autocomplete="off" id="logo_update" class="form-control thumbnail_path" type="text" name="store_logo" readonly="readonly">
                        </div>
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
                        <label>Meta Keyword</label>
                        <input type="text" id="alt" name="meta_keyword" class="form-control"  autocomplete="off">
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
                    <button type="submit" class="btn btn-round btn-success">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>
<script src="{{asset('/vendor/laravel-filemanager/js/stand-alone-button.js')}}"></script>
<script type="text/javascript">
    $(document).ready(function(){
        getAllBrands();
        $('#lfm_add').filemanager('image');
        $('#lfm_update').filemanager('image');
    });

    $('form#addStore').submit(function(e){
            loading();
            e.preventDefault();
            $.ajax({
                async:true,
                url: "{{route('addstore')}}",
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
                            getAllBrands();
                            $('input#alt').val('');
                            $('input#title').val('');
                            $('input#path_url').val('');
                            $('input[name="store_logo"]').val('');
                            $('#addBrand input[name="noindex"][value="false"]').prop('checked','true');
                            $('#createBrand').modal('hide');
                        }
                    });
                },
            });
        });
    $('form#updateStore').submit(function(e){
            let url_update = "{{route('updatestore',':id')}}";
            url_update = url_update.replace(":id",$('#updateStore #id').val());
            loading();
            e.preventDefault();
            $.ajax({
                async:true,
                url: url_update,
                type: 'put',
                data: $(this).serialize(),
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
                            $(this+' input[name="noindex"][value="false"]').prop('checked','true');
                            $('#modalupdateStore').modal('hide');
                            $('input#path_url').val('');
                            $('input#title').val('');
                            $('input#alt').val('');
                            $('input[name="store_logo"]').val('');
                            getAllBrands();
                        }
                    });
                },
            });
        });
    function showModalupdateStore(value){
        $('#modalupdateStore').modal('show');
        $('#modalupdateStore'+' #titleupdt').html('Update '+value.store_name);
        $('#updateStore'+' #id').val(value.id);
        $('#updateStore'+' input[name="path_url"]').val(value.meta.path_url);        
        $('#updateStore'+' input[name="store_name"]').val(value.store_name);
        $('#updateStore'+' input[name="store_logo"]').val(value.store_logo);
        $('#updateStore'+' input[name="meta_title"]').val(value.meta.meta_title);
        $('#updateStore'+' input[name="meta_description"]').val(value.meta.meta_description);
        $('#updateStore'+' input[name="meta_keyword"]').val(value.meta.meta_keyword);
        $('#updateStore'+' input[name="canonical"]').val(value.meta.canonical);
        $('#updateStore'+' textarea[name="json_ld"]').val(value.meta.json_ld);
        $('#updateStore'+' input[name="noindex"][value="'+value.meta.noindex+'"]').prop('checked','true');
    }

    function showUpdateCategory(id){
        loading();
        let url = "{{route('viewstore',':id')}}";
        url = url.replace(":id",id);
        $.getJSON(url, function(data){

        }).fail(function(code, statusText, error){
            notification("error", code.responseText +statusText+error);
            removeLoading();
        }).done(function(success){
            removeLoading();
            showModalupdateStore(success[0]);
        });
    }

    function fetchDataBrands(json){
        let str = '';
        $.each(json,function(index,value){
            str +=  '<div class="col-6 col-md-3 text-center" data-index="'+value.id+'">'
            str +=      '<img src="'+value.store_logo+'" class="img-fluid mb-2">'
           // str +=      '<p class="">'+value.store_name+'</p>'
            str +=      '<div class="form-group">'
            str +=      '<button class="btn btn-outline-success mx-2" onclick="showUpdateCategory('+value.id+')">Update</button>'
            str +=      '<button class="btn btn-outline-danger mx-2" onclick="deleteBrand('+value.id+')">Delete</button>'
            str +=      '</div>'
            str +=  '</div>'

        });

        $('#loadBrands').html(str);
    }

    function getAllBrands(){
        loading();
        $.getJSON('{{route('allstores')}}', function(data){

        }).fail(function(code, statusText, error){
            notification("error", code.responseText +statusText+error);
            removeLoading();
        }).done(function(success){
            removeLoading();
            if(success.length > 0) fetchDataBrands(success);
        });
    }

    function deleteBrand(id){
        loading();
        let url = "{{ route("deletestore", ":id") }}";
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
                        $('div[data-index="'+id+'"]').remove();
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