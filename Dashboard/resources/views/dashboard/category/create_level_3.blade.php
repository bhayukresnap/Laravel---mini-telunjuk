@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('createcategorieslevel1') }}
	</ol>
</div>
@endsection

@section('body')
<form class="row" id="add" action="{{route('addcategorieslevel3')}}">
	@csrf
	<div class="col-12 text-right">
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Save</button>
		</div>
	</div>
	<div class="col-sm-8">
		<div class="card">
			<div class="card-header card-default">
				Create category level 3
			</div>
			<div class="card-body row">
				<div class="col-12">
					<div class="form-group">
						<label>Category Level 1</label>
						<select class="form-control" name="categoryLvl2">
							<option disabled selected>--Select--</option>
							@foreach($category_level_2 as $category)
								<option value="{{$category->id}}">{{$category->category_name}}</option>
							@endforeach
						</select>
					</div>
					<div class="form-group">
						<label>Category name</label>
						<input type="text" name="category_name" class="form-control" required>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-12 col-md-4" id="createMeta"></div>
</form>
@endsection