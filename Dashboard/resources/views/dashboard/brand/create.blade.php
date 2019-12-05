@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('createbrand') }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="add" action="{{route('addbrand')}}">
	@csrf
	<div class="col-12 text-right">
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Save</button>
		</div>
	</div>
	<div class="col-sm-8">
		<div class="card">
			<div class="card-header card-default">
				Create brand
			</div>
			<div class="card-body row">
				<div class="col-6">
					<img id="previewFeaturedImage" src="/assets/img/noimg.jpg" class="img-fluid mb-2">
					<div class="input-group">
						<span class="input-group-btn">
							<a data-input="originalPath" data-preview="previewFeaturedImage" data-thumbs="thumbnailPath" class="btn btn-primary form-control thumbnail_image">
								<i class="fa fa-picture-o">&nbsp;</i> Choose
							</a>
						</span>
						<input autocomplete="off" id="originalPath" class="form-control" required type="text" name="original" readonly="readonly">
					</div>
				</div>
				<div class="col-6">
					<div class="form-group">
						<label>Brand name</label>
						<input type="text" name="brandName" class="form-control" required>
					</div>
					<div class="form-group">
						<label>Alt img</label>
						<input type="text" name="alt" class="form-control" required>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-4" id="createMeta"></div>
</form>
@endsection