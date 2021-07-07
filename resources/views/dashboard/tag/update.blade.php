@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('edittag', $tag) }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="update" action="{{route('updatetag',$tag->id)}}">
	@csrf
	<div class="col-12 text-right">
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Save</button>
		</div>
	</div>
	<div class="col-sm-8">
		<div class="card">
			<div class="card-header card-default">
				Update {{$tag->tagname}}
			</div>
			<div class="card-body row">
				<div class="col-12">
					<div class="form-group">
						<label>Tag name</label>
						<input type="text" name="tagname" class="form-control" required value="{{$tag->tagname}}">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-4" id="updateMeta"></div>
</form>
@endsection

@section('script')
<script type="text/javascript">
	updateMeta('#updateMeta','{{$tag->meta->path_url}}','{{$tag->meta->meta_title}}','{{$tag->meta->meta_description}}','{{$tag->meta->meta_keyword}}','{{$tag->meta->canonical}}','{{$tag->meta->json_ld}}','{{$tag->meta->noindex}}');
</script>
@endsection