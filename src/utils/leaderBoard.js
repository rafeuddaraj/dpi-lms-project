

let ass = [
    {
        "id": 1,
        "student_id": 2,
        "student_name": "Saad Hasan",
        "assignment_id": 1,
        "title": "Assignment 1 - Implement Debounce Function",
        "createdAt": "2021-01-15T15:17:01.727Z",
        "totalMark": 100,
        "mark": 40,
        "repo_link": "https://github.com/Learn-with-Sumit/assignment-1",
        "status": "published"
    },
    {
        "id": 2,
        "student_id": 2,
        "student_name": "Saad Hasan",
        "assignment_id": 1,
        "title": "Assignment 2 - Implement Best Practices",
        "createdAt": "2021-01-15T15:17:01.727Z",
        "totalMark": 100,
        "mark": 100,
        "repo_link": "https://github.com/Learn-with-Sumit/assignment-1",
        "status": "published"
    },
    {
        "id": 5,
        "student_id": 3,
        "student_name": "Akash Ahmed",
        "assignment_id": 1,
        "title": "Assignment 2 - Implement Best Practices",
        "createdAt": "2021-01-15T15:17:01.727Z",
        "totalMark": 100,
        "mark": 50,
        "repo_link": "https://github.com/Learn-with-Sumit/assignment-1",
        "status": "published"
    },
    {
        "student_id": 3,
        "student_name": "Akash Ahmed",
        "title": "bla bla",
        "assignment_id": 3,
        "video_id": 3,
        "video_title": "NextJs course: Full stack Form builder, React, Typescript",
        "totalMark": "100",
        "mark": 100,
        "status": "pending",
        "createdAt": "2023-11-30T21:53:33+06:00",
        "id": 3
    }
]

let qui = [
    {
        "id": 1,
        "student_id": 2,
        "student_name": "Saad Hasan",
        "video_id": 1,
        "video_title": "Debounce Function in JavaScript - JavaScript Job Interview question",
        "totalQuiz": 2,
        "totalCorrect": 1,
        "totalWrong": 1,
        "totalMark": 10,
        "mark": 5
    },
    {
        "student_id": 3,
        "student_name": "Akash Ahmed",
        "video_id": 1,
        "video_title": "Debounce Function in JavaScript - JavaScript Job Interview question",
        "totalQuiz": 2,
        "totalCorrect": 2,
        "totalWrong": 0,
        "totalMark": 10,
        "mark": 10,
        "id": 2
    },
    {
        "student_id": 8,
        "student_name": "Rafe Uddaraj",
        "video_id": 1,
        "video_title": "Debounce Function in JavaScript - JavaScript Job Interview question",
        "totalQuiz": 2,
        "totalCorrect": 2,
        "totalWrong": 0,
        "totalMark": 10,
        "mark": 5,
        "id": 3
    },
    {
        "student_id": 8,
        "student_name": "Rafe Uddaraj",
        "video_id": 5,
        "video_title": "Python Full Course for free 🐍",
        "totalQuiz": 3,
        "totalCorrect": 2,
        "totalWrong": 1,
        "totalMark": 10,
        "mark": 5,
        "id": 4
    }
]

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
            totalMark: Number(assignmentMark) + Number(quizMark),
            rank: 1
        }

    })
    leaderBoard.sort((a, b) => b.totalMark - a.totalMark)
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

// let id = studentIdFinder(ass,qui)
// console.log(generateLeaderBoard(id,ass,qui));