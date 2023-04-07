using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MyDbContext>(options =>
        options.UseSqlite("Data Source=mydatabase.db"));

var CustomAllowSpecificOrigins = "CustomAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CustomAllowSpecificOrigins",
                    policy  =>
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

app.MapGet("/test", () => {
    var result = new { Items = new [] { "1", "2", "3" } };
    return result;
});

app.MapGet("/test2", () => {
    var result = new { Items = new [] { "1", "2", "3" } };
    return result;
});

app.MapControllers();

app.Run();
