<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('ElectionTableSeeder');

		$this->call('CandidateTableSeeder');

		$this->call('IssuesSimpleTableSeeder');

		$this->call('IssuesDetailTableSeeder');
	}//END run

}
