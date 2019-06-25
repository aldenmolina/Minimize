using Minimize.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize.Repositories
{
    public interface IGoalRepository
    {
        IEnumerable<Goal> GetAll();
        Goal GetById(int id);
        void Add(Goal goal);
        void Delete(Goal goal);
    }
}
