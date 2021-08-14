using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class City
    {
        public string city { get; set; }
        public float lat { get; set; }
        public float lng { get; set; }

        public string[] places { get; set; }
    }


}
