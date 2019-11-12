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
            <h2>Oculux Brand</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('home')}}">Oculux</a></li>
                    <li class="breadcrumb-item"><a href="#">Brand</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Oculux Brand</li>
                </ol>
            </nav>
        </div>            
        <div class="col-md-6 col-sm-12 text-right hidden-xs">
            <a href="#" data-toggle="modal" data-target="#createBrand" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add brand</a>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <ol id="loadBrands"></ol>
        <hr>
    </div>
</div>

<!-- Modal Add Brand-->
<div class="modal fade" id="createBrand" tabindex="-1" role="dialog" aria-labelledby="modalCreateBrand" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalCreateBrand">Create Brand</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="addBrand">
                    @csrf
                    <div class="form-group">
                        <label>Slug</label>
                        <input id="path_url" name="path_url" class="form-control slug"  autocomplete="off"></input>
                    </div>
                    <div class="form-group">
                        <label>Brand Name</label>
                        <input type="text" id="title" name="brandName" class="form-control title"  autocomplete="off">
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
<div class="modal fade" id="modalUpdateBrand" tabindex="-1" role="dialog" aria-labelledby="titleupdt" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="titleupdt"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="updateBrand">
                    @csrf
                    <div class="form-group">
                        <label>Slug</label>
                        <input type="hidden" id="id" readonly="readonly">
                        <input id="path_url" name="path_url" class="form-control slug"  autocomplete="off"></input>
                    </div>
                    <div class="form-group">
                        <label>Brand Name</label>
                        <input type="text" id="title" name="brandName" class="form-control title"  autocomplete="off">
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

<script type="text/javascript">

    $(document).ready(function(){
        getAllBrands();
    });

    $('form#addBrand').submit(function(e){
            loading();
            e.preventDefault();
            $.ajax({
                async:true,
                url: "{{route('addbrand')}}",
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
                            $('#addBrand input[name="noindex"][value="false"]').prop('checked','true');
                            $('#createBrand').modal('hide');
                        }
                    });
                },
            });
        });
    $('form#updateBrand').submit(function(e){
            let url_update = "{{route('updatebrand',':id')}}";
            url_update = url_update.replace(":id",$('#updateBrand #id').val());
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
                            $('#modalUpdateBrand').modal('hide');
                            $('input#path_url').val('');
                            $('input#title').val('');
                            $('input#alt').val('');
                            getAllBrands();
                        }
                    });
                },
            });
        });
    function showModalUpdateBrand(value){
        $('#modalUpdateBrand').modal('show');
        $('#modalUpdateBrand'+' #titleupdt').html('Update '+value.brandName);
        $('#updateBrand'+' #id').val(value.id);
        $('#updateBrand'+' input[name="path_url"]').val(value.meta.path_url);        
        $('#updateBrand'+' input[name="brandName"]').val(value.brandName);
        $('#updateBrand'+' input[name="meta_title"]').val(value.meta.meta_title);
        $('#updateBrand'+' input[name="meta_description"]').val(value.meta.meta_description);
        $('#updateBrand'+' input[name="meta_keyword"]').val(value.meta.meta_keyword);
        $('#updateBrand'+' input[name="canonical"]').val(value.meta.canonical);
        $('#updateBrand'+' textarea[name="json_ld"]').val(value.meta.json_ld);
        $('#updateBrand'+' input[name="noindex"][value="'+value.meta.noindex+'"]').prop('checked','true');
    }

    function showUpdateCategory(id){
        loading();
        let url = "{{route('viewbrand',':id')}}";
        url = url.replace(":id",id);
        $.getJSON(url, function(data){

        }).fail(function(code, statusText, error){
            notification("error", code.responseText +statusText+error);
            removeLoading();
        }).done(function(success){
            removeLoading();
            showModalUpdateBrand(success[0]);
        });
    }

    function fetchDataBrands(json){
        let str = '';
        $.each(json,function(index,value){
            str +=  '<li data-index="'+value.id+'">'
            str +=      '<a href="#" onclick="showUpdateCategory('+value.id+')">'+value.brandName+'</a>'
            str +=      '&nbsp;&nbsp;<i class="fa fa-close text-danger" onclick="deleteBrand('+value.id+')">&nbsp;</i>'
            str +=  '</li>'
        });

        $('#loadBrands').html(str);
    }

    function getAllBrands(){
        loading();
        $.getJSON('{{route('allbrands')}}', function(data){

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
        let url = "{{ route("deletebrand", ":id") }}";
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