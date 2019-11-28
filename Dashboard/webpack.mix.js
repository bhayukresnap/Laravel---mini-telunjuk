const mix = require('laravel-mix');	

mix.styles([
    'resources/library/bootstrap/css/bootstrap.min.css',
    'resources/library/sweet-alerts2/sweetalert2.min.css',
    'resources/library/js-tree/dist/themes/default/style.css',
    'resources/library/jquery-multiselect/jquery.multiselect.css',
    'resources/library/bootstrap-daterangepicker/daterangepicker.css',
    'resources/library/summernote/summernote.css'
], 'public/assets/css/dashboard-library.css').version();

mix.styles([
    'resources/css/style.css'
], 'public/assets/css/dashboard-custom.css').version();


mix.scripts([
	'resources/library/jquery/dist/jquery.min.js',
	'resources/library/bootstrap/js/popper.min.js',
	'resources/library/bootstrap/js/bootstrap.min.js',
	'resources/library/ace-menu/ace-responsive-menu-min.js',
	'resources/library/pace/pace.min.js',
	'resources/library/jasny-bootstrap/js/jasny-bootstrap.min.js',
	'resources/library/slimscroll/jquery.slimscroll.min.js',
	'resources/library/nano-scroll/jquery.nanoscroller.min.js',
	'resources/library/metisMenu/metisMenu.min.js',
	'resources/library/sweet-alerts2/sweetalert2.min.js',
	'resources/library/js-tree/dist/jstree.min.js',
	'resources/library/jquery-multiselect/jquery.multiselect.js',
	'resources/library/bootstrap-daterangepicker/moment.js',
	'resources/library/bootstrap-daterangepicker/daterangepicker.js',
	'resources/library/summernote/summernote.js',
	'resources/library/numeral/numeral.min.js'
], 'public/assets/js/dashboard-library.js').version();

mix.scripts([
	'public/vendor/laravel-filemanager/js/stand-alone-button.js',
	'resources/js/form.js',
	'resources/js/custom.js',
], 'public/assets/js/dashboard-custom.js').version();

