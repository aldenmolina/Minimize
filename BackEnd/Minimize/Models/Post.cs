using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Minimize.Models
{
    public class Post
    {
        public int PostId { get; set; }
        public int TotalItems { get; set; }
        public int RemovedItems { get; set; }
        public string PostDescription { get; set; }
        public string PostImgPath { get; set; }
        public DateTime PostTime { get; set; }
        public int CategoryId { get; set; }
    }
}
