@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('editstore', $store) }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="update" action="{{route('updatestore', $store->id)}}">
	@csrf
	<div class="col-12 text-right">
		<div class="form-group">
			<button type="submit" class="btn btn-success">Update</button>
		</div>
	</div>
	<div class="col-sm-8">
		<div class="card">
			<div class="card-header card-default">
				Update {{$store->store_name}}
			</div>
			<div class="card-body row">
				<div class="col-6">
					<img id="previewFeaturedImage" src="{{$store->thumbnail->original}}" class="img-fluid mb-2">
					<div class="input-group">
						<span class="input-group-btn">
							<a data-input="originalPath" data-preview="previewFeaturedImage" data-thumbs="thumbnailPath" class="btn btn-primary form-control thumbnail_image">
								<i class="fa fa-picture-o">&nbsp;</i> Choose
							</a>
						</span>
						<input autocomplete="off" id="originalPath" class="form-control" required type="text" name="original" readonly="readonly" value="{{$store->thumbnail->original}}">
					</div>
				</div>
				<div class="col-6">
					<div class="form-group">
						<label>Store name</label>
						<input type="text" name="store_name" class="form-control" required value="{{$store->store_name}}">
					</div>
					<div class="form-group">
						<label>Alt img</label>
						<input type="text" name="alt" class="form-control" required value="{{$store->thumbnail->alt}}">
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
	updateMeta('#updateMeta','{{$store->meta->path_url}}','{{$store->meta->meta_title}}','{{$store->meta->meta_description}}','{{$store->meta->meta_keyword}}','{{$store->meta->canonical}}','{{$store->meta->json_ld}}','{{$store->meta->noindex}}');
</script>
@endsection