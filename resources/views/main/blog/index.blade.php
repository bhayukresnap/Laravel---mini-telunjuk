@extends('layout.template')


@section('breadcrumb')
{{ Breadcrumbs::render('main-blogs') }}
@endsection

@section('body')
<h1 class="text-center">Blog</h1>
<div class="ps-blog-grid pt-50 pb-50">
  <div class="ps-container">
    <div class="row">
      <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        
        @if(count($blogs) > 0)
          @foreach($blogs as $blog)
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
              <div class="ps-post mb-30">
                <div class="ps-post__thumbnail">
                  <a class="ps-post__overlay" href="{{route('main-blogpost',$blog->meta->path_url)}}"></a>
                  <img src="{{$blog->thumbnail->original}}" alt="">
                </div>
                <div class="ps-post__content">
                  <a class="ps-post__title" href="{{route('main-blogpost',$blog->meta->path_url)}}">{{$blog->title}}</a>
                  <p class="ps-post__meta">
                    <span>By:<a class="mr-5" href="#">Sekantal</a></span> -<span class="ml-5">{{\AppHelper::instance()->blogTime($blog->created_at)}}</span>
                  </p>
                  <a class="ps-morelink" href="{{route('main-blogpost',$blog->meta->path_url)}}">
                    Read more
                    <i class="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            @endforeach
          @else
          <h3 class="ps-post__title">No Post yet</h3>
        @endif
        <div class="mt-30">
          {{$blogs->links('vendor.pagination.skytheme-filter')}}
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
        @includeIf('includes.blog-sidebar')
      </div>
    </div>
  </div>
</div>
</div>
@endsection