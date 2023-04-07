var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var CustomAllowSpecificOrigins = "CustomAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CustomAllowSpecificOrigins",
                      policy  =>
                      {
                          policy.WithOrigins("http://localhost:5173");
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

app.UseAuthorization();

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
