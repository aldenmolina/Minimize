using Microsoft.AspNetCore.Mvc;
using Minimize.Models;
using Minimize.Repositories;
using System.Diagnostics;
using System.Linq;

namespace Minimize.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrackerController : ControllerBase
    {
        private readonly IGoalRepository goalRepository;
        private MinimizeContext db;
        public TrackerController(IGoalRepository goalRepository)
        {
            this.goalRepository = goalRepository;
            db = new MinimizeContext();
        }


        // GET: api/Tracker/5
        [HttpGet("{id}", Name = "Get")]
        public Tracker Get(int id)
        {
             var goals = db.Goals.Where(g => g.CategoryId == id);

            var expectedInGoal = goals.Sum(g=> g.NumberOfItems);

            var category = db.Categories.Single(g => g.CategoryId == id);
            
            var currentTotal = category.Posts.Sum(p => p.RemovedItems);


            var percentageComplete = ((float)currentTotal /expectedInGoal)*100; 

            return new Tracker()
            {             
                PercentageComplete = percentageComplete,
                GoalTotalItemsToRemove = expectedInGoal,
                GoalTotalItemsActuallyRemoved = currentTotal
            };
        }

    }


}
