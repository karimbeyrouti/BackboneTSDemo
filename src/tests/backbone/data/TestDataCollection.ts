/// <reference path="../../../libs/backbone.d.ts" />

import Backbone 		        = require("backbone");
import TestData 		        = require("./TestData");
import LocalStorageCollection   = require("../../../kurst/backbone/LocalStorageCollection");

class TestDataCollection extends LocalStorageCollection<TestData>
{

	constructor()
	{
		super( 'Test-Data-LocalStorage' , TestData );
	}

}

export = TestDataCollection;