<?php

namespace App\Controllers;

use App\Models\Election;
use App\Models\Candidate;
use Response;

class ElectionController extends \BaseController {
	
	private $election;
	private $candidate;

	public function __construct(Election $election, Candidate $candidate)
	{
		$this->election  = $election;
		$this->candidate = $candidate;
	}

	/**
	 * Returns an array of Elections
	 *
	 * @return Response
	 */
	public function index()
	{
		$data = $this->election->all()->toArray();

		return Response::json($data);
	}//END index

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$election     = $this->election->find($id);
		$candidateIds = $this->candidate->getCandidateIds($id);
		// $candidates = $election->candidates;


		$data = $election->toArray();
		$data['candidates'] = $candidateIds;
		
		return Response::json(array($data));
	}//END show

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}
}