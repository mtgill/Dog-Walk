using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DogWalk.DTOs
{
    public class AddWalkDTO
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime DateOfWalk { get; set; }
        public bool Outcome { get; set; }

    }
}
