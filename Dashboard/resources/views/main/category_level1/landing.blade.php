@extends('layout.template')


@section('breadcrumb')
<ol class="breadcrumb">
	{{ Breadcrumbs::render('main-plplevel1', $parent)}}
</ol>
@endsection

@section('body')
	<h1 class="text-center pb-80">{{$parent->first()->category_name}}</h1>
	@includeIf('layout.product')
@endsection