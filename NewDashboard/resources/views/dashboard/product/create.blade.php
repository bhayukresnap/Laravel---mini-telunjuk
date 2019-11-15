@extends('dashboard.layout.template')
@section('body')
<div class="block-header">
	<div class="row clearfix">
		<div class="col-md-6 col-sm-12">
			<h2>Oculux Product</h2>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="{{route('home')}}">Oculux</a></li>
					<li class="breadcrumb-item"><a href="#">Product</a></li>
					<li class="breadcrumb-item active" aria-current="page">Oculux Create Product</li>
				</ol>
			</nav>
		</div>
	</div>
</div>

<form class="row" id="addproduct">
	<div class="col-12 row mb-4" id="imageProduct">
	</div>




	<div class="col-12 mb-4">
		<button type="button" class="btn btn-outline-info" onclick="addImage()">Add image</button>
	</div>
	<div class="col-8">
		<div class="form-group">
			<label>Slug</label>
			<input id="path_url" name="path_url" class="form-control slug"  autocomplete="off" readonly="readonly">
		</div>
		<div class="form-group">
			<label>Product name</label>
			<input id="product_name" type="text" name="product_name" class="form-control">
		</div>
		<div class="form-group">
			<label>Product description</label>
			<input type="text" name="product_description" class="form-control">
		</div>
	</div>
	<div class="col-4">
		<div class="form-group">
			<label>Brand</label>
			<select class="custom-select">
				<option value="0">-- Select brand --</option>
				@foreach($brands as $brand)
				<option value="{{$brand->id}}">{{$brand->brandName}}</option>
				@endforeach
			</select>
		</div>
		<div class="form-group">
			<label>Category</label>
			<select class="custom-select">
				<option value="0">-- Select category --</option>
				@foreach($categories as $category)
				<option value="{{$category->id}}">{{$category->brandName}}</option>
				@endforeach
			</select>
		</div>
		<div class="form-group">
				<label>Tag</label>
				<div class="multiselect_div">
					<select id="selectTag" name="tag[]" class="multiselect-custom" multiple="multiple">
						@foreach($tags as $tag)
						<option value="{{$tag->id}}">{{$tag->tagname}}</option>
						@endforeach
					</select>
				</div>
			</div>
	</div>
	<div class="col-12">
		<div class="form-group">
			<label>Product spesification</label>
			<textarea type="text" name="editor1" class="form-control"></textarea>
			<input type="hidden" name="body_html" id="body_html">
		</div>
	</div>
	<div class="col-8">
		@foreach($stores as $store)
		<label>{{$store->store_name}}</label>
		<div class="input-group mb-3">
			<div class="input-group-prepend">
				<span class="input-group-text">Normal Price</span>
				<span class="input-group-text">Rp</span>
			</div>
			<input type="text" class="form-control money">
		</div>
		<div class="input-group mb-3">
			<div class="input-group-prepend">
				<span class="input-group-text">Discount Price</span>
				<span class="input-group-text">Rp</span>
			</div>
			<input type="text" class="form-control money">
		</div>
		@endforeach
	</div>
	<div class="col-4">
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
	</div>
	<div class="col-12 text-right mb-4">
		<button type="submit" class="btn btn-round btn-success">Save</button>
		<button type="button" class="btn btn-round btn-info" onclick="reloadPage()">Cancel</button>
	</div>
</form>



<script src="{{asset('/vendor/laravel-filemanager/js/stand-alone-button.js')}}"></script>
<script type="text/javascript" src="{{asset('/vendor/ckeditor/ckeditor.js')}}"></script>
<script type="text/javascript" src="{{asset('/vendor/ckeditor/styles.js')}}"></script>
<script type="text/javascript" src="{{asset('/vendor/ckeditor/config.js')}}"></script>
<script type="text/javascript">
	$( "input#product_name" ).on( "keyup", function(event) {
		$("input#path_url").val(convertToSlug($(this).val()))
	});

	$(document).ready(function(){
		$('.money').simpleMoneyFormat();
		$('#selectTag').multiselect();
	});
	const options = {
		filebrowserImageBrowseUrl: '/laravel-filemanager?type=image',
		filebrowserBrowseUrl: '/laravel-filemanager?type=files',
	};
	CKEDITOR.replace('editor1',options);
	var image_count = 1;

	function removeImage(index){
		$('[data-index-image="'+index+'"]').remove();
	}

	function addImage(){
		let str = '';
		str +=	'<div class="col-3 mb-4" data-index-image="'+image_count+'">'
		str +=		'<img id="previewFeaturedImage_'+image_count+'" src="/img/450x250.png" class="img-fluid mb-2">'
		str +=		'<div class="input-group mb-2">'
		str +=			'<button type="button" id="lfm_'+image_count+'" data-input="thumbnail_'+image_count+'" data-preview="previewFeaturedImage_'+image_count+'" class="btn btn-primary mx-2">'
		str +=					'<i class="fa fa-picture-o"></i> Choose'
		str +=			'</button>'

		str +=			'<button type="button" class="btn btn-danger mx-2" onclick="removeImage('+image_count+')">'
		str +=					'<i class="fa fa-close"></i> Remove'
		str +=			'</button>'
		str +=		'</div>'
		str +=		'<input autocomplete="off" id="thumbnail_'+image_count+'"class="form-control thumbnail_path" type="text" name="imageProduct" readonly="readonly">'
		str +=	'</div>'
		$('#imageProduct').append(str);
		$('#lfm_'+image_count).filemanager('image');
		image_count++;
	}


	$('form#addproduct').submit(function(e){
		$('#body_html').val(CKEDITOR.instances.editor1.getData());
		loading();
		e.preventDefault();
		$.ajax({
			async:true,
			url: '{{route('addproduct')}}',
			type: 'post',
			data:new FormData(this),
			dataType:'JSON',
			contentType: false,
			cache: false,
			processData: false,
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
						setTimeout(function(){ reloadPage()}, 1000);
					}
				});				
			},

		});
	});
</script>
@endsection