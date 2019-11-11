@extends('dashboard.layout.template')
@section('body')
<div class="block-header">
	<div class="row clearfix">
		<div class="col-md-6 col-sm-12">
			<h2>Oculux Blog</h2>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="{{route('home')}}">Oculux</a></li>
					<li class="breadcrumb-item"><a href="#">Blog</a></li>
					<li class="breadcrumb-item active" aria-current="page">Oculux Create Blog</li>
				</ol>
			</nav>
		</div>
	</div>
</div>
<div class="container">
	<form class="row" id="updateblog">
		<label class="col-12">Featured images</label>
		<div class="col-6">
			<img id="previewFeaturedImage" src="{{$blog->featuredImage}}" class="img-fluid">
		</div>
		<div class="col-6 mb-4">
			<div class="input-group">
				<span class="input-group-btn">
					<a id="lfm" data-input="thumbnail" data-preview="previewFeaturedImage" class="btn btn-primary form-control">
						<i class="fa fa-picture-o"></i> Choose
					</a>
				</span>
				<input autocomplete="off" id="thumbnail" class="form-control thumbnail_path" type="text" name="featuredImage" readonly="readonly" value="{{$blog->featuredImage}}">
			</div>
			<br>
			<label>Alt featured Image</label>
			<input autocomplete="off" type="text" name="alt" class="form-control" placeholder="" value="{{$blog->alt}}">
		</div>

		<div class="col-6 mt-4">
			<div class="form-group">
				<label>Slug</label>
				<input autocomplete="off" id="path_url" name="path_url" class="form-control slug"  autocomplete="off" value="{{$blog->meta->path_url}}"></input>
			</div>
		</div>
		<div class="col-6 mt-4">
			<div class="form-group">
				<label>Published at</label>
				<div class="input-group mb-3">                                        
					<input autocomplete="off" data-provide="datepicker" name="published_at" data-date-autoclose="true" class="form-control" data-date-format="yyyy/mm/dd" placeholder ="yyyy/mm/dd" value="{{$blog->published_at}}">
				</div>
			</div>
		</div>
		<div class="col-12">
			<div class="form-group">
				<label>Title</label>
				<input autocomplete="off" type="text" id="title" name="title" class="form-control title"  autocomplete="off" value="{{$blog->title}}">
			</div>
		</div>
		<div class="col-12">
			<div class="form-group">
				<label>Body</label>
				<textarea type="text" name="editor1" class="form-control">{{$blog->meta->body_html}}</textarea>
				<input type="hidden" name="body_html" id="body_html">
			</div>
		</div>
		<div class="col-6">
			<div class="form-group">
				<label>Meta Title</label>
				<input autocomplete="off" type="text" id="alt" name="meta_title" class="form-control"  autocomplete="off" value="{{$blog->meta->meta_title}}">
			</div>
			<div class="form-group">
				<label>Meta Description</label>
				<input autocomplete="off" type="text" id="alt" name="meta_description" class="form-control"  autocomplete="off" value="{{$blog->meta->meta_description}}">
			</div>
			<div class="form-group">
				<label>Canonical</label>
				<input autocomplete="off" type="text" id="alt" name="canonical" class="form-control"  autocomplete="off" value="{{$blog->meta->canonical}}">
			</div>
		</div>
		<div class="col-6">
			<div class="form-group">
				<label>JSON LD</label>
				<textarea id="alt" name="json_ld" class="form-control"  autocomplete="off">{{$blog->meta->json_ld}}</textarea>
			</div>
			<div class="form-group">
				<label>No Index: </label>
				<label class="fancy-radio">
					<input autocomplete="off" type="radio" name="noindex" value="true" required="" data-parsley-multiple="noindex">
					<span><i></i>True</span>
				</label>
				<label class="fancy-radio">
					<input autocomplete="off" type="radio" name="noindex" value="false" data-parsley-multiple="noindex" checked>
					<span><i></i>False</span>
				</label>
			</div>
		</div>
		<div class="col-12 text-right mb-4">
			<button type="submit" class="btn btn-round btn-success">Save</button>
			<button type="button" class="btn btn-round btn-info" onclick="reloadPage()">Cancel</button>
		</div>
	</form>
</div>
<script src="{{asset('/vendor/laravel-filemanager/js/stand-alone-button.js')}}"></script>
<script type="text/javascript" src="{{asset('/vendor/ckeditor/ckeditor.js')}}"></script>
<script type="text/javascript" src="{{asset('/vendor/ckeditor/styles.js')}}"></script>
<script type="text/javascript" src="{{asset('/vendor/ckeditor/config.js')}}"></script>
<script>
	$('#lfm').filemanager('image');
	const options = {
		filebrowserImageBrowseUrl: '/laravel-filemanager?type=image',
		filebrowserBrowseUrl: '/laravel-filemanager?type=files',
	};
	CKEDITOR.replace('editor1',options);

	function reloadPage(){
        location.reload(true);
    }
    $('input[name="noindex"][value="'+{{$blog->meta->noindex}}+'"]').prop('checked','true');
	$('form#updateblog').submit(function(e){
		$('#body_html').val(CKEDITOR.instances.editor1.getData());
		loading();
		e.preventDefault();
		$.ajax({
			async:true,
			url: '{{route('updateblog', $blog->id)}}',
			type: 'put',
			data:$(this).serialize(),
			error: function (code, statusText, error) {
				notification("error", code.responseText +statusText+error)
			},
			success: function(success){
				removeLoading();
				$.each(success, function(status, responseStatus){
					$.each(this, function(key,value){
						notification(status, value)
					});
					if(responseStatus == 200){
					}
				});				
			},

		});
	});
</script>
@endsection