using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace TimeTracker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ApiBaseController
    {
        private readonly ApplicationDbContext _dbContext;

        public TaskController(UserManager<ApplicationUser> userManager, ApplicationDbContext dbContext) : base (userManager)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            // var user = await _userManager.GetUserAsync(User);
            // return user != null ? Ok(new MeResponse(user)) : NotFound("NotFound");

            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] string name)
        {
            var user = await GetCurrentUser();
            var task = new Task { Name = name, ProjectId = 1 };

            _dbContext.Add(task);

            await _dbContext.SaveChangesAsync();
            return Ok(task);
        }
    }
}
