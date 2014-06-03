/// <reference path="../../../libs/backbone.d.ts" />
/// <reference path="../../../libs/underscore.d.ts" />

import underscore 			= require("underscore");
import Backbone 			= require("backbone");
import TestDataCollection 	= require ('../data/TestDataCollection')
import TestData				= require ('../data/TestData')

class TestDataView extends Backbone.View<TestData>
{

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	private static EDIT_MODE 		: string;
	private static EDIT_LASTNAME 	: string = 'lastName';
	private static EDIT_FIRSTNAME	: string = 'firstName';
	private static EDIT_NONE		: string = 'noEdit';

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	private template			: (data: any) => string;
	private templateInitialised : boolean = false;
	private clickDocDelegate	: EventListener;

	// Template elements

	private input 				: HTMLInputElement;
	private firstNameElement	: HTMLLabelElement;
	private lastNameElement		: HTMLLabelElement;
	private removeButton		: HTMLButtonElement;
	private isTesterToggle		: HTMLInputElement;

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	constructor(options?: Backbone.ViewOptions<TestData>)
	{

		super();

		this.tagName 	= 'li';
		this.events 	= <any>
		{
			"click 		.toggle"  		 			: 'toggleTester',
			"click 		button.destroy"   			: 'clear',
			'dblclick 	label.firstName-content'	: 'editFirstName',
			'dblclick 	label.lastName-content'		: 'editLastName',
			'keypress 	.edit-input'				: 'updateOnEnter'
		};

		super( options ); // KLUDGE: Call super (again) to initialise defaults

		this.template 	= _.template( $( '#item-template' ).html() );

		if ( options )
		{
			this.model.bind( 'change' , () => this.render() );
			this.model.bind( 'destroy' , () => this.remove() );
		}

		this.clickDocDelegate = (e : MouseEvent ) => this.clickDocument( e );

	}

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 * @returns {TestDataView}
	 */
	public render() : Backbone.View<TestData>
	{
		if ( this.templateInitialised )
		{
			this.firstNameElement.innerHTML 	= this.model.firstName;
			this.lastNameElement.innerHTML 		= this.model.lastName;
			this.isTesterToggle.checked 		= this.model.isTester;
		}
		else
		{
			this.$el.html(this.template(this.model.toJSON()));

			this.firstNameElement 		= <HTMLLabelElement> this.$el.find('.firstName-content')[0];
			this.lastNameElement 		= <HTMLLabelElement> this.$el.find('.lastName-content')[0];
			this.removeButton 			= <HTMLButtonElement> this.$el.find('.destroy')[0];
			this.isTesterToggle 		= <HTMLInputElement> this.$el.find('.toggle')[0];
			this.input 					= <HTMLInputElement> this.$el.find('.edit-input')[0];//$(this.$el).siblings('edit-input');
			this.input.style.visibility = 'hidden';
			this.templateInitialised 	= true;
		}


		return this;
	}

	//----------------------------------------------------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 * @param e
	 */
	private updateOnEnter( e : KeyboardEvent) : void
	{
		if (e.keyCode == 13 )
		{
			this.close();
		}
	}
	/**
	 *
	 */
	private toggleTester() : void
	{
		this.model.isTester = !this.model.isTester;
	}
	/**
	 *
	 */
	private editFirstName() : void
	{
		TestDataView.EDIT_MODE = TestDataView.EDIT_FIRSTNAME;
		this.input.value = this.model.firstName;
		this.showInputField();
	}
	/**
	 *
	 */
	private editLastName() : void
	{
		TestDataView.EDIT_MODE = TestDataView.EDIT_LASTNAME;
		this.input.value = this.model.lastName;
		this.showInputField();
	}

	private showInputField() : void
	{
		document.addEventListener( 'click' , this.clickDocDelegate );

		this.input.style.visibility = 'visible';
		this.input.focus();
	}
	/**
	 *
	 */
	private clear() : void
	{
		this.model.clear();

		document.removeEventListener( 'click' , this.clickDocDelegate );

		if ( this.templateInitialised )
		{
			this.firstNameElement 		= null;
			this.lastNameElement 		= null;
			this.removeButton 			= null;
			this.isTesterToggle 		= null;
			this.input 					= null;
		}
	}
	/**
	 *
	 */
	private close() : void
	{
		document.removeEventListener( 'click' , this.clickDocDelegate );

		if ( ! this.input ) return;

		switch ( TestDataView.EDIT_MODE )
		{
			case TestDataView.EDIT_LASTNAME:
				this.model.lastName =  this.input.value;
				break;
			case TestDataView.EDIT_FIRSTNAME:
				this.model.firstName =  this.input.value;
				break;
		}


		this.input.style.visibility = 'hidden';

		if ( TestDataView.EDIT_MODE != TestDataView.EDIT_NONE)
		{
			this.render();
		}

		//this.model.save();
	}
	/**
	 * @param e
	 */
	private clickDocument( e : MouseEvent ) : void
	{
		if ( e.toElement != this.input )
		{
			TestDataView.EDIT_MODE = TestDataView.EDIT_NONE;
			this.close();
		}
	}

}

export = TestDataView;