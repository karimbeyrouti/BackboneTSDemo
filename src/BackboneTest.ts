
import RouterController 	= require("./tests/backbone/controller/RouterController");
import TestDataView		 	= require("./tests/backbone/views/TestDataView");
import AppView 				= require("./tests/backbone/views/AppView");
import NewUserView 			= require('./tests/backbone/views/NewUserView');
import TestDataCollection 	= require("./tests/backbone/data/TestDataCollection");
import TestData			 	= require("./tests/backbone/data/TestData");
import JSUtils			 	= require("./kurst/utils/JSUtils");
import Backbone 			= require("backbone");

class BackboneTest
{

	//private routerController 	: RouterController;
	//private testDataView 		: TestDataView;
	private testDataCollection	: TestDataCollection;
	private appView				: AppView;
	private newUserView			: NewUserView;

	constructor()
	{
		this.testDataCollection = new TestDataCollection();
		//this.testDataView		= new TestDataView();
		this.appView			= new AppView( this.testDataCollection );

		var newUserViewOptions : Backbone.ViewOptions<TestData> = new Object();
			newUserViewOptions.el 								= JSUtils.getId( 'new-user' );
		this.newUserView										= new NewUserView( this.testDataCollection , newUserViewOptions );

		/*
		this.testDataCollection.add( new TestData( 'Dave' 	, 'Monpelier' 	, 37 ) );
		this.testDataCollection.add( new TestData( 'Juan' 	, 'Carlos' 		, 40 ) );
		this.testDataCollection.add( new TestData( 'Edie' 	, 'Vandervive' 	, 37) );
		this.testDataCollection.add( new TestData( 'Ben' 	, 'Bennest' 	, 25 , true ) );
		this.testDataCollection.add( new TestData( ));
		*/
	}

}

export = BackboneTest;