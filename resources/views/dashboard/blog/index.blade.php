@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('blogs') }}
	</ol>
</div>
@endsection

@section('body')
<div class="row mb-2">
	<div class="col-12">
		<a href="{{route('createblog')}}" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add blog</a>
	</div>
</div>

@if(count($blogs)>0)
<div class="row">
	<div class="col-sm-12">
		<div class="card">
			<div class="card-header card-default">
				<h3>Blog</h3>
			</div>
			<div class="card-body">
				<div class="row">
					<form class="col-6" method="get" action="{{route('searchblog')}}">
						
						<div class="form-group">
							<label>Search</label>
							<input type="text" name="q" class="form-control" placeholder="Title or Slug">
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
							<th>Title</th>
							<th>Created at</th>
							<th>Last Modified</th>
							<th>Published at</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<?php $no = 1; ?>
						@foreach($blogs as $blog)
						<tr>
							<td>{{$no}}</td>
							<td>
								<img src="{{$blog->thumbnail->original}}" width="100px" alt="{{$blog->thumbnail->alt}}">
							</td>
							<td>{{$blog->title}}</td>
							<td>{{$blog->meta->created_at->diffForHumans()}}</td>
							<td>{{$blog->meta->updated_at->diffForHumans()}}</td>
							<td>{{\AppHelper::instance()->getPublishedTime($blog->published_at)}}</td>
							<td>
								<a href="{{route('editblog',$blog->id)}}" class="btn btn-sm btn-success"><i class="fa fa-edit"></i> Update</a>
								<a href="#" class="btn btn-sm btn-danger btn-delete" data-list='{"name":"{{$blog->title}}","url":"{{route("deleteblog",$blog->id)}}"}'><i class="fa fa-trash"></i> Delete</a>
							</td>
						</tr>
						<?php $no++; ?>
						@endforeach
					</tbody>
				</table>
				{{ $blogs->links() }}
			</div>
		</div>
	</div>
</div>
@endif
@endsection