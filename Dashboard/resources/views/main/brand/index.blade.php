@extends('layout.template')


@section('breadcrumb')
<ol class="breadcrumb">
	{{ Breadcrumbs::render('main-brands') }}
</ol>
@endsection



@section('body')
<h1 class="text-center">Brand</h1>
<div class="ps-products-wrap pt-80 pb-80">
	<div data-mh="product-listing">
		<div class="ps-product__columns text-center">
			@foreach($brands as $brand)
			<div class="ps-product__column">
				<div class="mb-30">
					<a class="ps-shoe__name" href="{{route('main-plpBrand',$brand->meta->path_url)}}">
						<img src="{{$brand->thumbnail->original}}" alt="{{$brand->thumbnail->alt}}" width="50">
						<div class="ps-shoe__detail pt-10">
							{{$brand->brandName}}
						</div>
					</a>
				</div>
			</div>
			@endforeach
		</div>
	</div>
</div>
@endsection