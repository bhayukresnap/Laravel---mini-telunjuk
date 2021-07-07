@extends('layout.template')

@section('breadcrumb')
{{ Breadcrumbs::render('main-search') }}
@endsection

@section('body')
<h1 class="text-center pb-30">You are searching for {{$req->q}}</h1>
@includeIf('includes.product')
@endsection