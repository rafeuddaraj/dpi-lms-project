
export const studentIdFinder = (assignmentMarks, quizMarks) => {
    const ids = [...new Set([...assignmentMarks, ...quizMarks].map(student => student.student_id))]
    return ids
}




export const generateLeaderBoard = (ids = [], assignmentMarks = [], quizMarks = []) => {
    const leaderBoard = ids.map(id => {
        const name = [...assignmentMarks, ...quizMarks].find(student => student.student_id === id)?.student_name

        const quizMark = [...quizMarks].filter(student => {
            if (student.student_id === id) {
                return true
            } return false
        })
            .reduce((result, current) => current.mark + result, 0)

        const assignmentMark = [...assignmentMarks].filter(student => {
            if (student.student_id === id && student.status === 'published') {
                return true
            } return false
        })
            .reduce((result, current) => current.mark + result, 0)


        return {
            id,
            name,
            quizMark,
            assignmentMark,
            totalMark: assignmentMark + quizMark,
            rank: 1
        }

    })

    leaderBoard.forEach((student, index) => {
        let rank = 1
        if (index > 0 && student.totalMark !== leaderBoard[index - 1].totalMark) {
            rank += index
        }
        student.rank = rank
    })
    leaderBoard.sort((a, b) => a.rank - b.rank)

    return leaderBoard
}
