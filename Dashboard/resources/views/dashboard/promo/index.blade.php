@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('promotions') }}
	</ol>
</div>
@endsection
@section('body')
<div class="row mb-2">
	<div class="col-12">
		<a href="{{route('createpromotion')}}" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add promotion</a>
	</div>
</div>

@if(count($promotions)>0)
<div class="row">
	<div class="col-sm-12">
		<div class="card">
			<div class="card-header card-default">
				<h3>Promotion</h3>
			</div>
			<div class="card-body">
				<table class="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Thumbnail</th>
							<th>Promotion</th>
							<th>Start</th>
							<th>End</th>
							<th>Created at</th>
							<th>Last Modified</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<?php $no = 1; ?>
						@foreach($promotions as $promotion)
						<tr>
							<td>{{$no}}</td>
							<td>
								<img src="{{$promotion->thumbnail->original}}" width="100px" alt="{{$promotion->thumbnail->alt}}">
							</td>
							<td>{{$promotion->title}}</td>
							<td>{{$promotion->started_at}}</td>
							<td>{{$promotion->ended_at}}</td>
							<td>{{$promotion->meta->created_at->diffForHumans()}}</td>
							<td>{{$promotion->meta->updated_at->diffForHumans()}}</td>
							<td>
								<a href="{{route('editpromotion',$promotion->id)}}" class="btn btn-sm btn-success"><i class="fa fa-edit"></i> Update</a>
								<a href="#" class="btn btn-sm btn-danger btn-delete" data-list='{"name":"{{$promotion->title}}","url":"{{route("deletepromotion",$promotion->id)}}"}'><i class="fa fa-trash"></i> Delete</a>
							</td>
						</tr>
						<?php $no++; ?>
						@endforeach
					</tbody>
				</table>
				{{ $promotions->links() }}
			</div>
		</div>
	</div>
</div>
@endif
@endsection