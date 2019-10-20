@extends('dashboard.layout.template')
@section('body')
<div class="container">
	<div class="block-header">
		<div class="row clearfix">                
			<div class="col-md-12">
				<h1>Update image</h1>
				<br>
				<form id="addimage">
					@method('put')
					@csrf
					<div class="card">
						<div class="body">
							<input type="file" id="image" name="path" class="dropify"  autocomplete="off" data-allowed-file-extensions="png jpeg jpg" data-default-file="{{URL($images->path)}}">
						</div>
					</div>
					<div class="form-group">
	                    <label>Alternative Text</label>
	                	<input type="text" id="alt" name="alt" class="form-control"  autocomplete="off" value="{{$images->alt}}">
	                </div>
	                <button type="submit" class="btn btn-primary">Update</button>
				</form>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
	$('form#addimage').submit(function(e){
		loading();
		e.preventDefault();
		$.ajax({
			async:true,
			url: '{{route('updateimage', ['image'=> $images->id])}}',
			type: 'post',
			data: new FormData(this),
			dataType:'JSON',
            contentType: false,
            cache: false,
            processData: false,
			enctype: 'multipart/form-data',
			error: function (code, statusText, error) {
				notification("error", code.responseText +statusText+error)
			},
			success: function(success){
				removeLoading();
				$.each(success, function(status, responseStatus){
					$.each(this, function(key,value){
						notification(status, value)
					});
				});				
			},

		});
		
	});
	
</script>
@endsection