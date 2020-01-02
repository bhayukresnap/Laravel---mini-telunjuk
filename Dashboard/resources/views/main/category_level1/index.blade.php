@extends('layout.template')


@section('breadcrumb')
<ol class="breadcrumb">
	{{ Breadcrumbs::render('main-level1') }}
</ol>
@endsection

@section('body')
<h1 class="text-center">Products</h1>
<div class="ps-section ps-home-blog pt-80 pb-80">
	<div class="ps-container">
		<div class="ps-section__content">
			<div class="row">
				@if(count($categories) > 0)
					@foreach($categories as $category)
						<div class="col-lg-3 col-md-4 col-sm-12 col-xs-6 ">
							<div class="ps-post">
								<div class="ps-post__thumbnail">
									<a class="ps-post__overlay" href="{{route('main-plplevel1',$category->meta->path_url)}}"></a>
									<img src="{{$category->thumbnail->original}}" alt="{{$category->thumbnail->alt}}" width="100%">
								</div>
								<div class="ps-post__content text-center">
									<a class="ps-post__title" href="{{route('main-plplevel1',$category->meta->path_url)}}">{{$category->category_name}}</a>
								</div>
							</div>
						</div>
					@endforeach
				@endif
			</div>
		</div>
	</div>
</div>
@endsection