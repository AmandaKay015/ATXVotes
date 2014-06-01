<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCandidatesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('candidates', function($table)
		{
			$table->increments('id');
			$table->integer('election_id');
			$table->integer('district');
			$table->string('position');
			$table->string('name');
			$table->string('focus')->nullable();
			$table->string('image')->nullable();
			$table->string('experience')->nullable();
			$table->string('occupation')->nullable();
			$table->string('facebook')->nullable();
			$table->string('url')->nullable();
			$table->string('contact')->nullable();
			$table->boolean('in_office');
			$table->string('finance')->nullable();
			$table->string('other')->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('candidates');
	}

}
