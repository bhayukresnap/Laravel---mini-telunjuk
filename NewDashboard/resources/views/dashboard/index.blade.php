@extends('dashboard.layout.template')
@section('body')

<div class="container-fluid">
	<div class="block-header">
	</div>

	<div class="row clearfix">
		<div class="col-lg-3 col-md-6">
			<div class="card">
				<div class="body">
					<div class="d-flex align-items-center">
						<div class="icon-in-bg bg-indigo text-white rounded-circle"><i class="fa fa-briefcase"></i></div>
						<div class="ml-4">
							<span>Total income</span>
							<h4 class="mb-0 font-weight-medium">$7,805</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-3 col-md-6">
			<div class="card">
				<div class="body">
					<div class="d-flex align-items-center">
						<div class="icon-in-bg bg-azura text-white rounded-circle"><i class="fa fa-credit-card"></i></div>
						<div class="ml-4">
							<span>New expense</span>
							<h4 class="mb-0 font-weight-medium">$3,651</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-3 col-md-6">
			<div class="card">
				<div class="body">
					<div class="d-flex align-items-center">
						<div class="icon-in-bg bg-orange text-white rounded-circle"><i class="fa fa-users"></i></div>
						<div class="ml-4">
							<span>Daily Visits</span>
							<h4 class="mb-0 font-weight-medium">5,805</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-3 col-md-6">
			<div class="card">
				<div class="body">
					<div class="d-flex align-items-center">
						<div class="icon-in-bg bg-pink text-white rounded-circle"><i class="fa fa-life-ring"></i></div>
						<div class="ml-4">
							<span>Bounce rate</span>
							<h4 class="mb-0 font-weight-medium">$13,651</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="row clearfix">
		<div class="col-lg-4 col-md-12">
			<div class="card">
				<div class="header">
					<h2>Users</h2>
				</div>
				<div class="body">
					<div class="row text-center">
						<div class="col-6 border-right pb-4 pt-4">
							<label class="mb-0">New Users</label>
							<h4 class="font-30 font-weight-bold text-col-blue">2,025</h4>
						</div>
						<div class="col-6 pb-4 pt-4">
							<label class="mb-0">Return Visitors</label>
							<h4 class="font-30 font-weight-bold text-col-blue">1,254</h4>
						</div>
					</div>
				</div>
				<div class="body">
					<div class="form-group">
						<label class="d-block">New Users <span class="float-right">77%</span></label>
						<div class="progress progress-xxs">
							<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style="width: 77%;"></div>
						</div>
					</div>
					<div class="form-group">
						<label class="d-block">Return Visitors <span class="float-right">50%</span></label>
						<div class="progress progress-xxs">
							<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
						</div>
					</div>
					<div class="form-group">
						<label class="d-block">Engagement <span class="float-right">23%</span></label>
						<div class="progress progress-xxs">
							<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" style="width: 23%;"></div>
						</div>
					</div>
				</div>
			</div>
		</div>              
		<div class="col-lg-8 col-md-12">
			<div class="card">
				<div class="header">
					<h2>Recent Activities</h2>
				</div>
				<div class="table-responsive body">
					<table class="table table-hover table-custom spacing5">
						<thead>
							<tr> 
								<th style="width: 20px;">#</th>
								<th>Client</th>
								<th style="width: 50px;">Amount</th>
								<th style="width: 50px;">Status</th>
								<th style="width: 110px;">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span>01</span>
								</td>
								<td>
									<div class="d-flex align-items-center">
										<div class="avtar-pic w35 bg-red" data-toggle="tooltip" data-placement="top" title="Avatar Name"><span>SS</span></div>
										<div class="ml-3">
											<a href="page-invoices-detail.html" title="">South Shyanne</a>
											<p class="mb-0">south.shyanne@example.com</p>
										</div>
									</div>
								</td>
								<td>$1200</td>
								<td><span class="badge badge-success ml-0 mr-0">Done</span></td>
								<td>
									<button type="button" class="btn btn-sm btn-default" title="Send Invoice" data-toggle="tooltip" data-placement="top"><i class="icon-envelope"></i></button>
									<button type="button" class="btn btn-sm btn-default " title="Print" data-toggle="tooltip" data-placement="top"><i class="icon-printer"></i></button>
									<button type="button" class="btn btn-sm btn-default" title="Delete" data-toggle="tooltip" data-placement="top"><i class="icon-trash"></i></button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection