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
		<a href="{{route('createstore')}}" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add store</a>
	</div>
</div>

<div class="row">
	<div class="col-sm-12">
		<div class="card">
			<div class="card-header card-default">
				<h3>Store</h3>
			</div>
			<div class="card-body">
				<table class="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Thumbnail</th>
							<th>Store</th>
							<th>Created at</th>
							<th>Last Modified</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<?php $no = 1; ?>
						@foreach($stores as $store)
						<tr>
							<td>{{$no}}</td>
							<td>
								<img src="{{$store->thumbnail->featuredImage}}" width="100px" alt="{{$store->thumbnail->alt}}">
							</td>
							<td>{{$store->store_name}}</td>
							<td>{{$store->meta->created_at->diffForHumans()}}</td>
							<td>{{$store->meta->updated_at->diffForHumans()}}</td>
							<td>
								<a href="{{route('editstore',$store->id)}}" class="btn btn-sm btn-success"><i class="fa fa-edit"></i> Update</a>
								<a href="#" class="btn btn-sm btn-danger btn-delete" data-list='{"name":"{{$store->store_name}}", "id":"{{$store->id}}","url":"{{route("deletestore",":id")}}"}'><i class="fa fa-trash"></i> Delete</a>
							</td>
						</tr>
						<?php $no++; ?>
						@endforeach
					</tbody>
				</table>
				{{ $stores->links() }}
			</div>
		</div>
	</div>
</div>
@endsection