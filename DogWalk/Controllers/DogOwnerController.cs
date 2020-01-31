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
    [Route("api/dogOwner")]
    [ApiController]
    public class DogOwnerController : ControllerBase
    {
        private readonly IDogOwnerRepository _repo;

        public DogOwnerController(IDogOwnerRepository repo)
        {
            _repo = repo;

        }
        // GET: api/DogOwner
        [HttpGet]
        public IEnumerable<DogOwner> GetAllDogOwners()
        {
            return _repo.GetAllDogOwners();
        }

        // GET: api/dogOwner/5
        [HttpGet("{ownerId}")]
        public DogOwner GetDogOwnerById(int ownerId)
        {
            return _repo.GetDogOwnerById(ownerId);
        }

        // POST: api/DogOwner
        [HttpPost]
        public IEnumerable<DogOwner> AddDogOwner( AddDogOwnerDTO ownerToAdd)
        {
            _repo.AddNewDogOwner(ownerToAdd);
            return _repo.GetAllDogOwners();
        }

    }
}
