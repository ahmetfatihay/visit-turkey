using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using WebApplication1.Model;

namespace WebApplication1.Services
{
    public class JsonCityService
    {
        public JsonCityService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get;  }
        public string JsonFileName {

            get { return Path.Combine(WebHostEnvironment.WebRootPath, "json.json"); } 
        
        }

        public IEnumerable<City> GetCities()
        {
            var json = File.OpenText(JsonFileName);
            return JsonSerializer.Deserialize<City[]>(json.ReadToEnd());
        }


    }
}
