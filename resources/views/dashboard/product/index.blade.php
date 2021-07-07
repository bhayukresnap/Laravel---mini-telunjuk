@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('products') }}
	</ol>
</div>
@endsection

@section('body')
<div class="row mb-2">
	<div class="col-12">
		<a href="{{route('createproduct')}}" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add product</a>
	</div>
</div>
@if(count($products)>0)
<div class="row">
	<div class="col-sm-12">
		<div class="card">
			<div class="card-header card-default">
				<h3>Product</h3>
			</div>
			<div class="card-body">
				<div class="row">
					<form class="col-6" method="get" action="{{route('searchproduct')}}">
						<div class="form-group">
							<label>Search</label>
							<input type="text" name="q" class="form-control" placeholder="Product name">
							<small class="text-muted">A block of help text that breaks onto a new line and may extend beyond one line.</small>
						</div>
					</form>
				</div>
				<br>
				<table class="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Thumbnail</th>
							<th>Product name</th>
							<th>Created at</th>
							<th>Last Modified</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<?php $no = 1; ?>
						@foreach($products as $product)
						<tr>
							<td>{{$no}}</td>
							<td>
								<img src="{{$product->thumbnail->first()->original}}" width="100px" alt="{{$product->thumbnail->first()->alt}}">
							</td>
							<td>{{$product->product_name}}</td>
							<td>{{$product->meta->created_at->diffForHumans()}}</td>
							<td>{{$product->meta->updated_at->diffForHumans()}}</td>
							<td>
								<a href="{{route('editproduct',$product->id)}}" class="btn btn-sm btn-success"><i class="fa fa-edit"></i> Update</a>
								<a href="#" class="btn btn-sm btn-danger btn-delete" data-list='{"name":"{{$product->product_name}}","url":"{{route("deleteproduct",$product->id)}}"}'><i class="fa fa-trash"></i> Delete</a>
							</td>
						</tr>
						<?php $no++; ?>
						@endforeach
					</tbody>
				</table>
				{{ $products->links() }}
			</div>
		</div>
	</div>
</div>
@endif
@endsection