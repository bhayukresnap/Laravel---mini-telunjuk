@extends('dashboard.layout.template')

@section('breadcrumb')
	<div class="col-12 align-self-center">
		<ol class="breadcrumb">
			{{ Breadcrumbs::render('stores') }}
		</ol>
	</div>
@endsection
@section('body')
<div class="row mb-2">
	<div class="col-12">
		<a href="#" data-toggle="modal" data-target="#createBrand" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add store</a>
	</div>
</div>

@if(isset($stores))
	<div class="row">
		<div class="col-sm-8">
			<div class="card">
				<div class="card-header card-default">
					
				</div>
			</div>
		</div>
	</div>
@endif
@endsection