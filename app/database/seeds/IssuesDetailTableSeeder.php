<?php

use App\Models\IssuesSimple;

class IssuesDetailTableSeeder extends Seeder {

    public function run()
    {
        $issue = new IssuesSimple;
        $issue->candidate_id = 1;
        $issue->save();
    }

}