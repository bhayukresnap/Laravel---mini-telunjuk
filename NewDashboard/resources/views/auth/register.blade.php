<!doctype html>
<html lang="en">
<head>
<title>Oculux | Sign Up</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="description" content="Oculux Bootstrap 4x admin is super flexible, powerful, clean &amp; modern responsive admin dashboard with unlimited possibilities.">
<meta name="author" content="GetBootstrap, design by: puffintheme.com">
<link rel="icon" href="/images/favicon.ico" type="image/x-icon">
<link rel="stylesheet" type="text/css" href="{{asset('css/all.css')}}">
</head>
<body class="theme-cyan font-montserrat">

<div class="page-loader-wrapper">
    <div class="loader">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
    </div>
</div>
<div class="pattern">
    <span class="red"></span>
    <span class="indigo"></span>
    <span class="blue"></span>
    <span class="green"></span>
    <span class="orange"></span>
    <span class="red"></span>
    <span class="indigo"></span>
    <span class="blue"></span>
    <span class="green"></span>
    <span class="orange"></span>
</div>
<div class="auth-main particles_js">
    <div class="auth_div vivify popIn">
        <div class="auth_brand">
            <a class="navbar-brand" href="javascript:void(0);"><img src="/images/icon.svg" width="30" height="30" class="d-inline-block align-top mr-2" alt="">Oculux</a>                                                
        </div>
        <div class="card">
            <div class="body">
                <p class="lead">Create an account</p>
                <form class="form-auth-small m-t-20" method="POST" action="{{route('register')}}">
                    @csrf
                    <div class="form-group">
                        <input type="email" name="email" class="form-control round" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" name="name" class="form-control round" placeholder="Name" required>
                    </div>
                    <div class="form-group">                            
                        <input type="password" name="password" class="form-control round" placeholder="Password" required>
                    </div>
                    <div class="form-group">
                        <input id="password-confirm" type="password" class="form-control round" name="password_confirmation" required autocomplete="new-password" placeholder="Re-Input Password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-round btn-block">Register</button>
                    <div class="bottom">
                        <!-- <span class="helper-text m-b-10"><i class="fa fa-lock"></i> <a href="page-forgot-password.html">Forgot password?</a></span> -->
                        <span>Already have an account? <a href="{{route('login')}}">Login</a></span>
                    </div>                           
                </form>

               <!--  <div class="separator-linethrough"><span>OR</span></div>
                <button class="btn btn-round btn-signin-social"><i class="fa fa-facebook-official facebook-color"></i> Sign in with Facebook</button>
                <button class="btn btn-round btn-signin-social"><i class="fa fa-twitter twitter-color"></i> Sign in with Twitter</button> -->
            </div>
        </div>
    </div>
    <div id="particles-js"></div>
</div>
<script src="{{asset('js/all.js')}}"></script>
</body>
</html>