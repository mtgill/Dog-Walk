using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DogWalk.DTOs;
using DogWalk.Models;

namespace DogWalk.DataAccess
{
    public interface IDogOwnerRepository
    {
        IEnumerable<DogOwner> GetAllDogOwners();
        DogOwner AddNewDogOwner(AddDogOwnerDTO ownerToAdd);
        DogOwner GetDogOwnerById(int ownerId);
    }
}
