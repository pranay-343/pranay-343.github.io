<!--================Footer Area =================-->
<footer class="footer_area">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-12">
				<div class="footer_top flex-column">
					<div class="footer_logo">
						<a href="index">
							<img src="img/favicon.png" alt="">
							<p>
								<b class="text-white display-4" >Pranay Patodi</b>
							</p>
						</a>
						<div class="d-lg-block d-none">
							<nav class="navbar navbar-expand-lg navbar-light justify-content-center">
								<div class="collapse navbar-collapse offset">
									<ul class="nav navbar-nav menu_nav mx-auto">
										<li class="nav-item"><a class="nav-link text-white" href="#home">Home</a></li>
										<li class="nav-item"><a class="nav-link text-white" href="#about">About</a></li>
										<li class="nav-item"><a class="nav-link text-white" href="#portfolio">Portfolio</a></li>
										<li class="nav-item"><a class="nav-link text-white" href="#services">Services </a></li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
					<div class="footer_social mt-lg-0 mt-4">
						<!--<a aria-label="social icons" href="#"><i class="fab fa-facebook-f"></i></a>-->
						<!--<a aria-label="social icons" href="#"><i class="fab fa-instagram"></i></a>-->
						<a aria-label="social icons" href="https://join.skype.com/invite/sztG5hvVb9tB"><i class="fab fa-skype"></i></a>
						<a aria-label="social icons" href="https://www.linkedin.com/in/pranay-patodi/"><i class="fab fa-linkedin"></i></a>
						<a aria-label="social icons" href="https://github.com/pranay-343"><i class="fab fa-github"></i></a>

					</div>
				</div>
			</div>
		</div>
		<div class="row footer_bottom justify-content-center">
			<p class="col-lg-8 col-sm-12 footer-text">
				Copyright &copy;<?php echo date('Y');  ?> All rights reserved.</p>
			</div>
		</div>
	</footer>
	<!--================End Footer Area =================-->

	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/popper.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/stellar.js"></script>
	<script src="vendors/isotope/imagesloaded.pkgd.min.js"></script>
	<script src="vendors/isotope/isotope-min.js"></script>
	<script src="vendors/owl-carousel/owl.carousel.min.js"></script>
	<script src="js/jquery.ajaxchimp.min.js"></script>
	<script src="js/mail-script.js"></script>
	<script src="js/theme.js"></script>
	<script src="js/topscroll.js"></script>
	<!-- Start of HubSpot Embed Code -->
	<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7794621.js"></script>
	<!-- End of HubSpot Embed Code -->

	<script>
		$(document).on('click', '.nav a', function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top + -200
			}, 1000);
		});
	</script>
</body>
</html>