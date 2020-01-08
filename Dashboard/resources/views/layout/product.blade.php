@if(count($products) > 0)
<div class="ps-products-wrap">
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
					<a class="ps-shoe__name" href="{{route('main-product',$product->meta->path_url)}}">
						<img class="img-responsive" src="{{$product->thumbnail->first()->original}}" alt="{{$product->thumbnail->first()->alt}}">
						<div class="ps-shoe__detail pt-10">
							<div class="product_title">
								{{$product->product_name}}
							</div>
							<div class="ps-shoe__categories">
								<a href="{{route('main-plpbrand',$product->brand->meta->path_url)}}">
									{{$product->brand->brandName}}
								</a>
							</div>
							@if(!empty($product->lowestPrice('PriceBefore')))
							<div class="ps-shoe__price">
								<del>
									{{$product->lowestPrice('PriceBefore')}}
								</del>
							</div>
							@endif
							<p class="ps-shoe__price">
								{{$product->lowestPrice('PriceAfter')}}
							</p>
							<img src="{{$product->lowestPrice('store_image')->original}}" style="width: 50%;">
							{{-- <p>
								Termurah: {{$product->lowestPrice('store')}}
							</p> --}}
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
@endif