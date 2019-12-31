@extends('layout.template')


@section('breadcrumb')
<ol class="breadcrumb">
	{{ Breadcrumbs::render('main-plpBrand', $brand) }}
</ol>
@endsection

@section('body')
	<h1 class="text-center pb-80">{{$brand->first()->brandName}}</h1>
	@includeIf('layout.product')
@endsection