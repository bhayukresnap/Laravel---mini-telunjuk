const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/vendor/bootstrap/css/bootstrap.min.css',
    'resources/vendor/font-awesome/css/font-awesome.min.css',
    'resources/vendor/animate-css/vivify.min.css',
    'resources/vendor/dropify/css/dropify.min.css',
    'resources/vendor/toastr/toastr.min.css',
    'resources/vendor/bootstrap-datepicker/css/bootstrap-datepicker.min.css',
    'resources/vendor/jquery-datatable/dataTables.bootstrap4.min.css',
	'resources/vendor/jquery-datatable/fixedeader/dataTables.fixedcolumns.bootstrap4.min.css',
	'resources/vendor/jquery-datatable/fixedeader/dataTables.fixedheader.bootstrap4.min.css',
    'resources/assets/css/site.min.css',
    'resources/css/custom-css.css',
], 'public/css/all.css');

mix.scripts([
	'resources/assets/bundles/libscripts.bundle.js',
	'resources/assets/bundles/vendorscripts.bundle.js',
	'resources/vendor/toastr/toastr.min.js',
	'resources/assets/bundles/c3.bundle.js',
	'resources/vendor/dropify/js/dropify.min.js',
	'resources/assets/js/pages/forms/dropify.js',
	'resources/assets/bundles/datatablescripts.bundle.js',
	'resources/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
	'resources/vendor/jquery-datatable/buttons/dataTables.buttons.min.js',
	'resources/vendor/jquery-datatable/buttons/buttons.bootstrap4.min.js',
	'resources/vendor/jquery-datatable/buttons/buttons.colVis.min.js',
	'resources/vendor/jquery-datatable/buttons/buttons.html5.min.js',
	'resources/vendor/jquery-datatable/buttons/buttons.print.min.js',
	'resources/assets/bundles/mainscripts.bundle.js',
	'resources/js/custom-js.js',
], 'public/js/all.js');
