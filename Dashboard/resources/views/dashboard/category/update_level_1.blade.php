@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('editcategorieslevel1', $category) }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="update" action="{{route('updatecategorieslevel1', $category->id)}}">
	@csrf
	<div class="col-12 text-right">
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Save</button>
		</div>
	</div>
	<div class="col-sm-8">
		<div class="card">
			<div class="card-header card-default">
				Update {{$category->category_name}}
			</div>
			<div class="card-body row">
				<div class="col-12">
					<div class="form-group">
						<label>Category name</label>
						<input type="text" name="category_name" class="form-control" required value="{{$category->category_name}}">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-12 col-md-4" id="updateMeta"></div>
</form>
@endsection

@section('script')
<script type="text/javascript">
	updateMeta('#updateMeta','{{$category->meta->path_url}}','{{$category->meta->meta_title}}','{{$category->meta->meta_description}}','{{$category->meta->meta_keyword}}','{{$category->meta->canonical}}','{{$category->meta->json_ld}}','{{$category->meta->noindex}}');
</script>
@endsection