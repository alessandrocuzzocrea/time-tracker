using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimeTracker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _dbContext;

        public UserController(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        // {
        //     var users = await _dbContext.Users.ToListAsync();
        //     return Ok(users);
        // }

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
