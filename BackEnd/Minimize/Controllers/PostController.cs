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
    public class PostController : ControllerBase
    {
        IPostRepository postRepo;

        public PostController(IPostRepository postRepo)
        {
            this.postRepo = postRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Post>> GetAll()
        {
            var model = postRepo.GetAll().ToArray();
            return model;
        }
        [HttpGet("{id}")]
        public ActionResult<Post> Get(int id)
        {
            var model = postRepo.GetById(id);
            return model;
             
        }

         
        [HttpPost]
        public void Post([FromBody] Post post)
        {
            post.PostTime = DateTime.Now;
            postRepo.Add(post);
            
        }

         
        [HttpPut("{id}")]
        public  void Put(int id, [FromBody] Post post)
        {
            var model = postRepo.GetById(id);
            postRepo.Update(model);
        }

        
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var model = postRepo.GetById(id);
            postRepo.Delete(model);
        }
    }
}