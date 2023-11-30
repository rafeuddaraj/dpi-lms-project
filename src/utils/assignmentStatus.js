export function assignmentStatus(assignments) {
    let total = 0;
    let pending = 0;
    let markSent = 0;
    assignments.forEach(assignment => {
        if (assignment?.status === 'pending') {
            pending++
        } else if (assignment?.status === 'published') {
            markSent++
        }
        total++
    })
    return {
        total,
        pending,
        markSent
    }
}