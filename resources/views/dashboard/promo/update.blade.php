@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('updatepromotion', $promotion) }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="update" action="{{route('updatepromotion', $promotion->id)}}">
	@csrf
	<div class="col-12 text-right">
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Save</button>
		</div>
	</div>
	<div class="col-sm-8">
		<div class="card">
			<div class="card-header card-default">
				Update {{$promotion->title}}
			</div>
			<div class="card-body row">
				<div class="col-6">
					<img id="previewFeaturedImage" src="{{$promotion->thumbnail->original}}" class="img-fluid mb-2">
					<div class="input-group">
						<span class="input-group-btn">
							<a data-input="originalPath" data-preview="previewFeaturedImage" data-thumbs="thumbnailPath" class="btn btn-primary form-control thumbnail_image">
								<i class="fa fa-picture-o">&nbsp;</i> Choose
							</a>
						</span>
						<input autocomplete="off" id="originalPath" class="form-control" required type="text" name="original" readonly="readonly" value="{{$promotion->thumbnail->original}}">
					</div>
				</div>

				<div class="col-6">
					<div class="form-group">
						<label>Promotion name</label>
						<input type="text" name="title" class="form-control" required value="{{$promotion->title}}">
					</div>
					<div class="form-group">
						<label>Alt img</label>
						<input type="text" name="alt" class="form-control" required value="{{$promotion->thumbnail->alt}}">
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
							<input type="text" name="start_end_promotion" required value="{{\Carbon\Carbon::parse($promotion->started_at)->format('m/d/Y')}} - {{\Carbon\Carbon::parse($promotion->ended_at)->format('m/d/Y')}}" />
							<input type="hidden" name="started_at" value="{{$promotion->started_at}}">
							<input type="hidden" name="ended_at" value="{{$promotion->ended_at}}">
						</div>
					</div>
				</div>
				<div class="col-12">
					<div class="form-group">
						<label>Link</label>
						<input type="text" name="link" class="form-control" required value="{{$promotion->link}}">
					</div>
				</div>
				<div class="col-12 my-4">
					<div class="form-group">
						<label>Body</label>
						<textarea type="text" class="summernote">{{$promotion->meta->body_html}}</textarea>
						<input type="hidden" name="body_html" value="{{$promotion->meta->body_html}}">
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
	updateMeta('#updateMeta','{{$promotion->meta->path_url}}','{{$promotion->meta->meta_title}}','{{$promotion->meta->meta_description}}','{{$promotion->meta->meta_keyword}}','{{$promotion->meta->canonical}}','{{$promotion->meta->json_ld}}','{{$promotion->meta->noindex}}');

	$('select[name="store_id"] option[value="{{$promotion->store_id}}"]').prop('selected','true');
</script>
@endsection
