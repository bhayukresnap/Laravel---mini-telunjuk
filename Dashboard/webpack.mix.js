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
	'resources/library/summernote/summernote.js'
], 'public/assets/js/dashboard-library.js').version();

mix.scripts([
	'public/vendor/laravel-filemanager/js/stand-alone-button.js',
	'resources/js/form.js',
	'resources/js/currency.js',
	'resources/js/custom-dashboard.js',
], 'public/assets/js/dashboard-custom.js').version();

mix.styles([
	'resources/main/plugins/font-awesome/css/font-awesome.min.css',
	'resources/main/plugins/ps-icon/style.css',
	'resources/main/plugins/bootstrap/dist/css/bootstrap.min.css',
    'resources/main/plugins/owl-carousel/assets/owl.carousel.css',
    'resources/main/plugins/jquery-bar-rating/dist/themes/fontawesome-stars.css',
    'resources/main/plugins/slick/slick/slick.css',
    'resources/main/plugins/bootstrap-select/dist/css/bootstrap-select.min.css',
    'resources/main/plugins/Magnific-Popup/dist/magnific-popup.css',
    'resources/main/plugins/jquery-ui/jquery-ui.min.css',
    'resources/main/plugins/revolution/css/settings.css',
    'resources/main/plugins/revolution/css/layers.css',
    'resources/main/plugins/revolution/css/navigation.css'
], 'public/assets/css/main-library.css').version();

mix.styles([
    'resources/main/css/style.css'
], 'public/assets/css/main.css').version();

mix.scripts([
	'resources/main/plugins/jquery/dist/jquery.min.js',
    'resources/main/plugins/bootstrap/dist/js/bootstrap.min.js',
    'resources/main/plugins/jquery-bar-rating/dist/jquery.barrating.min.js',
    'resources/main/plugins/owl-carousel/owl.carousel.min.js',
    'resources/main/plugins/imagesloaded.pkgd.js',
    'resources/main/plugins/isotope.pkgd.min.js',
    'resources/main/plugins/bootstrap-select/dist/js/bootstrap-select.min.js',
    'resources/main/plugins/jquery.matchHeight-min.js',
    'resources/main/plugins/slick/slick/slick.min.js',
    'resources/main/plugins/elevatezoom/jquery.elevatezoom.js',
    'resources/main/plugins/Magnific-Popup/dist/jquery.magnific-popup.min.js',
    'resources/main/plugins/jquery-ui/jquery-ui.min.js',
    'resources/main/plugins/revolution/js/jquery.themepunch.tools.min.js',
	'resources/main/plugins/revolution/js/jquery.themepunch.revolution.min.js',
	'resources/main/plugins/revolution/js/extensions/revolution.extension.video.min.js',
	'resources/main/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js',
	'resources/main/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js',
	'resources/main/plugins/revolution/js/extensions/revolution.extension.navigation.min.js',
	'resources/main/plugins/revolution/js/extensions/revolution.extension.parallax.min.js',
	'resources/main/plugins/revolution/js/extensions/revolution.extension.actions.min.js',
	'resources/main/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js',
	'resources/main/plugins/revolution/js/extensions/revolution.extension.migration.min.js'
], 'public/assets/js/main-library.js').version();

mix.scripts([
	'resources/main/js/main.js',
], 'public/assets/js/main.js').version();