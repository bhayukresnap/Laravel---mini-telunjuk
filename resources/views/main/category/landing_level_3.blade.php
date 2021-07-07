@extends('layout.template')


@section('breadcrumb')
{{ Breadcrumbs::render('main-plplevel3', $parent, $level1, $level2)}}
@endsection

@section('body')
	<h1 class="text-center pb-80">{{$parent->first()->category_name}}</h1>
	@includeIf('includes.product')
@endsection