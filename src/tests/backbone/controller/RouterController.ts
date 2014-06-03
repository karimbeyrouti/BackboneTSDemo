/// <reference path="../../../libs/backbone.d.ts" />

import Backbone 			= require("backbone");
import EventDispatcher 		= require("../../../kurst/events/EventDispatcher");

class RouterController extends EventDispatcher
{

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	private routes : Backbone.Router;

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	constructor()
	{
		super();

		this.routes = new Backbone.Router();
		this.routes.route( "page/:number", 		"page", ( e : number ) => this.onRoutePage( e ) );
		this.routes.route( "test",			 	"test", () => this.onRouteTest( ) );

		Backbone.history.start();
		this.routes.navigate("test/");

	}

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 * @param pageNumber
	 */
	private onRoutePage( pageNumber : number ) : void
	{
		console.log( 'pageNumber: ' , pageNumber );
	}
	/**
	 *
	 */
	private onRouteTest() : void
	{
		console.log( 'onRouteTest' );
	}

}

export = RouterController;