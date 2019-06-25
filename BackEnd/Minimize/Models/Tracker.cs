using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize.Models
{
   public class Tracker
    {
        public float PercentageComplete { get; set; }
        public int GoalTotalItemsToRemove { get; set; }
        public int GoalTotalItemsActuallyRemoved { get; set; }
    }
}
