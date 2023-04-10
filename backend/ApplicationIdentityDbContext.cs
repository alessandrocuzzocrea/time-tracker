using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public class ApplicationIdentityDbContext : IdentityDbContext<ApplicationUser, IdentityRole<int>, int>
{
    public DbSet<ApplicationUser> ApplicationUsers { get; set; }

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
