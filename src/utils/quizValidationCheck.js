export default function quizValidationCheck(quizzes = []) {
    let validate = 0
    for (let i = 0; i < quizzes.length; i++) {
        for (let j = 0; j < quizzes[i].options.length; j++) {
            if (quizzes[i].options[j].checked) {
                validate++
                break
            }
        }
    }
    return validate
}