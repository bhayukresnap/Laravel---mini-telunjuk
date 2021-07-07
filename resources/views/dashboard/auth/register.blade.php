<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta name="robots" content="noindex"/>
    <link rel="stylesheet" type="text/css" href="/assets/css/dashboard-library.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/dashboard-custom.css">
    <script type="text/javascript" src="/assets/js/dashboard-library.js"></script>
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
                            <p class="text-center">Sign up to get instant access.</p>
                            <form role="form">

                                <div class="form-group">
                                    <label for="eampleuser1">Email Id</label>
                                    <div class="group-icon">
                                        <input id="eampleuser1" type="text" placeholder="Enter Email" class="form-control" required="">
                                        <span class="icon-envelope text-muted icon-input"></span>
                                    </div>
                                </div>
                                <div class="form-group group-icon">
                                    <label for="exampleInputPassword1">Password</label>
                                    <div class="group-icon">
                                        <input id="exampleInputPassword1" type="password" placeholder="Password" class="form-control">
                                        <span class="icon-lock text-muted icon-input"></span>
                                    </div>
                                </div>
                                <div class="form-group group-icon">
                                    <label for="exampleInputPassword2">Confirm Password</label>
                                    <div class="group-icon">
                                        <input id="exampleInputPassword2" type="password" placeholder="Confirm Password" class="form-control">
                                        <span class="icon-lock text-muted icon-input"></span>
                                    </div>
                                </div>
                                <div class="clearfix">
                                    <div class="float-left">
                                        <div class="checkbox checkbox-primary margin-r-5">
                                            <input id="checkbox2" type="checkbox" checked="">
                                            <label for="checkbox2"> I Agree with Terms <a href="#">Terms</a> </label>
                                        </div> 
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-block btn-primary btn-rounded box-shadow mt-10">Register Now</button>
                                <hr>

                                <p class=" text-center">Have an account?</p>
                                <a href="{{route('login')}}" class="btn btn-block btn-success btn-rounded box-shadow">Login</a>
                            </form>
                        </div>
                        <div class="text-center">
                            <p>Copyright &copy; 2018 FixedPlus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="/assets/js/dashboard-custom.js"></script>
</body>
</html>