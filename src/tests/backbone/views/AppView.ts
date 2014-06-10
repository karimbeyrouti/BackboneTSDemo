/// <reference path="../../../libs/backbone.d.ts" />
/// <reference path="../../../libs/underscore.d.ts" />

import underscore 			= require("underscore");
import Backbone 			= require("backbone");
import TestDataCollection 	= require ('../data/TestDataCollection');
import TestData				= require ('../data/TestData');
import TestDataView			= require ('./TestDataView');

class AppView extends Backbone.View<TestData>
{
	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	private mainElement			: HTMLElement;
	private testDataColleaction : TestDataCollection;

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	constructor( testDataColleaction : TestDataCollection )
	{

		this.setElement($('#app-container'), true);
		this.mainElement = this.$('#main')[0];

		super();

		testDataColleaction.bind('add', ( testData : TestData ) => this.addOne( testData ) );
		testDataColleaction.bind('reset', ( ) => this.addAll( ) );
		testDataColleaction.bind('remove', ( ) => this.removeModel( ) );
		testDataColleaction.bind('all', ( ) => this.render( ) );

		this.testDataColleaction = testDataColleaction;
		this.testDataColleaction.fetch();

	}

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	/**
	 */
	private removeModel() : void
	{
		this.testDataColleaction.save();
	}
	/**
	 *
	 * @param testData
	 */
	private addOne(testData : TestData ) : void
	{
		var viewOptions : Backbone.ViewOptions<TestData> 	= new Object();
			viewOptions.model 								= testData
			viewOptions.tagName                             = 'li';

		var view : TestDataView 							= new TestDataView( this.testDataColleaction , viewOptions );

		$('#user-list').append(view.render().el);
	}
	/**
	 *
	 */
	private addAll() : void
	{
		this.testDataColleaction.each( ( e : TestData) => this.addOne( e ));
	}

}

export = AppView;
