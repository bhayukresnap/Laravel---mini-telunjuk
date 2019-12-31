<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="author" content="Nghia Minh Luong">
    <meta name="keywords" content="Default Description">
    <meta name="description" content="Default keyword">
    @yield('title')
    <link href="apple-touch-icon.png" rel="apple-touch-icon">
    <link href="/favicon.png" rel="icon">
    <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow:300,400,700%7CMontserrat:300,400,500,600,700,800,900" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{mix('/assets/css/main-library.css')}}">
    <link rel="stylesheet" type="text/css" href="{{mix('/assets/css/main.css')}}">
    <script type="text/javascript" src="{{mix('/assets/js/main-library.js')}}"></script>
    @yield('css')
</head>
<body class="ps-loading">
	<div class="header--sidebar"></div>
    @includeIf('layout.header')
    <div class="header-services">
      @yield('breadcrumb')
    </div>
    <main class="ps-main">
    	@yield('body')
      @includeIf('layout.footer')
    </main>
    <script type="text/javascript" src="{{mix('/assets/js/main.js')}}"></script>
    @yield('script')
</body>
</html>