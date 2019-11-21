@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('brands') }}
	</ol>
</div>
@endsection
@section('body')
<div class="row mb-2">
	<div class="col-12">
		<a href="{{route('createbrand')}}" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add brand</a>
	</div>
</div>
@if(count($brands)>0)
<div class="row">
	<div class="col-sm-12">
		<div class="card">
			<div class="card-header card-default">
				<h3>Brand</h3>
			</div>
			<div class="card-body">
				<table class="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Brand</th>
							<th>Created at</th>
							<th>Last Modified</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<?php $no = 1; ?>
						@foreach($brands as $brand)
						<tr>
							<td>{{$no}}</td>
							<td>{{$brand->brandName}}</td>
							<td>{{$brand->meta->created_at->diffForHumans()}}</td>
							<td>{{$brand->meta->updated_at->diffForHumans()}}</td>
							<td>
								<a href="{{route('editbrand',$brand->id)}}" class="btn btn-sm btn-success"><i class="fa fa-edit"></i> Update</a>
								<a href="#" class="btn btn-sm btn-danger btn-delete" data-list='{"name":"{{$brand->store_name}}", "url":"{{route("deletebrand",$brand->id)}}"}'><i class="fa fa-trash"></i> Delete</a>
							</td>
						</tr>
						<?php $no++; ?>
						@endforeach
					</tbody>
				</table>
				{{ $brands->links() }}
			</div>
		</div>
	</div>
</div>
@endif
@endsection