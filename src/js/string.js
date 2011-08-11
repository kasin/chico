
/**
* Validate strings.
* @name String 
* @class String
* @interface
* @augments ch.Watcher
* @memberOf ch
* @param {string} msg Validation message
* @returns itself
* @see ch.Watcher
* @see ch.Required
* @see ch.Custom
* @see ch.Number
* @example
* // Create a string validation
* $("input").string("This field must be a string.");
*/

ch.extend("watcher").as("string", function (conf) {

	// $.string("message"); support
	if ( !conf.string && !conf.email && !conf.url && !conf.maxLength && !conf.minLength ) {
		conf.string = true;
	};
	
	/**
	* @public
	* @name ch.String#conditions
	* @type {Map}
	*/
	// Define the conditions of this interface
	conf.conditions = [{
			name: "string",
			// the following regular expression has the utf code for the lating characters
			// the ranges are A,EI,O,U,a,ei,o,u,ç,Ç please for reference see http://www.fileformat.info/info/charset/UTF-8/list.htm
			patt: /^([a-zA-Z\u00C0-\u00C4\u00C8-\u00CF\u00D2-\u00D6\u00D9-\u00DC\u00E0-\u00E4\u00E8-\u00EF\u00F2-\u00F6\u00E9-\u00FC\u00C7\u00E7\s]*)$/
		},{
			name:"email",
			patt: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/ 
		},{
			name: "url",
			patt: /^((https?|ftp|file):\/\/|((www|ftp)\.)|(\/|.*\/)*)[a-z0-9-]+((\.|\/)[a-z0-9-]+)+([/?].*)?$/ 
		},{
			name: "minLength",
			expr: function(a,b) { return a.length >= b } 
		},{
			name: "maxLength",
			expr: function(a,b) { return a.length <= b } 
		}];

	return conf;

});

/**
* Validate email sintaxis.
* @name Email
* @class Email
* @interface
* @augments ch.String
* @memberOf ch
* @param {string} [message] Validation message.
* @returns itself
* @see ch.Watcher
* @example
* // Create a email validation
* $("input").email("This field must be a valid email.");
*/

ch.extend("string").as("email");

/**
* Validate URL sintaxis.
* @name Url
* @class Url
* @interface
* @augments ch.String
* @memberOf ch
* @param {string} [message] Validation message.
* @returns itself
* @see ch.Watcher
* @example
* // Create a URL validation
* $("input").url("This field must be a valid URL.");
*/

ch.extend("string").as("url");


/**
* Validate a minimun amount of characters.
* @name MinLength
* @class MinLength
* @interface
* @augments ch.String
* @memberOf ch
* @param {number} value Minimun number value.
* @param {string} [message] Validation message.
* @returns itself
* @see ch.Watcher
* @example
* // Create a minLength validation
* $("input").minLength(10, "At least 10 characters..");
*/

ch.extend("string").as("minLength");


/**
* Validate a maximun amount of characters.
* @name MaxLength
* @class MaxLength
* @interface
* @augments ch.String
* @memberOf ch
* @param {number} value Maximun number value.
* @param {string} [message] Validation message.
* @returns itself
* @see ch.Watcher
* @example
* // Create a maxLength validation
* $("input").maxLength(10, "No more than 10 characters..");
*/

ch.extend("string").as("maxLength");