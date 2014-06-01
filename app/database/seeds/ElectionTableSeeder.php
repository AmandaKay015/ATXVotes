<?php

use App\Models\Election;

class ElectionTableSeeder extends Seeder {

    public function run()
    {
        $election = new Election;
        $election->name = 'General Election';
        $election->date = date('Y-m-d');
        $election->description = 'This is the election description!';
        $election->save();
    }

}