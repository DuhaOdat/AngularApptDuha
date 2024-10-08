using AngularApptDuha.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularApptDuha.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly MyDbContext _db;
        public ServicesController(MyDbContext db) {
            _db = db;
        }

        [HttpGet("getAllServices")]
        public IActionResult getAllServices() {


    var services = _db.Services.ToList();
            return Ok(services);
        }

    }
}
