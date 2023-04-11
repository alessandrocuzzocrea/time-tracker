using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace TimeTracker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TimeEntryController : ApiBaseController
    {
        private readonly ApplicationDbContext _dbContext;

        public TimeEntryController(UserManager<ApplicationUser> userManager, ApplicationDbContext dbContext) : base (userManager)
        {
            _dbContext = dbContext;
        }

        // [HttpGet]
        // public async Task<ActionResult> Get()
        // {
        //     // var user = await _userManager.GetUserAsync(User);
        //     // return user != null ? Ok(new MeResponse(user)) : NotFound("NotFound");

        //     return Ok();
        // }

        [HttpPost]
        public async Task<ActionResult> Post(TimeEntryCreateRequest request)
        {
            if (ModelState.IsValid)
            {
                var currentUser = await GetCurrentUser();
                var timeEntry = new TimeEntry {
                    User = currentUser,
                    TaskId = request.TaskId,
                    StartTime = request.StartAt,
                };

                _dbContext.Add(timeEntry);

                await _dbContext.SaveChangesAsync();
                return Ok(timeEntry);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
