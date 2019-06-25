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
    public class BadgeController : ControllerBase
    {
        IBadgeRepository badgeRepo;

        public BadgeController(IBadgeRepository badgeRepo)
        {
            this.badgeRepo = badgeRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Badge>> GetAll()
        {
            var model = badgeRepo.GetAll().ToArray();
            return model;
        }
    }
}