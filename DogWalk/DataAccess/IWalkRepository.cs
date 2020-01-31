using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DogWalk.DTOs;
using DogWalk.Models;

namespace DogWalk.DataAccess
{
    public interface IWalkRepository
    {
        IEnumerable<Walk> GetAllWalks();
        bool AddNewWalk(AddWalkDTO walkToAdd);
        Walk GetWalkById(int walkId);
    }
}
