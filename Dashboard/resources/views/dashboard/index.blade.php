@extends('dashboard.layout.template')

@section('body')
<div class="col-lg-6 align-self-center mb-2">
	<ol class="breadcrumb">
		{{ Breadcrumbs::render('dashboard.index') }}
	</ol>
</div>

<div class="col-12">
	Welcome, {{Auth::user()->name}}
</div>
@endsection

@section('script')
<script type="text/javascript">

</script>
@endsection