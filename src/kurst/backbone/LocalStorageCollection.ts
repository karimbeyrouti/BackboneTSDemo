/// <reference path="../../libs/backbone.d.ts" />

import Backbone = require("backbone");

class LocalStorageCollection<TModel extends Backbone.Model> extends Backbone.Collection<TModel>
{

	private storageName     : string;
	private classTemplate   : any;

    constructor(    storageName : string ,
                    classTemplate : any ,
					models?: TModel[],
					options?: any)
    {
        super( models , options );

	    this.storageName = storageName;
	    this.classTemplate = classTemplate;

	    this.bind( 'change' , () => this.onChanged.apply(this , arguments) );
	    this.bind( 'remove' , () => this.onRemoved.apply(this , arguments) );
	    this.bind( 'add' , () => this.onAdded.apply(this , arguments) );
	    this.bind( 'all' , () => this.allEvents.apply(this , arguments) );

    }

	//--------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 */
	public save() : void
	{
		this.localStorage().setItem( this.storageName , JSON.stringify(this.toJSON() ));
	}
	/**
	 *
	 */
	public sync()  : any
	{
		this.save();
		return;
	}
	/**
	 *
	 * @param options
	 */
	public fetch(options?: Backbone.CollectionFetchOptions) : any
	{
		if ( this.localStorage().getItem( this.storageName ) )
		{
			this.localStorage().getItem( this.storageName );//, JSON.stringify(this.toJSON() ));
			var result : Array<Object> = JSON.parse(this.localStorage().getItem( this.storageName ))

			for ( var c : number = 0 ; c < result.length ; c ++ )
			{
				this.add( this.createModel( result[c] ) );
			}
		}

		return;

	}

	//--------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 * @param obj
	 * @returns {TModel}
	 */
	private createModel( obj : Object ) : TModel
	{
		var result : TModel = <TModel> new this.classTemplate();

		for ( var p in obj )
		{
			result[p] = obj[p];
		}

		return result;
	}
	/**
	 *
	 * @returns {Storage}
	 */
	private localStorage() : Storage
	{
		if ( window.localStorage )
			return window.localStorage;

		return;
	}

	//--------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 */
	private allEvents() : void
	{
		//console.log( 'allEvents' , arguments );
		//console.log( this.toJSON() );
	}
	/**
	 *
	 */
	private onAdded() : void
	{
		//console.log( 'onAdded' , arguments );
	}
	/**
	 *
	 */
	private onChanged() : void
	{
		//console.log('onChanged' , arguments );
	}
	/**
	 *
	 */
	private onRemoved() : void
	{
		//console.log('onRemoved' , arguments );
	}

}

export = LocalStorageCollection;
