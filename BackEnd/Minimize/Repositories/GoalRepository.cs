using Minimize.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize.Repositories
{
    public class GoalRepository : IGoalRepository
    {
        MinimizeContext db;

        public GoalRepository(MinimizeContext db)
        {
            this.db = db;
        }
        public Goal GetById(int id)
        {
            return db.Goals.Single(goal => goal.GoalId == id);

        }
        public void Add(Goal goal)
        {
            db.Goals.Add(goal);
            db.SaveChanges();
        }
        public void Delete(Goal goal)
        {
            db.Goals.Remove(goal);
            db.SaveChanges();
        }

        public IEnumerable<Goal> GetAll()
        {
            return db.Goals.ToList();
        }
    }
}
