using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public class ApplicationIdentityDbContext : IdentityDbContext<ApplicationUser, MyRole, int>
{
    public ApplicationIdentityDbContext(DbContextOptions<ApplicationIdentityDbContext> options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=mydatabase.db");
    }
}

public class ApplicationUser : IdentityUser<int>
{
}

public class MyRole : IdentityRole<int>
{
    public MyRole() : base()
    {
    }

    public MyRole(string roleName) : base(roleName)
    {
    }

    // add any additional properties or methods here
}