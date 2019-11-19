<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta name="robots" content="noindex"/>
	<link rel="stylesheet" type="text/css" href="{{mix('/assets/css/dashboard-library.css')}}">
	<link rel="stylesheet" type="text/css" href="{{mix('/assets/css/dashboard-custom.css')}}">
	<script type="text/javascript" src="{{mix('/assets/js/dashboard-library.js')}}"></script>
</head>
<body>
	<div class="misc-wrapper">
		<div class="misc-content">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-4">
						<div class="misc-header text-center">
							<img alt="" src="/assets/img/icon.png" class="logo-icon margin-r-10">
							<img alt="" src="/assets/img/logo-dark.png" class="toggle-none hidden-xs">
						</div>
						<div class="misc-box">   
							<form method="post" action="{{url('/dashboard-panel/login')}}">
								@csrf
								<div class="form-group">                                      
									<label  for="exampleuser1">Username</label>
									<div class="group-icon">
										<input id="exampleuser1" name="email" type="text" placeholder="Username" class="form-control" required="">
										<span class="icon-user text-muted icon-input"></span>
									</div>
								</div>
								<div class="form-group">
									<label for="exampleInputPassword1">Password</label>
									<div class="group-icon">
										<input id="exampleInputPassword1" name="password" type="password" placeholder="Password" class="form-control">
										<span class="icon-lock text-muted icon-input"></span>
									</div>
								</div>
								<div class="clearfix">
									<div class="float-right">
										<button type="submit" class="btn btn-block btn-primary btn-rounded box-shadow">Login</button>
									</div>
								</div>
								<hr>
							</form>
						</div>
						<div class="text-center misc-footer">
							<p>Copyright &copy; 2018 FixedPlus</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="{{mix('/assets/js/dashboard-custom.js')}}"></script>
</body>
</html>