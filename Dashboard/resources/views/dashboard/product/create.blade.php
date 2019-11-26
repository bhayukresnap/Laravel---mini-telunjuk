@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('createproduct') }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="add" action="{{route('addproduct')}}">
	@csrf
	<div class="col-12 text-right">
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Save</button>
		</div>
	</div>
	<div class="col-sm-8">
		<div class="card">
			<div class="card-header card-default">
				Create product
			</div>
			<div class="card-body row">
				<div class="col-12">
					<div class="form-group">
						<label>Product name</label>
						<input type="text" name="product_name" class="form-control" required>
					</div>
					<div class="form-group">
						<label>Product description</label>
						<input type="text" name="product_description" class="form-control" required>
					</div>
					<div class="form-group">
						<label>Product spesification</label>
						<input type="text" class="summernote">
						<input type="hidden" name="body_html">
					</div>
					@foreach($stores as $store)
					<div class="form-group">
						<label>{{$store->store_name}}</label>
						<input type="hidden" name="store[]" value="{{$store->id}}">
						<div class="input-group mb-2">
							<span class="input-group-addon">Original price</span>
							<input type="text" class="form-control currency" required>
							<input type="hidden" name="original_price[]" readonly class="final">
						</div>
						<div class="input-group mb-2">
							<span class="input-group-addon">Current price</span>
							<input type="text" class="form-control currency" required>
							<input type="hidden" name="current_price[]" readonly class="final">
						</div>
						<div class="input-group mb-2">
							<span class="input-group-addon">URL Destination</span>
							<input type="text" name="link_store[]" class="form-control" required>
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
					<select name="brand" class="form-control">
						<option disabled selected>--Select category--</option>
						@foreach($categories as $category)
						<option value="{{$category->id}}">{{$category->category_name}}</option>
						@endforeach
					</select>
				</div>
			</div>
		</div>
		<div id="createMeta"></div>
	</div>
</form>
@endsection

@section('script')
<script type="text/javascript">

$('.currency').on('blur',function(){
	$(this).val(accounting.formatMoney($(this).val(), 'Rp '))
	$(this).siblings('input.final').val(accounting.unformat($(this).val()));
});
</script>
@endsection