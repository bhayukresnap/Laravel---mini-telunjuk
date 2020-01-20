@extends('layout.template')


@section('breadcrumb')
{{ Breadcrumbs::render('main-allproducts') }}
@endsection

@section('body')
	<h1 class="text-center pb-80">All Products</h1>
	@includeIf('includes.product')
@endsection