using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Minimize.Models;
namespace Minimize.Repositories
{
    public class TrackerRepository
    {
        MinimizeContext db;

        public TrackerRepository(MinimizeContext db)
        {
            this.db = db;
        }
        public   Tracker  Get(int id)
        {
            //desire to remove
            var goal = db.Goals.Single(g => g.GoalId == id);
            var posts = goal.Category.Posts;

            var expectedInGoal = goal.NumberOfItems;
            var currentTotal = posts.Sum(p => p.RemovedItems);


            var PercentageComplete = ((float)expectedInGoal / currentTotal) * 100;


            return null;
        }

    }
}
