@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('editstore', $store) }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="updateStore">
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
					<img id="previewFeaturedImage" src="{{$store->thumbnail->featuredImage}}" class="img-fluid mb-2">
					<div class="input-group">
						<span class="input-group-btn">
							<a data-input="thumbnail" data-preview="previewFeaturedImage" class="btn btn-primary form-control thumbnail_image">
								<i class="fa fa-picture-o">&nbsp;</i> Choose
							</a>
						</span>
						<input autocomplete="off" id="thumbnail" class="form-control thumbnail_path" required type="text" name="store_logo" readonly="readonly" value="{{$store->thumbnail->featuredImage}}">
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
	$('form#updateStore').submit(function(e){
		e.preventDefault();
		Swal.fire({
			title: 'Please wait!',
			onOpen: ()=>{
				Swal.showLoading();
				$.ajax({
					async:true,
					url: '{{route('updatestore', $store->id)}}',
					type: 'put',
                	data: $(this).serialize(),
					error: function(code, statusText, error){
						Swal.fire({
							title: code.responseText,
							text: 'Please try again later :)',
							type: 'error',
							confirmButtonClass: 'btn btn-primary btn-lg',
							buttonsStyling: false
						});
						console.log(code)
					},
					success: function(success){
						let type, text = [], str = '';
						$.each(success,function(status, responseStatus){
							$.each(this,function(key,value){
								type = status;
								text.push(value);
							})
						});
						$.map(text, function( n ) {
							return str += '<div>'+n+'</div>';
						}),
						Swal.fire({
							title: '<span style="text-transform:capitalize;">'+type+'!</span>',
							html: str,
							type: type,
							confirmButtonClass: 'btn btn-space btn-lg btn-primary hover',
							confirmButtonText: 'Ok',
							buttonsStyling: false,
							onClose: ()=>{
								refreshPage();
							}
						});	

					}
				})
			}
		});

		return false;
	});
</script>
@endsection