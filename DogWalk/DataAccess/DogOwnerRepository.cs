using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using DogWalk.DataAccess;
using DogWalk.DTOs;
using DogWalk.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DogWalk.DataAccess
{
    public class DogOwnerRepository : IDogOwnerRepository
    {
        string _connectionString = "Server=localhost;Database=DogWalk;Trusted_Connection=True;";

       public IEnumerable<DogOwner> GetAllDogOwners()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select * from DogOwner";
                var dogOwners = db.Query<DogOwner>(sql);
                return dogOwners;
            }
        }
        public DogOwner GetDogOwnerById(int ownerId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from DogOwner
                            where [Id] = @OwnerId";
                var parameters = new
                {
                    OwnerId = ownerId
                };
                var singleDogOwner = db.QueryFirst<DogOwner>(sql, parameters);
                return singleDogOwner;
            }
        }

        public bool AddNewDogOwner(AddDogOwnerDTO ownerToAdd)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO[dbo].[DogOwner]
                                                    ([Email])
                                                VALUES
                                                    (@email)";
                return db.Execute(sql, ownerToAdd) == 1;
            }
        }


    }
}
