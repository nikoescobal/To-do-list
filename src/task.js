class Task {
  constructor(title, description, startDate, dueDate, priority, notes, category) {
    this.title = title
    this.description = description
    this.startDate = startDate
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checklist = false
    this.category = category
  }
};

export default Task;