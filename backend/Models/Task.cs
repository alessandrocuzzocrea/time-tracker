public class Task
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int ProjectId { get; set; }

    public ICollection<TimeEntry> TimeEntries { get; set; } = new List<TimeEntry>();
}
