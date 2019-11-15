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
            <h2>Oculux Products</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('home')}}">Oculux</a></li>
                    <li class="breadcrumb-item"><a href="#">Product</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Oculux Products</li>
                </ol>
            </nav>
        </div>
    </div>
</div>

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