import underscore 			= require("underscore");
import Backbone 			= require("backbone");
import TestDataCollection 	= require ('../data/TestDataCollection')
import TestData				= require ('../data/TestData')

class NewUserView extends Backbone.View<TestData>
{

	private testDataColleaction : TestDataCollection;
	private firstNameInput 		: HTMLInputElement;
	private lastNameInput 		: HTMLInputElement;
	private ageInput 			: HTMLInputElement;
	private addUser 			: HTMLButtonElement;

	constructor( testDataColleaction : TestDataCollection , options?: Backbone.ViewOptions<TestData> )
	{
		super( options );

		this.testDataColleaction = testDataColleaction;

		console.log( $(this.$el).find( '#firstName-input' )[0] );

		this.firstNameInput 	= <HTMLInputElement> $(this.$el).find( '#firstName-input' )[0];
		this.lastNameInput 		= <HTMLInputElement> $(this.$el).find( '#lastName-input' )[0];
		this.ageInput 			= <HTMLInputElement> $(this.$el).find( '#age-input' )[0];
		this.addUser 			= <HTMLButtonElement> $(this.$el).find( '#adduser-button' )[0];

		this.addUser.addEventListener( 'click' , () => this.addUserHandler() );
	}

	private addUserHandler() : void
	{
		this.testDataColleaction.add( new TestData( <string> this.firstNameInput.value ,<string> this.lastNameInput.value  , parseInt( this.ageInput.value ) ) );

		this.firstNameInput.value = '';
		this.lastNameInput.value = '';
		this.ageInput.value = '';
	}
}

export = NewUserView;