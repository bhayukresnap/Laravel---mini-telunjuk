@extends('layout.template')

@section('breadcrumb')
{{ Breadcrumbs::render('main-tags') }}
@endsection

@section('body')
<h1 class="text-center">Tag</h1>
<div class="ps-blog-grid pt-50 pb-50">
	<div class="ps-container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<aside class="ps-widget--sidebar">
					<div class="ps-widget__content">
						<ul class="ps-tags">
							@foreach($tags as $tag)
							<li><a href="{{route('main-tagpost',$tag->meta->path_url)}}">{{$tag->tagname}}</a></li>
							@endforeach
						</ul>
					</div>
				</aside>
			</div>
		</div>
	</div>
</div>
@endsection