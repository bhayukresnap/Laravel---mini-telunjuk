<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta name="description" content="Oculux Bootstrap 4x admin is super flexible, powerful, clean &amp; modern responsive admin dashboard with unlimited possibilities.">
	<meta name="keywords" content="admin template, Oculux admin template, dashboard template, flat admin template, responsive admin template, web app, Light Dark version">
	<meta name="author" content="GetBootstrap, design by: puffintheme.com">
	<link rel="icon" href="/img/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="{{asset('css/all.css')}}">
	<script src="{{asset('js/all.js')}}"></script>
</head>
<body class="theme-cyan font-montserrat">
	<!-- Page Loader -->
	<div class="page-loader-wrapper">
		<div class="loader">
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
			<div class="bar4"></div>
			<div class="bar5"></div>
		</div>
	</div>
	<!-- Overlay For Sidebars -->
	<div class="overlay"></div>
	<div id="wrapper">
		<nav class="navbar top-navbar">
			<div class="container-fluid">

				<div class="navbar-left">
					<div class="navbar-btn">
						<a href="{{route('home')}}"><img src="/img/icon.svg" alt="Oculux Logo" class="img-fluid logo"></a>
						<button type="button" class="btn-toggle-offcanvas"><i class="lnr lnr-menu fa fa-bars"></i></button>
					</div>
					<ul class="nav navbar-nav">
						<li class="dropdown">
							<a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
								<i class="icon-envelope"></i>
								<span class="notification-dot bg-green">4</span>
							</a>
							<ul class="dropdown-menu right_chat email vivify fadeIn">
								<li class="header green">You have 4 New eMail</li>
								<li>
									<a href="javascript:void(0);">
										<div class="media">
											<div class="avtar-pic w35 bg-red"><span>FC</span></div>
											<div class="media-body">
												<span class="name">James Wert <small class="float-right text-muted">Just now</small></span>
												<span class="message">Update GitHub</span>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
								<i class="icon-bell"></i>
								<span class="notification-dot bg-azura">4</span>
							</a>
							<ul class="dropdown-menu feeds_widget vivify fadeIn">
								<li class="header blue">You have 4 New Notifications</li>
								<li>
									<a href="javascript:void(0);">
										<div class="feeds-left bg-red"><i class="fa fa-check"></i></div>
										<div class="feeds-body">
											<h4 class="title text-danger">Issue Fixed <small class="float-right text-muted">9:10 AM</small></h4>
											<small>WE have fix all Design bug with Responsive</small>
										</div>
									</a>
								</li>                               
								<li>
									<a href="javascript:void(0);">
										<div class="feeds-left bg-info"><i class="fa fa-user"></i></div>
										<div class="feeds-body">
											<h4 class="title text-info">New User <small class="float-right text-muted">9:15 AM</small></h4>
											<small>I feel great! Thanks team</small>
										</div>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);">
										<div class="feeds-left bg-orange"><i class="fa fa-question-circle"></i></div>
										<div class="feeds-body">
											<h4 class="title text-warning">Server Warning <small class="float-right text-muted">9:17 AM</small></h4>
											<small>Your connection is not private</small>
										</div>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);">
										<div class="feeds-left bg-green"><i class="fa fa-thumbs-o-up"></i></div>
										<div class="feeds-body">
											<h4 class="title text-success">2 New Feedback <small class="float-right text-muted">9:22 AM</small></h4>
											<small>It will give a smart finishing to your site</small>
										</div>
									</a>
								</li>
							</ul>
						</li>
						<li class="p_news"><a href="page-news.html" class="news icon-menu" title="News">News</a></li>
						<li class="p_blog"><a href="page-blog.html" class="blog icon-menu" title="Blog">Blog</a></li>
					</ul>
				</div>
			</div>
			<div class="progress-container"><div class="progress-bar" id="myBar"></div></div>
		</nav>
		<div id="left-sidebar" class="sidebar">
			<div class="navbar-brand">
				<a href="{{route('home')}}"><img src="/img/icon.svg" alt="Oculux Logo" class="img-fluid logo"><span>Oculux</span></a>
				<button type="button" class="btn-toggle-offcanvas btn btn-sm float-right"><i class="lnr lnr-menu icon-close"></i></button>
			</div>
			<div class="sidebar-scroll">
				<div class="user-account">
					<div class="user_div">
						<img src="/img/user.png" class="user-photo" alt="User Profile Picture">
					</div>
					<div class="dropdown">
						<span>Welcome,</span>
						<a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"><strong>{{Auth::user()->name}}</strong></a>
						<ul class="dropdown-menu dropdown-menu-right account vivify flipInY">
							<li><a href="page-profile.html"><i class="icon-user"></i>My Profile</a></li>
							<li><a href="app-inbox.html"><i class="icon-envelope-open"></i>Messages</a></li>
							<li><a href="javascript:void(0);"><i class="icon-settings"></i>Settings</a></li>
							<li class="divider"></li>
							<li><a href="{{route('logout')}}"><i class="icon-power"></i>Logout</a></li>
						</ul>
					</div>                
				</div>  
				<nav id="left-sidebar-nav" class="sidebar-nav">
					<ul id="main-menu" class="metismenu">
						<li class="header">Main</li>
						<li class=""><a href="{{route('home')}}"><i class="icon-home"></i><span>Dashboard</span></a></li>
						{{-- <li class=""><a href="{{route('home')}}"><i class="icon-envelope"></i><span>Email (Maintenance)</span></a></li> --}}
						<li><a href=""><i class="icon-book-open"></i><span>Blogs</span></a></li>
						<li><a href="#Contact"><i class="fa fa-dropbox"></i><span>Products</span></a></li>
						<li><a href="{{route('images')}}"><i class="fa fa-image"></i><span>Images</span></a></li>
						<li><a href="{{route('categories')}}"><i class="icon-layers"></i><span>Categories</span></a></li>
						<li><a href="{{route('tags')}}"><i class="fa fa-tags"></i><span>Tags</span></a></li>
						<li><a href="{{route('brands')}}"><i class="fa fa-sun-o"></i><span>Brands</span></a></li>
						<li class="header">Developer</li>
						<li class=""><a href="{{route('clearCache')}}"><i class="fa fa-eraser"></i><span>Clear Cache</span></a></li>
						<li class=""><a href="#"><i class="fa fa-users"></i><span>Customer (Maintenance)</span></a></li>
						<li class=""><a href="{{route('home')}}"><i class="icon-lock"></i><span>User Authentication</span></a></li>
					</ul>
				</nav>     
			</div>
		</div>
		<div id="main-content">
			@yield('body')
		</div>
	</div>

	<script type="text/javascript">
		$( "input#title" ).on( "keyup", function(event) {
			$('input#path_url').val(convertToSlug($(this).val()))
		});
		$.ajaxSetup({
		    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
		});			
	</script>

</body>
</html>