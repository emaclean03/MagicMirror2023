/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "clock",
			position: "top_center",
		},
		{
			module: "calendar",
			config: {
				broadcastPastEvents: true, // <= IMPORTANT to see past events
				calendars: [
					{
						url: "https://calendar.google.com/calendar/ical/02aehgncjpof2a6t50futcss7s%40group.calendar.google.com/public/basic.ics",
						name: "EvMac", // <= RECOMMENDED to assign name
						color: "yellow" // <= RECOMMENDED to assign color
					},
					{
						url: "https://calendar.google.com/calendar/embed?src=family01068811041469020433%40group.calendar.google.com&ctz=America%2FNew_York",
						name: "Family", // <= RECOMMENDED to assign name
						color: "red" // <= RECOMMENDED to assign color
					},
				]
			}
		},
		//url: "https://calendar.google.com/calendar/ical/02aehgncjpof2a6t50futcss7s%40group.calendar.google.com/public/basic.ics",
		{
			module: "MMM-CalendarExt3",
			position: "bottom_bar",
			title: "Our Calendar",
			config: {
				mode: "week",
				instanceId: "basicCalendar",
				locale: 'en-US',
				maxEventLines: 5,
				firstDayOfWeek: 1,
				weeksInView: 4,
				calendarSet: ['EvMac'],
			}
		},
		{
			module: "weather",
			position: "top_left",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				initialLoadDelay: 100,
				locationID: "4148986", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "#"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				locationID: "4148986", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "#"
			}
		},
		{//
			module: "MMM-GooglePhotos",
			position: "fullscreen_below",
			config: {
				albums: ['Camp Shiver', 'Evmac'], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
				updateInterval: 1000 * 20, // minimum 10 seconds.
				sort: "random", // "old", "random"
				uploadAlbum: null, // Only album created by `create_uploadable_album.js`.
				condition: {
					fromDate: null, // Or "2018-03", RFC ... format available
					toDate: null, // Or "2019-12-25",
					minWidth: null, // Or 400
					maxWidth: null, // Or 8000
					minHeight: null, // Or 400
					maxHeight: null, // Or 8000
					minWHRatio: null,
					maxWHRatio: null,
					// WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
				},
				showWidth: 1080, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
				showHeight: 1920,
				timeFormat: "MM/DD/YYYY HH:mm", // Or `relative` can be used.
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
