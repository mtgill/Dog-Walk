using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DogWalk.DataAccess;
using DogWalk.DTOs;
using DogWalk.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DogWalk.Controllers
{
    [Route("api/walk")]
    [ApiController]
    public class WalkController : ControllerBase
    {
        private readonly IWalkRepository _repo;

        public WalkController(IWalkRepository repo)
        {
            _repo = repo;

        }

        // GET: api/Walk
        [HttpGet]
        public IEnumerable<Walk> GetAllWalks()
        {
            return _repo.GetAllWalks();
        }

        // GET: api/Walk/5
        [HttpGet("{walkId}")]
        public Walk GetWalkById(int walkId)
        {
            return _repo.GetWalkById(walkId);
        }


        // POST: api/Walk
        [HttpPost]
        public IEnumerable<Walk> AddWalk(AddWalkDTO walkToAdd)
        {
            _repo.AddNewWalk(walkToAdd);
            return _repo.GetAllWalks();
        }

    }
}
