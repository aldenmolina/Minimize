using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Minimize.Models;

namespace Minimize.Repositories
{
    public class PostRepository : IPostRepository
    {
        MinimizeContext db;

        public PostRepository(MinimizeContext db)
        {
            this.db = db;
        }
        public IEnumerable<Post> GetAll()
        {
            return db.Posts.ToList();
        }

        public Post GetById(int id)
        {
            return db.Posts.Single(post => post.PostId == id);
        }

        public void Add(Post post)
        {
            db.Posts.Add(post);
            db.SaveChanges();
        }

        public void Delete(Post post)
        {

            db.Posts.Remove(post);
            db.SaveChanges();
        }

        public void Update(Post post)
        {
            db.Posts.Update(post);
            db.SaveChanges();
        }
    }
}