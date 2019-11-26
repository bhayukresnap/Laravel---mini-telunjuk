@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('searchblog') }}
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
					<form class="col-6" method="get" action="{{route('searchblog')}}">
						<div class="form-group">
							<label>Search</label>
							<input type="text" name="q" class="form-control" placeholder="Title or Slug" value="{{$req->q}}">
						</div>
					</form>
				</div>
				<br>
				@if(isset($blogs))
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
							<td>{{$blog->getPublishedTime($blog->published_at)}}</td>
							<td>
								<a href="{{route('editblog',$blog->id)}}" class="btn btn-sm btn-success"><i class="fa fa-edit"></i> Update</a>
								<a href="#" class="btn btn-sm btn-danger btn-delete" data-list='{"name":"{{$blog->title}}","url":"{{route("deleteblog",$blog->id)}}"}'><i class="fa fa-trash"></i> Delete</a>
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