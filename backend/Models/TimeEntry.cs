public class TimeEntry
{
    public int Id { get; set; }
    public int TaskId { get; set; }
    // public int UserId { get; set; }
    public string Description { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime? EndTime { get; set; }

    public Task Task { get; set; } = null!;
    // public ApplicationUser User { get; set; } = null!;
}
