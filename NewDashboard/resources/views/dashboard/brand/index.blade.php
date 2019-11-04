@extends('dashboard.layout.template')
@section('body')
<div class="block-header">
    <div class="row clearfix">
        <div class="col-md-6 col-sm-12">
            <h2>Oculux Brand</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('home')}}">Oculux</a></li>
                    <li class="breadcrumb-item"><a href="#">Brand</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Oculux Brand</li>
                </ol>
            </nav>
        </div>            
        <div class="col-md-6 col-sm-12 text-right hidden-xs">
            <a href="#" data-toggle="modal" data-target="#modaladdTag" class="btn btn-sm btn-primary btn-round" title=""><i class="fa fa-tags"></i> Add tags</a>
        </div>
    </div>
</div>
@endsection