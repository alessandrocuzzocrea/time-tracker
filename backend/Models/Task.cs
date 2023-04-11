public class Task : ITimestampedEntity
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int ProjectId { get; set; }

    public ICollection<TimeEntry> TimeEntries { get; set; } = new List<TimeEntry>();
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
