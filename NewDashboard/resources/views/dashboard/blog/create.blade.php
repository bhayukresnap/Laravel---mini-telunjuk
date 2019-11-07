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
	<form class="row">
		<div class="col-12 mb-4">
			<label>Featured images</label>
			<input type="file" id="image" name="path" class="dropify"  autocomplete="off" data-allowed-file-extensions="png jpeg jpg">
		</div>
		<div class="col-6">
			<div class="form-group">
				<label>Slug</label>
				<input id="path_url" name="path_url" class="form-control slug"  autocomplete="off" readonly="readonly"></input>
			</div>
		</div>
		<div class="col-6">
			<div class="form-group">
				<label>Published at</label>
				<div class="input-group mb-3">                                        
					<input data-provide="datepicker" data-date-autoclose="true" class="form-control" data-date-format="dd/mm/yyyy" placeholder ="dd/mm/yyyy">
				</div>
			</div>
		</div>
		<div class="col-12">
			<div class="form-group">
				<label>Title</label>
				<input type="text" id="title" name="title" class="form-control title"  autocomplete="off">
			</div>
		</div>
		<div class="col-12">
			<div class="form-group">
				<label>Body</label>
				<textarea name="editor1"></textarea>
			</div>
		</div>
		<div class="col-6">
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
		</div>
		<div class="col-6">
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
			{{-- <div class="form-group">
				<label>is Active: </label>
				<label class="fancy-radio">
					<input type="radio" name="visibility" value="true" required="" data-parsley-multiple="noindex" checked>
					<span><i></i>True</span>
				</label>
				<label class="fancy-radio">
					<input type="radio" name="visibility" value="false" data-parsley-multiple="noindex">
					<span><i></i>False</span>
				</label>
			</div> --}}
		</div>
	</form>
</div>

@endsection
@section('script')
<script type="text/javascript" src="{{asset('/vendor/ckeditor/ckeditor.js')}}"></script>
<script type="text/javascript" src="{{asset('/vendor/ckeditor/styles.js')}}"></script>
<script type="text/javascript" src="{{asset('/vendor/ckeditor/config.js')}}"></script>
<script>
	var options = {
    filebrowserImageBrowseUrl: '/laravel-filemanager',
    //filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=',
    //filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
    //filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token='
  };
	CKEDITOR.replace('editor1',options);
</script>
@endsection