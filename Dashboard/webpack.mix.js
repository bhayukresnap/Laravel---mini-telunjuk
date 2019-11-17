const mix = require('laravel-mix');	

mix.styles([
    'resources/library/bootstrap/css/bootstrap.min.css'
], 'public/assets/css/dashboard-library.css').version();

mix.styles([
    'resources/css/style.css'
], 'public/assets/css/dashboard-custom.css').version();


mix.scripts([
	'resources/library/jquery/dist/jquery.min.js',
	'resources/library/bootstrap/js/popper.min.js',
	'resources/library/bootstrap/js/bootstrap.min.js',
	'resources/library/pace/pace.min.js',
	'resources/library/jasny-bootstrap/js/jasny-bootstrap.min.js',
	'resources/library/slimscroll/jquery.slimscroll.min.js',
	'resources/library/nano-scroll/jquery.nanoscroller.min.js',
	'resources/library/metisMenu/metisMenu.min.js'
], 'public/assets/js/dashboard-library.js').version();

mix.scripts([
	'resources/js/custom.js'
], 'public/assets/js/dashboard-custom.js').version();

