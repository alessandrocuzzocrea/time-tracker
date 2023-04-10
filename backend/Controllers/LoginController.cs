using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class LoginController : ControllerBase
{
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly UserManager<ApplicationUser> _userManager;


    public LoginController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
    {
        _signInManager = signInManager;
        _userManager = userManager;
    }

    [HttpPost("/login")]
    public async Task<IActionResult> Login(string email, string password)
    {
        // Response.Headers.Add("Set-Cookie", $"user-id={userId}; expires={DateTimeOffset.Now.AddDays(7).ToString("R")}; path=/; HttpOnly");
        // return Ok(new { Message = $"{userId} logged-in" });

        if (ModelState.IsValid)
        {
            var result = await _signInManager.PasswordSignInAsync(
                email, password, true, lockoutOnFailure: true);

            if (result.Succeeded)
            {
                return Ok();
            }
            if (result.IsLockedOut)
            {
                return StatusCode(423); // Locked
            }
            else
            {
                return BadRequest("Invalid login attempt.");
            }
        }

        return BadRequest(ModelState);
    }

    [HttpPost]
    [Route("/register")]
    public async Task<IActionResult> Register(string userName, string email)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var user = new ApplicationUser
        {
            UserName = userName,
            Email = email,
            // FirstName = model.FirstName,
            // LastName = model.LastName
        };

        var result = await _userManager.CreateAsync(user, "123456");

        if (result.Succeeded)
        {
            return Ok();
        }

        foreach (var error in result.Errors)
        {
            ModelState.AddModelError(string.Empty, error.Description);
        }

        return BadRequest(ModelState);
    }
}
