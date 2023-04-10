namespace TimeTracker
{
    public class APIMeResponse
    {
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Email { get; set; }

        public APIMeResponse(ApplicationUser applicationUser)
        {
            Id = applicationUser.Id;
            UserName = applicationUser.UserName;
            Email = applicationUser.Email;
        }
    }
}