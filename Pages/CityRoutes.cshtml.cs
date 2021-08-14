using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using WebApplication1.Model;
using WebApplication1.Services;

namespace WebApplication1.Pages
{
    public class MapModel : PageModel

    {
        private readonly IConfiguration _config;
        private readonly ILogger<MapModel>_logger;

        public JsonCityService JsonCityService;
        public IEnumerable<City> Cities;
        public string googleMapsApiKey;

        public MapModel(ILogger<MapModel> logger, JsonCityService jsoncityservice, IConfiguration config)
        {
            _logger = logger;
            JsonCityService = jsoncityservice;
            _config = config;
        }
        public void OnGet()
        {
            googleMapsApiKey = _config["GOOGLE_MAPS_API_KEY"];
            Cities = JsonCityService.GetCities();
        }
    }
}
