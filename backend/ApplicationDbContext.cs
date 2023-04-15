using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser, IdentityRole<int>, int>
{
    public DbSet<ApplicationUser> ApplicationUsers { get; set; }
    public DbSet<TimeEntry> TimeEntries { get; set; }
    public DbSet<Task> Tasks { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Task>().HasData(
            new Task
            {
                Id = 1,
                Name = "Implement database for user authentication",
                ProjectId = 2
            },
            new Task
            {
                Id = 2,
                Name = "Prepare API docs",
                ProjectId = 1
            },
            new Task
            {
                Id = 3,
                Name = "Build login functionality",
                ProjectId = 2
            }
        );
        // modelBuilder.Entity<Book>().HasData(
        //     new Book { BookId = 1, AuthorId = 1, Title = "Hamlet" },
        //     new Book { BookId = 2, AuthorId = 1, Title = "King Lear" },
        //     new Book { BookId = 3, AuthorId = 1, Title = "Othello" }
        // );
        base.OnModelCreating(modelBuilder);
    }

    // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    // {
    //     optionsBuilder.UseSqlite("Data Source=mydatabase.db");
    // }

    // public override int SaveChanges()
    // {
    //     foreach (var entry in ChangeTracker.Entries()
    //         .Where(e => e.State == EntityState.Added || e.State == EntityState.Modified))
    //     {
    //         entry.Property("UpdatedAt").CurrentValue = DateTime.UtcNow;

    //         if (entry.State == EntityState.Added)
    //         {
    //             entry.Property("CreatedAt").CurrentValue = DateTime.UtcNow;
    //         }
    //     }

    //     return base.SaveChanges();
    // }

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        foreach (var entry in ChangeTracker.Entries())
        {
            if (entry.Entity is ITimestampedEntity entity)
            {
                var now = DateTime.UtcNow;

                switch (entry.State)
                {
                    case EntityState.Added:
                        entity.CreatedAt = now;
                        entity.UpdatedAt = now;
                        break;
                    case EntityState.Modified:
                        entity.UpdatedAt = now;
                        break;
                }
            }
        }

        return await base.SaveChangesAsync(cancellationToken);
    }
}
