using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
 
namespace Minimize.Models
{
    public class Goal
    {
        public int GoalId { get; set; }
        public  string Date { get; set; }
        public string Text { get; set; }
        public int NumberOfItems { get; set; }
        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }
    }
}
