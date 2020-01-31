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
    public class WalkRepository : IWalkRepository
    {
        string _connectionString = "Server=localhost;Database=DogWalk;Trusted_Connection=True;";

        public IEnumerable<Walk> GetAllWalks()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select * from Walk";
                var allWalks = db.Query<Walk>(sql);
                return allWalks;
            }
        }

        public Walk GetWalkById(int walkId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from Walk
                            where [Id] = @WalkId";
                var parameters = new
                {
                    WalkId = walkId
                };
                var singleWalk = db.QueryFirst<Walk>(sql, parameters);
                return singleWalk;
            }
        }

        public bool AddNewWalk(AddWalkDTO walkToAdd)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO[dbo].[Walk]
                                               ([UserId]
                                               ,[DateOfWalk]
                                               ,[Outcome])
                                                VALUES
                                                    (@UserId
                                                    ,@DateOfWalk
                                                    ,@Outcome)";
                return db.Execute(sql, walkToAdd) == 1;
            }
        }
    }
}
