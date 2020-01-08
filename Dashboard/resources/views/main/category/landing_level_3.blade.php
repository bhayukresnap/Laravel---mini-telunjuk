@extends('layout.template')


@section('breadcrumb')
<ol class="breadcrumb">
	{{ Breadcrumbs::render('main-plplevel3', $parent, $level1, $level2)}}
</ol>
@endsection

@section('body')
	<h1 class="text-center pb-80">{{$parent->first()->category_name}}</h1>
	@includeIf('layout.product')
@endsection