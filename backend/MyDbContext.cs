using Microsoft.EntityFrameworkCore;

public class MyDbContext : DbContext
{
    public DbSet<TimeEntry> TimeEntries { get; set; }
    public DbSet<Task> Tasks { get; set; }

    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=mydatabase.db");
    }
}

// public class User
// {
// }
