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

@if(count($products) > 0)
<div class="row">
	<div class="col-sm-12">
		<div class="card">
			<div class="card-header card-default">
				<h3>Product</h3>
			</div>
			<div class="card-body">
				<table class="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Thumbnail</th>
							<th>Title</th>
							<th>Created at</th>
							<th>Last Modified</th>
							<th>Published at</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<?php $no = 1; ?>
						@foreach($products as $product)
						<tr>
							<td>{{$no}}</td>
							<td>
								<img src="{{$product->thumbnail->original}}" width="100px" alt="{{$product->thumbnail->alt}}">
							</td>
							<td>{{$product->title}}</td>
							<td>{{$product->meta->created_at->diffForHumans()}}</td>
							<td>{{$product->meta->updated_at->diffForHumans()}}</td>
							<td>{{$product->getPublishedTime($product->published_at)}}</td>
							<td>
								<a href="{{route('editblog',$product->id)}}" class="btn btn-sm btn-success"><i class="fa fa-edit"></i> Update</a>
								<a href="#" class="btn btn-sm btn-danger btn-delete" data-list='{"name":"{{$product->title}}","url":"{{route("deleteblog",$product->id)}}"}'><i class="fa fa-trash"></i> Delete</a>
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