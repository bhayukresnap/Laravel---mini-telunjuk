@extends('layout.template')


@section('breadcrumb')
<ol class="breadcrumb">
	{{ Breadcrumbs::render('main-plpBrand', $brand) }}
</ol>
@endsection

@section('body')
<h1 class="text-center">{{$brand->first()->brandName}}</h1>

<div class="ps-products-wrap pt-80 pb-80">
	<div class="ps-product-action">
		<div class="ps-product__filter">
			<select class="ps-select selectpicker" name="filter" id="main-filter">
				</select>
		</div>
		{{$products->appends(request()->input())->links('vendor.pagination.skytheme-filter')}}
	</div>
	<div data-mh="product-listing">
		<div class="ps-product__columns">
			@foreach($products as $product)
			<div class="ps-product__column">
				<div class="mb-30">
					<a class="ps-shoe__name" href="#">
						<img class="img-responsive" src="{{$product->thumbnail->first()->original}}" alt="{{$product->thumbnail->first()->alt}}">
						<div class="ps-shoe__detail pt-10">
							<div class="product_title">
								{{$product->product_name}}
							</div>
							<div class="ps-shoe__categories">
								<a href="{{route('main-plpBrand',$brand->first()->meta->path_url)}}">
									{{$brand->first()->brandName}}
								</a>
							</div>
							<p class="ps-shoe__price">
								{{$product->lowestPrice('PriceAfter')}}
							</p>
							<p>
								Termurah: {{$product->lowestPrice('store')}}
							</p>
						</div>
					</a>
				</div>
			</div>
			@endforeach
		</div>
	</div>
	<div class="ps-product-action">
		{{$products->appends(request()->input())->links('vendor.pagination.skytheme-filter')}}
	</div>
</div>
@endsection