using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize.Models
{
    public class Badge
    {
        [Key]
        public int BadgeId { get; set; }

        public string BadgeName { get; set; }
        public string BadgeDescription { get; set; }
    }
}
