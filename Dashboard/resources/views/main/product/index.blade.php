@extends('layout.template')


@section('breadcrumb')
<ol class="breadcrumb">
	{{ Breadcrumbs::render('main-allproducts') }}
</ol>
@endsection

@section('body')
	<h1 class="text-center pb-80">All Products</h1>
	@includeIf('layout.product')
@endsection