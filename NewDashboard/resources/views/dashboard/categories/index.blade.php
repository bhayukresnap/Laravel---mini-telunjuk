@extends('dashboard.layout.template')
@section('body')
	<div class="block-header">
	    <div class="row clearfix">
	        <div class="col-md-6 col-sm-12">
	            <h2>Oculux Categories</h2>
	            <nav aria-label="breadcrumb">
	                <ol class="breadcrumb">
	                    <li class="breadcrumb-item"><a href="{{route('home')}}">Oculux</a></li>
	                    <li class="breadcrumb-item"><a href="#">Categories</a></li>
	                    <li class="breadcrumb-item active" aria-current="page">Oculux Categories</li>
	                </ol>
	            </nav>
	        </div>            
	    </div>
	</div>
	<div class="row">
		<div class="col-12 mb-4">
			<a href="#" data-toggle="modal" data-target="#modalcatlevel1" class="btn btn-sm btn-success btn-round" title=""><i class="icon-layers"></i> Add Categories Level 1</a>
			<a href="#" data-toggle="modal" data-target="#modalcatlevel2" class="btn btn-sm btn-success btn-round" title=""><i class="icon-layers"></i> Add Categories Level 2</a>
			<a href="#" data-toggle="modal" data-target="#modalcatlevel3" class="btn btn-sm btn-success btn-round" title=""><i class="icon-layers"></i> Add Categories Level 3</a>
		</div>
		<div class="col-12">
			<ol>
				<li>Living Room
					<ul>
						<li>
							Sofa armchair
							<ul>
								<li>Sofa armchair</li>
								<li>Sofa</li>
							</ul>
						</li>
					</ul>
				</li>
			</ol>
			<hr>
		</div>
	</div>


	<!-- Modal Add Categories level 1-->
<div class="modal fade" id="modalcatlevel1" tabindex="-1" role="dialog" aria-labelledby="modaladdTagLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modaladdTagLabel">Add category level 1</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="addLevel1">
                    @csrf
                    <div class="form-group">
                        <label>Slug</label>
                        <input id="path_url" name="path_url" class="form-control slug"  autocomplete="off" readonly="readonly"></input>
                    </div>
                    <div class="form-group">
                        <label>Category Name</label>
                        <input type="text" id="title" name="category_name" class="form-control title"  autocomplete="off">
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
                    <button type="submit" class="btn btn-round btn-success">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Modal Add Categories level 2 -->
<div class="modal fade" id="modalcatlevel2" tabindex="-1" role="dialog" aria-labelledby="modaladdTagLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modaladdTagLabel">Add category level 2</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="addLevel2" class="needslevel1">
                    @csrf
                    <div class="form-group">
                        <label>Category Level 1</label>
                        <select id="level1" class="custom-select" name="categoryLvl1"></select>
                    </div>
                    <div class="form-group">
                        <label>Slug</label>
                        <input id="path_url" name="path_url" class="form-control slug"  autocomplete="off" readonly="readonly"></input>
                    </div>
                    <div class="form-group">
                        <label>Category Name</label>
                        <input type="text" id="title" name="category_name" class="form-control title"  autocomplete="off">
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
                    <button type="submit" class="btn btn-round btn-success">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Modal Add Categories level 3 -->
<div class="modal fade" id="modalcatlevel3" tabindex="-1" role="dialog" aria-labelledby="modaladdTagLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modaladdTagLabel">Add category level 3</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="addLevel3">
                    @csrf
                    <div class="form-group">
                        <label>Category Level 2</label>
                        <select id="level2" class="custom-select" name="categoryLvl2"></select>
                    </div>
                    <div class="form-group">
                        <label>Slug</label>
                        <input id="path_url" name="path_url" class="form-control slug"  autocomplete="off" readonly="readonly"></input>
                    </div>
                    <div class="form-group">
                        <label>Category Name</label>
                        <input type="text" id="title" name="category_name" class="form-control title"  autocomplete="off">
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
                    <button type="submit" class="btn btn-round btn-success">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">

    $(document).ready(function(){
        getCategoriesLevel1();
        getCategoriesLevel2();
    });

	$('form#addLevel1').submit(function(e){
        loading();
        e.preventDefault();
        $.ajax({
            async:true,
            url: "{{route('addcategorieslevel1')}}",
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
                        getCategoriesLevel1();
                        $('input#alt').val('');
                        $('input#title').val('');
                        $('input#path_url').val('');
                        $('#addLevel1 input[name="noindex"][value="false"]').prop('checked','true');
                        $('#modalcatlevel1').modal('hide');
                    }
                });
            },
        });
    });

    $('form#addLevel2').submit(function(e){
        loading();
        e.preventDefault();
        $.ajax({
            async:true,
            url: "{{route('addcategorieslevel2')}}",
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
                        getCategoriesLevel2();
                        $('input#alt').val('');
                        $('input#title').val('');
                        $('input#path_url').val('');
                        $('#level1').val('');
                        $('#addLevel2 input[name="noindex"][value="false"]').prop('checked','true');
                        $('#modalcatlevel2').modal('hide');
                    }
                });
            },
        });
    });

    $('form#addLevel3').submit(function(e){
        loading();
        e.preventDefault();
        $.ajax({
            async:true,
            url: "{{route('addcategorieslevel3')}}",
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
                        $('input#alt').val('');
                        $('input#title').val('');
                        $('input#path_url').val('');
                        $('#level2').val('');
                        $('#addLevel3 input[name="noindex"][value="false"]').prop('checked','true');
                        $('#modalcatlevel3').modal('hide');
                    }
                });
            },
        });
    });


 function loadSelect(id,json){
        let str = '';
        str +=  '<option value="">--please select--</option>'
        $(json).each(function(index,value){
            str +=  '<option value="'+value.id+'">'
            str +=      value.category_name;
            str +=  '</option>'
        });
        $('#'+id).html(str);
    }

    function getCategoriesLevel1(){
        loading();
        $.getJSON('{{route('allcategorieslevel1')}}', function(data){

        }).fail(function(code, statusText, error){
            notification("error", code.responseText +statusText+error);
        }).done(function(success){
            console.log(success)
            removeLoading();
            loadSelect('level1',success)
        });
    }

    function getCategoriesLevel2(){
        loading();
        $.getJSON('{{route('allcategorieslevel2')}}', function(data){

        }).fail(function(code, statusText, error){
            notification("error", code.responseText +statusText+error);
        }).done(function(success){
            removeLoading();
            loadSelect('level2',success)
        });
    }
</script>
@endsection