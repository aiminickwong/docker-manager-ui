(function () {
	angular
		.module('docker-manager-ui', [
			'ui.router',
			'ui.bootstrap',
			'ngTable',
			'restangular',
			'angularMoment',
			'ngAnimate',
			'toastr',
			'dialogs.main',
			'dialogs.default-translations',
			
			// App modules
			'app.common',
			'docker-manager-ui.common.directives',
			'docker-manager-ui.common.filters',
			'docker-manager-ui.containers'
		]);
})();