using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class LoginController : ControllerBase
{
    [HttpPost("/login")]
    public IActionResult Login(int userId)
    {
        Response.Headers.Add("Set-Cookie", $"user-id={userId}; expires={DateTimeOffset.Now.AddDays(7).ToString("R")}; path=/; HttpOnly");
        return Ok(new { Message = $"{userId} logged-in" });
    }
}
