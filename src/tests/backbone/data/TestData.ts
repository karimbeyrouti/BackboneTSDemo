/// <reference path="../../../libs/backbone.d.ts" />

import Backbone = require("backbone");

class TestData extends Backbone.Model
{

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	constructor( firstName ? : string , lastName ? : string , age ? : number , isTester : boolean = false )
	{
		this.defaults = <any>
		{
			firstName 	: 'First name',
			lastName 	: 'Last name',
			age 		: 0,
			isTester	: false
		}

		super();

		if ( firstName )
		{
			this.set( 'firstName' 	, firstName );
		}

		if ( lastName )
		{
			this.set( 'lastName' 	, lastName );
		}

		if ( age )
		{
			this.set( 'age' 		, age );
		}

		if ( isTester )
		{
			this.set( 'isTester' 	, isTester );
		}

	}

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 * @param v
	 */
	public set firstName( v : string )
	{
		this.set( 'firstName' , v );
	}
	public get firstName( ) : string
	{
		return this.get( 'firstName' );
	}
	/**
	 *
	 * @param v
	 */
	public set lastName( v : string )
	{
		this.set( 'lastName' , v );
	}
	public get lastName() : string
	{
		return this.get( 'lastName'  );
	}
	/**
	 *
	 * @param v
	 */
	public set age( v : number )
	{
		this.set( 'age' , v );
	}
	public get age( ) : number
	{
		return this.get( 'age'  );
	}
	/**
	 *
	 * @param v
	 */
	public set isTester( v : boolean )
	{
		this.set( 'isTester' , v );
	}
	public get isTester(  ) : boolean
	{
		return this.get( 'isTester'  );
	}

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 *
	 * @param options
	 */
	public clear(options?: Backbone.Silenceable) : void
	{
		this.destroy();
	}
	/**
	 *
	 * @param bool
	 */
	public setTester( bool : boolean ) : void
	{
		this.isTester = bool;
		console.log( this.toJSON() );
	}


}

export = TestData;
