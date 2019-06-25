using Minimize.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        MinimizeContext db;

        public CategoryRepository(MinimizeContext db)
        {
            this.db = db;
        }


        public IEnumerable<Category> GetAll()
        {
            return db.Categories.ToList();
        }

        public Category GetById(int id)
        {
            return db.Categories.Single(item => item.CategoryId == id);
        }
    }
}
