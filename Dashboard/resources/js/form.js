//Create
$('form#add').submit(function(e){
    e.preventDefault();
    Swal.fire({
        title: 'Please wait!',
        onOpen: ()=>{
            Swal.showLoading();
            $.ajax({
                async:true,
                url: $(this).attr('action'),
                type: 'post',
                data:new FormData(this),
                dataType:'JSON',
                contentType: false,
                cache: false,
                processData: false,
                error: function(code, statusText, error){
                    Swal.fire({
                        title: '<span style="text-transform:capitalize;">'+statusText+'!</span>',
                        text: 'Please try again later :)',
                        type: 'error',
                        confirmButtonClass: 'btn btn-primary btn-lg',
                        buttonsStyling: false
                    });
                    console.log(code.responseText)
                },
                success: function(success){
                    let type, text = [], str = '';
                    $.each(success,function(status, responseStatus){
                        $.each(this,function(key,value){
                            type = status;
                            text.push(value);
                        })
                    });
                    $.map(text, function( n ) {
                        return str += '<div>'+n+'</div>';
                    }),
                    Swal.fire({
                        title: '<span style="text-transform:capitalize;">'+type+'!</span>',
                        html: str,
                        type: type,
                        confirmButtonClass: 'btn btn-space btn-lg btn-primary hover',
                        confirmButtonText: 'Ok',
                        buttonsStyling: false,
                        onClose: ()=>{
                            refreshPage();
                        }
                    }); 

                }
            })
        }
    });

    return false;
});

//Delete
$('.btn-delete').on('click',function(){
    const data = $(this).data('list');
    data.url = data.url.replace(":id",data.id);
    console.log(data)
    Swal.fire({
        title: 'Are you sure',
        text: 'Do you want to delete '+data.name+'?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Delete',
        confirmButtonClass: 'btn btn-space btn-lg btn-success hover',
        cancelButtonClass: 'btn btn-space btn-lg btn-danger hover',
        buttonsStyling: false,
        allowOutsideClick: false,
        preConfirm: function() {
            return new Promise(function(resolve) {
                Swal.fire({
                    title: 'Please wait!',
                    onOpen: ()=>{
                        Swal.showLoading();
                        $.ajax({
                            url: data.url,
                            type: 'delete',
                            error: function(code, statusText, error){
                                Swal.fire({
                                    title: '<span style="text-transform:capitalize;">'+statusText+'!</span>',
                                    text: 'Please try again later :)',
                                    type: 'error',
                                    confirmButtonClass: 'btn btn-primary btn-lg',
                                    buttonsStyling: false
                                });
                                console.log(code.responseText)
                            },
                            success: function(success){
                                let type, text = [], str = '', statusCode;
                                $.each(success,function(status, responseStatus){
                                    $.each(this,function(key,value){
                                        type = status;
                                        text.push(value);
                                    });
                                    if(responseStatus == 200){
                                        statusCode = responseStatus
                                    }
                                });
                                $.map(text, function( n ) {
                                    return str += '<div>'+n+'</div>';
                                }),
                                Swal.fire({
                                    title: '<span style="text-transform:capitalize;">'+type+'!</span>',
                                    html: str,
                                    type: type,
                                    confirmButtonClass: 'btn btn-space btn-lg btn-primary hover',
                                    confirmButtonText: 'Ok',
                                    buttonsStyling: false,
                                    onClose: ()=>{
                                        if(statusCode == 200){
                                            refreshPage();
                                        }
                                        console.log(statusCode)
                                    }
                                }); 

                            }
                        })
                    }
                })
            });
        },        
    }); 
});

//Update
$('form#update').submit(function(e){
    e.preventDefault();
    Swal.fire({
        title: 'Please wait!',
        onOpen: ()=>{
            Swal.showLoading();
            $.ajax({
                async:true,
                url: $(this).attr('action'),
                type: 'put',
                data: $(this).serialize(),
                error: function(code, statusText, error){
                    Swal.fire({
                        title: '<span style="text-transform:capitalize;">'+statusText+'!</span>',
                        text: 'Please try again later :)',
                        type: 'error',
                        confirmButtonClass: 'btn btn-primary btn-lg',
                        buttonsStyling: false
                    });
                    console.log(code.responseText)
                },
                success: function(success){
                    let type, text = [], str = '';
                    $.each(success,function(status, responseStatus){
                        $.each(this,function(key,value){
                            type = status;
                            text.push(value);
                        })
                    });
                    $.map(text, function( n ) {
                        return str += '<div>'+n+'</div>';
                    }),
                    Swal.fire({
                        title: '<span style="text-transform:capitalize;">'+type+'!</span>',
                        html: str,
                        type: type,
                        confirmButtonClass: 'btn btn-space btn-lg btn-primary hover',
                        confirmButtonText: 'Ok',
                        buttonsStyling: false,
                        onClose: ()=>{
                            refreshPage();
                        }
                    }); 

                }
            })
        }
    });

    return false;
});