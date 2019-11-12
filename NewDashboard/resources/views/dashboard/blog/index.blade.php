@extends('dashboard.layout.template')
@section('body')
<style type="text/css">
    i:hover{
        cursor: pointer;
    }
</style>
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

<table class="table table-hover js-basic-example dataTable table-custom spacing5" id="blogTable">
    <thead>
        <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Last modified</th>
            <th>Created at</th>
            <th>Published at</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <?php 
        $no = 1;
        ?>
        @foreach($blogs as $blog)
        <tr data-index-blog = "{{$blog->id}}">
            <td>{{$no}}</td>
            <td style="width: 150px;"><img src="{{$blog->featuredImage}}" class="img-thumbnail"></td>
            <td>{{$blog->title}}</td>
            <td>{{$blog->meta->updated_at->diffForHumans()}}</td>
            <td>{{$blog->created_at->diffForHumans()}}</td>
            <td>{{$blog->published_at}}</td>
            <td>
                <a href="{{route('editblog',$blog->id)}}"><i class="fa fa-edit fa-lg text-success">&nbsp;</i></a>
                <i class="fa fa-close fa-lg text-danger" onclick="deleteBlog({{$blog->id}})">&nbsp;</i>
            </td>
        </tr>
        <?php $no++ ?>
        @endforeach
    </tbody>
</table>

<script type="text/javascript">
    var blogTable = $('#blogTable').DataTable({
        "lengthMenu": [ [25, 50, 100, -1], [25, 50, 100, "All"] ]
    });

    function deleteBlog(id){
        loading();
        let url = "{{ route("deleteblog", ":id") }}";
        url = url.replace(":id",id);
        $.ajax({
            url: url,
            type: 'delete',
            success: function(success) {
                $.each(success, function(status, responseStatus){
                    $.each(this, function(key,value){
                        notification(status, value)
                    });
                    if(responseStatus == 200){
                        blogTable.row('tr[data-index-blog="'+id+'"]').remove().draw();
                    }
                });
                removeLoading();
            },
            error: function(code, statusText, error){
                notification("error", code.responseText +statusText+error);
                removeLoading();
            }
        });
    }

</script>
    @endsection