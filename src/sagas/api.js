import axios from 'axios';

//consumir api menu
export const getData = _ => {
    return axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json')
        .then(res =>
            res.data.menu.items)
}

//consumir api Reviews
export const getDataReviews = _ => {
    return axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
        .then(res =>res.data.slider)
}