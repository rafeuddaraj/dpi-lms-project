import moment from "moment"

export default function runningSupportSessionFind(supports) {
    const time = moment().format();
    const support = supports.find(support => moment(support.startTime).format() <= time && time <= moment(support.endTime).format())
    return support
}