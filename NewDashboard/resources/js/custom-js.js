function notification(type,text){
    toastr.options.timeOut = "5000";
    toastr.options.closeButton = true;
    toastr.options.positionClass = 'toast-top-right';
    toastr[type](text);
}
function convertToSlug(Text){
    return Text.toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,'');
}

function loading(){
	$('body').append('<div class="busy-load-container" id="loading_bb" style="position: fixed; top: 0px; left: 0px; background: rgba(255, 255, 255, 0.5); color: rgb(0, 0, 0); display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; z-index: 9999;"><div class="busy-load-container-item" style="background: none; display: flex; justify-content: center; align-items: center; flex-direction: column-reverse;"><span class="busy-load-text" style="color: rgb(0, 0, 0); font-size: 1rem; margin-top: 0.5rem;">Loading...</span><span class="fa fa-circle-o-notch fa-spin fa-3x fa-fw busy-load-spinner-fontawesome busy-load-spinner" style="color: rgb(0, 0, 0);"><span class="sr-only">Loading ...</span></span></div></div>')
}

function removeLoading(){
	$('#loading_bb').remove();
}


