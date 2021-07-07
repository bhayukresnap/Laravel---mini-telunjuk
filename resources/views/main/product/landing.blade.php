@extends('layout.template')


@section('breadcrumb')
{{ Breadcrumbs::render('main-product',$product) }}
@endsection

@section('body')

	<div class="ps-product--detail pt-60">
        <div class="ps-container">
          <div class="row">
            <div class="col-lg-10 col-md-12 col-lg-offset-1">
              <div class="ps-product__thumbnail">
                <div class="ps-product__preview">
                  <div class="ps-product__variants">
                  	@foreach($product->first()->thumbnail as $image)
                    	<div class="item"><img src="{{$image->original}}" alt="{{$image->alt}}"></div>
                    @endforeach
                   
                  </div>
                </div>
                <div class="ps-product__image">
                	@foreach($product->first()->thumbnail as $image)
                    	<div class="item"><img class="zoom" src="{{$image->original}}" alt="{{$image->alt}}" data-zoom-image="{{$image->original}}"></div>
                    @endforeach
                </div>
              </div>
              <div class="ps-product__thumbnail--mobile">
                <div class="ps-product__main-img">
                	<img src="{{$product->first()->thumbnail->first()->original}}" alt="{{$product->first()->thumbnail->first()->alt}}">
                </div>
                <div class="ps-product__preview owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000" data-owl-gap="20" data-owl-nav="true" data-owl-dots="false" data-owl-item="3" data-owl-item-xs="3" data-owl-item-sm="3" data-owl-item-md="3" data-owl-item-lg="3" data-owl-duration="1000" data-owl-mousedrag="on">
                	@foreach($product->first()->thumbnail as $image)
                    	<img src="{{$image->original}}" alt="{{$image->alt}}">
                    @endforeach
                </div>
              </div>
              <div class="ps-product__info">
                <h1>{{$product->first()->product_name}}</h1>
                <div class="ps-shoe__categories">
                  <a href="{{route('main-plpbrand',$product->first()->brand->meta->path_url)}}">
                    {{$product->first()->brand->brandName}}
                  </a>
                </div>
                <div class="ps-product__price">
                  @if(!empty($product->first()->lowestPrice('PriceBefore')))
                  <del>{{$product->first()->lowestPrice('PriceBefore')}}</del>
                  @endif
                  {{$product->first()->lowestPrice('PriceAfter')}}
                </div>
                <div class="ps-product__block ps-product__quickview">
                  <p>Harga termurah di:</p>
                  <img src="{{$product->first()->lowestPrice('store_image')->original}}" class="img-responsive">
                  
                </div>
                
                <div class="ps-product__shopping mt-20">
                  <a class="ps-btn mb-10" href="{{$product->first()->lowestPrice('url')}}">Beli sekarang<i class="ps-icon-next"></i></a>
                </div>
              </div>

              <div class="clearfix"></div>
              <div class="ps-product__content">
                <ul class="tab-list" role="tablist">
                  <li class="active"><a href="#tab_01" aria-controls="tab_01" role="tab" data-toggle="tab">Overview</a></li>
                </ul>
              </div>
              <div class="tab-content mb-60">
                <div class="tab-pane active" role="tabpanel" id="tab_01">
                  <p>{!!$product->first()->meta->body_html!!}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ps-section ps-section--top-sales ps-owl-root">
        <div class="ps-container">
          <div class="ps-section__header">
            <div class="row">
                  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                    <h3 class="ps-section__title" data-mask="Related item">- YOU MIGHT ALSO LIKE</h3>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                    <div class="ps-owl-actions"><a class="ps-prev" href="#"><i class="ps-icon-arrow-right"></i>Prev</a><a class="ps-next" href="#">Next<i class="ps-icon-arrow-left"></i></a></div>
                  </div>
            </div>
          </div>
          <div class="ps-section__content">
            <div class="ps-owl--colection owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000" data-owl-gap="0" data-owl-nav="false" data-owl-dots="false" data-owl-item="4" data-owl-item-xs="2" data-owl-item-sm="2" data-owl-item-md="3" data-owl-item-lg="4" data-owl-duration="1000" data-owl-mousedrag="on">

             @foreach($alsoLike as $crossSelling)
              	<div class="ps-shoes--carousel">
	                <div class="ps-product__column">
						<a class="ps-shoe__name" href="{{route('main-product',$crossSelling->meta->path_url)}}">
							<img class="img-responsive" src="{{$crossSelling->thumbnail->first()->original}}" alt="{{$crossSelling->thumbnail->first()->alt}}">
							<div class="ps-shoe__detail pt-10">
								<div class="product_title">
									{{$crossSelling->product_name}}
								</div>
								<div class="ps-shoe__categories">
									<a href="{{route('main-plpbrand',$crossSelling->brand->meta->path_url)}}">
										{{$crossSelling->brand->brandName}}
									</a>
								</div>
								@if(!empty($crossSelling->lowestPrice('PriceBefore')))
								<div class="ps-shoe__price">
									<del>
										{{$crossSelling->lowestPrice('PriceBefore')}}
									</del>
								</div>
								@endif
								<p class="ps-shoe__price">
									{{$crossSelling->lowestPrice('PriceAfter')}}
								</p>
								<img src="{{$crossSelling->lowestPrice('store_image')->original}}" style="width: 50%;">
							</div>
						</a>
	                </div>
	              </div>
             @endforeach

              
            </div>
          </div>
        </div>
      </div>
@endsection