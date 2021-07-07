@extends('layout.template')


@section('breadcrumb')
{{ Breadcrumbs::render('main-blogpost',$parent->first()) }}
@endsection

@section('body')
<div class="ps-blog-grid pt-50 pb-50">
  <div class="ps-container">
    <div class="row">
      <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
        <div class="ps-post--detail">
          <div class="ps-post__thumbnail"><img src="{{$parent->first()->thumbnail->original}}" alt=""></div>
          <div class="ps-post__header">
            <h1 class="ps-post__title">{{$parent->first()->title}}</h1>
            <p class="ps-post__meta">Posted by
              <a href="#">SEKANTAL</a> on {{\AppHelper::instance()->blogTime($parent->first()->created_at)}}
            </p>
          </div>
          <div class="ps-post__content">
            <p>{!!$parent->first()->meta->body_html!!}</p>
          </div>
          <p class="ps-post__meta">
            Tag: 
            @foreach($parent->first()->tags as $tag)
              <a href="{{route('main-tagpost',$tag->meta->path_url)}}">{{$tag->tagname}}{{$loop->last ? '' : ","}}</a>
            @endforeach
          </p>
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