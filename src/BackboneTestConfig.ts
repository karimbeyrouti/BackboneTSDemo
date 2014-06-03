///<reference path="libs/require.d.ts" />
///<reference path="libs/jquery.d.ts" />
///<reference path="libs/underscore.d.ts" />

/**
 * Main entry point for RequireJS
 */

require(
	[
		'jquery',
		'underscore',
		'BackboneTest',
		'backbone',
		'localstorage'
	],
	( $ , _ , BackboneTest ) => {
		'use strict';

		$(document).ready(function ( )
		{
			new BackboneTest();
		});
	}
);