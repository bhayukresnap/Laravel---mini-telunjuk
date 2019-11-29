@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('editproduct', $product) }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="update" action="{{route('updateproduct', $product->id)}}">
	@csrf
	<div class="col-12 text-right">
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Save</button>
		</div>
	</div>
	<div class="col-12">
		<div class="card">
			<div class="card-header card-default">
				Image product
			</div>
			<div class="card-body row" id="imageProduct">
				<?php $count = 0; ?>
				@foreach($product->thumbnail as $image)
				<div class="col-6 col-md-3 mb-4" data-index-image="{{$count	}}">
					<img id="previewFeaturedImage" src="{{$image->original}}" class="img-fluid mb-2">
					<div class="input-group">
						<span class="input-group-btn">
							<a data-input="originalPath" data-preview="previewFeaturedImage" data-thumbs="thumbnailPath" class="btn btn-primary form-control thumbnail_image">
								<i class="fa fa-picture-o">&nbsp;</i> Choose
							</a>
						</span>
						<input autocomplete="off" id="originalPath" class="form-control" required type="text" name="original[]" readonly="readonly" value="{{$image->original}}">
					</div>
					@if($count != 0)
						<p class="text-danger" onclick="removeImage({{$count}})"><i class="fa fa-close"></i>Remove</p>
					@endif
				</div>
				<?php $count++; ?>
				@endforeach
			</div>
			<div class="card-footer">
				<button type="button" class="btn btn-outline-info" onclick="addImage()">Add image</button>
			</div>
		</div>
	</div>
	<div class="col-sm-8">
		<div class="card">
			<div class="card-header card-default">
				Update {{$product->product_name}}
			</div>
			<div class="card-body row">
				<div class="col-12">
					<div class="form-group">
						<label>Product name</label>
						<input type="text" name="product_name" class="form-control" required value="{{$product->product_name}}">
					</div>
					<div class="form-group">
						<label>Product description</label>
						<textarea class="summernote">{{$product->meta->body_html}}</textarea>
						<input type="hidden" name="body_html" value="{{$product->meta->body_html}}">
					</div>
					@foreach($stores as $store)
					@if(isset($product->stores()->where('store_id',$store->id)->first()->pivot))
						<?php
							$original_price = $product->stores()->where('store_id',$store->id)->first()->pivot->original_price;
							$current_price = $product->stores()->where('store_id',$store->id)->first()->pivot->current_price;
							$url_destination = $product->stores()->where('store_id',$store->id)->first()->pivot->url_destination;
						?>
					@else
						<?php
							$original_price = null;
							$current_price = null;
							$url_destination = null;
						?>
					@endif
					<div class="form-group">
						<label>{{$store->store_name}}</label>
						<input type="hidden" name="store[]" value="{{$store->id}}">
						<br>
						<small class="text-muted">Do not copy and paste, just type manually ex: 1200000</small>
						<div class="input-group mb-2">
							<span class="input-group-addon">Original price</span>
							<input type="text" class="form-control currency-dashboard" required value="{{$original_price}}">
							<input type="hidden" name="original_price[]" readonly class="final" value="{{$original_price}}">
						</div>
						<small class="text-muted">Do not copy and paste, just type manually ex: 1200000</small>
						<div class="input-group mb-2">
							<span class="input-group-addon">Current price</span>
							<input type="text" class="form-control currency-dashboard" value="{{$current_price}}">
							<input type="hidden" name="current_price[]" readonly class="final" value="{{$current_price}}">
						</div>
						<div class="input-group mb-2">
							<span class="input-group-addon">URL Destination</span>
							<input type="text" name="link_store[]" class="form-control" required value="{{$url_destination}}">
						</div>
					</div>
					
					@endforeach
				</div>
			</div>
		</div>
	</div>
	<div class="col-4">
		<div class="card">
			<div class="card-body">
				<div class="form-group">
					<label>Brand</label>
					<select name="brand" class="form-control">
						<option disabled selected>--Select brand--</option>
						@foreach($brands as $brand)
						<option value="{{$brand->id}}">{{$brand->brandName}}</option>
						@endforeach
					</select>
				</div>
				<div class="form-group">
					<label>Category</label>
					<select name="category" class="form-control">
						<option disabled selected>--Select category--</option>
						@foreach($categories as $category)
						<option value="{{$category->id}}">{{$category->category_name}}</option>
						@endforeach
					</select>
				</div>
			</div>
		</div>
		<div id="updateMeta"></div>
	</div>
</form>

@endsection
@section('script')
<script type="text/javascript">
	updateMeta('#updateMeta','{{$product->meta->path_url}}','{{$product->meta->meta_title}}','{{$product->meta->meta_description}}','{{$product->meta->meta_keyword}}','{{$product->meta->canonical}}','{{$product->meta->json_ld}}','{{$product->meta->noindex}}');
	$('select[name="brand"] option[value="{{$product->brandId}}"]').prop('selected','true');
	$('select[name="category"] option[value="{{$product->categoryId}}"]').prop('selected','true');



	var image_count = 1;
	function removeImage(index){
		$('[data-index-image="'+index+'"]').remove();
	}

	function addImage(){
		let str = '';
		str +=	'<div class="col-6 col-md-3 mb-4" data-index-image="'+image_count+'">'
		str +=		'<img id="previewFeaturedImage_'+image_count+'" src="/assets/img/noimg.jpg" class="img-fluid mb-2">'
		str +=		'<div class="input-group">'
		str +=			'<span class="input-group-btn">'
		str +=			'<a data-input="originalPath_'+image_count+'" data-preview="previewFeaturedImage_'+image_count+'" data-thumbs="thumbnailPath_'+image_count+'" class="btn btn-primary form-control thumbnail_image">'
		str +=					'<i class="fa fa-picture-o">&nbsp;</i> Choose'
		str +=			'</a>'
		str +=			'</span>'
		str +=			'<input autocomplete="off" id="originalPath_'+image_count+'" class="form-control" required type="text" name="original[]" readonly="readonly">'
		str +=		'</div>'
		str +=		'<p class="text-danger" onclick="removeImage('+image_count+')"><i class="fa fa-close"></i>Remove</p>'
		str +=	'</div>'
		$('#imageProduct').append(str);
		image_count++;
		$('.thumbnail_image').filemanager('image');
	}
	$('input#path_url').attr('readonly','readonly');
	$('input[name="product_name"]').on( "keyup", function(event) {
        $('input#path_url').val(convertToSlug(($('input[name="product_name"]').val())));
    });
</script>
@endsection