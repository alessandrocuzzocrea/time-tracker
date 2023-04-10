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
    public class UserController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public UserController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet("me")]
        public async Task<ActionResult<APIMeResponse>> GetMe()
        {
            // var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            // return Ok(new { userId });
            var user = await _userManager.GetUserAsync(User);
            return user != null ? Ok(new APIMeResponse(user)) : NotFound("NotFound");
        }

        [HttpGet("users")]
        // [Authorize(Roles = "Admin")]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetUsers()
        {
            var users = await _userManager.Users.ToListAsync();
            return Ok(users);
        }

        // [HttpGet("{id}")]
        // public async Task<ActionResult<User>> GetUserById(int id)
        // {
        //     var user = await _dbContext.Users.FindAsync(id);

        //     if (user == null)
        //     {
        //         return NotFound();
        //     }

        //     return Ok(user);
        // }

        // [HttpPost]
        // public async Task<ActionResult<User>> CreateUser(User user)
        // {
        //     _dbContext.Users.Add(user);
        //     await _dbContext.SaveChangesAsync();

        //     return CreatedAtAction(nameof(GetUserById), new { id = user.Id }, user);
        // }

        // [HttpPut("{id}")]
        // public async Task<IActionResult> UpdateUser(int id, User user)
        // {
        //     if (id != user.Id)
        //     {
        //         return BadRequest();
        //     }

        //     _dbContext.Entry(user).State = EntityState.Modified;
        //     await _dbContext.SaveChangesAsync();

        //     return NoContent();
        // }

        // [HttpDelete("{id}")]
        // public async Task<IActionResult> DeleteUser(int id)
        // {
        //     var user = await _dbContext.Users.FindAsync(id);

        //     if (user == null)
        //     {
        //         return NotFound();
        //     }

        //     _dbContext.Users.Remove(user);
        //     await _dbContext.SaveChangesAsync();

        //     return NoContent();
        // }
    }
}
