@extends('dashboard.layout.template')

@section('breadcrumb')
<div class="col-12 align-self-center">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('categories') }}
	</ol>
</div>
@endsection
@section('body')
<div class="row mb-2">
	<div class="col-12">
		<a href="{{route('createcategorieslevel1')}}" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add category level 1</a>
		<a href="{{route('createcategorieslevel2')}}" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add category level 2</a>
		<a href="{{route('createcategorieslevel3')}}" class="btn btn-sm btn-primary btn-round"><i class="fa fa-tags"></i> Add category level 3</a>
	</div>
</div>

@if(count($categories)>0)
<div class="row">
	<div class="col-12">
		<div class="card">
			<div class="card-header card-default">
				Categories Tree
			</div>
			<div class="card-body">
				<div id="basicTree">
					<ul>
						@foreach($categories as $category)
						<li data-jstree='{"opened":true}'>
							<span onclick="window.open('{{route('editcategorieslevel1', $category->id)}}','_self')">{{$category->category_name}}</span>
							<span class="ml-4 ">
								<i class="fa fa-trash text-danger btn-delete"  data-list='{"name":"{{$category->category_name}}", "url":"{{route("deletecategorieslevel1","$category->id")}}"}' onclick="deleteData(this)"></i>
							</span>
							<ul>
								@foreach($category->manylevel2 as $level2)
								<li>
									<span onclick="window.open('{{route('editcategorieslevel2', $level2->id)}}','_self')">{{$level2->category_name}}</span>
									<span class="ml-4 ">
										<i class="fa fa-trash text-danger btn-delete"  data-list='{"name":"{{$level2->category_name}}", "url":"{{route("deletecategorieslevel2","$level2->id")}}"}' onclick="deleteData(this)"></i>
									</span>
									<ul>
										@foreach($level2->manylevel3 as $level3)
										<li>
											<span>
												<span onclick="window.open('{{route('editcategorieslevel3', $level3->id)}}','_self')">
													{{$level3->category_name}}
												</span>
												<span class="ml-4 ">
													<i class="fa fa-trash text-danger btn-delete"  data-list='{"name":"{{$level3->category_name}}", "url":"{{route("deletecategorieslevel3","$level3->id")}}"}' onclick="deleteData(this)"></i>
												</span>
											</span>
										</li>
										@endforeach
									</ul>
								</li>
								@endforeach
							</ul>
						</li>
						@endforeach
					</ul>
				</div>
			</div>

		</div>
	</div>
</div>
@endif
@endsection

@section('script')
<script type="text/javascript">

	$('#basicTree span i.btn-delete').on('click',function(){
		console.log("KONTOL")
	});

	$(document).ready(function(){
		$('#basicTree').jstree({
			'core': {
				'themes': {
					'responsive': false
				},
			},
			'types': {
				'default': {
					'icon': 'md md-folder'
				},
				'file': {
					'icon': 'md md-insert-drive-file'
				}
			},
			'plugins': ['types']
		});
	});
</script>
@endsection