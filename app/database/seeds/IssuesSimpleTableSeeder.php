<?php

use App\Models\IssuesDetail;

class IssuesSimpleTableSeeder extends Seeder {

    public function run()
    {
        $issue = new IssuesDetail;
        $issue->candidate_id = 1;
        $issue->save();
    }

}