using Microsoft.AspNetCore.Identity;

public class ApplicationUser : IdentityUser<int>, ITimestampedEntity
{
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
