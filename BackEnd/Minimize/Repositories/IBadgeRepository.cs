using Minimize.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize.Repositories
{
    public interface IBadgeRepository
    {
        IEnumerable<Badge> GetAll();
    }
}
