@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('createtag') }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="add" action="{{route('addtag')}}">
	@csrf
	<div class="col-12 text-right">
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Save</button>
		</div>
	</div>
	<div class="col-sm-8">
		<div class="card">
			<div class="card-header card-default">
				Create tag
			</div>
			<div class="card-body row">
				<div class="col-12">
					<div class="form-group">
						<label>Tag name</label>
						<input type="text" name="tagname" class="form-control" required>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-4" id="createMeta"></div>
</form>
@endsection