@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('editbrand', $brand) }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="update" action="{{route('updatebrand',$brand->id)}}">
	@csrf
	<div class="col-12 text-right">
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Save</button>
		</div>
	</div>
	<div class="col-sm-8">
		<div class="card">
			<div class="card-header card-default">
				Update {{$brand->brandName}}
			</div>
			<div class="card-body row">
				<div class="col-12">
					<div class="form-group">
						<label>Brand name</label>
						<input type="text" name="brandName" class="form-control" required value="{{$brand->brandName}}">
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
	updateMeta('#updateMeta','{{$brand->meta->path_url}}','{{$brand->meta->meta_title}}','{{$brand->meta->meta_description}}','{{$brand->meta->meta_keyword}}','{{$brand->meta->canonical}}','{{$brand->meta->json_ld}}','{{$brand->meta->noindex}}');
</script>
@endsection