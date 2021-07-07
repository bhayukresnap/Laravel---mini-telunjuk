@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('searchproduct') }}
	</ol>
</div>
@endsection

@section('body')


<div class="row">
	<div class="col-sm-12">
		<div class="card">
			<div class="card-header card-default text-center">
				<h1 style="text-transform: none;">You are searching for "{{$req->q}}"</h3>
			</div>
			<div class="card-body">
				<div class="row">
					<form class="col-6" method="get" action="{{route('searchproduct')}}">
						<div class="form-group">
							<label>Search</label>
							<input type="text" name="q" class="form-control" placeholder="Title or Slug" value="{{$req->q}}">
						</div>
					</form>
				</div>
				<br>
				@if(isset($products))
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
								<a href="{{route('editblog',$product->id)}}" class="btn btn-sm btn-success"><i class="fa fa-edit"></i> Update</a>
								<a href="#" class="btn btn-sm btn-danger btn-delete" data-list='{"name":"{{$product->product_name}}","url":"{{route("deleteblog",$product->id)}}"}'><i class="fa fa-trash"></i> Delete</a>
							</td>
						</tr>
						<?php $no++; ?>
						@endforeach
					</tbody>
				</table>	
				@else
				<div class="col-12">
					<h3 class="text-center"><b>Results not found!</b></h3>
				</div>
				@endif
			</div>
		</div>
	</div>
	
</div>

@endsection