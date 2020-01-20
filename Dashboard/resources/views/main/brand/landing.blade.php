@extends('layout.template')


@section('breadcrumb')
{{ Breadcrumbs::render('main-plpbrand', $brand) }}
@endsection

@section('body')
	<h1 class="text-center pb-80">{{$brand->first()->brandName}}</h1>
	@includeIf('includes.product')
@endsection