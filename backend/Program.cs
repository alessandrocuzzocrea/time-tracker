using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using TimeTracker;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MyDbContext>(options =>
        options.UseSqlite("Data Source=mydatabase.db"));

builder.Services.AddDbContext<ApplicationIdentityDbContext>(options =>
        options.UseSqlite("Data Source=mydatabase.db"));

builder.Services.AddIdentity<ApplicationUser, MyRole>()
        .AddEntityFrameworkStores<ApplicationIdentityDbContext>()
        .AddDefaultTokenProviders();

builder.Services.Configure<IdentityOptions>(options =>
{
    // Default Password settings.
    options.Password.RequireDigit = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 6;
    options.Password.RequiredUniqueChars = 0;
});

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie();


var CustomAllowSpecificOrigins = "CustomAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CustomAllowSpecificOrigins",
                    policy =>
                    {
                        policy
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
});

var app = builder.Build();

app.UseCors(CustomAllowSpecificOrigins);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

// app.UseAuthorization();

app.MapGet("/test", () =>
{
    var result = new { Items = new[] { "1", "2", "3" } };
    return result;
});

app.MapGet("/test2", () =>
{
    var result = new { Items = new[] { "1", "2", "3" } };
    return result;
});

app.MapControllers();

app.UseAuthentication();
app.UseAuthorization();

// app.MapRazorPages();
app.MapDefaultControllerRoute();

app.Run();
