@extends('layout.template')


@section('breadcrumb')
{{ Breadcrumbs::render('main-promo') }}
@endsection

@section('body')
<h1 class="text-center">Promo</h1>
<div class="ps-blog-grid pt-50 pb-50">
  <div class="ps-container">
    <div class="row">
      @foreach($promotions as $promotion)
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
        <div class="ps-post mb-30">
          <div class="ps-post__thumbnail">
            <a class="ps-post__overlay" href="blog-detail.html"></a>
            <img src="{{$promotion->thumbnail->original}}" alt="">
          </div>
          <div class="ps-post__content">
            <a class="ps-post__title" href="blog-detail.html">{{$promotion->title}}</a>
            <p class="ps-post__meta">
              <span>By:
                <a class="mr-5" href="#">{{$promotion->belongStore->store_name}}</a>
              </span>
              <span class="ml-5">({{\AppHelper::instance()->startTime($promotion->started_at)}} - {{\AppHelper::instance()->endTime($promotion->ended_at)}})</span>
            </p>
            <a class="ps-morelink" href="{{$promotion->link}}" target="_blank">CEK SEKARANG di {{$promotion->belongStore->store_name}}<i class="fa fa-long-arrow-right"></i></a>
          </div>
        </div>
      </div>
      @endforeach
    </div>
    <div class="mt-30">
      {{$promotions->links('vendor.pagination.skytheme-filter')}}
    </div>
  </div>
</div>
@endsection