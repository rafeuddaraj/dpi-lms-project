import moment from "moment";

export default function supportStatus(startTime, endTime) {
    const time = moment().format()
    return time >= moment(startTime).format() && moment(endTime).format() >= time
}