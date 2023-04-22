using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace TimeTracker;

public abstract class ApiBaseController : ControllerBase
{
    private readonly UserManager<ApplicationUser> _userManager;

    public ApiBaseController(UserManager<ApplicationUser> userManager)
    {
        _userManager = userManager;
    }

    protected async Task<ApplicationUser> GetCurrentUser()
    {
        return await _userManager.GetUserAsync(HttpContext.User);
    }
}
