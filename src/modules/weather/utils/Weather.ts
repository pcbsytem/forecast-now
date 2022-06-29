import { AddWeatherInfoProps } from "../Weather.type";

export const handleGroupSameDay = (list: AddWeatherInfoProps[]) => {
    const newList = list.reduce((res, curr) => {
        const date = new Date(curr.startTime).toLocaleDateString()
        if (res[date])
            res[date].unshift(curr);
        else
            Object.assign(res, { [date]: [curr] });
        return res;
    }, {})
    return Object.keys(newList).map(key => newList[key])
}

