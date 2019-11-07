@extends('dashboard.layout.template')
@section('body')
<div class="block-header">
        <div class="row clearfix">
            <div class="col-md-6 col-sm-12">
                <h2>Oculux Blog</h2>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{route('home')}}">Oculux</a></li>
                        <li class="breadcrumb-item"><a href="#">Images</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Oculux Blog</li>
                    </ol>
                </nav>
            </div>            
            <div class="col-md-6 col-sm-12 text-right hidden-xs">
                <a href="{{route('createblog')}}" class="btn btn-sm btn-primary btn-round" title=""><i class="fa fa-cloud-upload"></i> Create blog</a>
            </div>
        </div>
    </div>
@endsection