jQuery(document).ready(gmat_custom_quiz_multi_source_reasoning)

function gmat_custom_quiz_multi_source_reasoning() {
    const answer_list = jQuery(`.wpProQuiz_questionList`)
    if (1 > answer_list.length) return false

    const question_id = answer_list.attr(`data-question_id`)
    var tbody_rows = []
    var tbody_row = ``
    answer_list.find(`li`).each(function (index) {
        const answer = jQuery(this)
        const even = 0 === index % 2
        const odd = !even

        if (even) {
            tbody_row = `<tr><td><input type="radio" name="${question_id}" data-pair="${index}"></td>`
        } else if (odd) {
            tbody_row += `<td><input type="radio" name="${question_id}" data-pair="${index}"></td>`
            tbody_row += `<td>${answer.text().trim()}</td></tr>`
            tbody_rows.push(tbody_row)
        }
    })
    tbody_rows = tbody_rows.join(``)

    answer_list.prepend(`
        <table>
            <thead>
                <tr>
                    <th>Yes</th>
                    <th>No</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>${tbody_rows}</tbody>
        </table>
    `)
    answer_list.find(`table :radio`).click(function () {
        const answer_index = jQuery(this).attr(`data-pair`)
        answer_list.find(`li`).eq(answer_index).find(`:radio`).click()
    })

    answer_list.find(`li`).hide()
}