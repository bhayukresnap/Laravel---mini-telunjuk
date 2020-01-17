@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('createpromotion') }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="add" action="{{route('addpromotion')}}">
	@csrf
	<div class="col-12 text-right">
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Save</button>
		</div>
	</div>
	<div class="col-sm-8">
		<div class="card">
			<div class="card-header card-default">
				Create promotion
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
						<label>Promotion name</label>
						<input type="text" name="title" class="form-control" required>
					</div>
					<div class="form-group">
						<label>Alt img</label>
						<input type="text" name="alt" class="form-control" required>
					</div>
					<div class="form-group">
						<label>Store</label>
						<select class="form-control" name="store_id">
							<option disabled selected>--Select--</option>
							@foreach($stores as $store)
								<option value="{{$store->id}}">{{$store->store_name}}</option>
							@endforeach
						</select>
					</div>
					<div class="form-group">
						<label>Period</label>
						<div class="input-group m-b">
							<span class="input-group-addon"><i class="fa fa-calendar"></i></span>
							<input type="text" name="start_end_promotion" required/>
							<input type="hidden" name="started_at">
							<input type="hidden" name="ended_at">
						</div>
					</div>
				</div>
				<div class="col-12">
					<div class="form-group">
						<label>Link</label>
						<input type="text" name="link" class="form-control" required>
					</div>
				</div>
				<div class="col-12 my-4">
					<div class="form-group">
						<label>Body</label>
						<input type="text" class="summernote">
						<input type="hidden" name="body_html">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-4" id="createMeta"></div>
</form>
@endsection
