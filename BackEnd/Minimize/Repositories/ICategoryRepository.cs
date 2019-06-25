using Minimize.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize.Repositories
{
    public interface ICategoryRepository
    {
        IEnumerable<Category> GetAll();

        Category GetById(int Id);
    }
}
