@extends('layout.template')


@section('breadcrumb')
{{ Breadcrumbs::render('main-plplevel1', $parent)}}
@endsection

@section('body')
	
	<h1 class="text-center pb-80">{{$parent->first()->category_name}}</h1>
	@if(isset($childs))
		<div class="ps-section ps-home-blog pb-20">
			<div class="ps-container">
				<div class="ps-section__content">
					<div class="row">
						@if(count($childs) > 0)
							@foreach($childs as $child)
								<div class="col-lg-3 col-md-4 col-sm-12 col-xs-6 ">
									<div class="ps-post">
										<div class="ps-post__thumbnail">
											<a class="ps-post__overlay" href="{{route('main-plplevel2',['slug_level1'=>$child->belongslevel1->meta->path_url,'slug_level2'=>$child->meta->path_url])}}"></a>
											<img src="{{$child->thumbnail->original}}" alt="{{$child->thumbnail->alt}}" width="100%">
										</div>
										<div class="ps-post__content text-center">
											<a class="ps-post__title" href="{{route('main-plplevel2',['slug_level1'=>$child->belongslevel1->meta->path_url,'slug_level2'=>$child->meta->path_url])}}">{{$child->category_name}}</a>
										</div>
									</div>
								</div>
							@endforeach
						@endif
					</div>
				</div>
			</div>
		</div>
	@endif
	@includeIf('includes.product')
@endsection