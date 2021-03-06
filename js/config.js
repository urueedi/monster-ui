define(function(require){

	return {
		api: {
			// The default API URL defines what API is used to log in to your back-end
			default: 'https://kazoo.allip.ovh:8443/v2/'

			// If you have provisioner turned on in your install and can use the one provided by 2600hz, add the URL in the 'provisioner' key below
			,provisioner: 'https://kazoo.freepbx.ch/provisioner/'
			,provisioner_http: 'http://kazoo.freepbx.ch/provisioner/'

			// If you want to use WebSockets you need to turn blackhole on in the back-end and then put the URL in the 'socket' key below
			,socket: 'https://kazoo.allip.ovh:7777'

			// Set Project Phonebook URL if you want to use it to search phone numbers
			,phonebook: 'project_phonebook_url'

			// Set Mobile_app nvmo api url
			,mobile_nvmo: 'project_phonebook_url'

			// for trial api 
			,screwdriver: 'https://kazoo.allip.ovh:8443/v2/'

		},

		// The resellerId key is the accountId of your master account, and is needed for some reseller features
		// For example it won't prompt for a credit card the subaccounts that have a different resellerId than this resellerId
		resellerId: '6d5c0f5127e842c119955712a4ae49e0',

		// If you are not using Braintree in your environment, you should add the following flag to disable the UI components that are using it:
		disableBraintree: false,

                // If you have a selfcert for HTTPS must be used, you need a own root certificate (root-cert.der in / www)!
                selfcerthttps: true,

		// kazoo clusterId
		kazooClusterId: 'f0d33c08759dd18d2d894785fd684a4c',

		// Contains all the flags that are whitelabel-able via the Branding app.
		// Setting them in the config file will set the defaults if you don't use any whitelabel
		// If the domain used is defined in the whitelabel database, we'll override the following settings by what is set in the whitelabel document
		whitelabel: {
			// Logout Timer (minutes before showing the logged in user that it will auto-disconnect him soon)
			// Changing this value allows you to disable the auto-logout mechanism by setting it to 0. 
			// If you want to change the default duration (15), you can set this value with a number > 0
					logoutTimer: 7200,

			// By default the language is set by the browser, and once the user is log in it will take what's set in the account/user.
			// If you want to force the language of the UI before the user is logged in, you can set it here.
					language: 'de-DE',

			// Application title, displayed in the browser tab
			applicationTitle: 'AllIP.ovh',

			// Company Name, used in many places in the UI
			companyName: 'Open Phone Net Inc.',

			nav: {
				// Link used when user click on the top-right interrogation mark
				help: 'https://www.allip.ovh',
				// Link used when clicking on logging out. By default the UI logs out the user after confirmation, but some people wanted to override that behavior

				//logout: 'http://www.google.com',
			}
		},
		advancedView: true,

                developerFlags: {
                        // Setting this flag to true will show the SmartPBX Callflows in the Callflows app
                        showSmartPBXCallflows: true,

                        // Settings this flag to true will show JS error when they happen, but in general we want to hide those so we comment it
                        showJSErrors: false
                }
	};
});
