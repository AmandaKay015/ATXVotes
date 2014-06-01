<?php

use App\Models\Candidate;

class CandidateTableSeeder extends Seeder {

    public function run()
    {
        $candidate = new Candidate;
        $candidate->election_id = 1;
        $candidate->district    = 1;
        $candidate->position    = 'council member';
        $candidate->name        = 'Andrew Bucknall';
        $candidate->focus       = 'health care, education, transportation, historic preservation';
        $candidate->image       = '/images/candidate.jpg';
        $candidate->experience  = 'City Commissioner (urban transportation, urban renewal); health and human services administrator; Council candidate (2005)';
        $candidate->occupation  = 'Mediator; Property Manager';
        $candidate->facebook    = 'https://www.facebook.com/pages/Bucknall-for-District-One/1418122691775702';
        $candidate->url         = 'www.andrewbucknall.com';
        $candidate->contact     = '123-456-7890';
        $candidate->in_office   = 0;
        $candidate->finance     = '1 million doll hairs';
        $candidate->other       = 'other important information';
        $candidate->save();
    }
}