using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Minimize.Models;
using Minimize.Repositories;

namespace Minimize.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoalController : ControllerBase
    {
        IGoalRepository goalRepository;

        public GoalController(IGoalRepository goalRepository)
        {
            this.goalRepository = goalRepository;
        }
        // GET: api/Goal
        [HttpGet]
        public IEnumerable<Goal> Get()
        {
            var model = goalRepository.GetAll().ToArray();
            return model;
        }
        [HttpGet("{id}")]
        public ActionResult<Goal> Get(int id)
        {
            var model = goalRepository.GetById(id);
            return model;

        }

        // POST: api/Goal
        [HttpPost]
        public void Post([FromBody] Goal goal)
        {
            goalRepository.Add(goal);
        }
 

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var model = goalRepository.GetById(id);
            goalRepository.Delete(model);
        }
    }
}
