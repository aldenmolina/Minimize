using Minimize.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize.Repositories
{
    public class BadgeRepository : IBadgeRepository
    {
        MinimizeContext db;

        public BadgeRepository(MinimizeContext db)
        {
            this.db = db;
        }


        public IEnumerable<Badge> GetAll()
        {
            return db.Badges.ToList();
        }
    }
}
