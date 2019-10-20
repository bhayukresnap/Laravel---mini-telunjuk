@extends('dashboard.layout.template')
@section('body')

<div class="container">
	<div class="block-header">
		<div class="row clearfix">                
			<div class="col-md-12">
				<h1>Upload image</h1>
				<br>
				<form id="addimage" enctype="multipart/form-data">
					@csrf
					<div class="card">
						<div class="body">
							<input type="file" id="image" name="path" class="dropify"  autocomplete="off" data-allowed-file-extensions="png jpeg jpg">
						</div>
					</div>
					<div class="form-group">
	                    <label>Alternative Text</label>
	                	<input type="text" id="alt" name="alt" class="form-control"  autocomplete="off">
	                </div>
	                <button type="submit" class="btn btn-success">Save</button>
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
			url: '{{route('addimage')}}',
			type: 'post',
			data:new FormData(this),
			dataType:'JSON',
			contentType: false,
			cache: false,
			processData: false,
			error: function (code, statusText, error) {
				notification("error", code.responseText +statusText+error)
			},
			success: function(success){
				removeLoading();
				$.each(success, function(status, responseStatus){
					$.each(this, function(key,value){
						notification(status, value)
					});
					if(responseStatus == 200){
						$('.dropify-clear').click();
						$('#alt').val('');
						$('#image_name').val('');
					}
				});				
			},

		});
		
	});
	
</script>
@endsection