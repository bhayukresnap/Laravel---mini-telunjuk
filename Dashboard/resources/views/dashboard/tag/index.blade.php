@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('tags') }}
	</ol>
</div>
@endsection
@section('body')
<div class="row mb-2">
	<div class="col-12">
		<a href="{{route('createtag')}}" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add tag</a>
	</div>
</div>

@if(count($tags)>0)
<div class="row">
	<div class="col-sm-12">
		<div class="card">
			<div class="card-header card-default">
				<h3>Tag</h3>
			</div>
			<div class="card-body">
				<table class="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Tags</th>
							<th>Created at</th>
							<th>Last Modified</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<?php $no = 1; ?>
						@foreach($tags as $tag)
						<tr>
							<td>{{$no}}</td>
							<td>{{$tag->tagname}}</td>
							<td>{{$tag->meta->created_at->diffForHumans()}}</td>
							<td>{{$tag->meta->updated_at->diffForHumans()}}</td>
							<td>
								<a href="{{route('edittag',$tag->id)}}" class="btn btn-sm btn-success"><i class="fa fa-edit"></i> Update</a>
								<a href="#" class="btn btn-sm btn-danger btn-delete" data-list='{"name":"{{$tag->tagname}}", "id":"{{$tag->id}}","url":"{{route("deletetag",":id")}}"}'><i class="fa fa-trash"></i> Delete</a>
							</td>
						</tr>
						<?php $no++; ?>
						@endforeach
					</tbody>
				</table>
				{{ $tags->links() }}
			</div>
		</div>
	</div>
</div>
@endif
@endsection