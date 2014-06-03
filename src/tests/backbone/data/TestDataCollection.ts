/// <reference path="../../../libs/backbone.d.ts" />

import Backbone 		= require("backbone");
import TestData 		= require("./TestData");

class TestDataCollection extends Backbone.Collection<TestData>
{

	private localStorage : Backbone.LocalStorage;

	constructor()
	{
		super();
		//this.localStorage = new Backbone.LocalStorage('test-typescript-backbone');
	}

}

export = TestDataCollection;