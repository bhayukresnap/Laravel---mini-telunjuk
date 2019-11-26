<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="robots" content="noindex"/>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<link rel="stylesheet" type="text/css" href="{{mix('/assets/css/dashboard-library.css')}}">
	<link rel="stylesheet" type="text/css" href="{{mix('/assets/css/dashboard-custom.css')}}">
	<script type="text/javascript" src="{{mix('/assets/js/dashboard-library.js')}}"></script>
	@yield('css')
</head>
<body class="horizontal">
	<div class="top-bar light-top-bar">
		<div class="container-fluid">
			<div class="row">
				<div class="col">
					<a class="admin-logo" href="index.html">
						<h1>
							<img alt="" src="/assets/img/icon.png" class="logo-icon margin-r-10">
							<img alt="" src="/assets/img/logo-dark.png" class="toggle-none hidden-xs">
						</h1>
					</a>				
					<ul class="list-inline top-right-nav">
						<li class="dropdown icons-dropdown d-none-m">
							<a class="dropdown-toggle " data-toggle="dropdown" href="#"><i class="fa fa-envelope"></i> <div class="notify setpos"> <span class="heartbit"></span> <span class="point"></span> </div></a>
							<ul class="dropdown-menu top-dropdown lg-dropdown notification-dropdown">
								<li>
									<div class="dropdown-header">
										<a class="float-right" href="#"><small>View All</small></a> Messages
									</div>
									<div class="scrollDiv">
										<div class="notification-list">
											<a class="clearfix" href="javascript:void(0);">
												<span class="notification-icon">
													<img alt="" class="rounded-circle" src="/assets/img/avtar-2.png" width="50">
												</span> 
												<span class="notification-title">
													John Doe 
													<label class="label label-warning float-right">Support</label>
												</span> 
												<span class="notification-description">Lorem Ipsum is simply dummy text of the printing.</span> 
												<span class="notification-time">15 minutes ago</span>
											</a>
											<a class="clearfix" href="javascript:void(0);">
												<span class="notification-icon">
													<img alt="" class="rounded-circle" src="/assets/img/avtar-3.png" width="50">
												</span> 
												<span class="notification-title">
													Govindo Doe 
													<label class="label label-warning float-right">Support</label>
												</span> 
												<span class="notification-description">Lorem Ipsum is simply dummy text of the printing.</span> 
												<span class="notification-time">15 minutes ago</span>
											</a> 
											<a class="clearfix" href="javascript:void(0);">
												<span class="notification-icon">
													<img alt="" class="rounded-circle" src="/assets/img/avtar-4.png" width="50">
												</span> 
												<span class="notification-title">
													Megan Doe 
													<label class="label label-warning float-right">Support</label>
												</span>
												<span class="notification-description">Lorem Ipsum is simply dummy text of the printing.</span>
												<span class="notification-time">15 minutes ago</span>
											</a> 
											<a class="clearfix" href="javascript:void(0);">
												<span class="notification-icon">
													<img alt="" class="rounded-circle" src="/assets/img/avtar-5.png" width="50">
												</span>
												<span class="notification-title">
													Hritik Doe 
													<label class="label label-warning float-right">Support</label>
												</span>
												<span class="notification-description">Lorem Ipsum is simply dummy text of the printing.</span>
												<span class="notification-time">15 minutes ago</span>
											</a>
										</div>
									</div>
								</li>
							</ul>
						</li>
						<li class="dropdown icons-dropdown d-none-m">
							<a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="fa fa-bell"></i> <div class="notify setpos"> <span class="heartbit"></span> <span class="point"></span> </div></a>
							<ul class="dropdown-menu top-dropdown lg-dropdown notification-dropdown">
								<li>
									<div class="dropdown-header">
										<a class="float-right" href="#"><small>View All</small></a> Notifications
									</div>
									<div class="scrollDiv">
										<div class="notification-list">
											<a class="clearfix" href="javascript:void(0);">
												<span class="notification-icon">
													<i class="icon-cloud-upload text-primary"></i>
												</span>
												<span class="notification-title">Upload Complete</span> 
												<span class="notification-description">Lorem Ipsum is simply dummy text of the printing.</span>
												<span class="notification-time">15 minutes ago</span>
											</a> 
											<a class="clearfix" href="javascript:void(0);">
												<span class="notification-icon">
													<i class="icon-info text-warning"></i>
												</span>
												<span class="notification-title">Storage Space low</span>
												<span class="notification-description">Lorem Ipsum is simply dummy text of the printing.</span>
												<span class="notification-time">15 minutes ago</span>
											</a>
											<a class="clearfix" href="javascript:void(0);">
												<span class="notification-icon">
													<i class="icon-check text-success"></i>
												</span>
												<span class="notification-title">Project Task Complete</span>
												<span class="notification-description">Lorem Ipsum is simply dummy text of the printing.</span>
												<span class="notification-time">15 minutes ago</span>
											</a>
											<a class="clearfix" href="javascript:void(0);">
												<span class="notification-icon">
													<i class=" icon-graph text-danger"></i>
												</span>
												<span class="notification-title">CPU Usage</span>
												<span class="notification-description">Lorem Ipsum is simply dummy text of the printing.</span>
												<span class="notification-time">15 minutes ago</span>
											</a>
										</div>
									</div>
								</li>
							</ul>
						</li>
						<li class="dropdown avtar-dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" href="#">
								<img alt="" class="rounded-circle" src="/assets/img/avtar-2.png" width="30">
								{{Auth::user()->name}}
							</a>
							<ul class="dropdown-menu top-dropdown">
								<li>
									<a class="dropdown-item" href="javascript:void(0);"><i class="icon-bell"></i> Activities</a>
								</li>
								<li>
									<a class="dropdown-item" href="javascript:void(0);"><i class="icon-user"></i> Profile</a>
								</li>
								<li>
									<a class="dropdown-item" href="javascript:void(0);"><i class="icon-settings"></i> Settings</a>
								</li>
								<li class="dropdown-divider"></li>
								<li>
									<a class="dropdown-item" href="{{route('logout')}}"><i class="icon-logout"></i> Logout</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="main-horizontal-nav">
		<nav>
			<!-- Menu Toggle btn-->
			<div class="menu-toggle">
				<h3>Menu</h3>
				<button type="button" id="menu-btn">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			</div>
			<ul id="respMenu" class="ace-responsive-menu" data-menu-style="horizontal">
				<li><a href="{{route('dashboard.index')}}"><i class="fa fa-home"></i>Dashboard</a></li>						
				<li>
					<a href="{{route('blogs')}}"><i class="fa fa-book"></i>Blog</a>
				</li>
				<li>
					<a href="{{route('products')}}"><i class="fa fa-inbox"></i>Product</a>
				</li>		
				<li>
					<a href="{{url('/dashboard-panel/laravel-filemanager?type=image')}}"><i class="fa fa-image"></i><span class="toggle-none">Images <span class="fa arrow"></span></span></a>
				</li>
				<li>
					<a href="{{route('categorieslevel1')}}"><i class="icon-layers"></i><span class="toggle-none">Categories <span class="fa arrow"></span></span></a>
				</li>	
				<li>
					<a  href="{{route('tags')}}"><i class="fa fa-tags"></i><span class="toggle-none">Tags <span class="fa arrow"></span></span></a>
				
				</li>
				<li>
					<a href="{{route('brands')}}"><i class="icon-handbag"></i>Brands</a>
				</li>
				<li>
					<a href="{{route('stores')}}"><i class="icon-briefcase"></i>Store</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="row page-header">
		@yield('breadcrumb')
	</div>
	<section class="main-content">
		@yield('body')
		<footer class="footer">
			<span>Copyright &copy; 2018 FixedPlus</span>
		</footer>
	</section>
        <script src="{{mix('/assets/js/dashboard-custom.js')}}"></script>
	@yield('script')
</body>
</html>