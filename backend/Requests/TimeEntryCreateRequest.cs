public class TimeEntryCreateRequest {
    
    public int TaskId {get; set;}
    public string? Description {get; set;}
    public DateTime StartAt {get; set;}
    public DateTime? EndAt {get; set;}
}